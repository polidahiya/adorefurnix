"use server";
import { Productscollection, blogscollection } from "@/app/Mongodb";

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
let cachedblogs = null;
let lastblogfetchtime = null;

// prodcuts data
export async function Cachedblogs() {
  try {
    const currentTime = new Date().getTime();
    const cachetime = 24 * 60 * 60 * 1000;
    if (
      !cachedblogs ||
      !lastblogfetchtime ||
      currentTime - lastblogfetchtime >= cachetime
    ) {
      cachedblogs = await blogscollection.find({}).sort({ _id: -1 }).toArray();
      lastblogfetchtime = currentTime;
    }
    cachedblogs.map((item) => (item._id = item._id.toString()));

    return cachedblogs;
  } catch (error) {
    console.log(error);
  }
}

export async function refreshproductsnow() {
  const currentTime = new Date().getTime();
  cachedproducts = await Productscollection.find({}).toArray();
  lastproductfetchtime = currentTime;
  return { status: 200, message: "Products Refreshed on site" };
}

export async function refreshblogsnow() {
  const currentTime = new Date().getTime();
  cachedblogs = await Productscollection.find({}).toArray();
  lastblogfetchtime = currentTime;
  return { status: 200, message: "Blogs Refreshed on site" };
}
