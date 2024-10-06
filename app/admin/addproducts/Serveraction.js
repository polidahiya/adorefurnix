"use server";
import { uploadImage, Deleteiamgefromurl } from "@/app/Cloudinary";
import { Adminverification } from "@/app/Verifytoken";
import { getcollection } from "../../Mongodb";
const { Productscollection, ObjectId } = getcollection();

export const Addproduct = async (addproduct, formData, deletedimages) => {
  const verification = await Adminverification();

  if (!verification) {
    return { message: "Invalid user" };
  }

  //
  for (const item of addproduct?.colorpalets) {
    for (let j = 0; j < item?.images?.length; j++) {
      const image = item?.images[j];
      if (image.length < 15) {
        // Convert the image file to a buffer
        const arrayBuffer = await formData.get(image).arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Upload the image and get the URL
        const cloudinaryres = await uploadImage(buffer);

        item.images[j] = cloudinaryres.url;
      }
    }
  }
  // delete previous images
  deletedimages.forEach((image) => {
    Deleteiamgefromurl(image);
  });

  // Add to MongoDB
  let updateproduct;
  if (addproduct._id) {
    // to update a product
    const { _id, ...updateFields } = addproduct;

    updateproduct = await Productscollection.updateOne(
      { _id: new ObjectId(addproduct._id) },
      { $set: { ...updateFields } }
    );
    if (updateproduct.modifiedCount > 0) {
      return { message: "Updated successfully" };
    } else {
      for (const item of addproduct.colorpalets) {
        for (let j = 0; j < item.images.length; j++) {
          const url = item.images[j];
          Deleteiamgefromurl(url);
        }
      }
      return { message: "Unable to Upload" };
    }
  } else {
    // to add a product
    updateproduct = await Productscollection.insertOne({ ...addproduct });
    if (updateproduct.insertedId) {
      return { message: "Added successfully" };
    } else {
      for (const item of addproduct.colorpalets) {
        for (let j = 0; j < item.images.length; j++) {
          const url = item.images[j];
          Deleteiamgefromurl(url);
        }
      }
      return { message: "Unable to Upload" };
    }
  }
};

export const Deleteproduct = async (colorpalets, id) => {
  const verification = await Adminverification();

  if (!verification) {
    return { message: "Invalid user" };
  }
  //
  try {
    for (const item of colorpalets) {
      for (let j = 0; j < item.images.length; j++) {
        const url = item.images[j];
        Deleteiamgefromurl(url);
      }
    }

    // delete form mongodb
    await Productscollection.findOneAndDelete({ _id: new ObjectId(id) });
    return { message: "Deleted successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Server Error" };
  }
};
