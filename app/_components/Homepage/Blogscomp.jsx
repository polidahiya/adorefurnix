import React from "react";
import { Cachedblogs } from "@/app/_serveractions/Getcachedata";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRightCircle } from "react-icons/lu";

async function Blogscomp() {
  const blogs = await Cachedblogs();

  return (
    <div className="mt-[70px]">
      <center>
        <Link
          href="/Blogs"
          className="text-3xl md:text-4xl font-bold mb-4 font-serif italic"
          title=" more blogs"
        >
          Blogs
        </Link>
      </center>
      <section className="px-4 md:px-8 lg:px-16 mt-5">
        {blogs?.slice(0, 3).map((blog, i) => {
          const mainHeading = blog?.blogdata?.find(
            (item) => item.type === "mainheading"
          )?.content;
          const firstImage =
            blog?.blogdata?.find((item) => item.type === "image")?.content ||
            "/images/noblogimage.jpg";
            
          const paragraphs = blog?.blogdata
            ?.filter((item) => item.type === "paragraph")
            ?.slice(0, 2); // Show only first 2 paragraphs

          return (
            <div
              key={i}
              className="flex flex-col md:flex-row items-stretch gap-5 p-5 bg-white shadow-md mt-5 rounded-lg"
            >
              <div className="w-full md:w-1/3">
                <Image
                  src={firstImage}
                  className="rounded-lg aspect-[4/3] h-full object-cover object-center"
                  alt="Blog Image"
                  height={300}
                  width={400}
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col min-h-full">
                <h3 className="text-xl md:text-2xl font-bold mb-2 ">
                  {mainHeading}
                </h3>
                {paragraphs?.map((item, j) => (
                  <p key={j} className="text-gray-600 mb-3 line-clamp-3">
                    {item.content}
                  </p>
                ))}
                <Link
                  href={`/Blogs/${blog?._id}`}
                  className="mt-auto bg-theme w-fit flex items-center gap-3 text-white py-1 px-4 rounded-full"
                >
                  Read Full
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      {/* <center>
        <Link
          href={`/Blogs`}
          className="bg-theme text-white w-fit flex items-center gap-3  py-2 px-4 rounded-full mt-5"
        >
          More Blogs
          <LuArrowRightCircle />
        </Link>
      </center> */}
    </div>
  );
}

export default Blogscomp;
