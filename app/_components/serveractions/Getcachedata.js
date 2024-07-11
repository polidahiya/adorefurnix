"use server";
import { Productscollection } from "@/app/Mongodb";

let cachedproducts = null;
let lastproductfetchtime = null;

// prodcuts data
export async function Cachedproducts() {
  try {
    const currentTime = new Date().getTime();
    const cachetime = 24 * 60 * 60 * 1000;
    if (
      !cachedproducts ||
      !lastproductfetchtime ||
      currentTime - lastproductfetchtime >= cachetime
    ) {
      cachedproducts = await Productscollection.find({}).toArray();
      lastproductfetchtime = currentTime;
    }
    cachedproducts.map((item) => (item._id = item._id.toString()));

    return cachedproducts;
  } catch (error) {
    console.log(error);
  }
}

export async function refreshsitenow() {
  const currentTime = new Date().getTime();
  cachedproducts = await Productscollection.find({}).toArray();
  lastproductfetchtime = currentTime;
  return { message: "Site Refreshed" };
}
