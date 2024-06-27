"use server";
import { blogscollection, ObjectId } from "../_components/Mongodb";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "drnfvc0jt",
  api_key: "928453627132392",
  api_secret: "V2_dFHYxOmT9cSsPYuJHkIKYIGo",
});

export const Addimage = async (formdata) => {
  try {
    // Extracting form data entries
    const title = formdata.get("title");
    const desc = formdata.get("desc");
    const image = formdata.get("image"); // Assuming 'image' is the name of the file input

    // Helper function to upload a single image
    const uploadImage = (buffer) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "Adorefurnix" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        uploadStream.end(buffer);
      });
    };

    // Convert the image file to a buffer
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload the image and get the URL
    const cloudinaryres = await uploadImage(buffer);

    console.log("Image URL:", cloudinaryres);

    // Add to MongoDB
    const updateproduct = await blogscollection.insertOne({
      title,
      desc,
      image: cloudinaryres.url,
      publicid: cloudinaryres.public_id,
      date: getCurrentDateFormatted(),
    });

    return { message: "Updated successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Server error", error };
  }
};

export const Deleteblog = async (id) => {
  try {
    await blogscollection.findOneAndDelete({ _id: new ObjectId(id) });
    return { message: "Deleted successfully" };
  } catch (error) {
    return { message: "Server Error" };
  }
};

function getCurrentDateFormatted() {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
