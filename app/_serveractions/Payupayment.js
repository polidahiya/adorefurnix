"use server";
import crypto from "crypto";

export default async function PayUpayment(formdata) {
  try {
    const { amount, productInfo, firstName, email, txnId } = formdata;
    const key = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_MERCHANT_SALT;
    
    const successUrl =
      "https://adorefurnix.vercel.app/api/validateorder?payment=success"; 
    const failureUrl =
      "https://adorefurnix.vercel.app/api/validateorder?payment=failure"; 

    // const successUrl =
    //   "https://adorefurnix.com/api/validateorder?payment=success"; 
    // const failureUrl =
    //   "https://adorefurnix.com/api/validateorder?payment=failure"; 

    // const successUrl =
    //   "http://localhost:3000/api/validateorder?payment=success"; 
    // const failureUrl =
    //   "http://localhost:3000/api/validateorder?payment=failure"; 

    const hashString = `${key}|${txnId}|${amount}|${productInfo}|${firstName}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    const payUParams = {
      key,
      txnid: txnId,
      amount,
      productinfo: productInfo,
      firstname: firstName,
      email,
      phone: formdata.phone, // Add customer phone here
      surl: successUrl,
      furl: failureUrl,
      hash,
    };

    return { status: 200, message: "Hash created", payUParams };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error!" };
  }
}
