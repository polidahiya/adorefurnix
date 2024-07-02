"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export function Appwrapper({ children }) {
  const [filters, setfilters] = useState({
    pricerange: 0,
    selectedcolor:0
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
