"use client";

import { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext({});

export function Appwrapper({ children }) {
  const [cart, setcart] = useState({});
  const [showcat, setshowcat] = useState(false);
  const [showsearch, setshowsearch] = useState(false);
  const [toggleusermenu, settoggleusermenu] = useState({
    show: false,
    effect: false,
  });
  const searchinputref = useRef();
  const [redirectloginlink, setredirectloginlink] = useState("");

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
        cart,
        setcart,
        showcat,
        setshowcat,
        showsearch,
        toggleusermenu,
        settoggleusermenu,
        setshowsearch,
        searchinputref,
        redirectloginlink,
        setredirectloginlink,
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
