import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../features/categories/categoriesSlice";
import CategoryCard from "./CategoryCard/CategoryCard";

const Categories = () => {
  const categories = useSelector(selectCategories);
  return (
    <>
      <div>
        <div className="flex justify-between items-center w-full">
          <div className="font-poppinsSemiBold text-[1.1rem]">Categories</div>
          <button className="text-[#217229] font-poppinsSemiBold text-[1.1rem]">
            See All
          </button>
        </div>
        <div className="flex flex-wrap gap-5 mt-5">
          {categories.map((category, idx) => (
            <div className="w-[12%] xl:w-[11%] shrink-0">
              <CategoryCard position={idx} category={category} key={idx} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
