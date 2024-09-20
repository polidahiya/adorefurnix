"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Heart from "@/app/_svgs/Heart";
import { likeproduct, isliked } from "@/app/_serveractions/Likedproducts";
import { AppContextfn } from "@/app/Context";
import Linksvg from "@/app/_svgs/Linksvg";

const fallbackImage = "/default-fallback-image.png";

function ImagesComp({ filteredproducts, color, token }) {
  const { setmessagefn } = AppContextfn();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imagesScrollRef = useRef();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const checkLikedStatus = async () => {
      if (token) {
        const likedStatus = await isliked(filteredproducts._id);
        setIsLiked(likedStatus);
      }
    };
    checkLikedStatus();
  }, [token, filteredproducts._id]);

  const handleImageScroll = (e) => {
    const index = Math.floor(
      (e.target.scrollLeft + e.target.clientWidth / 2) / e.target.clientWidth
    );
    setActiveImageIndex(index);
  };

  const handleSharePage = () => {
    const link = typeof window !== "undefined" ? new URL(location.href) : "";
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setmessagefn("Link copied!");
      })
      .catch(() => fallbackCopyTextToClipboard(link));
  };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const handleLikeToggle = async () => {
    if (!token) {
      setmessagefn("Please login first");
      return;
    }
    const res = await likeproduct(filteredproducts._id, isLiked);
    if (res) {
      setIsLiked(res.message === "Added to favourites");
      setmessagefn(res.message);
    }
  };

  const images = filteredproducts.colorpalets[color].images;

  return (
    <div className="relative aspect-[4/3] w-full max-h-[400px] lg:max-h-full">
      <div
        className="h-full w-full flex overflow-x-scroll snap-x snap-mandatory scroll-smooth"
        onScroll={handleImageScroll}
        ref={imagesScrollRef}
      >
        {images.map((image, index) => (
          <MainImage key={index} image={image} name={filteredproducts.name} />
        ))}
      </div>

      <div
        className={`hidden md:flex absolute top-0 left-[10px] w-[70px] h-full flex-col gap-[10px] ${
          images.length > 5 ? "overflow-y-scroll" : "justify-center"
        }`}
      >
        {images.map((image, index) => (
          <MiniImage
            key={index}
            image={image}
            alt={filteredproducts.name}
            onClick={() => {
              imagesScrollRef.current.scrollLeft =
                imagesScrollRef.current.clientWidth * index;
            }}
            isActive={activeImageIndex === index}
          />
        ))}
      </div>

      <button
        className="absolute right-[50px] top-[10px] bg-white rounded-full p-[3px] border border-slate-300"
        title="Add to favourites"
        onClick={handleLikeToggle}
      >
        <Heart
          styles={`h-[25px] w-[25px] translate-y-[1px] ${
            isLiked
              ? "fill-red-500 stroke-none"
              : "fill-white stroke-[5px] stroke-red-600"
          }`}
        />
      </button>

      <button
        className="absolute right-[10px] top-[10px] rounded-full bg-white p-[3px] border border-slate-300"
        title="Copy Link"
        onClick={handleSharePage}
      >
        <Linksvg styles="h-[25px] aspect-square fill-none stroke-slate-500" />
      </button>

      <div className="absolute bottom-0 left-0 z-10 w-full">
        <div className="absolute bottom-[5px] left-1/2 flex gap-[10px] transform -translate-x-1/2">
          {images.map((_, index) => (
            <div
              key={index}
              className="h-[5px] min-w-[5px] bg-theme rounded-full transition-all duration-200"
              style={{ width: activeImageIndex === index ? "30px" : "5px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const MainImage = ({ image, name }) => {
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
};

const MiniImage = ({ image, alt, onClick, isActive }) => {
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
};

export default ImagesComp;
