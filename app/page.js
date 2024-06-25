"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      image: <Customersupport styles="h-[80px] w-[80px]" />,
      heading: "Heading",
      para: "This is a test paragraph",
    },
    {
      image: <Paymentsvg styles="h-[80px] w-[80px]" />,
      heading: "Heading",
      para: "This is a test paragraph",
    },
    {
      image: <Paymentsvg styles="h-[80px] w-[80px]" />,
      heading: "Heading",
      para: "This is a test paragraph",
    },
  ];
  const bestproducts = [
    {
      image:
        "https://gallerypng.com/wp-content/uploads/2024/05/riddhikumar-girl-sitting-on-chair-png-image.png",
      name: "Test name",
      price: "100$",
      stars: 5,
    },
    {
      image:
        "https://images.restaurant-furniture.com/image/upload/c_pad,dpr_1.0,f_auto,h_650,q_auto,w_650/rfcom/media/catalog/product/u/s/us-255-dm-b-vnl-bl-s-vnl-bl-1.png",
      name: "Test name",
      price: "100$",
      stars: 3,
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-modern-white-chair-object-png-image_10076590.png",
      name: "Test name",
      price: "100$",
      stars: 4,
    },
  ];
  const collage = [
    {
      image:
        "https://www.decorpot.com/images/500618969Living-Room-Furniture-Essentials_Main.jpg",
      title: "Living room",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/NZ/VW/LE/183238162/modern-l-shape-kitchen.jpg",
      title: "Pta nhi",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-hbx060122cover-001-1657042925.jpg?crop=1xw:1xh;center,top&resize=980:*",
      title: "ye bda kmra lgra h",
    },
  ];

  const [loading, setloading] = useState(true);

  useEffect(() => {
    document.body.onload = setloading(false);
  }, []);

  
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <div className="relative w-full box-content h-fit">
          <nav className="absolute top-0 left-0 h-[80px] w-full flex items-center justify-between p-[10px] md:px-[40px] z-10 ">
            <Image
              className="h-[50px] invert"
              src="/logo.png"
              alt="adorefurnix logo"
              height={50}
              width={200}
            ></Image>
            <ul className="absolute  top-0 left-[50%] translate-x-[-50%] h-full flex items-center justify-center gap-[50px] text-[18px] text-white">
              <li className="bg-clip-text text-transparent font-bold bg-[linear-gradient(90deg,#10e89c,#0593f7)]">
                Home
              </li>
              <li>Home</li>
              <li>Home</li>
              <li>Car</li>
            </ul>
            <div></div>
          </nav>
          {/*  */}
          <div className="absolute top-[150px]">
            <h2 className="text-[3vw] font-semibold max-w-[70%] text-center mx-auto text-white">
              Hamari collection itni pyaari h ki sabko unhe ghar me rakhne ka
              man kare
            </h2>
          </div>

          {/* bg image */}
          <img
            className="w-full top-0 z-[-1]"
            src="/images/pullokkaran-banner-01.jpg"
            alt="homepageslide"
            height={1000}
            width={1000}
          ></img>
          {/* gradient */}
          <div
            className="absolute bottom-0 left-0 w-full h-[150px] z-10"
            style={{
              backgroundImage: "linear-gradient(0deg, white, transparent)",
            }}
          ></div>
        </div>
        {/*  */}
        <div className="h-[200px] flex items-center justify-evenly ">
          {services.map((item, i) => {
            return (
              <div key={i} className="flex gap-[5px]">
                {item.image}
                <div className="flex flex-col justify-between py-[5px]">
                  <h2 className="text-[25px] font-bold">{item.heading}</h2>
                  <p className="font-semibold text-slate-500">{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* best selling products */}
        <div className="flex items-center gap-[20px] px-[10px] md:px-[40px]">
          <div className="min-w-[300px]">
            <h3
              className="text-[40px] font-bold p-0"
              style={{ lineHeight: "45px" }}
            >
              Best Selling Products{" "}
            </h3>
            <button className="mt-[20px] font-bold text-gray-700">
              See all collection{" "}
            </button>
          </div>
          {/* products */}
          {bestproducts.map((item, i) => {
            return (
              <div key={i} className="relative w-full rounded-[30px]">
                <img
                  className="w-full aspect-square object-contain"
                  src={item.image}
                  alt=""
                />
                <div className="bg-white rounded-[30px] p-[20px] shadow-[4px_4px_5px_#bababa7f]">
                  <div>
                    <span className="text-[20px] font-bold ">{item.name}</span>
                    <br />
                    {new Array(item.stars).fill(null).map((star, i) => {
                      return "⭐";
                    })}
                  </div>
                  <div className="mt-[30px] text-[20px] font-bold">
                    {item.price}
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 w-full h-[70%]  rounded-[30px] z-[-1]"
                  style={{ background: "#c1d0e4" }}
                ></div>
              </div>
            );
          })}
        </div>
        {/* collage */}
        <div className="px-[10px] md:px-[40px] mt-[80px]">
          <h2 className="text-center font-bold text-[40px]">
            This is a heading
          </h2>
          <p className="text-center font-bold text-gray-700">
            This is a para this is a para
          </p>
          <div className="grid grid-cols-2 gap-[20px] mt-[30px]">
            <div className="relative group rounded-[2vw] aspect-[4/2] overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover object-center scale-[1.2] group-hover:scale-[1] duration-700"
                src={collage[0].image}
                alt={collage[0].title}
              />
              <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-[50%] pointer-events-none opacity-0 group-hover:opacity-[1] duration-300">
                <div className="text-white font-bold text-[2.5vw] translate-y-[50px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 duration-300">
                  {collage[0].title}
                </div>
              </div>
            </div>
            <div className="relative group rounded-[2vw]  row-span-2 overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover object-center scale-[1.2] group-hover:scale-[1] duration-700"
                src={collage[1].image}
                alt={collage[1].title}
              />
              <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-[50%] pointer-events-none opacity-0 group-hover:opacity-[1] duration-300">
                <div className="text-white font-bold text-[2.5vw] translate-y-[50px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 duration-300">
                  {collage[1].title}
                </div>
              </div>
            </div>
            <div className="relative group rounded-[2vw] aspect-[4/2] overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover object-center scale-[1.2] group-hover:scale-[1] duration-700"
                src={collage[2].image}
                alt={collage[2].title}
              />
              <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-[50%] pointer-events-none opacity-0 group-hover:opacity-[1] duration-300">
                <div className="text-white font-bold text-[2.5vw] translate-y-[50px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 duration-300">
                  {collage[2].title}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer className="bg-[linear-gradient(110deg,#79818c,#263242)] h-[300px] mt-[50px]">
          This i foolter
        </footer>
      </div>
    );
  }
}

function Paymentsvg({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      version="1.1"
      viewBox="0 0 466.287 466.287"
      xmlSpace="preserve"
      fill="url(#grad1)"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "#10e89c", stopOpacity: "1" }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#0593f7", stopOpacity: "1" }}
          />
        </linearGradient>
      </defs>
      <path d="M451.287 48.634H51.957c-8.284 0-15 6.716-15 15v144.789H33.21c-18.313 0-33.21 14.898-33.21 33.21v142.809c0 18.313 14.897 33.21 33.21 33.21h261.991c18.313 0 33.21-14.898 33.21-33.21v-92.548h122.876c8.284 0 15-6.716 15-15V63.634c0-8.284-6.716-15-15-15zm-15 59.107c-13.644-4.653-24.453-15.463-29.106-29.107h29.106v29.107zM96.064 78.634c-4.653 13.644-15.463 24.453-29.107 29.107V78.634h29.107zM33.21 238.423h261.991c1.77 0 3.21 1.44 3.21 3.21v14.135H30v-14.135c0-1.77 1.44-3.21 3.21-3.21zm155.157-68.159c0-34.882 28.374-63.26 63.25-63.26 34.882 0 63.26 28.378 63.26 63.26 0 14.106-4.771 27.758-13.313 38.777a33.282 33.282 0 00-6.363-.618h-24.779c4.88-4.842 7.909-11.549 7.909-18.95 0-12.123-8.122-22.379-19.209-25.629v-21.768a11.683 11.683 0 014.209 8.98c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-12.123-8.122-22.379-19.209-25.629v-2.479c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v2.479c-11.086 3.25-19.208 13.506-19.208 25.629s8.122 22.379 19.208 25.629v21.768c-2.569-2.15-4.208-5.376-4.208-8.98 0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 7.402 3.028 14.108 7.908 18.95h-31.653c-8.307-10.912-12.802-24.139-12.802-38.159zm110.044 120.793H30v-15.289h268.411v15.289zm-54.289-131.021c-2.569-2.15-4.208-5.376-4.208-8.98s1.639-6.83 4.208-8.98v17.96zm15 38.417v-17.96a11.683 11.683 0 010 17.96zm36.079 189.2H33.21c-1.77 0-3.21-1.44-3.21-3.21v-73.385h268.411v73.385c0 1.769-1.44 3.21-3.21 3.21zm24.063-168.873c10.052-14.037 15.613-31.016 15.613-48.516 0-45.91-37.351-83.26-83.26-83.26-45.904 0-83.25 37.35-83.25 83.26 0 13.548 3.203 26.527 9.22 38.159H66.957v-79.915c24.695-5.709 44.165-25.179 49.874-49.873h269.583c5.709 24.694 25.179 44.164 49.873 49.873v83.513c-24.694 5.709-44.164 25.179-49.873 49.873h-58.003v-20.261c0-8.849-3.485-16.894-9.147-22.853zm87.917 43.114c4.653-13.644 15.462-24.453 29.106-29.106v29.106h-29.106z"></path>
    </svg>
  );
}

function Customersupport({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      fill="url(#grad1)"
      data-name="24x24/On Light/Support"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "#10e89c", stopOpacity: "1" }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#0593f7", stopOpacity: "1" }}
          />
        </linearGradient>
      </defs>
      <g>
        <path fill="none" d="M0 0H24V24H0z"></path>
        <path
          d="M8 17.751a2.749 2.749 0 015.127-1.382C15.217 15.447 16 14 16 11.25v-3c0-3.992-2.251-6.75-5.75-6.75S4.5 4.259 4.5 8.25v3.5a.751.751 0 01-.75.75h-1A2.753 2.753 0 010 9.751v-1A2.754 2.754 0 012.75 6h.478c.757-3.571 3.348-6 7.022-6s6.264 2.429 7.021 6h.478a2.754 2.754 0 012.75 2.75v1a2.753 2.753 0 01-2.75 2.75h-.309a5.85 5.85 0 01-3.94 5.34 2.75 2.75 0 01-5.5-.089zm1.5 0a1.25 1.25 0 101.25-1.25 1.251 1.251 0 00-1.25 1.25zm8-6.75h.249A1.251 1.251 0 0019 9.751v-1A1.251 1.251 0 0017.75 7.5h-.25zm-16-2.25v1A1.251 1.251 0 002.75 11H3V7.5h-.25A1.251 1.251 0 001.5 8.751z"
          transform="translate(1.75 2.25)"
        ></path>
      </g>
    </svg>
  );
}
