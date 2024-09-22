import { autologin } from "./Loginaction";
import Link from "next/link";
import Image from "next/image";
import Loginpage from "./Loginpage";

export default async function RootLayout({ children }) {
  const res = await autologin();

  if (res?.status !== 200) {
    return <Loginpage />;
  }

  const navLinks = [
    { href: "/admin/", label: "Orders" },
    { href: "/admin/Blogs", label: "Add Blogs" },
    { href: "/admin/addproducts", label: "Add Products" },
    { href: "/admin/contactmessages", label: "Contact Messages" },
  ];

  return (
    <div>
      <nav className="sticky top-0 flex items-center gap-[5px] md:gap-[10px] h-[50px] shadow-md p-[7px] px-[10px] md:px-[40px] z-20 bg-graygradient">
        <Link href="/">
          <Image src="/logo3.png" alt="logo" height={40} width={150} />
        </Link>
        {navLinks.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </nav>
      {children}
    </div>
  );
}

const NavLink = ({ href, children }) => (
  <Link
    className="h-full rounded-[5px] px-[10px] bg-white grid place-content-center"
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
