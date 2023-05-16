import React from "react";
import Skeleton from "@/components/skeleton";

const CategoriesLoading = () => {
  return (
    <div className="flex gap-6 h-[72px]">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
};

export default CategoriesLoading;
