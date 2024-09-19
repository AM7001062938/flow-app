import React from 'react';

const CustomSelect = ({ bg, radius, placeholder }) => {
  return (
    <select
      className="p-2 border rounded"
      style={{ backgroundColor: bg, borderRadius: radius }}
    >
      <option value="">{placeholder}</option>
      {/* Add options here */}
    </select>
  );
};

export default CustomSelect;
