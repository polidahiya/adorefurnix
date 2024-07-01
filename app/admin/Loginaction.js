"use server";
import { cookies } from "next/headers";
import verifyToken from "@/app/Verifytoken";
import jwt from "jsonwebtoken";
import { Admindatacollection } from "../Mongodb";
// import { data, orders, users } from "@/components/mongodb";
// import { Data } from "../../components/Getdata";

// auto login
export async function autologin() {
  try {
    if (!cookies().get("admintoken")) {
      return { message: "Please enter password" };
    }

    let token = cookies().get("admintoken").value;
    let result = await verifyToken(token);

    if (result.email == "adorefurnix@admin.com") {
      return { message: "Login successfull" };
    } else {
      return { message: "Invalid user" };
    }
  } catch (error) {
    return { message: "Internal server error" };
  }
}

// password login
export async function passwordlogin(req) {
  try {
    let password = req?.password;

    const admindata = await Admindatacollection.findOne();

    if (password == admindata?.password) {
      const token = jwt.sign(
        { email: "adorefurnix@admin.com" },
        "this-world-is-toxic-adorefurnix",
        {
          expiresIn: "24h",
        }
      );

      cookies().set("admintoken", token, {
        maxAge: 3600 * 24,
        httpOnly: true,
        secure: true,
      });
      return { message: "Login successfull" };
    } else {
      return { message: "Wrong password" };
    }
  } catch (error) {}
  return { message: "Server Error!" };
}

// get orders
export async function getallorders(req) {
  const productsdata = await Data();
  let token = cookies().get("admintoken").value;

  if (!token) {
    return { message: "User error" };
  }

  let result = await verifyToken(token);

  if (
    result.message == "Token verified" &&
    result.email == "admin@vishal.com"
  ) {
    let usersdata = await users.find({}).toArray();

    let allorders = await orders
      .find({ status: req.status })
      .sort({ orderdate: 1 })
      .toArray();

    return { allorders: allorders };
  } else {
    return { message: "User error" };
  }
}
