import React from "react";

function Smalldesc({ setfullblog, blog }) {
  return (
    <div className="place-content-center">
      <h3 className="font-bold text-[25px] line-clamp-2">{blog.title}</h3>
      <button
        className="bg-clip-text text-transparent font-bold bg-[linear-gradient(90deg,#10e89c,#0593f7)] mt-[20px]"
        onClick={() => {
          setfullblog(blog);
        }}
      >
        Read more &gt;
      </button>
    </div>
  );
}

export default Smalldesc;
