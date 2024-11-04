"use client";
import { AppContextfn } from "../Context";

function Gotopbutton() {
  const { scrollPosition } = AppContextfn();
  if (scrollPosition > 1000)
    return (
      <button className="fixed bg-pink-500 bottom-10 right-10 test h-10 aspect-square rounded-full z-10"></button>
    );
}

export default Gotopbutton;
