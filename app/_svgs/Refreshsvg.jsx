import React from "react";

function Refreshsvg({styles}) {
  return (
    <svg className={styles} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12a9 9 0 0015 6.708L21 16m0-4A9 9 0 006 5.292L3 8m18 13v-5m0 0h-5M3 3v5m0 0h5"
      ></path>
    </svg>
  );
}

export default Refreshsvg;
