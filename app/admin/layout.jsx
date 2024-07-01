"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Appwrapper } from "../Context";
import { autologin } from "./Loginaction";
import Loginpage from "./Loginpage";

export default function RootLayout({ children }) {
  const [showlogin, setshowlogin] = useState(true);

  useEffect(() => {
    (async () => {
      let res = await autologin();

      if (res.message == "Login successfull") {
        setshowlogin(false);
      }
    })();
  }, []);

  return (
    <>
      <Appwrapper>
        {showlogin ? (
          <Loginpage setshowlogin={setshowlogin} />
        ) : (
          <div>{children}</div>
        )}
      </Appwrapper>
    </>
  );
}
