import React from "react";
import { notFound } from "next/navigation";
import { cities } from "@/app/commondata";


const Citiesdescription = ({ city = "Delhi" }) => {
  if (!cities.includes(city)) notFound();

  return (
    <div className="text-sm text-justify px-2 md:px-10">
      <h2 className="text-2xl font-bold  mb-4">
        Select the Perfect Furniture for Your Home or Workspace
      </h2>
      <p className="my-1">
        Solid wood furniture exudes sophistication and adds warmth to any room,
        creating a cozy and inviting atmosphere. To achieve this look, you need
        to carefully choose the right patterns, colors, and styles that reflect
        your unique taste. With so many types of furniture available, finding
        the perfect pieces can be overwhelming. That’s why it’s essential to
        look for a trusted furniture store in <strong>{city}</strong>—one that
        offers high-quality, stylish pieces for every room in your home. Whether
        you&apos;re designing a living room, bedroom, or office space, the right
        furniture can enhance your comfort and lifestyle.
      </p>
      <p className="my-1">
        At Adorefurnix, we provide a wide variety of furniture options, tailored
        to meet your needs. Our store in <strong>{city}</strong> offers
        everything you need to create the perfect atmosphere, whether you&apos;re
        furnishing a home or an office. You can even take advantage of
        convenient EMI options to make your dream furniture more accessible.
        Wondering where to find the best online furniture in{" "}
        <strong>{city}</strong>? Look no further than Adorefurnix for all your
        home and office decor needs.
      </p>

      <h3 className="font-semibold mt-3 text-base">Bedroom Furniture</h3>
      <p className="my-1">
        Your bedroom is your personal retreat, a space where you can relax and
        recharge. To make this room truly yours, you&apos;ll need essential furniture
        like bed frames, wardrobes, nightstands, and chairs that combine style
        with functionality. Whether you&apos;re searching for a luxurious bed or
        elegant storage solutions, Adorefurnix offers a range of options in{" "}
        <strong>{city}</strong> that fit any style and budget.
      </p>

      <h3 className="font-semibold mt-3 text-base">Office Furniture</h3>
      <p className="my-1">
        A well-designed office not only looks great but also boosts
        productivity. The right office furniture creates a positive, motivating
        work environment that helps your team stay focused and energetic. At
        Adorefurnix in <strong>{city}</strong>, you’ll find ergonomic office
        chairs, desks, and other office essentials designed to elevate your
        workspace. Transform your office into a productive and inspiring place
        with our carefully curated collections.
      </p>

      <h3 className="font-semibold mt-3 text-base">Sofa Sets</h3>
      <p className="my-1">
        Your living room is where you relax, entertain guests, and make lasting
        memories. Choosing the right sofa is crucial for creating a welcoming
        and comfortable space. Adorefurnix offers a wide selection of stylish
        and durable sofa sets in <strong>{city}</strong> that match any interior
        design. Don’t settle for less—make sure your living room reflects your
        personality and lifestyle.
      </p>

      <h3 className="font-semibold mt-3 text-base">Living Room Furniture</h3>
      <p className="my-1">
        The living room is the heart of your home, a place where comfort meets
        style. To ensure your living space is functional and beautiful,
        Adorefurnix provides a variety of high-quality furniture pieces like
        coffee tables, end tables, sofa beds, bookshelves, and cabinets. Our
        collection in <strong>{city}</strong> will help you create an inviting
        atmosphere where friends and family can gather comfortably.
      </p>
    </div>
  );
};

export default Citiesdescription;
