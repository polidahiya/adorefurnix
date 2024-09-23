import { autologin } from "../_serveractions/Loginaction";
import Link from "next/link";
import Image from "next/image";
import Loginpage from "./Loginpage";
import { FaDollyFlatbed } from "react-icons/fa";
import { RiBloggerFill } from "react-icons/ri";
import { IoBagAdd } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

export default async function RootLayout({ children }) {
  const res = await autologin();

  if (res?.status !== 200) {
    return <Loginpage />;
  }

  const navLinks = [
    { href: "/admin/", label: "Orders", logo: <FaDollyFlatbed /> },
    { href: "/admin/Blogs", label: "Add Blogs", logo: <RiBloggerFill /> },
    { href: "/admin/addproducts", label: "Add Products", logo: <IoBagAdd /> },
    {
      href: "/admin/contactmessages",
      label: "Contact Messages",
      logo: <AiFillMessage />,
    },
  ];

  return (
    <div>
      <nav className="sticky top-0 flex items-center gap-[5px] md:gap-[10px] h-[50px] shadow-md p-[7px] px-[10px] md:px-[40px] z-20 bg-graygradient">
        <Link href="/">
          <Image src="/logo3.png" alt="logo" height={40} width={150} />
        </Link>
        {navLinks.map(({ href, label,logo }) => (
          <NavLink key={href} href={href}>
            {logo}
            <span className="hidden md:block">{label}</span>
          </NavLink>
        ))}
      </nav>
      {children}
    </div>
  );
}

const NavLink = ({ href, children }) => (
  <Link
    className="flex items-center gap-[10px] h-full rounded-[5px] px-[10px] bg-white "
    href={href}
  >
    {children}
  </Link>
);

// {/* Uncomment to enable refresh functionality */}
//           {/* <button
//           className="h-full aspect-square bg-white rounded-[5px] ml-auto grid place-content-center"
//           onClick={async () => {
//             const res = await refreshsitenow();
//             setmessagefn(res?.message);
//           }}
//           title="Refresh site Data Now"
//         >
//           <BiRefresh />
//         </button> */}
