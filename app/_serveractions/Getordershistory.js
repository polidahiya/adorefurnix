"use server";
import { Userification } from "@/app/Verifytoken";
import { getcollection } from "@/app/Mongodb";
const { ObjectId, orderscollection } = getcollection();

// get orders history
export const getordershistory = async () => {
  try {
    const tokenres = await Userification();

    if (!tokenres) {
      return { status: 400, message: "Please login first" };
    }

    let result = await orderscollection
      .find({ [`userdata.email`]: tokenres.email, paymentStatus: "success" })
      .sort({ createdAt: -1 })
      .toArray();

    result.map((item) => (item._id = item._id.toString()));

    return { status: 200, result };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error" };
  }
};

// cancel order
export const Cancelorder = async (orderid, productindex) => {
  try {
    const tokenres = await Userification();

    if (!tokenres) {
      return { status: 400, message: "Please login first" };
    }

    const filter = { _id: new ObjectId(orderid) };
    // Fetch the order to check if the productIndex exists
    const order = await orderscollection.findOne(filter);

    if (!order) {
      return { status: 404, message: "Order not found" };
    }

    // Proceed to update the product status in the array
    const result = await orderscollection.updateOne(filter, {
      $set: { [`products.${productindex}.status`]: 1 },
    });

    if (result.modifiedCount === 0) {
      return { status: 500, message: "Failed to Cancel order" };
    }

    return { status: 200, message: "Order Canceled" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error" };
  }
};
