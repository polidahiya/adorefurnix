"use server";
import { revalidatePath } from "next/cache";
import { categorylist } from "../commondata";
import { getcollection } from "@/app/Mongodb";
const { Productscollection, blogscollection } = getcollection();

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
  try {
    const currentTime = new Date().getTime();
    cachedproducts = await Productscollection.find({}).toArray();
    lastproductfetchtime = currentTime;
    cachedproducts.map((item) => (item._id = item._id.toString()));

    Revalidatepaths();

    return { status: 200, message: "Products Refreshed on site" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error!" };
  }
}

export async function refreshblogsnow() {
  try {
    const currentTime = new Date().getTime();
    cachedblogs = await Productscollection.find({}).toArray();
    lastblogfetchtime = currentTime;
    cachedblogs.map((item) => (item._id = item._id.toString()));

    Revalidateblogpaths();

    return { status: 200, message: "Blogs Refreshed on site" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error!" };
  }
}

function Revalidatepaths() {
  revalidatePath(`/`);

  Object.keys(categorylist)?.forEach((category) => {
    revalidatePath(`/${category}`);
    category?.subcat?.forEach((subcat) => {
      revalidatePath(`/${category}/${subcat}`);
    });
  });

  cachedproducts?.forEach((product) => {
    revalidatePath(`/${product?.category}/${product?.subcat}/${product?._id}`);
    product?.colorpalets?.forEach((palet, i) => {
      revalidatePath(
        `/${product?.category}/${product?.subcat}/${product?._id}?color=${i}`
      );
    });
  });
}

function Revalidateblogpaths() {
  revalidatePath(`/`);
  revalidatePath(`/Blogs`);
  cachedblogs.forEach((blog) => {
    revalidatePath(`/Blogs/${blog?._id}`);
  });
}
