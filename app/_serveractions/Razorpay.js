"use server";

import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// create order id
export async function Createorderid(amount, currency) {
  try {
    if (typeof amount !== "number" || amount <= 0) {
      return { error: "Invalid amount" };
    }

    const order = await razorpay.orders.create({
      amount: amount * 100, // amount in paise
      currency, // add receipt
    });

    return order;
  } catch (error) {
    return { error: error?.message };
  }
}

// pages/api/verify-payment.js

export async function Verifypayment(
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature
) {
  try {
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Verify payment status by calling Razorpay API
      const payment = await razorpay.payments.fetch(razorpay_payment_id);

      if (payment.status === "captured") {
        // Payment is successful
        return { status: 200, message: "Payment Successful" };
      } else {
        // Payment not successful
        return { status: 400, success: false, message: "Payment failed!" };
      }
    } else {
      // Signature mismatch
      return { status: 400, success: false, message: "Payment failed!" };
    }
  } catch (error) {
    return { status: 400, success: false, message: "Payment failed!" };
  }
}
