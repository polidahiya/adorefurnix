"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

async function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "this-world-is-toxic-adorefurnix", (err, decoded) => {
      if (err) {
        resolve({ message: "Invalid token" });
      } else {
        resolve({ message: "Token verified", email: decoded?.email });
      }
    });
  });
}

export const Adminverification = async () => {
  if (!cookies().get("admintoken")) {
    return false
  }

  let token = cookies().get("admintoken").value;
  let result = await verifyToken(token);

  if (result.email == "admin@vishal.com") {
    return true
  }
};
