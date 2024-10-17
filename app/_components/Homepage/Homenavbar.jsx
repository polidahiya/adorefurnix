import Link from "next/link";
import Image from "next/image";
import Logedinusermenu from "../Navbar/_comps/Logedinusermenu";
import { Cartlink } from "../Navbar/Navbar";

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
        <Cartlink />
        <Logedinusermenu userdata={userdata} token={token} />
      </div>
    </nav>
  );
}
