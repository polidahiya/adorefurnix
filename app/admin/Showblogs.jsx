"use client";
import React, { useEffect, useState } from "react";
import { Getblogs } from "../_components/serveractions/Getblogs";
import { Deleteblog } from "./Serveraction";

function Showblogs() {
  const [blogs, setblogs] = useState([]);
  const [numberofblogs, setnumberofblogs] = useState(1);
  const [showloading, setshowloading] = useState(true);

  useEffect(() => {
    (async () => {
      const blogdata = await Getblogs(numberofblogs * 9);

      setblogs(blogdata);
      setshowloading(false);
    })();
  }, [numberofblogs]);

  return (
    <div className="px-[10px] md:px-[40px]">
      <h2 className="text-center font-bold text-[40px] mt-[80px]">Blogs</h2>
      {blogs.map((blog, i) => {
        return (
          <div
            key={i}
            className="relative flex gap-[20px] mt-[10px] md:mt-[40px]"
          >
            <img
              src={blog.image}
              alt=""
              className="w-[200px] aspect-square object-cover object-center rounded-[30px]"
            />
            <div>
              <h3 className="font-bold text-[25px] line-clamp-2">
                {blog.title}
              </h3>
              <p className=" line-clamp-[5]">{blog.desc}</p>
            </div>
            <button
              className="absolute top-0 right-0 bg-red-600 text-white py-[5px] px-[20px]"
              onClick={async () => {
                const res = await Deleteblog(blog._id);
                setblogs(blogs.filter((item) => item._id !== blog._id));
                if (res?.message) {
                  alert(res.message);
                }
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      {/* loading */}
      {showloading && (
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 className="text-zinc-600 dark:text-zinc-400 mt-4">Loading...</h2>
        </div>
      )}

      {/* get more button */}
      <center>
        <button
          className="text-white rounded-full py-[5px] px-[20px] font-bold bg-[linear-gradient(90deg,#10e89c,#0593f7)] mt-[50px]"
          onClick={async () => {
            setshowloading(true);
            setnumberofblogs((pre) => pre + 1);
          }}
        >
          Get more
        </button>
      </center>
    </div>
  );
}

export default Showblogs;
