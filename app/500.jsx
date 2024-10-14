"use client";
import React from "react";
import Link from "next/link";

function Page() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="m-0 h-screen overflow-hidden flex items-center justify-center">
      <section>
        <h1 className="text-[30px] font-extrabold text-center">500</h1>
        <h3 className="font-bold text-center">Something went wrong!</h3>
        <p className="text-center">
          The page you are looking for is not available!
        </p>

        {/* Go to Home Link */}
        <Link
          href="/"
          className="block bg-green-500 text-white px-[50px] py-[10px] w-fit m-auto mt-[30px] hover:text-green-500 outline outline-[1px] hover:outline-green-500 hover:bg-white"
        >
          Go to Home
        </Link>

        {/* Refresh Page Button */}
        <button
          onClick={refreshPage} // Refresh the page on click
          className="block bg-green-500 text-white px-[50px] py-[10px] w-fit m-auto mt-[30px] hover:text-green-500 outline outline-[1px] hover:outline-green-500 hover:bg-white"
        >
          Refresh
        </button>
      </section>
    </div>
  );
}

export default Page;
