"use client";
import React, { useEffect, useRef, useState } from "react";
import Nextimage from "@/app/_components/Nextimage";
import Heart from "@/app/_svgs/Heart";
import { likeproduct, isliked } from "@/app/_serveractions/Likedproducts";
import { AppContextfn } from "@/app/Context";
import Linksvg from "@/app/_svgs/Linksvg";
import copytoclipboard from "@/app/_components/_helperfunctions/copytoclipboard";
import Link from "next/link";

const fallbackImage = "/default-fallback-image.png";

function ImagesComp({ filteredproducts, color, token }) {
  const { setmessagefn } = AppContextfn();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imagesScrollRef = useRef();
  const [isLiked, setIsLiked] = useState(false);

  // check liked
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
    copytoclipboard(link, () => {
      setmessagefn("Link copied!");
    });
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

  const images = filteredproducts?.colorpalets[color]?.images;

  // move using arrow buttons
  useEffect(() => {
    const handleArrowKeyScroll = (e) => {
      if (!imagesScrollRef.current) return;

      const scrollAmount = imagesScrollRef.current.clientWidth;
      if (e.key === "ArrowRight") {
        imagesScrollRef.current.scrollLeft += scrollAmount;
      } else if (e.key === "ArrowLeft") {
        imagesScrollRef.current.scrollLeft -= scrollAmount;
      }
    };

    window.addEventListener("keydown", handleArrowKeyScroll);
    return () => {
      window.removeEventListener("keydown", handleArrowKeyScroll);
    };
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-2 ">
      {/* mini images */}
      <div
        className={`flex  lg:w-[70px] lg:h-full lg:flex-col flex-wrap lg:flex-nowrap gap-[10px] lg:max-h-[400px] ${
          images.length > 5
            ? "overflow-y-scroll hidescroll justify-center lg:justify-normal"
            : "justify-center"
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
      {/* main */}
      <div className="relative  overflow-hidden w-full  h-full lg:max-h-full lg:border">
        <div
          className="h-full w-full flex items-stretch overflow-x-scroll snap-x snap-mandatory scroll-smooth"
          onScroll={handleImageScroll}
          ref={imagesScrollRef}
        >
          {images.map((image, index) => (
            <MainImage
              key={index}
              image={image}
              name={filteredproducts.name}
              pid={filteredproducts?._id}
              index={index}
              color={color}
            />
          ))}
        </div>
        {/* buttons */}
        <div className="absolute right-[10px] top-[10px] flex gap-2">
          {/* like  */}
          <button
            className=" bg-white rounded-full p-[3px] border border-slate-300"
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
          {/* link */}
          <button
            className=" rounded-full bg-white p-[3px] border border-slate-300"
            title="Copy Link"
            onClick={handleSharePage}
          >
            <Linksvg styles="h-[25px] aspect-square fill-none stroke-slate-500" />
          </button>
        </div>

        {/* dots */}
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
        {/* note */}
        <p className="absolute top-full left-1/2 -translate-x-1/2 text-[8px] w-full text-center hidden lg:block">
          Note: The actual product you receive may look slightly different from
          the images due to natural variations in wood grain, color, and
          texture, as well as differences in lighting during photography. Each
          piece is unique, and these variations are normal.
        </p>
      </div>
    </div>
  );
}

const MainImage = ({ image, name, pid, index, color }) => {
  const [loading, setloading] = useState({
    effect: true,
    show: true,
  });

  return (
    <Link
      href={`/Fullimage?pid=${pid}&color=${color}&index=${index}`}
      className="relative block aspect-square min-w-[100%] h-full w-full cursor-zoom-in p-px snap-start snap-always overflow-hidden"
    >
      <Nextimage
        className="min-w-full w-full h-full  object-contain"
        src={image}
        alt={name}
        height={754}
        width={754}
        loading="lazy"
        onLoad={() => {
          setloading((pre) => ({ ...pre, effect: false }));
          setTimeout(() => {
            setloading((pre) => ({ ...pre, show: false }));
          }, 550);
        }}
      />
      {/* loading */}
      {loading.show && (
        <div
          className={`imgloader absolute top-0 left-0  h-full w-full bg-bg1 ${
            !loading.effect && "opacity-0"
          } duration-500`}
        ></div>
      )}
    </Link>
  );
};

const MiniImage = ({ image, alt, onClick, isActive }) => {
  const [loading, setloading] = useState({
    effect: true,
    show: true,
  });

  return (
    <div
      className={`relative w-[70px] lg:w-full aspect-square cursor-pointer overflow-hidden ${
        isActive
          ? "border-[2px] border-cyan-500"
          : "border-[2px] border-slate-300"
      }`}
      onClick={onClick}
    >
      <Nextimage
        className={`h-full w-full aspect-square object-cover bg-white`}
        src={image}
        alt={alt}
        height={100}
        width={100}
        quality={50}
        loading="lazy"
        onLoad={() => {
          setloading((pre) => ({ ...pre, effect: false }));
          setTimeout(() => {
            setloading((pre) => ({ ...pre, show: false }));
          }, 550);
        }}
      />
      {/* loading */}
      {loading.show && (
        <div
          className={`imgloader absolute inset-0 bg-bg1 ${
            !loading.effect && "opacity-0"
          } duration-500`}
        ></div>
      )}
    </div>
  );
};

export default ImagesComp;
