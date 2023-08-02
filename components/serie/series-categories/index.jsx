import React from "react";
import Link from "next/link";

const SeriesCategories = ({ categories }) => {
  return (
    <div className="text-white flex flex-col lg:flex-row items-center mt-5 gap-4">
      {categories?.map((category, index) => (
        <Link
          key={index}
          href={`/${category.id}`}
          className="bg-gray-900 h-16  flex items-center w-full justify-center  border border-solid border-white shadow-lg rounded-sm font-bold"
        >
          <h4 className="hover:opacity-50">{category.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default SeriesCategories;
