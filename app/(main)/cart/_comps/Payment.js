import { Createorderid, Verifypayment } from "@/app/_serveractions/Razorpay";

const Paymentfn = async (
  userdata,
  amount,
  currency,
  callbackfn,
  setmessagefn
) => {
  const order = await Createorderid(amount, currency);

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay Key ID
    amount: order?.amount,
    currency: order?.currency,
    name: "Adore Furnix",
    description: "Total Amount",
    order_id: order?.id,
    handler: async (response) => {
      const res = await Verifypayment(
        response?.razorpay_order_id,
        response?.razorpay_payment_id,
        response?.razorpay_signature
      );

      if (res?.status == 200) {
        callbackfn(response?.razorpay_order_id, response?.razorpay_payment_id);
      } else {
        setmessagefn(res?.message);
      }
    },
    prefill: {
      name: userdata?.username,
      email: userdata?.email,
      contact: userdata?.phonenum,
    },
    theme: {
      color: "#263242",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

  //
};

export { Paymentfn };
