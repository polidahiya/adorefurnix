"use client";
import React, { useState } from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";
import { AppContextfn } from "@/app/Context";
import { FaCaretDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Navcategories({ category }) {
  const router = useRouter();
  const { showcat, setshowcat } = AppContextfn();
  const [showsubcat, setshowsubcat] = useState(null);

  return (
    <div
      className={`fixed bottom-0 left-0 lg:static w-full flex flex-col lg:flex-row  lg:items-center justify-between lg:h-[30px] lg:mt-[20px] p-[10px] lg:p-0 bg-white lg:bg-transparent max-h-dvh overflow-y-scroll lg:overflow-y-visible  duration-300 ${
        showcat ? "translate-y-0 z-40" : "translate-y-full lg:translate-y-0"
      }`}
    >
      {Object.keys(categorylist).map((item, i) => {
        return (
          <div key={i} className="group relative">
            <Link
              key={i}
              href={"/" + item}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  setshowcat(false);
                  e.preventDefault();
                  router.replace("/" + item);
                }
              }}
              className={`lg:h-[30px] w-full flex  items-center justify-start lg:justify-center  text-[14px] lg:text-white py-[10px] px-5 lg:px-[10px] lg:py-[5px] rounded-[10px] lg:rounded-full lg:group-hover:hover:bg-slate-700  ${
                category == item && "lg:bg-theme lg:text-white"
              }`}
            >
              {item}
            </Link>
            {/* subcategories */}
            {categorylist[item].subcat.length > 0 && (
              <>
                <button
                  className="absolute top-0 right-0 h-[40px] aspect-square bg-bg1 rounded-[10px] lg:hidden border-[5px] border-white"
                  onClick={() => {
                    setshowsubcat((pre) => (pre == i ? null : i));
                  }}
                >
                  {showsubcat == i ? "-" : "+"}
                </button>

                {/* down arrow */}
                <FaCaretDown
                  className={`absolute top-[calc(100%-5px)] text-white  hidden lg:group-hover:block left-1/2 -translate-x-1/2`}
                />

                {/* subcategories */}
                <div
                  className={`lg:absolute top-0  lg:group-hover:block -z-10 ${
                    i == 0 && "lg:left-0"
                  } ${
                    i == Object.keys(categorylist)?.length - 1 && "lg:right-0"
                  } ${
                    i != 0 &&
                    i != Object.keys(categorylist)?.length - 1 &&
                    "lg:left-1/2 lg:-translate-x-1/2"
                  }
                  ${showsubcat == i ? "block lg:hidden" : "hidden"}`}
                >
                  <div className="p-2 lg:rounded-lg bg-bg1 lg:bg-graygradient lg:text-white flex flex-col lg:shadow-lg lg:mt-12">
                    {categorylist[item].subcat.map((subcat, j) => {
                      return (
                        <Link
                          key={j}
                          href={`/${item}/${subcat.name}`}
                          onClick={(e) => {
                            if (window.innerWidth < 1024) {
                              setshowcat(false);
                              e.preventDefault();
                              router.replace(`/${item}/${subcat.name}`);
                            }
                          }}
                          className="p-2 lg:hover:bg-slate-700 lg:w-52 pl-10 lg:pl-0 lg:text-center text-[14px]"
                        >
                          {subcat?.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Navcategories;

// "use client";
// import React from "react";
// import { categorylist } from "@/app/commondata";
// import Link from "next/link";
// import Image from "next/image";
// import { AppContextfn } from "@/app/Context";
// import { FaCaretDown } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// function Navcategories({ category }) {
//   const router = useRouter();
//   const { showcat, setshowcat } = AppContextfn();

//   return (
//     <div
//       className={`fixed bottom-0 left-0 lg:static w-full bg-white lg:bg-transparent grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] lg:flex lg:items-center lg:justify-between lg:h-[30px] lg:mt-[20px] p-[10px] lg:p-0  duration-300 ${
//         showcat ? "translate-y-0 z-40" : "translate-y-full lg:translate-y-0"
//       }`}
//     >
//       {Object.keys(categorylist).map((item, i) => {
//         return (
//           <div
//             key={i}
//             onClick={() => {
//               setshowcat(false);
//             }}
//             className="group relative"
//           >
//             <Link
//               key={i}
//               href={"/" + item}
//               onClick={(e) => {
//                 if (window.innerWidth < 1024) {
//                   e.preventDefault();
//                   router.replace("/" + item);
//                 }
//               }}
//               className={`lg:h-[30px] w-full flex flex-col items-center justify-start lg:justify-center  text-[14px] lg:text-white p-[5px]  lg:px-[10px] lg:py-[5px] rounded-[10px] lg:rounded-full lg:group-hover:hover:bg-slate-700 text-center ${
//                 category == item && "bg-theme text-white"
//               }`}
//             >
//               <Image
//                 src={categorylist?.[item]?.image}
//                 className="w-full aspect-[4/3] object-cover rounded-[5px] lg:hidden"
//                 alt={item}
//                 height={100}
//                 width={100}
//                 loading="lazy"
//               ></Image>
//               <span className="text-[12px] md:text-[14px] mt-1 lg:mt-0 whitespace-nowrap">
//                 {item}
//               </span>
//             </Link>
//             {/* subcategories */}
//             {categorylist[item].subcat.length > 0 && (
//               <>
//                 {/* down arrow */}
//                 <FaCaretDown
//                   className={`absolute top-[calc(100%-5px)] text-white  hidden lg:group-hover:block left-1/2 -translate-x-1/2`}
//                 />

//                 {/* subcategories */}
//                 <div
//                   className={`absolute top-0 hidden lg:group-hover:block -z-10 ${
//                     i == 0 && "left-0"
//                   } ${
//                     i == Object.keys(categorylist)?.length - 1 && "right-0"
//                   } ${
//                     i != 0 &&
//                     i != Object.keys(categorylist)?.length - 1 &&
//                     "left-1/2 -translate-x-1/2"
//                   }`}
//                 >
//                   <div className="p-2 rounded-lg bg-graygradient text-white flex flex-col shadow-lg mt-12">
//                     {categorylist[item].subcat.map((subcat, j) => {
//                       return (
//                         <Link
//                           key={j}
//                           href={`/${item}/${subcat.name}`}
//                           className="p-2 hover:bg-slate-700 w-52 text-center text-[14px]"
//                         >
//                           {subcat?.name}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Navcategories;
