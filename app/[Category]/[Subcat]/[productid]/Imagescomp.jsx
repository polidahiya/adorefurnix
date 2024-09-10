"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Heart from "@/app/_svgs/Heart";
import { likeproduct, isliked } from "@/app/_serveractions/Likedproducts";
import { AppContextfn } from "@/app/Context";
import Linksvg from "@/app/_svgs/Linksvg";

function Imagescomp({ filteredproducts, color, token }) {
  const { setmessagefn } = AppContextfn();
  const [dotnum, setdotnum] = useState(0);
  const imagesscrollref = useRef();
  const [liked, setliked] = useState(false);

  // Fallback image path
  const fallbackImage = "/default-fallback-image.png"; // Update with the path to your fallback image

  // Share page function
  function sharepage() {
    setmessagefn("Link copied!");
    const link = typeof window !== "undefined" ? new URL(location.href) : "";
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(link)
        .catch(() => fallbackCopyTextToClipboard(link));
    } else {
      fallbackCopyTextToClipboard(link);
    }
  }

  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  // Check liked status
  useEffect(() => {
    if (token) {
      (async () => {
        const res = await isliked(filteredproducts._id);
        if (res) setliked(res);
      })();
    }
  }, [token, filteredproducts._id]);

  return (
    <div className="relative aspect-[4/3] w-[100%] max-h-[400px] lg:max-h-full">
      {/* Main images */}
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
          <Mainimage
            key={i}
            image={image}
            name={filteredproducts.name}
            fallbackImage={fallbackImage}
          />
        ))}
      </div>

      {/* Mini images */}
      <div
        className={`hidden md:flex absolute top-0 left-[10px] w-[70px] h-full flex-col gap-[10px] ${
          filteredproducts.colorpalets[color].images.length > 5
            ? "overflow-y-scroll"
            : "justify-center"
        }`}
      >
        {filteredproducts.colorpalets[color].images.map((image, i) => (
          <MiniImage
            key={i}
            image={image}
            alt={filteredproducts.name}
            fallbackImage={fallbackImage}
            onClick={() => {
              imagesscrollref.current.scrollLeft =
                imagesscrollref.current.clientWidth * i;
            }}
            isActive={dotnum === i}
          />
        ))}
      </div>

      {/* Like button */}
      <button
        className="absolute right-[50px] top-[10px] bg-white rounded-full p-[3px] border border-slate-300"
        title="Add to favourites"
        onClick={async () => {
          if (!token) {
            setmessagefn("Please login first");
            return;
          }
          const res = await likeproduct(filteredproducts._id, liked);
          if (res) {
            setliked(res.message === "Added to favourites");
            setmessagefn(res?.message);
          }
        }}
      >
        <Heart
          styles={`h-[25px] w-[25px] translate-y-[1px] ${
            liked
              ? "fill-red-500 stroke-none"
              : "fill-white stroke-[5px] stroke-red-600"
          }`}
        />
      </button>

      {/* Share button */}
      <button
        className="absolute right-[10px] top-[10px] rounded-full bg-white p-[3px] box-content border border-slate-300"
        title="Copy Link"
        onClick={sharepage}
      >
        <Linksvg styles="h-[25px] aspect-square fill-none stroke-slate-500" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <div className="absolute bottom-[5px] left-[50%] flex gap-[10px] translate-x-[-50%]">
          {filteredproducts.colorpalets[color].images.map((_, i) => (
            <div
              key={i}
              className="h-[5px] min-w-[5px] bg-theme rounded-full duration-200"
              style={i === dotnum ? { width: "30px" } : { width: "5px" }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Mainimage({ image, name, fallbackImage }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="min-w-[100%] h-full">
      <Image
        className="min-w-[100%] h-full snap-start snap-always object-contain"
        src={hasError ? fallbackImage : image}
        alt={name}
        height={400}
        width={754}
        loading="eager"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function MiniImage({ image, alt, fallbackImage, onClick, isActive }) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      className={`w-full aspect-square object-cover bg-slate-200 cursor-pointer ${
        isActive
          ? "border-[2px] border-cyan-500"
          : "border-[2px] border-slate-300"
      }`}
      src={hasError ? fallbackImage : image}
      alt={alt}
      height={100}
      width={100}
      quality={50}
      onError={() => setHasError(true)}
      onClick={onClick}
    />
  );
}

export default Imagescomp;
