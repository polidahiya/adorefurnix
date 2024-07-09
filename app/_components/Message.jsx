"use client";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "../Context";

function Message() {
  const { messagearray } = AppContextfn();

  return (
    <>
      {messagearray.map((item, i) => {
        return <Notif key={item.id} item={item} />;
      })}
    </>
  );
}

function Notif({ item }) {
  const { setmessagearray } = AppContextfn();
  const [effect, seteffect] = useState([false, false]);

  //   remove message function
  const removemessage = () => {
    setmessagearray((pre) =>
      pre.filter((notification) => notification.id !== item.id)
    );
  };

  //   auto remove
  useEffect(() => {
    setTimeout(() => {
      seteffect([true, false]); //effect 1 set
      setTimeout(() => {
        seteffect([true, true]); //effect 2 set
        setTimeout(() => {
          seteffect([true, false]); //effect 2 remove
          setTimeout(() => {
            seteffect([false, false]); //effect 1 remove
            setTimeout(() => {
              removemessage(); //message removed
            }, 200);
          }, 300);
        }, 3000);
      }, 200);
    }, 100);
  }, []);

  return (
    <div
      className={`fixed top-[70px] lg:top-[120px] left-[50%] translate-x-[-50%]  h-[40px] rounded-full flex items-center justify-center bg-white border border-slate-300 z-[50]  shadow-md
    ${
      effect[0]
        ? "opacity-100 translate-y-0 duration-150"
        : "opacity-0 translate-y-[20px] duration-150"
    } ${
        effect[1]
          ? "w-[90%] md:w-[400px] duration-300"
          : "w-[40px] duration-300"
      }`}
    >
      <span
        className={`${effect[1] ? "opacity-100 duration-100" : "opacity-0"}`}
      >
        {item.message}
      </span>
      <button
        className={`absolute right-[4px] top-[4px] h-[30px] aspect-square bg-theme text-white rounded-full  `}
        onClick={removemessage}
      >
        X
      </button>
    </div>
  );
}

export default Message;
