"use server";
import { Userification } from "@/app/Verifytoken";
import { orderscollection } from "@/app/Mongodb";
import { cookies } from "next/headers";

export const Placeorder = async (ordersdata) => {
  try {
    const tokenres = await Userification();

    if (!tokenres) {
      return { message: "Please login first" };
    }
    // cookies
    const userdata = JSON.parse(cookies()?.get("userdata")?.value);

    let ordersarray = [];
    Object.keys(ordersdata).forEach((order) => {
      let neworders = { ...ordersdata[order] };
      delete neworders.Dimensions;
      delete neworders.keywords;
      delete neworders.available;
      neworders.productid = ordersdata[order]._id;
      neworders.canceled = false;
      neworders.status = 0;
      neworders.date = new Date();
      delete neworders._id;
      ordersarray.push({ ...neworders, ...userdata });
    });

    let result = await orderscollection.insertMany(ordersarray);
    console.log(result);
    if (result.insertedCount != 0) {
      return { message: "Order Placed" };
    } else {
      return { message: "Order Failed" };
    }
  } catch (error) {
    console.log(error);
    return { message: "Server Error" };
  }
};

