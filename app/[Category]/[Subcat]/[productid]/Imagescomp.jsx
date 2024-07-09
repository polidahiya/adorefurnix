"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Heart from "@/app/_svgs/Heart";
import {
  likeproduct,
  isliked,
} from "@/app/_components/serveractions/Likedproducts";
import { AppContextfn } from "@/app/Context";

function Imagescomp({ filteredproducts, color, token }) {
  const { setmessagefn } = AppContextfn();
  const [dotnum, setdotnum] = useState(0);
  const imagesscrollref = useRef();
  const [liked, setliked] = useState(false);

  let link;
  if (typeof window !== "undefined") {
    link = new URL(location.href);
  }

  function sharepage() {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(link)
        .then(function () {})
        .catch(function (err) {
          fallbackCopyTextToClipboard(link);
        });
    } else {
      fallbackCopyTextToClipboard(link);
    }
  }
  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  // check liked
  // check liked
  useEffect(() => {
    if (token) {
      (async () => {
        let res = await isliked(filteredproducts._id);
        if (!res) return;

        setliked(res);
      })();
    }
  }, []);

  return (
    <div className="relative  aspect-[4/3]  w-[100%]  max-h-[400px] lg:max-h-full ">
      <div
        className="h-full w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth"
        onScroll={(e) => {
          setdotnum(
            Math.floor(
              (e.target.scrollLeft + e.target.clientWidth / 2) /
                e.target.clientWidth
            )
          );
        }}
        ref={imagesscrollref}
      >
        {filteredproducts.colorpalets[color].images.map((image, i) => (
          <Mainimage key={i} image={image} name={filteredproducts.name} />
        ))}
      </div>
      {/* mini images */}
      <div className="hidden md:flex absolute top-0 left-[10px] w-[70px] h-full  flex-col justify-center gap-[10px] ">
        {filteredproducts.colorpalets[color].images.map((image, i) => {
          return (
            <Image
              className={`w-full aspect-square  object-cover bg-slate-200  cursor-pointer    ${
                dotnum == i
                  ? "  border-[2px] border-cyan-500"
                  : "border-[2px] border-slate-300"
              }`}
              src={image}
              alt={filteredproducts.name}
              height={100}
              width={100}
              key={i}
              quality={50}
              onClick={() => {
                imagesscrollref.current.scrollLeft =
                  imagesscrollref.current.clientWidth * i;
              }}
            ></Image>
          );
        })}
      </div>
      {/* like button */}
      <button
        className="absolute right-[20px] top-[20px] rounded-full bg-white  p-[5px] box-content border border-slate-300"
        title="Add to favourites"
        onClick={async () => {
          if (!token) {
            setmessagefn("Please login first");
            return;
          }
          let res = await likeproduct(filteredproducts._id, liked);
          if (res) {
            if (res.message == "Added to favourites") {
              setliked(true);
              setmessagefn(res?.message);
            }
            if (res.message == "Removed from favourites") {
              setliked(false);
              setmessagefn(res?.message);
            }
            setmessagefn(res?.message);
          }
        }}
      >
        <Heart
          styles={`h-[30px]  w-[30px] translate-y-[2px]  ${
            liked
              ? "fill-red-500 stroke-none"
              : "fill-white stroke-[5px] stroke-red-500"
          }`}
        />
      </button>
      {/* share button */}
      <button
        className="absolute right-[20px]  top-[60px]"
        title="Copy Link"
        onClick={sharepage}
      >
        {/* <Linksvg styles="h-[30px] aspect-square fill-none stroke-textcolor" /> */}
      </button>
      {/* dotts */}
      <div className="absolute bottom-0 left-0 z-10 w-full ">
        <div className="absolute bottom-[5px] left-[50%] flex gap-[10px] translate-x-[-50%]">
          {filteredproducts.colorpalets[color].images.map((dotts, i) => {
            return (
              <div
                key={i}
                className="h-[5px] min-w-[5px] bg-theme  rounded-full duration-200"
                style={i == dotnum ? { width: "30px" } : { width: "5px" }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Mainimage({ image, name }) {
  // const [loading, setloading] = useState(true);
  return (
    <div className="min-w-[100%] h-full">
      {/* {loading && <Imageloading />} */}
      <Image
        className="min-w-[100%] h-full snap-start snap-always object-contain"
        src={image}
        alt={name}
        height={400}
        width={754}
        loading="eager"
        quality={100}
        // onLoad={() => {
        //   setloading(false);
        // }}
      ></Image>
    </div>
  );
}
export default Imagescomp;
