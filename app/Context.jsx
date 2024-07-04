"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export function Appwrapper({ children }) {
  const [filters, setfilters] = useState({
    pricerange: 0,
  });

  const [cart, setcart] = useState({
    "66821c1a3958e8bdbd978f7d,0": {
      _id: "66821c1a3958e8bdbd978f7d",
      category: "Living Room",
      subcat: "Sofa sets",
      name: "new name2",
      Dimensions: "23X23",
      price: "1000",
      rating: "2",
      discount: "5",
      keywords: "this is a keyword this is a keyword",
      available: true,
      colorpalets: [
        {
          color: "#2bbf3d",
          name: "greeen",
          images: [
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719914358/Adorefurnix/e2iefslpeue7ku7srjy6.jpg",
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719914361/Adorefurnix/xq6siejymskbpuwv5zer.jpg",
          ],
        },
        {
          color: "#1d19e6",
          name: "blue",
          images: [
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719802906/Adorefurnix/q0mkexbrtsy5wtheahlf.jpg",
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719914367/Adorefurnix/qumjakf0byykym3rhicd.jpg",
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719914371/Adorefurnix/xklesuxcswfrdtppzion.jpg",
          ],
        },
      ],
      selectedcolor: 0,
      quantity: 1,
    },
    "66821c1a3958e8bdbd978f7d,1": {
      _id: "66821c1a3958e8bdbd978f7d",
      category: "Living Room",
      subcat: "Sofa sets",
      name: "new name2",
      Dimensions: "23X23",
      price: "1000",
      rating: "2",
      discount: "5",
      keywords: "this is a keyword this is a keyword",
      available: true,
      colorpalets: [
        {
          color: "#2bbf3d",
          name: "greeen",
          images: [
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719914358/Adorefurnix/e2iefslpeue7ku7srjy6.jpg",
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719914361/Adorefurnix/xq6siejymskbpuwv5zer.jpg",
          ],
        },
        {
          color: "#1d19e6",
          name: "blue",
          images: [
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719802906/Adorefurnix/q0mkexbrtsy5wtheahlf.jpg",
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719914367/Adorefurnix/qumjakf0byykym3rhicd.jpg",
            "http://res.cloudinary.com/drnfvc0jt/image/upload/v1719914371/Adorefurnix/xklesuxcswfrdtppzion.jpg",
          ],
        },
      ],
      selectedcolor: "1",
      quantity: 1,
    },
  });

  // admin contexts
  const [addproduct, setaddproduct] = useState({
    category: "Living Room",
    subcat: "Sofa sets",
    name: "",
    Dimensions: "",
    price: 0,
    rating: 5,
    discount: 0,
    keywords: "",
    available: true,
    desc: [],
    colorpalets: [
      {
        color: "",
        name: "",
        images: [],
      },
    ],
  });

  const [updateproduct, setupdateproduct] = useState(false);
  const [deletedimages, setdeletedimages] = useState([]);
  const [adminproductrefresher, setadminproductrefresher] = useState(0);

  return (
    <AppContext.Provider
      value={{
        filters,
        setfilters,
        cart,
        setcart,
        // admin
        addproduct,
        setaddproduct,
        updateproduct,
        setupdateproduct,
        deletedimages,
        setdeletedimages,
        adminproductrefresher,
        setadminproductrefresher,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function AppContextfn() {
  return useContext(AppContext);
}
