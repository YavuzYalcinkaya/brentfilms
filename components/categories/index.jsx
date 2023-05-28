import React from "react";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4">
      {categories?.map((category, index) => (
        <Link
          key={index}
          href={`/${category.id}`}
          className=" h-16  flex items-center w-[80%] justify-center bg-[rgba(0,0,0,.75)] border border-[#333] shadow-lg rounded-sm font-bold"
        >
          <h4 className="hover:opacity-50">{category.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
