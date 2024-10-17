"use client";

import Cookies from "js-cookie";
import { createContext, useContext, useState, useRef, useEffect } from "react";
export const uploadproductdata = {
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
};

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
  const [redirectloginlink, setredirectloginlink] = useState("/");
  const [toggleorderplacedmenu, settoggleorderplacedmenu] = useState(false);
  const [messagearray, setmessagearray] = useState([]);
  const pincoderef = useRef();

  // admin contexts
  const [addproduct, setaddproduct] = useState(uploadproductdata);
  const [updateproduct, setupdateproduct] = useState(false);
  const [deletedimages, setdeletedimages] = useState([]);
  const [adminproductrefresher, setadminproductrefresher] = useState(0);

  // funtions
  const setmessagefn = (message) => {
    setmessagearray([
      ...messagearray,
      { id: Math.random() + new Date().getMilliseconds(), message: message },
    ]);
  };

  useEffect(() => {
    const cookieCart = Cookies.get("cart");
    if (cookieCart) {
      const parsedCart = JSON.parse(cookieCart);
      setcart(parsedCart);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart,
        setcart,
        showcat,
        setshowcat,
        showsearch,
        setshowsearch,
        toggleusermenu,
        settoggleusermenu,
        searchinputref,
        pincoderef,
        redirectloginlink,
        setredirectloginlink,
        toggleorderplacedmenu,
        settoggleorderplacedmenu,
        messagearray,
        setmessagearray,
        setmessagefn,
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
