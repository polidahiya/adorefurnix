"use client";
import React, { useState } from "react";
import { Addimage } from "./Serveraction";

function Addblog() {
  const [post, setPost] = useState({
    image: null,
    title: "",
    desc: "",
  });
  const [previews, setPreviews] = useState();
  const [uploadloading, setuploadloading] = useState(false);

  return (
    <div className="flex flex-col items-center gap-[10px] my-[50px]">
      <div className="relative w-fit px-[30px] py-[5px] cursor-pointer bg-sky-500 text-white rounded-[5px]">
        <input
          className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-10"
          type="file"
          onInput={(e) => {
            setPost({ ...post, image: e.target.files[0] });
            const reader = new FileReader();
            reader.onloadend = () => setPreviews(reader.result);
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
        <div className="pointer-events-none cursor-pointer">+ Add image</div>
      </div>
      {previews && (
        <img
          className="w-full md:w-[200px] aspect-square object-cover border border-slate-300 rounded-[30px]"
          src={previews}
        />
      )}
      {/* fileds */}
      <input
        type="text"
        value={post.title}
        className="w-[90%] border border-slate-300 outline-none px-[10px] py-[5px] rounded-[5px]"
        onInput={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Title"
      />
      <textarea
        type="text"
        value={post.desc}
        className="w-[90%] min-h-[200px] border border-slate-300 outline-none px-[10px] py-[5px] rounded-[5px]"
        onInput={(e) => setPost({ ...post, desc: e.target.value })}
        placeholder="Description"
      />
      <button
        className="flex items-center justify-center gap-[10px] bg-green-600 text-white px-[10px] py-[5px] rounded-[5px]"
        onClick={async () => {
          if (
            uploadloading ||
            !post.image ||
            post.title == "" ||
            post.desc == ""
          ) {
            return;
          }

          setuploadloading(true);

          const formData = new FormData();

          formData.append("image", post.image);
          formData.append("title", post.title);
          formData.append("desc", post.desc);

          const res = await Addimage(formData);

          console.log(res);
          if (res?.message) {
            if (res.error) {
              console.log(res?.error);
            }
            alert(res.message);
            setuploadloading(false);
            setPreviews("");
            setPost({
              image: null,
              title: "",
              desc: "",
            });
          }
        }}
      >
        {uploadloading && (
          <div className="uploadloader h-[20px] aspect-square rounded-full border-t-2 border-l-2 border-solid border-white"></div>
        )}
        Add post
      </button>
    </div>
  );
}

export default Addblog;
