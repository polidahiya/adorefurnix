"use server";
import { Productscollection } from "@/app/Mongodb";

let cachedproducts = null;
let lastproductfetchtime = null;

// prodcuts data
export async function Cachedproducts() {
  const currentTime = new Date().getTime();
  const cachetime = 10 * 60 * 1000;
  if (
    !cachedproducts ||
    !lastproductfetchtime ||
    currentTime - lastproductfetchtime >= cachetime
  ) {
    cachedproducts = await Productscollection.find({}).toArray();
    lastproductfetchtime = currentTime;
  }
  cachedproducts.map((item) => (item._id = item._id.toString()));
  // cachedproducts.forEach(element => {
  //   console.log(element.name);
  // });

  return cachedproducts;
}

export async function refreshsitenow() {
  const currentTime = new Date().getTime();
  cachedproducts = await Productscollection.find({}).toArray();
  lastproductfetchtime = currentTime;
}
