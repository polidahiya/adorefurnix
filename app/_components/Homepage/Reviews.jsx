"use client";
import React, { useRef, useState } from "react";
import { RatingStars } from "../Ratingstars";
import Nextimage from "@/app/_components/Nextimage";

function Reviews() {
  const reviewslist = [
    [
      {
        name: "Rajesh Kumar",
        rating: 5,
        image: null,
        review:
          "The solid wood dining table I ordered exceeded my expectations! The finish is flawless, and it fits perfectly in my dining room. The delivery was prompt, and the assembly was super easy. Highly recommended!",
        gender: "male",
      },
      {
        name: "Priya Sharma",
        rating: 4,
        image: null,
        review:
          "The sofa set I purchased is extremely comfortable and stylish. The cushions are firm yet cozy, and the fabric is of premium quality. However, the delivery was delayed by two days, so giving 4 stars.",
        gender: "female",
      },
      {
        name: "Ankit Verma",
        rating: 5,
        image: null,
        review:
          "Got a custom-made coffee table, and it's absolutely stunning! The craftsmanship is outstanding, and the design adds a modern touch to my living room. Customer support was very helpful throughout the process.",
        gender: "male",
      },
    ],
    [
      {
        name: "Deepa Iyer",
        rating: 4,
        image: null,
        review:
          "The bed frame is sturdy and looks luxurious. The wood polish is perfect, and the storage compartments are spacious. The only issue was with the assembly instructions—they were a bit confusing. Otherwise, great product!",
        gender: "female",
      },
      {
        name: "Vikram Singh",
        rating: 5,
        image: null,
        review:
          "I bought a recliner chair, and it’s hands down the most comfortable piece of furniture I own! Perfect for relaxing after a long day. The delivery team was courteous and professional. Highly satisfied.",
        gender: "male",
      },
      {
        name: "Kavya Reddy",
        rating: 5,
        image: null,
        review:
          "The bookshelf is exactly as shown on the website. It’s elegant, sturdy, and fits all my books perfectly. The dark walnut finish is beautiful. Thank you for such a great product!",
        gender: "female",
      },
    ],
    [
      {
        name: "Arjun Desai",
        rating: 4,
        image: null,
        review:
          "I bought a wardrobe for my bedroom, and the storage capacity is great. The material feels durable, but there was a small scratch on one side. Customer support resolved it quickly. Overall, I’m happy with the purchase.",
        gender: "male",
      },
      {
        name: "Meera Patel",
        rating: 5,
        image: null,
        review:
          "The nesting tables are a perfect addition to my home. They are compact, stylish, and very functional. The delivery was on time, and the packaging ensured no damage. Love it!",
        gender: "female",
      },
      {
        name: "Ravi Choudhary",
        rating: 4,
        image: null,
        review:
          "Ordered a TV unit, and it looks fantastic! The shelves are spacious, and the design is modern. However, it took a little longer to assemble than expected. Great product otherwise!",
        gender: "male",
      },
    ],
    [
      {
        name: "Sneha Joshi",
        rating: 5,
        image: null,
        review:
          "The bar cabinet I purchased is truly a statement piece! It’s beautifully crafted and has ample space for all my bottles and glassware. Totally worth the price!",
        gender: "female",
      },
      {
        name: "Akshay Nair",
        rating: 5,
        image: null,
        review:
          "Ordered a study table for my home office, and I’m very impressed. It’s ergonomic, spacious, and looks very professional. The build quality is excellent. Highly recommended for anyone working from home!",
        gender: "male",
      },
      {
        name: "Pooja Gupta",
        rating: 4,
        image: null,
        review:
          "The chairs I ordered for my dining table are comfortable and look elegant. The wood finish matches my decor perfectly. One chair had a slight wobble, but it was quickly replaced. Great customer service!",
        gender: "female",
      },
    ],
    [
      {
        name: "Rohan Das",
        rating: 5,
        image: null,
        review:
          "The center table is beautiful and well-made. The glass top is thick and sturdy, and the wooden legs are polished perfectly. The delivery was very fast. Thank you for such a great product!",
        gender: "male",
      },
      {
        name: "Nisha Menon",
        rating: 5,
        image: null,
        review:
          "I ordered a rocking chair for my mother, and she absolutely loves it! The design is simple yet elegant, and the comfort level is top-notch. It was delivered in perfect condition.",
        gender: "female",
      },
      {
        name: "Aman Trivedi",
        rating: 4,
        image: null,
        review:
          "The wall-mounted shelves I purchased are of great quality and easy to install. They look stylish and can hold a lot of weight. One shelf had a minor dent, but it’s not too noticeable.",
        gender: "male",
      },
    ],
    [
      {
        name: "Shreya Ghosh",
        rating: 5,
        image: null,
        review:
          "The accent chair I bought is absolutely gorgeous! It’s very comfortable and adds a pop of color to my living room. Got so many compliments from guests. Totally worth it!",
        gender: "female",
      },
    ],
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imagesScrollRef = useRef();
  const scrollindicatorwidth = 50;

  const handleImageScroll = (e) => {
    const index = Math.floor(
      (e.target.scrollLeft + e.target.clientWidth / 2) / e.target.clientWidth
    );
    setActiveImageIndex(index);
  };

  return (
    <div className="relative">
      <h2 className="text-center font-bold text-2xl md:text-4xl font-recline">
        What Our Customers Say
      </h2>
      <div
        className="w-full flex overflow-x-scroll snap-x snap-mandatory"
        onScroll={handleImageScroll}
        ref={imagesScrollRef}
      >
        {reviewslist.map((chunk, i) => (
          <div
            key={i}
            className="min-w-full grid grid-cols-1 md:grid-cols-3  items-stretch place-items-center gap-2 md:gap-14 lg:gap-20 py-10  md:mt-10 px-8 lg:px-16 snap-center snap-always"
          >
            {chunk.map((review, index) => (
              <Reviewcard key={index} review={review} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div
          className="h-2 bg-gray-100 rounded-full"
          style={{
            width: reviewslist.length * scrollindicatorwidth + "px",
          }}
        >
          <div
            className="bg-gray-400 rounded-full h-full duration-300"
            style={{
              transform: `translateX(${
                activeImageIndex * scrollindicatorwidth
              }px)`,
              width: scrollindicatorwidth + "px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

const Reviewcard = ({ review }) => {
  if (!review) return null; // Safeguard against undefined reviews

  const defaultimages = {
    male: "/images/maleclient.png",
    female: "/images/femaleclient.png",
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 min-w-full md:max-w-96">
      {/* Ribbon for Name */}
      <div className="bg-gray-100 text-lg font-semibold py-2 px-4 rounded-r-full rounded-tl-full absolute -top-4 -left-4 shadow-md">
        {review?.name}
        <span className="absolute top-full left-0 w-4 h-5 rounded-bl-full bg-gray-100 overflow-hidden">
          <span className="absolute top-0 left-0 h-full w-full rounded-tl-full bg-gray-400"></span>
        </span>
      </div>

      {/* Profile Image */}
      <div className="absolute -right-6 -top-6 w-20 aspect-square rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
        <Nextimage
          src={review?.image ? review?.image : defaultimages[review?.gender]}
          alt={review?.name}
          height={80}
          width={80}
          loading="lazy"
          className="w-full h-full object-cover bg-gray-400"
        ></Nextimage>
      </div>

      {/* Star Rating */}
      <div className="flex mt-8 mb-2 scale-150 md:scale-100 origin-top-left">
        <RatingStars rating={review?.rating} />
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm my-4">{review?.review}</p>
    </div>
  );
};
export default Reviews;
