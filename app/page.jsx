"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blogscomp from "./_components/Homepage/Blogscomp";
import Promices from "./_components/Homepage/Promices";
import Bestselling from "./_components/Homepage/Bestselling";
import Collage from "./_components/Homepage/Collage";
import Categories from "./_components/Homepage/Categories";

export default function Home() {
  return (
    <div>
      <div className="relative w-full box-content h-fit " id="home">
        <nav className="absolute top-0 left-0 h-[50px] md:h-[80px] w-full flex items-center justify-between p-[10px] md:px-[40px] z-10 ">
          <Image
            className="h-[30px] w-auto md:h-[50px] "
            src="/logo3.png"
            alt="adorefurnix logo"
            height={50}
            width={200}
          ></Image>
          <ul className="absolute hidden md:flex top-0 left-[50%] translate-x-[-50%] h-full items-center justify-center gap-[50px] text-[18px] text-white">
            <Link
              className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
              href="#home"
            >
              Home
            </Link>
            <Link
              className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
              href="#blogs"
            >
              Blogs
            </Link>
            <Link
              className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
              href="#categories"
            >
              Categories
            </Link>
          </ul>
          <div></div>
        </nav>
        {/*  */}
        <div className="absolute top-[60px] md:top-[150px]">
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
          className="absolute bottom-0 left-0 w-full h-[50px] md:h-[150px] z-10"
          style={{
            backgroundImage: "linear-gradient(0deg, white, transparent)",
          }}
        ></div>
      </div>
      {/* promices */}
      <Promices />
      {/* categories */}
      <Categories />

      {/* best selling products */}
      <Bestselling />
      {/* collage */}
      <Collage />

      {/* blogs */}
      <Blogscomp />

      {/* footer */}
      <footer className=" bg-graygradient h-[300px] mt-[50px]">
        This i foolter
      </footer>
    </div>
  );
}
