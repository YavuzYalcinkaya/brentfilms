import React from "react";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className="flex gap-6 h-16">
      {categories?.map((category, index) => (
        <Link
          key={index}
          href={`/${category.id}`}
          className="flex items-center justify-center bg-[rgba(0,0,0,.75)] border border-[#333] shadow-lg w-full h-full rounded-sm font-bold"
        >
          <h4>{category.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
