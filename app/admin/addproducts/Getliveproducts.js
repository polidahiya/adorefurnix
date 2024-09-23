"use server";
import { Productscollection } from "@/app/Mongodb";
import { Adminverification } from "@/app/Verifytoken";

export const Getliveproducts = async (categorystate) => {
  const verification = await Adminverification();

  if (!verification) {
    return { status: 400, message: "Invalid user" };
  }

  const products = await Productscollection.find({
    category: categorystate.category,
    subcat: categorystate?.subcat,
  }).toArray();

  products.map((item) => (item._id = item._id.toString()));

  return { status: 200, message: "Products fetched", products: products };
};
