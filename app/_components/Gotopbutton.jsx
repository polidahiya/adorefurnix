"use client";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Gotopbutton() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - scrollPosition) > 100) {
        setScrollPosition(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  if (scrollPosition > 1000)
    return (
      <button
        className="group fixed flex flex-col items-center justify-center gap-1 text-sm shadow-lg bottom-5 right-5 md:bottom-10 md:right-10 bg-white h-10 w-10 lg:hover:h-16 rounded-full z-10 border border-slate-300 overflow-hidden duration-300"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <FaArrowUpLong />
        <span className="h-0 m-0 p-0 opacity-0 lg:group-hover:opacity-100 lg:group-hover:h-4 duration-300">
          Top
        </span>
      </button>
    );
}

export default Gotopbutton;
