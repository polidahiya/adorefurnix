import React from "react";

function Fulldesc({ setfullblog, blog }) {
  return (
    <div className="place-content-center">
      <h3 className="font-bold text-[10px] md:text-[25px] line-clamp-2">{blog.title}</h3>
      <p className="text-[8px] md:text-[16px] line-clamp-[5]">{blog.desc}</p>
      <button
        className="bg-clip-text text-[8px] md:text-[16px] text-transparent font-bold bg-[linear-gradient(90deg,#10e89c,#0593f7)] mt-0 md:mt-[20px]"
        onClick={() => {
          setfullblog(blog);
        }}
      >
        Read more &gt;
      </button>
    </div>
  );
}

export default Fulldesc;
