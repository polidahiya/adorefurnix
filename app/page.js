"use client";
import React from "react";
import Image from "next/image";
import Blogimage from "./_components/blogs/Blogimage";
import Fulldesc from "./_components/blogs/Fulldesc";
import Smalldesc from "./_components/blogs/Smalldesc";
import Deliverysvg from "./_svgs/Deliverysvg";
import Paymentsvg from "./_svgs/Paymentsvg";
import Qualitysvg from "./_svgs/Qualitysvg";

export default function Home() {
  const services = [
    {
      image: <Paymentsvg styles="h-[80px] w-[80px]" />,
      heading: "Flexible payment",
      para: "This is a test paragraph",
    },
    {
      image: <Deliverysvg styles="h-[80px] w-[80px]" />,
      heading: "Hassle free delivery",
      para: "This is a test paragraph",
    },
    {
      image: <Qualitysvg styles="h-[80px] w-[80px]" />,
      heading: "Quality assured",
      para: "This is a test paragraph",
    },
  ];
  const bestproducts = [
    {
      image: "/images/bestselling1.png",
      name: "Test name",
      price: "100$",
      stars: 5,
    },
    {
      image: "/images/bestselling2.png",
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

  const blogs = [
    {
      _id: "this is an id",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      title: "This is a title",
      desc: "this is a description this is a description this is a desscription this is a description this is a description this is a derscription this is a description this is a descrittion this is a description this is a descritption this is a descritpion this is a description this is a dsciption ",
    },
    {
      _id: "this is an id",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      title: "This is a title",
      desc: "this is a description this is a description this is a desscription this is a description this is a description this is a derscription this is a description this is a descrittion this is a description this is a descritption this is a descritpion this is a description this is a dsciption ",
    },
    {
      _id: "this is an id",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      title: "This is a title",
      desc: "this is a description this is a description this is a desscription this is a description this is a description this is a derscription this is a description this is a descrittion this is a description this is a descritption this is a descritpion this is a description this is a dsciption ",
    },
    {
      _id: "this is an id",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      title: "This is a title",
      desc: "this is a description this is a description this is a desscription this is a description this is a description this is a derscription this is a description this is a descrittion this is a description this is a descritption this is a descritpion this is a description this is a dsciption ",
    },
    {
      _id: "this is an id",
      image:
        "https://images.durian.in/Durian/durian/cmsimages/1654769698_imageupload.jpeg",
      title: "Custion title",
      desc: " a desscription this is a description this is a description this is a derscription this is a description this is a descrittion this is a description this is a descritption this is a descritpion this is a description this is a dsciption ",
    },
    {
      _id: "this is an id",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      title: "This is a title",
      desc: "this is a description this is a description this is a desscription this is a description this is a description this is a derscription this is a description this is a descrittion this is a description this is a descritption this is a descritpion this is a description this is a dsciption ",
    },
    {
      _id: "this is an id",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      title: "This is a title",
      desc: "this is a description this is a description this is a desscription this is a description this is a description this is a derscription this is a description this is a descrittion this is a description this is a descritption this is a descritpion this is a description this is a dsciption ",
    },
    {
      _id: "this is an id",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      title: "This is a title",
      desc: "this is a description this is a description this is a desscription this is a description this is a description this is a derscription this is a description this is a descrittion this is a description this is a descritption this is a descritpion this is a description this is a dsciption ",
    },
    
  ];

  return (
    <div>
      <div className="relative w-full box-content h-fit">
        <nav className="absolute top-0 left-0 h-[80px] w-full flex items-center justify-between p-[10px] md:px-[40px] z-10 ">
          <Image
            className="h-[50px] "
            src="/logo3.png"
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
            Hamari collection itni pyaari h ki sabko unhe ghar me rakhne ka man
            kare
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
      {/* promices */}
      <div className="h-[200px] flex items-center justify-evenly ">
        {services.map((item, i) => {
          return (
            <div key={i} className="flex gap-[10px]">
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
      <div className="flex items-center gap-[20px] px-[10px] md:px-[40px] mt-[50px]">
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
      <div className="px-[10px] md:px-[200px] mt-[80px]">
        <h2 className="text-center font-bold text-[40px]">This is a heading</h2>
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
      {/* blogs */}
      <h2 className="text-center font-bold text-[40px] mt-[80px]">Blogs</h2>
      {blogs.map((blog, i) => {
        if (i % 6 == 0) {
          return (
            <div className="px-[10px] md:px-[200px] grid gap-[20px] grid-cols-3 mt-[50px] ">
              {/* blog1 image */}
              {blogs[i] && (
                <>
                  <Blogimage image={blogs[i]?.image} title={blogs[i]?.title} />
                  <Fulldesc title={blogs[i]?.title} desc={blogs[i]?.desc} />
                </>
              )}

              {/* blog 2nd and 3rd */}
              <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
                {blogs[i + 1] && (
                  <>
                    <Blogimage
                      image={blogs[i + 1]?.image}
                      title={blogs[i + 1]?.title}
                    />
                    <Smalldesc title={blogs[i + 1].title} />
                  </>
                )}

                {blogs[i + 2] && (
                  <>
                    <Blogimage
                      image={blogs[i + 2]?.image}
                      title={blogs[i + 2]?.title}
                    />
                    <Smalldesc title={blogs[i + 2].title} />
                  </>
                )}
              </div>
              {/* blog 4th and 5th */}
              <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
                {blogs[i + 3] && (
                  <>
                    <Blogimage
                      image={blogs[i + 3]?.image}
                      title={blogs[i + 3]?.title}
                    />
                    <Smalldesc title={blogs[i + 3].title} />
                  </>
                )}

                {blogs[i + 4] && (
                  <>
                    <Blogimage
                      image={blogs[i + 4]?.image}
                      title={blogs[i + 4]?.title}
                    />
                    <Smalldesc title={blogs[i + 4].title} />
                  </>
                )}
              </div>
              {/* blog 6th */}
              {blogs[i + 5] && (
                <>
                  <Blogimage
                    image={blogs[i + 5]?.image}
                    title={blogs[i + 5]?.title}
                  />
                  {/* blog 6th description */}
                  <Fulldesc
                    title={blogs[i + 6]?.title}
                    desc={blogs[i + 5]?.desc}
                  />
                </>
              )}
            </div>
          );
        }
      })}

      {/* footer */}
      <footer className="bg-[linear-gradient(110deg,#79818c,#263242)] h-[300px] mt-[50px]">
        This i foolter
      </footer>
    </div>
  );
}
