import React from "react";
import Image from "next/image";

function Posters() {
  const list = [
    "/posterimages/real-estate-social-media-header-facebook-cover-design_583496-155.jpg",
    "/posterimages/321b563e7b3813ae81d686d0abcd910f.jpg",
    "/posterimages/321b563e7b3813ae81d686d0abcd910f111.jpg",
    "/posterimages/digital-marketing-facebook-cover-web-banner-template_169307-1765.jpg",
    "/posterimages/flash-sale-furniture-web-banner-social-media-banner_611460-3.jpg",
    "/posterimages/furniture-sale-facebook-cover-template_148840-278.jpg",
  ];
  return (
    <div className="px-2 md:px-10 my-12">
      <div className="flex items-center overflow-x-scroll snap-x scroll-smooth">
        {list.map((item, i) => (
          <Image
            className={`min-w-full md:min-w-[50%] ${
              i % 2 == 0 && "snap-start"
            }  object-contain `}
            key={i}
            src={item}
            alt="Poster"
            loading="lazy"
            quality={100}
            width={946}
            height={358}
          ></Image>
        ))}
      </div>
    </div>
  );
}

export default Posters;
