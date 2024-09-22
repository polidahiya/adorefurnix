"use server";
import { orderscollection, ObjectId } from "@/app/Mongodb";
import { Adminverification } from "@/app/Verifytoken";

// get orders history
export const getadminorders = async (status) => {
  try {
    const tokenres = await Adminverification();

    if (!tokenres) {
      return { status: 500, message: "Please login first" };
    }

    let result = await orderscollection.find({ status: status }).toArray();

    result.map((item) => (item._id = item._id.toString()));

    return { status: 200, result: result, message: "Server Error" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error" };
  }
};

// change order status
export const changestatus = async (documentId, status) => {
  try {
    const tokenres = await Adminverification();

    if (!tokenres) {
      return { message: "Please login first" };
    }

    const filter = { _id: new ObjectId(documentId) };

    if (status == 3) {
      await orderscollection.updateOne(filter, {
        $set: { status: status, delivered_date: new Date() },
      });
    } else {
      await orderscollection.updateOne(filter, { $set: { status: status } });
    }
    return { message: "Status Updated" };
  } catch (error) {
    console.log(error);
    return { message: "Server Error" };
  }
};

// delete orders function
export const deleteorder = async (documentId) => {
  try {
    const tokenres = await Adminverification();

    if (!tokenres) {
      return { message: "Please login first" };
    }
    const filter = { _id: new ObjectId(documentId) };

    const result = await orderscollection.deleteOne(filter);

    if (result.deletedCount === 1) {
      return { message: "Deleted Successfully" };
    } else {
      return { message: "Delete Failed" };
    }
  } catch (error) {
    console.log(error);
    return { message: "Server Error" };
  }
};

// update note
export const updatenote = async (documentId, note) => {
  try {
    const tokenres = await Adminverification();

    if (!tokenres) {
      return { message: "Please login first" };
    }

    const filter = { _id: new ObjectId(documentId) };
    const result = await orderscollection.updateOne(
      filter,
      {
        $set: {
          note: note,
        },
      },
      { upsert: true }
    );

    if (result.modifiedCount === 1) {
      return { message: "Update Successful" };
    } else {
      return { message: "Update Failed" };
    }
  } catch (error) {
    console.log(error);
    return { message: "Server Error" };
  }
};
