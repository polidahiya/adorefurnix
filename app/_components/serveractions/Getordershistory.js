"use server";
import { Userification } from "@/app/Verifytoken";
import { ObjectId, orderscollection } from "@/app/Mongodb";

// get orders history
export const getordershistory = async () => {
  try {
    const tokenres = await Userification();

    if (!tokenres) {
      return { message: "Please login first" };
    }

    let result = await orderscollection
      .find({ email: tokenres.email, canceled: false })
      .toArray();

    result.map((item) => (item._id = item._id.toString()));

    return result;
  } catch (error) {
    console.log(error);
    return { message: "Server Error" };
  }
};

// cancel order
export const Cancelorder = async (id) => {
  try {
    const tokenres = await Userification();

    if (!tokenres) {
      return { message: "Please login first" };
    }

    let result = await orderscollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { canceled: true } }
    );

    if (result.modifiedCount != 0) {
      return { message: "Order Canceled" };
    }else{
      return { message: "Server Error" };
    }
  } catch (error) {
    console.log(error);
    return { message: "Server Error" };
  }
};
