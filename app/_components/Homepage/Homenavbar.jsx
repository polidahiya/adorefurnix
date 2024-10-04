import Link from "next/link";
import Image from "next/image";
import { Cartproductcount } from "../Navbar/Publiccomps";
import { Logedinusermenu } from "../Navbar/Publiccomps";
import { FaCartShopping } from "react-icons/fa6";


export default function Homenavbar({ userdata, token }) {
  return (
    <nav className="absolute top-0 left-0 h-[40px] md:h-[60px] w-full flex items-center justify-between px-[10px] md:px-[40px] mt-[10px] md:mt-0 md:py-[10px] z-20 ">
      <Image
        className="h-[30px] w-auto md:h-[40px] "
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
          href="/Blogs"
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
      <div className="flex items-center justify-end gap-[10px] h-full ">
        <Link
          href="/cart"
          className="relative flex items-center justify-center h-full aspect-square "
        >
          <FaCartShopping className="text-[25px] text-white " />

          <Cartproductcount />
        </Link>
        <Logedinusermenu userdata={userdata} token={token} />
      </div>
    </nav>
  );
}

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { Cartproductcount } from "../Navbar/Publiccomps";
// import { Logedinusermenu } from "../Navbar/Publiccomps";
// import { FaCartShopping } from "react-icons/fa6";
// import { useEffect, useState, useRef } from "react";

// export default function Homenavbar({ userdata, token }) {
//   const [scrolly, setscrolly] = useState(0);
//   const [scrollingdown, setscrollingdown] = useState(null); // up or down
//   const prevScrollY = useRef(0); // to store the previous scroll position

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     console.log(currentScrollY,prevScrollY.current);

//     if (currentScrollY-prevScrollY.current > 30) {
//       setscrollingdown("down");
//     } else if (currentScrollY < prevScrollY.current) {
//       setscrollingdown("up");
//     }

//     // Update the previous scroll position
//     prevScrollY.current = currentScrollY;
//   };

//   useEffect(() => {
//     window.onscroll = () => {
//       setscrolly(window.scrollY);
//       handleScroll();
//     };
//   }, []);
//   return (
//     <nav
//       className={`fixed top-0 left-0 h-[40px] md:h-[60px] w-full flex items-center justify-between px-[10px] md:px-[40px] mt-[10px] md:mt-0 md:py-[10px] z-20 duration-500 ${
//         scrollingdown == "down" && scrolly > 50 && "-translate-y-full"
//       } ${scrolly > 100 && "bg-slate-600 bg-opacity-80 backdrop-blur-[10px]"}`}
//     >
//       <Image
//         className="h-[30px] w-auto md:h-[40px] "
//         src="/logo3.png"
//         alt="adorefurnix logo"
//         height={50}
//         width={200}
//       ></Image>
//       <ul className="absolute hidden md:flex top-0 left-[50%] translate-x-[-50%] h-full items-center justify-center gap-[50px] text-[18px] text-white">
//         <Link
//           className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
//           href="#home"
//         >
//           Home
//         </Link>
//         <Link
//           className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
//           href="/Blogs"
//         >
//           Blogs
//         </Link>
//         <Link
//           className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
//           href="#categories"
//         >
//           Categories
//         </Link>
//       </ul>
//       <div className="flex items-center justify-end gap-[10px] h-full ">
//         <Link
//           href="/cart"
//           className="relative flex items-center justify-center h-full aspect-square "
//         >
//           <FaCartShopping className="text-[25px] text-white " />

//           <Cartproductcount />
//         </Link>
//         <Logedinusermenu userdata={userdata} token={token} />
//       </div>
//     </nav>
//   );
// }