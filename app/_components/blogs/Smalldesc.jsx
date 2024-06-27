import React from "react";

function Smalldesc({ setfullblog, blog }) {
  return (
    <div className="place-content-center ">
      <h3 className="font-bold text-[8px] md:text-[25px] line-clamp-2">{blog.title}</h3>
      <button
        className="bg-clip-text text-[10px] md:text-[16px] text-transparent font-bold bg-[linear-gradient(90deg,#10e89c,#0593f7)] mt-0 md:mt-[20px]"
        onClick={() => {
          setfullblog(blog);
        }}
      >
        Read  &gt;
      </button>
    </div>
  );
}

export default Smalldesc;
