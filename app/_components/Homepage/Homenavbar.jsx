import Link from "next/link";
import Nextimage from "@/app/_components/Nextimage";
import Logedinusermenu from "../Navbar/_comps/Logedinusermenu";
import { Cartlink } from "../Navbar/Navbar";

export default function Homenavbar({ userdata, token }) {
  const list = [
    {
      name: "Categories",
      link: "#categories",
    },
    {
      name: "My orders",
      link: "/orderdetails",
    },
    {
      name: "Favourites",
      link: "/likedproducts",
    },
    {
      name: "Blogs",
      link: "/Blogs",
    },
  ];
  return (
    <nav className="absolute top-0 left-0 h-[40px] md:h-[60px] w-full flex items-center justify-between px-[10px] md:px-[40px] mt-[10px] md:mt-0 md:py-[10px] z-20 ">
      <Nextimage
        className="h-[30px] w-auto md:h-[40px] "
        src="/logo3.png"
        alt="adorefurnix logo"
        height={50}
        width={200}
        
      ></Nextimage>
      <div className="absolute hidden md:flex top-0 left-[50%] translate-x-[-50%] h-full items-center justify-center gap-4 lg:gap-12 text-white">
        {list.map((item, i) => (
          <Link
            key={i}
            className="hover:bg-clip-text hover:text-transparent hover:bg-theme"
            href={item?.link}
          >
            {item?.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-end gap-[10px] h-full ">
        <Cartlink />
        <Logedinusermenu userdata={userdata} token={token} />
      </div>
    </nav>
  );
}
