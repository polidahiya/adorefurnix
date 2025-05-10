import Link from "next/link";
import Nextimage from "@/app/_components/Nextimage";
import React from "react";

function Blackfridaybanner() {
  return (
    <Link href={"/"} className="w-full lg:px-10">
      <Nextimage
        className="w-full h-full shadow-xl"
        src="/images/blackfridaybanner.jpg"
        alt="ksjdf"
        height={300}
        width={1000}
        loading="lazy"
        
      ></Nextimage>
    </Link>
  );
}

export default Blackfridaybanner;
