import React from "react";

function Icon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g>
        <g data-name="20x20/three-dots--grey" >
          <path fill="none" d="M0 0H24V24H0z"></path>
          <circle
            cx="1"
            cy="1"
            r="1"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            transform="translate(5 11)"
          ></circle>
          <circle
            cx="1"
            cy="1"
            r="1"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            data-name="Oval"
            transform="translate(11 11)"
          ></circle>
          <circle
            cx="1"
            cy="1"
            r="1"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            data-name="Oval"
            transform="translate(17 11)"
          ></circle>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(Icon);
