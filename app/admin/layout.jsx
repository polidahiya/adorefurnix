import { autologin } from "../_serveractions/Loginaction";
import Link from "next/link";
import Nextimage from "@/app/_components/Nextimage";
import Loginpage from "./Loginpage";
import { FaDollyFlatbed } from "react-icons/fa";
import { RiBloggerFill } from "react-icons/ri";
import { IoBagAdd } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";

const navLinks = [
  { href: "/admin/", label: "Orders", logo: <FaDollyFlatbed /> },
  { href: "/admin/Blogs", label: "Add Blogs", logo: <RiBloggerFill /> },
  { href: "/admin/addproducts", label: "Add Products", logo: <IoBagAdd /> },
  {
    href: "/admin/contactmessages",
    label: "Messages",
    logo: <AiFillMessage />,
  },
  { href: "/admin/settings", label: "Settings", logo: <IoSettingsSharp /> },
];

export default async function RootLayout({ children }) {
  const res = await autologin();

  if (res?.status !== 200) {
    return <Loginpage />;
  }

  return (
    <div>
      <nav className="sticky top-0 flex items-center gap-[5px] md:gap-[10px] h-[50px] shadow-md p-[7px] px-[10px] lg:px-[40px] z-20 bg-graygradient">
        <Link href="/">
          <Nextimage
            src="/logo3.png"
            alt="logo"
            height={40}
            width={150}
            
          />
        </Link>
        {navLinks.map(({ href, label, logo }, index) => (
          <NavLink key={href} href={href} isFirst={index === 0}>
            {logo}
            <span className="hidden md:block">{label}</span>
          </NavLink>
        ))}
      </nav>
      {children}
    </div>
  );
}

const NavLink = ({ href, children, isFirst }) => (
  <Link
    className={`flex items-center gap-[10px] h-full rounded-[5px] px-[10px] bg-white ${
      isFirst && "ml-auto"
    }`}
    href={href}
  >
    {children}
  </Link>
);
