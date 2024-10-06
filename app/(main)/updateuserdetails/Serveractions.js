"use server";
import { cookies } from "next/headers";
import { Userification } from "@/app/Verifytoken";
import { logintime } from "@/app/commondata";
import { getcollection } from "@/app/Mongodb";
const  { userscollection }=getcollection()

// get all users
export async function updateuserdetails(newuserdetails) {
  try {
    const tokenres = await Userification();
    if (!tokenres) {
      return { message: "Please login" };
    }

    const updateduser = await userscollection.findOneAndUpdate(
      { email: tokenres?.email },
      {
        $set: newuserdetails,
      },
      { returnNewDocument: true }
    );

    addtoken({
      username: newuserdetails.username,
      email: tokenres.email,
      phonenum: newuserdetails.phonenum,
      address: newuserdetails.address,
    });

    if (updateduser) {
      return { message: "Updated Successfully" };
    } else {
      return { message: "Server error" };
    }
  } catch (error) {
    return { message: "Server error" };
  }
}

function addtoken(userdata) {
  cookies().set("userdata", JSON.stringify(userdata), {
    maxAge: logintime[0],
  });
}
