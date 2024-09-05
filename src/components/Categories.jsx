import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';

const Categories = () => {
  const categories = useSelector(selectCategories);
  <h2 className="text-black text-s mb-4">Categories</h2>

  return (
    
    <div className="flex flex-wrap justify-center gap-4"
      style={{ width: '90%', height: '50%', top: '27%', left: '8%', right: '4%', position: 'absolute', opacity: 1, marginBottom: '4rem' }}>
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col items-center justify-center" style={{ width: '25%', maxWidth: '123.77px', maxHeight: '116.37px' }}>
          <img src={category.icon} alt={category.name} className="w-full h-auto object-contain" />
          <span className="mt-2 text-sm font-semibold text-center">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Categories;

