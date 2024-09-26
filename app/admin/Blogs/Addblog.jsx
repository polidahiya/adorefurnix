"use client";
import React, { useEffect, useRef, useState } from "react";
import Showblog from "./_addblogcomps/Showblog";

function Addblog() {
  const mainheading = { type: "mainheading", text: "This is the main heading" };
  const heading = { type: "heading", text: "this is a heading" };
  const image = {
    type: "image",
    src: "https://www.autotrainingcentre.com/wp-content/uploads/2014/02/Automotive-training.jpg",
  };
  const paragraph = {
    type: "paragraph",
    text: "This is a para",
  };
  const list = {
    type: "list",
    list: ["List 1", "List 2", "List 3"],
  };

  const [blogdata, setblogdata] = useState([mainheading]);

  const [activelem, setactivelem] = useState({
    type: "mainheading",
    blogitemindex: 0,
  });
  console.log(activelem);

  const textarearef = useRef();
  const [textarea, settextarea] = useState("");

  const Addblogcomps = (comp) => {
    setblogdata((pre) => {
      let temp = [...pre];
      temp.push(comp);

      if (comp?.type == "list") {
        setactivelem({
          type: comp?.type,
          blogitemindex: temp.length - 1,
          listitemindex: list.list.length - 1,
        });
        settextarea(comp?.list?.at(-1));
      } else {
        setactivelem({ type: comp?.type, blogitemindex: temp.length - 1 });
        settextarea(comp?.text);
      }

      return temp;
    });
  };

  useEffect(() => {
    if (blogdata.at(-1).type !== "image")
      setblogdata((pre) => {
        let temp = [...pre];
        if (activelem.type == "list") {
          let list = temp[activelem.blogitemindex];
          list.list[activelem.listitemindex] = textarea;
        } else {
          temp[activelem.blogitemindex].text = textarea;
        }
        return temp;
      });
  }, [textarea]);

  return (
    <div>
      <Showblog
        blogdata={blogdata}
        setblogdata={setblogdata}
        setactivelem={setactivelem}
        settextarea={settextarea}
        textarearef={textarearef}
      />
      <div className="sticky bottom-0 flex flex-col gap-[10px] p-[10px] bg-bg1">
        <div className="flex items-center gap-[5px]">
          <Addbutton
            label="+ Add Main Heading"
            clickelem={mainheading}
            Addblogcomps={Addblogcomps}
          />
          <Addbutton
            label="+ Add a Image"
            clickelem={image}
            Addblogcomps={Addblogcomps}
          />
          <Addbutton
            label="+ Add a Heading"
            clickelem={heading}
            Addblogcomps={Addblogcomps}
          />
          <Addbutton
            label="+ Add a Paragraph"
            clickelem={paragraph}
            Addblogcomps={Addblogcomps}
          />
          <Addbutton
            label="+ Add a List"
            clickelem={list}
            Addblogcomps={Addblogcomps}
          />
        </div>
        <textarea
          value={textarea}
          onInput={(e) => {
            settextarea(e.target.value);
          }}
          ref={textarearef}
          className="border border-slate-300 rounded-md min-h-[100px] p-[5px] mt-auto"
          placeholder="Write Here!"
        ></textarea>
      </div>
    </div>
  );
}

const Addbutton = ({ label, clickelem, Addblogcomps }) => (
  <button
    className="bg-theme text-white rounded-md py-[2px] px-[10px]"
    onClick={() => Addblogcomps(clickelem)}
  >
    {label}
  </button>
);

export default Addblog;

// "use client";
// import React, { useState } from "react";
// import { Addimage } from "./Serveraction";

// function Addblog() {
//   const [post, setPost] = useState({
//     image: null,
//     title: "",
//     desc: "",
//   });
//   const [previews, setPreviews] = useState();
//   const [uploadloading, setuploadloading] = useState(false);

//   return (
//     <div className="flex flex-col items-center gap-[10px] my-[50px]">
//       <div className="relative w-fit px-[30px] py-[5px] cursor-pointer bg-sky-500 text-white rounded-[5px]">
//         <input
//           className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-10"
//           type="file"
//           onInput={(e) => {
//             setPost({ ...post, image: e.target.files[0] });
//             const reader = new FileReader();
//             reader.onloadend = () => setPreviews(reader.result);
//             reader.readAsDataURL(e.target.files[0]);
//           }}
//         />
//         <div className="pointer-events-none cursor-pointer">+ Add image</div>
//       </div>
//       {previews && (
//         <img
//           className="w-full md:w-[200px] aspect-square object-cover border border-slate-300 rounded-[30px]"
//           src={previews}
//         />
//       )}
//       {/* fileds */}
//       <input
//         type="text"
//         value={post.title}
//         className="w-[90%] border border-slate-300 outline-none px-[10px] py-[5px] rounded-[5px]"
//         onInput={(e) => setPost({ ...post, title: e.target.value })}
//         placeholder="Title"
//       />
//       <textarea
//         type="text"
//         value={post.desc}
//         className="w-[90%] min-h-[200px] border border-slate-300 outline-none px-[10px] py-[5px] rounded-[5px]"
//         onInput={(e) => setPost({ ...post, desc: e.target.value })}
//         placeholder="Description"
//       />
//       <button
//         className="flex items-center justify-center gap-[10px] bg-green-600 text-white px-[10px] py-[5px] rounded-[5px]"
//         onClick={async () => {
//           if (
//             uploadloading ||
//             !post.image ||
//             post.title == "" ||
//             post.desc == ""
//           ) {
//             return;
//           }

//           setuploadloading(true);

//           const formData = new FormData();

//           formData.append("image", post.image);
//           formData.append("title", post.title);
//           formData.append("desc", post.desc);

//           const res = await Addimage(formData);

//           console.log(res);
//           if (res?.message) {
//             if (res.error) {
//               console.log(res?.error);
//             }
//             alert(res.message);
//             setuploadloading(false);
//             setPreviews("");
//             setPost({
//               image: null,
//               title: "",
//               desc: "",
//             });
//           }
//         }}
//       >
//         {uploadloading && (
//           <div className="uploadloader h-[20px] aspect-square rounded-full border-t-2 border-l-2 border-solid border-white"></div>
//         )}
//         Add post
//       </button>
//     </div>
//   );
// }

// export default Addblog;
