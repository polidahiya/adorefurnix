import React from "react";

function Icon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g>
        <path fill="#fff" d="M0 0H24V24H0z"></path>
        <path
          stroke="#000"
          strokeLinejoin="round"
          d="M5 19.67V4a1 1 0 011-1h12a1 1 0 011 1v15.67a.5.5 0 01-.876.328L12 13l-6.124 6.998A.5.5 0 015 19.67z"
        ></path>
      </g>
    </svg>
  );
}

export default React.memo(Icon);
