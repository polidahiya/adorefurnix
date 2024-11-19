import React from "react";
import { notFound } from "next/navigation";
import { cities } from "@/app/commondata";

const Citiesdescription = ({ city = "Delhi" }) => {
  if (!cities.includes(city)) notFound();

  return (
    <div className="text-sm text-justify px-5 md:px-10">
      <h2 className="text-2xl font-bold  mb-4  font-recline text-center">
        Select the Perfect Furniture for Your Home or Workspace
      </h2>
      <p className="my-1">
        Solid wood furniture exudes sophistication and adds warmth to any room,
        creating a <strong className="text-cyan-600">cozy</strong> and inviting
        atmosphere. To achieve this look, you need to carefully choose the right{" "}
        <strong className="text-cyan-600">patterns</strong>,{" "}
        <strong className="text-cyan-600">colors</strong>, and{" "}
        <strong className="text-cyan-600">styles</strong> that reflect your
        unique taste. With so many types of furniture available, finding the{" "}
        <strong className="text-cyan-600">perfect pieces</strong> can be
        overwhelming. That’s why it’s essential to look for a{" "}
        <strong className="text-cyan-600">trusted furniture store</strong> in{" "}
        <strong className="text-cyan-600">{city}</strong>—one that offers{" "}
        <strong className="text-cyan-600">high-quality</strong>,{" "}
        <strong className="text-cyan-600">stylish pieces</strong> for every room
        in your home. Whether you&apos;re designing a living room, bedroom, or
        office space, the right furniture can enhance your{" "}
        <strong className="text-cyan-600">comfort</strong> and{" "}
        <strong className="text-cyan-600">lifestyle</strong>.
      </p>
      <p className="my-1">
        At <strong className="text-cyan-600">Adorefurnix</strong>, we provide a
        wide variety of furniture options, tailored to meet your needs. Our
        store in <strong className="text-cyan-600">{city}</strong> offers
        everything you need to create the perfect atmosphere, whether
        you&apos;re furnishing a home or an office. You can even take advantage
        of convenient <strong className="text-cyan-600">EMI options</strong> to
        make your dream furniture more accessible. Wondering where to find the{" "}
        <strong className="text-cyan-600">best online furniture</strong> in{" "}
        <strong className="text-cyan-600">{city}</strong>? Look no further than{" "}
        <strong className="text-cyan-600">Adorefurnix</strong> for all your home
        and office decor needs.
      </p>

      <h3 className="font-semibold mt-3 text-base">Bedroom Furniture</h3>
      <p className="my-1">
        Your bedroom is your{" "}
        <strong className="text-cyan-600"> personal retreat</strong>, a space
        where you can relax and recharge. To make this room truly yours,
        you&apos;ll need essential furniture like{" "}
        <strong className="text-cyan-600">bed frames</strong>,{" "}
        <strong className="text-cyan-600">wardrobes</strong>,{" "}
        <strong className="text-cyan-600">nightstands</strong>, and chairs that
        combine <strong className="text-cyan-600">style</strong> with{" "}
        <strong className="text-cyan-600">functionality</strong>. Whether
        you&apos;re searching for a{" "}
        <strong className="text-cyan-600">luxurious bed</strong> or elegant
        storage solutions,{" "}
        <strong className="text-cyan-600">Adorefurnix</strong> offers a range of
        options in <strong className="text-cyan-600">{city}</strong> that fit
        any <strong className="text-cyan-600">style</strong> and{" "}
        <strong className="text-cyan-600">budget</strong>.
      </p>

      <h3 className="font-semibold mt-3 text-base">Office Furniture</h3>
      <p className="my-1">
        A <strong className="text-cyan-600">well-designed office</strong> not
        only looks great but also boosts{" "}
        <strong className="text-cyan-600">productivity</strong>. The right
        office furniture creates a positive, motivating work environment that
        helps your team stay focused and energetic. At{" "}
        <strong className="text-cyan-600">Adorefurnix</strong> in{" "}
        <strong className="text-cyan-600">{city}</strong>, you’ll find{" "}
        <strong className="text-cyan-600">ergonomic office chairs</strong>,
        desks, and other{" "}
        <strong className="text-cyan-600">office essentials</strong> designed to
        elevate your workspace. Transform your office into a productive and
        inspiring place with our carefully curated collections.
      </p>

      <h3 className="font-semibold mt-3 text-base">Sofa Sets</h3>
      <p className="my-1">
        Your living room is where you relax, entertain guests, and make lasting
        memories. Choosing the{" "}
        <strong className="text-cyan-600">right sofa</strong> is crucial for
        creating a welcoming and comfortable space.{" "}
        <strong className="text-cyan-600">Adorefurnix</strong> offers a wide
        selection of <strong className="text-cyan-600">stylish</strong> and{" "}
        <strong className="text-cyan-600">durable sofa sets</strong> in{" "}
        <strong className="text-cyan-600">{city}</strong> that match any
        interior design. Don’t settle for less—make sure your living room
        reflects your <strong className="text-cyan-600">personality</strong> and{" "}
        <strong className="text-cyan-600">lifestyle</strong>.
      </p>

      <h3 className="font-semibold mt-3 text-base">Living Room Furniture</h3>
      <p className="my-1">
        The living room is the{" "}
        <strong className="text-cyan-600">heart of your home</strong>, a place
        where <strong className="text-cyan-600">comfort</strong> meets{" "}
        <strong className="text-cyan-600">style</strong>. To ensure your living
        space is functional and beautiful,{" "}
        <strong className="text-cyan-600">Adorefurnix</strong> provides a
        variety of{" "}
        <strong className="text-cyan-600">high-quality furniture</strong> pieces
        like coffee tables, end tables, sofa beds, bookshelves, and cabinets.
        Our collection in <strong className="text-cyan-600">{city}</strong> will
        help you create an inviting atmosphere where friends and family can
        gather comfortably.
      </p>
    </div>
  );
};

export default Citiesdescription;
