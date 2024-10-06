"use server";
import crypto from "crypto";
import { orderscollection, ObjectId } from "@/app/Mongodb";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Extract data from PayU response
    const txnId = formData.get("txnid");
    const mihpayid = formData.get("mihpayid"); // PayU transaction ID
    const amount = formData.get("amount");
    const productInfo = formData.get("productinfo");
    const firstName = formData.get("firstname");
    const email = formData.get("email");
    const status = formData.get("status");
    const hashReceived = formData.get("hash");

    // Your PayU credentials
    const key = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_MERCHANT_SALT;

    // Create hash string for validation (following PayU's response hash format)
    const hashString = `${salt}|${status}|||||||||||${email}|${firstName}|${productInfo}|${amount}|${txnId}|${key}`;
    const hashCalculated = crypto
      .createHash("sha512")
      .update(hashString)
      .digest("hex");

    // Verify the hash
    if (hashCalculated === hashReceived) {
      if (status === "success") {
        await orderscollection.updateOne(
          { _id: new ObjectId(productInfo) },
          { $set: { paymentStatus: "success", txnId, mihpayid } }
        );
        // Payment is valid and successful
        return new Response(null, {
          status: 302,
          headers: {
            Location: "/cart?orderstatus=success",
          },
        });
      } else {
        // Payment failed
        return new Response(null, {
          status: 302,
          headers: {
            Location: "/cart?orderstatus=failed",
          },
        });
      }
    } else {
      // Hash mismatch, possible tampering
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/cart?orderstatus=failed",
        },
      });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/cart?orderstatus=failed",
      },
    });
  }
}
