import React from "react";
export default function Rating({ rating }) {
  const numberrating = Number(rating);
  const fullStars = Math.floor(Number(numberrating));
  const halfStar = numberrating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-[5px]">
      <span className="font-semibold ">Rating</span> :
      <div className="flex items-center">
        <span className="flex ">
          {fullStars &&
            [...Array(fullStars)].map((_, i) => {
              return (
                <Starsvg
                  key={i}
                  styles="h-[20px] aspect-square"
                  color1="#FFC95E"
                  color2="#FFC95E"
                />
              );
            })}
        </span>
        <span className="flex ">
          {halfStar &&
            [...Array(halfStar)].map((_, i) => {
              return (
                <Starsvg
                  key={i}
                  styles="h-[20px] aspect-square"
                  color1="#d2d2d2"
                  color2="#FFC95E"
                />
              );
            })}
        </span>
        <span className="flex">
          {[...Array(emptyStars)].map((_, i) => {
            return (
              <Starsvg
                key={i}
                styles="h-[20px] aspect-square"
                color1="#d2d2d2"
                color2="#d2d2d2"
              />
            );
          })}
        </span>{" "}
      </div>
      <span className=" px-[10px] bg-green-600 text-white rounded-[5px] font-semibold ">
        {rating}
        {" / "}5
      </span>
    </div>
  );
}

function Starsvg({ styles, color1, color2 }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill={color1}
          d="M12 16.667L12 2 14.5 9.5 22 9.5 16 14 19 22z"
        ></path>
        <path fill={color2} d="M12 16.667L5 22 8 14 2 9.5 9.5 9.5 12 2z"></path>
      </g>
    </svg>
  );
}
