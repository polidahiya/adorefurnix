"use client";
import React, { useEffect, useRef } from "react";
import { AppContextfn } from "../Context";
import { gsap } from "gsap";

function Message() {
  const { messagearray } = AppContextfn();

  return (
    <>
      {messagearray.map((item) => {
        return <Notif key={item.id} item={item} />;
      })}
    </>
  );
}

function Notif({ item }) {
  const { setmessagearray } = AppContextfn();
  const notifRef = useRef(null); // Reference for the notification element
  const textRef = useRef(null); // Reference for the text element

  // Function to remove the message
  const removemessage = () => {
    gsap.to(notifRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      onComplete: () => {
        setmessagearray((pre) =>
          pre.filter((notification) => notification.id !== item.id)
        );
      },
    });
  };

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(notifRef.current, { opacity: 1, y: 0, duration: 0.15 }) // Fade in and slide up
      .to(notifRef.current, {
        width: 400,
        maxWidth: "calc(90%)",
        duration: 0.3,
      }) // Expand
      .to(textRef.current, { opacity: 1, duration: 0.3 }, "-=0.1") // Fade in text
      .to(notifRef.current, { width: "40px", duration: 0.3, delay: 3 }) // Contract after delay
      .to(textRef.current, { opacity: 0, duration: 0.3 }, "-=0.4") // Fade out text
      .to(notifRef.current, { opacity: 0, y: 20, duration: 0.3 }) // Fade out and slide down
      .call(removemessage); // Remove the message after the animation

    return () => {
      timeline.kill(); 
    };
  }, []);

  return (
    <div
      ref={notifRef}
      className={`fixed w-[40px] top-[70px] lg:top-[120px] left-[50%] translate-x-[-50%] h-[40px] rounded-full flex items-center justify-center bg-white border border-slate-300 z-[50] shadow-md opacity-0 translate-y-[20px] `} // Original styles
    >
      <span
        ref={textRef}
        className={`opacity-0 font-semibold`} 
      >
        {item.message}
      </span>
      <button
        className={`absolute right-[4px] top-[4px] h-[30px] aspect-square bg-theme text-white rounded-full`}
        onClick={removemessage}
      >
        X
      </button>
    </div>
  );
}

export default Message;
