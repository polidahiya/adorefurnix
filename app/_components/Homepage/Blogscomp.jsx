"use client";
import { Getblogs } from "../../_serveractions/Getblogs";
import Componentloading from "../Componentloading";
import React, { useEffect, useState } from "react";
import Smalldesc from "./blogs/Smalldesc";
import Blogimage from "./blogs/Blogimage";
import Fulldesc from "./blogs/Fulldesc";

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
      <h2
        className="text-center font-bold text-[25px] md:text-[40px] mt-[80px] italic font-serif"
        id="blogs"
      >
        Blogs
      </h2>
      {blogs.map((blog, i) => {
        if (i % 6 == 0) {
          return (
            <div
              key={i}
              className="px-[10px] md:px-[200px] grid gap-[20px] grid-cols-3 mt-[20px] md:mt-[50px] "
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
      {showloading && <Componentloading />}

      {/* get more button */}
      <center>
        <button
          className="text-white text-[12px] md:text-[16px] rounded-full py-[5px] px-[20px] font-bold bg-[linear-gradient(90deg,#10e89c,#0593f7)] my-[50px]"
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
        <div className="relative w-full h-full md:w-[calc(100%-50px)] md:h-[calc(100%-50px)] bg-white  md:rounded-[20px] p-[10px]">
          <div className="w-full h-full overflow-y-scroll">
            <h2 className="absolute top-0 left-0 md:rounded-t-[20px] md:whitespace-nowrap md:text-ellipsis overflow-hidden text-center bg-white font-bold text-[14px] md:text-[25px] w-full py-[20px] px-[50px] md:px-[100px]">
              {fullblog.title}
            </h2>
            {/* date */}
            <div className="flex px-[10px] items-center  text-slate-400 mt-[80px] text-[12px] md:text-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#94a3b8"
                className="h-[30px]"
                viewBox="-3 0 19 19"
              >
                <path d="M11.882 3.187a.476.476 0 01.475.475v11.063a.476.476 0 01-.475.475H1.118a.476.476 0 01-.475-.475V3.662a.476.476 0 01.475-.475h1.328v.721a1.425 1.425 0 002.85 0v-.72H7.71v.72a1.425 1.425 0 002.85 0v-.72zm-.634 3.37H1.752v7.535h9.496zm-7.384.821H2.621V8.67h1.243zm0 2.292H2.621v1.292h1.243zm0 2.292H2.621v1.291h1.243zm.561-8.054V2.475a.554.554 0 10-1.108 0v1.433a.554.554 0 101.108 0zm1.613 3.47H4.794V8.67h1.244zm0 2.292H4.794v1.292h1.244zm0 2.292H4.794v1.291h1.244zm2.174-4.584H6.968V8.67h1.244zm0 2.292H6.968v1.292h1.244zm0 2.292H6.968v1.291h1.244zm1.477-8.054V2.475a.554.554 0 00-1.108 0v1.433a.554.554 0 001.108 0zm.696 3.47H9.142V8.67h1.243zm0 2.292H9.142v1.292h1.243zm0 2.292H9.142v1.291h1.243z"></path>
              </svg>
              {fullblog.date}
            </div>
            <div className=" text-justify p-[10px]">
              <img
                src={fullblog.image}
                alt={fullblog.title}
                className="aspect-square w-full md:w-[30%] object-cover object-center float-left md:mr-[10px] rounded-[20px]"
              />
              <span className="text-[14px] md:text-[16px]">
                {fullblog.desc}
              </span>
            </div>
            <div className="flex px-[10px] items-center  justify-center text-slate-400 my-[30px]">
              Adorefurnix.com
            </div>
          </div>
          {/* close button */}
          <button
            className="absolute top-[20px] left-[20px] flex items-center justify-center rounded-[10px] aspect-square h-[30px] md:h-[40px] p-[8px]  bg-[linear-gradient(90deg,#10e89c,#0593f7)]"
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
          className="absolute h-full w-full bg-black bg-opacity-80 z-[-1]"
          onClick={() => {
            setfullblog(null);
          }}
        ></button>
      </div>
    );
  }
}

export default Blogscomp;
