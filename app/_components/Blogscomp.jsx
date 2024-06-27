"use client";
import React, { useEffect, useState } from "react";
import { Getblogs } from "./serveractions/Getblogs";
import Blogimage from "./blogs/Blogimage";
import Fulldesc from "./blogs/Fulldesc";
import Smalldesc from "./blogs/Smalldesc";

function Blogscomp() {
  const [blogs, setblogs] = useState([]);
  const [numberofblogs, setnumberofblogs] = useState(1);
  const [showloading, setshowloading] = useState(true);
  const [fullblog, setfullblog] = useState(null);

  useEffect(() => {
    (async () => {
      const blogdata = await Getblogs(numberofblogs * 9);

      setblogs(blogdata);
      setshowloading(false);
    })();
  }, [numberofblogs]);

  return (
    <>
      <h2 className="text-center font-bold text-[40px] mt-[80px]" id="blogs">Blogs</h2>
      {blogs.map((blog, i) => {
        if (i % 6 == 0) {
          return (
            <div
              key={i}
              className="px-[10px] md:px-[200px] grid gap-[20px] grid-cols-3 mt-[50px] "
            >
              {/* blog1 image */}
              {blogs[i] && (
                <>
                  <Blogimage setfullblog={setfullblog} blog={blogs[i]} />
                  <Fulldesc setfullblog={setfullblog} blog={blogs[i]} />
                </>
              )}

              {/* blog 2nd and 3rd */}
              <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
                {blogs[i + 1] && (
                  <>
                    <Blogimage setfullblog={setfullblog} blog={blogs[i + 1]} />
                    <Smalldesc setfullblog={setfullblog} blog={blogs[i + 1]} />
                  </>
                )}

                {blogs[i + 2] && (
                  <>
                    <Blogimage setfullblog={setfullblog} blog={blogs[i + 2]} />
                    <Smalldesc setfullblog={setfullblog} blog={blogs[i + 2]} />
                  </>
                )}
              </div>
              {/* blog 4th and 5th */}
              <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
                {blogs[i + 3] && (
                  <>
                    <Blogimage setfullblog={setfullblog} blog={blogs[i + 3]} />
                    <Smalldesc setfullblog={setfullblog} blog={blogs[i + 3]} />
                  </>
                )}

                {blogs[i + 4] && (
                  <>
                    <Blogimage setfullblog={setfullblog} blog={blogs[i + 4]} />
                    <Smalldesc setfullblog={setfullblog} blog={blogs[i + 4]} />
                  </>
                )}
              </div>
              {/* blog 6th */}
              {blogs[i + 5] && (
                <>
                  <Blogimage setfullblog={setfullblog} blog={blogs[i + 5]} />
                  {/* blog 6th description */}
                  <Fulldesc setfullblog={setfullblog} blog={blogs[i + 5]} />
                </>
              )}
            </div>
          );
        }
      })}

      {/* loading */}
      {showloading && (
        <div className="text-center mt-[50px]">
          <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-zinc-400 mx-auto"></div>
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

      <Showfullblog fullblog={fullblog} setfullblog={setfullblog} />
    </>
  );
}

function Showfullblog({ fullblog, setfullblog }) {
  if (fullblog) {
    return (
      <div className="fixed flex items-center justify-center top-0 left-0 h-screen w-full z-30">
        <div className="relative w-full h-full md:w-[calc(100%-50px)] md:h-[90%] bg-white md:rounded-[20px] p-[10px]">
          <div className="w-full h-full overflow-y-scroll">
            <center>
              <h2 className="font-bold text-[25px] mt-[10px] max-w-[80%]">
                {fullblog.title}
              </h2>
            </center>
            <div className="mt-[30px] text-justify p-[10px]">
              <img
                src={fullblog.image}
                alt={fullblog.title}
                className="aspect-square w-[30%] object-cover object-center float-left mr-[10px] rounded-[20px]"
              />
              {fullblog.desc}
            </div>
          </div>
          {/* close button */}
          <button
            className="absolute top-[20px] left-[20px] flex items-center justify-center rounded-[10px] aspect-square h-[40px] p-[8px]  bg-[linear-gradient(90deg,#10e89c,#0593f7)]"
            onClick={() => {
              setfullblog(null);
            }}
          >
            <svg
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              fill="#fff"
              stroke="#fff"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <path d="M298.667 204.799H204.8v-85.333c0-3.209-1.8-6.153-4.659-7.603-2.85-1.459-6.289-1.178-8.892.7L3.516 249.096C1.306 250.708 0 253.268 0 255.999s1.306 5.291 3.516 6.903l187.733 136.533a8.508 8.508 0 005.018 1.63 8.527 8.527 0 008.533-8.533v-85.333h93.867a8.525 8.525 0 008.533-8.533v-85.333a8.525 8.525 0 00-8.533-8.534zM349.867 204.799c-14.114 0-25.6 11.486-25.6 25.6v51.2c0 14.114 11.486 25.6 25.6 25.6s25.6-11.486 25.6-25.6v-51.2c0-14.114-11.486-25.6-25.6-25.6zM418.133 204.799c-14.114 0-25.6 11.486-25.6 25.6v51.2c0 14.114 11.486 25.6 25.6 25.6s25.6-11.486 25.6-25.6v-51.2c0-14.114-11.486-25.6-25.6-25.6zM486.4 204.799c-14.114 0-25.6 11.486-25.6 25.6v51.2c0 14.114 11.486 25.6 25.6 25.6s25.6-11.486 25.6-25.6v-51.2c0-14.114-11.486-25.6-25.6-25.6z"></path>
              </g>
            </svg>
          </button>
        </div>
        {/* close button */}
        <button
          className="absolute h-full w-full bg-black bg-opacity-30 z-[-1]"
          onClick={() => {
            setfullblog(null);
          }}
        ></button>
      </div>
    );
  }
}

export default Blogscomp;
