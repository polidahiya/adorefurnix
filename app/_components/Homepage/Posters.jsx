import React from "react";
import Nextimage from "@/app/_components/Nextimage";

function Posters() {
  const list = [
    "/321b563e7b3813ae81d686d0abcd910f111.jpg",
    "/321b563e7b3813ae81d686d0abcd910f111.jpg",
    "/321b563e7b3813ae81d686d0abcd910f111.jpg",
    "/321b563e7b3813ae81d686d0abcd910f111.jpg",
  ];
  return (
    <div className="px-2 md:px-10 my-12">
      <div className="flex items-center overflow-x-scroll snap-x scroll-smooth">
        {list.map((item, i) => (
          <Nextimage
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
            
          ></Nextimage>
        ))}
      </div>
    </div>
  );
}

export default Posters;
