import React from 'react';

const FilterComponent = ({ onFilterChange }) => {
  const handlePriceChange = (e) => {
    onFilterChange(prevFilters => ({
      ...prevFilters,
      priceRange: e.target.value
    }));
  };

  const handleVendorChange = (e) => {
    onFilterChange(prevFilters => ({
      ...prevFilters,
      vendor: e.target.value
    }));
  };

  const handlePopularityChange = (e) => {
    onFilterChange(prevFilters => ({
      ...prevFilters,
      popularity: e.target.value
    }));
  };

  return (
    <div className="flex space-x-4 mb-4">
      <select onChange={handlePriceChange} className="p-2 border rounded">
        <option value="">Select Price Range</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
      <input
        type="text"
        placeholder="Vendor"
        onChange={handleVendorChange}
        className="p-2 border rounded"
      />
      <select onChange={handlePopularityChange} className="p-2 border rounded">
        <option value="">Select Popularity</option>
        <option value="high">High to Low</option>
        <option value="low">Low to High</option>
      </select>
    </div>
  );
};

export default FilterComponent;
