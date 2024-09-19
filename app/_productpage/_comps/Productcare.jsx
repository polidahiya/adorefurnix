import React from "react";
import { FaLeaf } from "react-icons/fa";

const ProductCare = () => {
  return (
    <div className="px-[10px] md:px-[40px] py-[20px] p-6 bg-slate-100 rounded-lg shadow-md mt-[50px]">
      <h2 className="flex items-center gap-[10px] text-2xl font-bold mb-4">
        <FaLeaf />
        Product Care Instructions
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-gray-700">
          <strong>Dust Regularly:</strong> Use a soft, dry cloth to remove dust
          from surfaces.
        </li>
        <li className="text-gray-700">
          <strong>Clean Spills Immediately:</strong> Wipe up any spills with a
          damp cloth to prevent stains.
        </li>
        <li className="text-gray-700">
          <strong>Avoid Direct Sunlight:</strong> Keep furniture out of direct
          sunlight to prevent fading.
        </li>
        <li className="text-gray-700">
          <strong>Use Coasters:</strong> Always use coasters under drinks to
          protect the surface.
        </li>
        <li className="text-gray-700">
          <strong>Apply Wood Polish:</strong> For wooden furniture, apply a
          quality wood polish every 3-6 months.
        </li>
      </ul>
      <div className="mt-6">
        <p className="text-gray-600">
          Following these care instructions will help maintain the beauty and
          longevity of your furniture.
        </p>
      </div>
    </div>
  );
};

export default ProductCare;
