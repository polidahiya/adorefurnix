import React from "react";
import Homenavbar from "./Homenavbar";
import Searchbox from "../Searchbox";
import Image from "next/image";

function Herosection({ token, userdata, productsname }) {
  return (
    <div className="relative w-full box-content h-fit">
      <Homenavbar userdata={userdata} token={token} />
      {/*  */}
      <div className="absolute top-20 md:top-24 w-full z-10">
        <h2 className="text-2xl md:text-4xl text-center mx-auto text-white w-72 md:w-96">
          <p className="w-full text-start font-recline ">Furnish with Love,</p>
          <p className="w-full text-end font-recline ">Live with Elegance</p>
        </h2>
        <center>
          <div className="w-[90%] max-w-[650px] h-[35px] md:h-[40px] mt-[10px]">
            <Searchbox productsname={productsname} />
          </div>
        </center>
      </div>

      {/* bg image */}
      <Image
        className="w-full  md:h-[100vh] max-h-[600px]  object-cover bg-graygradient top-0 z-[-1] hidden md:inline-block"
        src="/images/desktophomepageimage.webp"
        alt="homepageslide"
        height={1000}
        width={1000}
        priority={true}
      />
      {/* mobile */}

      <Image
        className="w-full  md:h-[100vh] max-h-[600px]  object-cover bg-graygradient top-0 z-[-1] md:hidden"
        src="/images/mobilehomepageimage2.webp"
        alt="homepageslide"
        height={1000}
        width={1000}
        priority={true}
      />
      {/* gradient full*/}
      <div
        className="absolute bottom-0 translate-y-1/2 left-0 w-full h-[10vw] "
        style={{
          backgroundImage:
            "linear-gradient(0deg,transparent, white, transparent)",
        }}
      ></div>
    </div>
  );
}

export default Herosection;

// function Herosection() {
//   return (
//     <div className="relative w-full box-content h-fit">
//       <Homenavbar userdata={userdata} token={token} />
//       {/*  */}
//       <div className="absolute top-[25%] md:top-[20%] w-full z-10 bg-black bg-opacity-40 md:bg-transparent py-10 md:py-0">
//         <h2 className=" md:text-[3vw] text-center mx-auto  text-white font-recline px-24">
//           <p className="w-full text-start font-recline ">
//             Furnish with Love,
//           </p>{" "}
//           <p className="w-full text-end font-recline ">
//             Live with Elegance
//           </p>
//         </h2>
//         <center>
//           <div className="w-[90%] max-w-[650px] h-[35px] md:h-[40px] mt-[10px]">
//             <Searchbox productsname={productsname} />
//           </div>
//         </center>
//       </div>

//       {/* bg image */}
//       <Image
//         className="w-full  md:h-[100vh] max-h-[600px]  object-cover bg-graygradient top-0 z-[-1] hidden md:inline-block"
//         src="/images/desktophomepageimage.webp"
//         alt="homepageslide"
//         height={1000}
//         width={1000}
//         priority={true}
//       />
//       {/* mobile */}
//       <img
//         src="https://i.pinimg.com/736x/36/07/eb/3607eb773dd2da092a493977c7c7a1fd.jpg"
//         alt=""
//         className="w-full  md:h-[100vh] max-h-screen  object-cover top-0 z-[-1] md:hidden"
//       />
//       {/* <Image
//           className="w-full  md:h-[100vh] max-h-[600px]  object-cover bg-graygradient top-0 z-[-1] md:hidden"
//           src="/images/mobilehomepageimage.webp"
//           alt="homepageslide"
//           height={1000}
//           width={1000}
//           priority={true}
//         /> */}
//       {/* gradient full*/}
//       <div
//         className="absolute bottom-0 translate-y-1/2 left-0 w-full h-64 md:h-[10vw] "
//         style={{
//           backgroundImage:
//             "linear-gradient(0deg,transparent, white, transparent)",
//         }}
//       ></div>
//     </div>
//   );
// }
