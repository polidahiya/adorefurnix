import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  // FaPaypal,
  FaGooglePay,
  // FaApplePay,
} from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
// import { IoMdCash } from "react-icons/io";
import { SiPaytm, SiPhonepe } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { sociallinks } from "../commondata";
import { FaSitemap } from "react-icons/fa";
import PWAInstallPrompt from "./Pwapromot";

// import ThemeSwitcher from "./Switchtheme";

function Footer() {
  const list1 = [
    { name: "About", link: "/About" },
    { name: "Blogs", link: "/Blogs" },
    { name: "Contact Us", link: "/Contact" },
    { name: "Shipping Policy", link: "/ShippingPolicy" },
    { name: "Privacy Policy", link: "/PrivacyPolicy" },
    { name: "Return and Refunds", link: "/ReturnandRefunds" },
    { name: "Terms & Conditions", link: "/Terms&Conditions" },
  ];
  const list2 = [
    { name: "Living Room", link: "/Living%20Room" },
    { name: "Bedroom", link: "/Bedroom" },
    { name: "Bar Furniture", link: "/Bar%20Furniture" },
    { name: "Office Furniture", link: "/Office%20Furniture" },
    { name: "Home Decor & More", link: "/Home%20Decor%20&%20More" },
    { name: "More", link: "/#categories" },
  ];
  return (
    <footer className="bg-graygradient text-white px-[30px] md:px-[50px] p-[20px] pt-[30px] lg:pt-[20px] text-[14px]">
      <section className=" flex gap-[50px] flex-col md:flex-row">
        <div className="flex-1 flex flex-col items-start">
          <Image
            src="/logo3.png"
            alt="logo image"
            width={200}
            height={52}
            className="h-[40px] w-[160px] "
          ></Image>
          <p className="mt-[30px]  mb-[20px] text-justify lg:text-start">
            Our mission is to provide high-quality, handcrafted wooden furniture
            and home decor that enhances your living space. We strive to offer
            exceptional value and create pieces that you&apos;ll cherish for
            years to come.
          </p>
          <div className="w-full flex items-center gap-[20px] text-[25px] mt-auto">
            <p className="text-[16px] font-bold">Socials : </p>
            <Link href={sociallinks.facebook} target="_blank" title="Facebook">
              <FaFacebook className="text-[20px]" />
            </Link>
            <Link href={sociallinks.insta} target="_blank" title="Instagram">
              <RiInstagramFill className="text-[20px]" />
            </Link>
            <Link href={sociallinks.twitter} target="_blank" title="X">
              <BsTwitterX className="text-[20px]" />
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col flex-1  items-start">
          <Heading heading="Quick links" />
          <div className="flex flex-col gap-[10px] items-start">
            {list1.map((item, i) => (
              <Links key={i} name={item.name} link={item.link} />
            ))}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col flex-1  items-start">
          <Heading heading="Categories" />
          <div className="flex flex-col gap-[10px] items-start">
            {list2.map((item, i) => (
              <div key={i} className="flex items-center gap-[5px]">
                <Links key={i} name={item.name} link={item.link} />
                {i == list2.length - 1 && (
                  <MdOutlineArrowRightAlt className="" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Divider />
      <section className="flex items-center justify-between flex-col-reverse lg:flex-row">
        <p className=" text-[12px] flex-1 mt-[10px] lg:mt-0">
          &copy; {new Date().getFullYear()}{" "}
          <strong className="font-bold">Adorefurnix.com</strong>. All rights
          reserved.
        </p>
        <div className="h-full flex flex-1 items-center justify-center gap-[20px] text-[12px]">
          <Link href="/Sitemap" className="flex items-center gap-1">
            <FaSitemap className="text-yellow-500" />
            Site map
          </Link>
          <PWAInstallPrompt />
          {/* <ThemeSwitcher /> */}
        </div>
        <div className="flex flex-1 items-center justify-end gap-[10px]">
          <FaCcVisa size={15} title="Visa" />
          <FaCcMastercard size={15} title="MasterCard" />
          <FaCcAmex size={15} title="American Express" />
          {/* <FaPaypal size={15} title="PayPal" /> */}
          <FaGooglePay size={30} title="Google Pay" />
          {/* <FaApplePay size={30} title="Apple Pay" /> */}
          <AiFillBank size={15} title="Net Banking" />
          {/* <IoMdCash size={15} title="Cash on Delivery" /> */}
          <SiPaytm size={30} title="Paytm Wallet" />
          <SiPhonepe size={15} title="PhonePe" />
        </div>
      </section>
    </footer>
  );
}

function Heading({ heading }) {
  return (
    <h3 className="relative font-bold text-[20px] mb-[30px]">
      {heading}
      <span className="w-[120%] h-[2px] absolute bottom-[-5px] left-0 block bg-theme"></span>
    </h3>
  );
}

function Links({ name, link }) {
  return (
    <Link href={link} className="relative group">
      {name}
      <span className="w-0 h-[2px] absolute bottom-0 left-0 block bg-theme rounded-full lg:group-hover:w-[calc(100%+20px)] duration-200"></span>
    </Link>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-[5px] lg:gap-[20px] w-full h-[2px] mt-[50px] mb-[20px]">
      <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,transparent,white,transparent)]"></div>
      <div className="flex items-center justify-center gap-[5px]">
        {new Array(5).fill(null).map((_, i) => {
          return <RiStarSLine key={i} className="text-[15px]" />;
        })}
      </div>
      <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,transparent,white,transparent)]"></div>
    </div>
  );
}

export default Footer;
