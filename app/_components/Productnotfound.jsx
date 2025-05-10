import React from "react";
import Nextimage from "@/app/_components/Nextimage";
function Productnotfound() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <Nextimage
        className="brightness-110"
        src="/product_not_found.jpeg"
        alt="no product found image"
        width={300}
        height={300}
        
      ></Nextimage>
    </div>
  );
}

export default Productnotfound;
