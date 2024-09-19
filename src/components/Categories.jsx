// src/components/Categories.js

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCategories } from '../features/categories/categoriesSlice'; 
import CategoryCard from './CategoryCard/CategoryCard'; // Adjust path if necessary

const Categories = () => {
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate('/all-products'); // Updated route to show all products
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/products/${categoryId}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div className="font-poppinsSemiBold text-[1.1rem]">Categories</div>
        <button
          className="text-[#217229] font-poppinsSemiBold text-[1.1rem]"
          onClick={handleSeeAllClick}
        >
          See All
        </button>
      </div>
      <div className="flex flex-wrap gap-5 mt-5">
        {categories.map((category, index) => (
          <div className="w-[12%] xl:w-[11%] shrink-0" key={category.id}>
            <CategoryCard
              category={category}
              position={index} // Pass the index for background color
              onClick={() => handleCategoryClick(category.id)} // Pass the click handler
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
