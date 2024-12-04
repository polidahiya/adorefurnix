import Link from "next/link";
import Image from "next/image";
import React from "react";

function Blackfridaybanner() {
  return (
    <Link href={"/"} className="w-full lg:px-10">
      <Image
        className="w-full h-full shadow-xl"
        src="/images/blackfridaybanner.jpg"
        alt="ksjdf"
        height={300}
        width={1000}
        loading="lazy"
        
      ></Image>
    </Link>
  );
}

export default Blackfridaybanner;
