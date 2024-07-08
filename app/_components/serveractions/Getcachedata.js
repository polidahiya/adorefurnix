"use server";
import { Productscollection } from "@/app/Mongodb";

let cachedproducts = null;
let lastproductfetchtime = null;

// prodcuts data
export async function Cachedproducts() {
  try {
    const currentTime = new Date().getTime();
    const cachetime = 10 * 60 * 1000;
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
    console.log("limit reached");
    return [
      {
        _id: "6688d0c44f6be1650f0b306b",
        category: "Living Room",
        subcat: "Sofa sets",
        name: "Kyle L shape sofa set 5 seater ",
        Dimensions: "",
        price: "51999",
        rating: 5,
        discount: "45",
        keywords: "L shape sofa set ",
        available: true,
        desc: [],
        colorpalets: [
          {
            color: "",
            name: "",
            images: [
              "http://res.cloudinary.com/drnfvc0jt/image/upload/v1720242371/Adorefurnix/uf634k0udr7mpkzhzokw.png",
            ],
          },
        ],
      },
    ];

    //
  }
}

export async function refreshsitenow() {
  const currentTime = new Date().getTime();
  cachedproducts = await Productscollection.find({}).toArray();
  lastproductfetchtime = currentTime;
}
