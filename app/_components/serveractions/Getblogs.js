"use server";
import { blogscollection } from "../../Mongodb";

export const Getblogs = async (numberofblogs) => {
  let blogdata = await blogscollection
    .find()
    .sort({ _id:-1})
    .limit(numberofblogs)
    .toArray();

  blogdata.forEach((blog) => {
    blog._id = blog._id.toString();
  });

  return blogdata;
};
