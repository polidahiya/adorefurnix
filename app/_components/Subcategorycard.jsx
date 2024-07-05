import React from "react";
import Link from "next/link";
import Image from "next/image";

function Subcategorycard({ styles, link, imgsrc, proname }) {
  return (
    <Link href={link} className={styles}>
      <Image
        src={imgsrc}
        width={300}
        height={300}
        alt={proname}
        className="w-full aspect-[4/3] object-cover object-center "
      ></Image>
      <div className="text-center text-[13px] md:text-[16px] py-[5px] md:py-[10px]">{proname}</div>
    </Link>
  );
}

export default Subcategorycard;
