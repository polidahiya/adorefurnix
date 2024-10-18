"use server";
import { getcollection } from "@/app/Mongodb";
const { Productscollection, blogscollection } = getcollection();
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";

const CACHE_TIME = 60 * 60 * 1000; // 24 hours

export const Cachedproducts = unstable_cache(
  async () => {
    const productsList = await Productscollection.find().toArray();
    return productsList.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  },
  ["posts"],
  { revalidate: CACHE_TIME, tags: ["posts"] }
);

export async function refreshproductsnow() {
  try {
    revalidateTag("posts");
    return { status: 200, message: "Products Refreshed on site" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error!" };
  }
}

// blogs
export const Cachedblogs = unstable_cache(
  async () => {
    const blogs = await blogscollection.find({}).sort({ _id: -1 }).toArray();
    return blogs.map((item) => ({ ...item, _id: item._id.toString()}));
  },
  ["blogs"],
  { revalidate: CACHE_TIME, tags: ["blogs"] }
);

export async function refreshblogsnow() {
  try {
    revalidateTag("blogs");
    return { status: 200, message: "Blogs Refreshed on site" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error!" };
  }
}
