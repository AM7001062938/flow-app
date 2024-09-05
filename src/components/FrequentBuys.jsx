import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, selectFrequentBuys } from '../features/frequentBuys/frequentBuysSlice';

const FrequentBuys = () => {
  const products = useSelector(selectFrequentBuys);
  const dispatch = useDispatch();
  const productContainerRef = useRef(null); // Ref to access the product container

  const [selectedVendor, setSelectedVendor] = useState('All Vendors');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const vendors = ['All Vendors', 'Zoom Supermarket', 'Other Vendor 1', 'Other Vendor 2'];
  const categories = ['All Categories', 'Chips', 'Drinks', 'Snacks'];

  const filteredProducts = products.filter(product1 => {
    const vendorMatch = selectedVendor === 'All Vendors' || product1.vendor === selectedVendor;
    const categoryMatch = selectedCategory === 'All Categories' || product1.category === selectedCategory;
    return vendorMatch && categoryMatch;
  });

  const handleScroll = () => {
    productContainerRef.current.scrollBy({
      left: 300, // Adjust the scroll distance based on your needs
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="bg-[#0C362A] p-6"
      style={{
        width: '82%',
        height: '50%',
        minHeight: '100%',
        top: '75%',
        left: '12%',
        position: 'absolute',
        opacity: 1,
        overflowY: 'auto',
      }}
    >
      <h2 className="text-white text-s mb-4">Frequent Buys</h2>

     {/* Filters Section */}
<div className="flex justify-end  space-x-2 mb-7 mt-0 ">
  {/* Vendor Filter */}
  <select
    className="bg-white p-1  rounded-full shadow-lg border border-gray-300 w-40 h-8 "
    value={selectedVendor}
    onChange={(e) => setSelectedVendor(e.target.value)}
  >
    {vendors.map(vendor => (
      <option key={vendor} value={vendor}>{vendor}</option>
    ))}
  </select>

  {/* Category Filter */}
  <select
    className="bg-white p-1 w-40 h-8 rounded-full shadow-lg border border-gray-300"
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
  >
    {categories.map(category => (
      <option key={category} value={category}>{category}</option>
    ))}
  </select>
</div>

      <div className="flex space-x-4 overflow-x-auto" ref={productContainerRef}>
        {filteredProducts.map(product1 => (
          <div key={product1.id} className="bg-white rounded-lg p-4  w-48 flex-shrink-0">
            <img src={product1.image} alt={product1.name} className="w-full h-32 object-cover mb-4" />
            <div className="text-gray-700 text-sm font-semibold">{product1.name}</div>
            <div className="text-green-700 text-xs">{product1.vendor}</div>
            <div className="text-gray-500 text-xs">{product1.weight}</div>
            <div className="flex items-center justify-between text-yellow-500 mt-2">
              <span className="text-sm">{product1.rating}</span>
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l5.9 3.1-1.5-6.4 4.8-4.2-6.5-.6L10 0 7.2 7.9l-6.5.6 4.8 4.2-1.5 6.4z" /></svg>
            </div>
            <div className="text-green-700 font-bold text-lg mt-2">{product1.price}</div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => dispatch(decrementQuantity(product1.id))}
                className="bg-gray-200 rounded-full p-1"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 12H6"></path></svg>
              </button>
              <span className="text-gray-700 text-sm">{product1.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity(product1.id))}
                className="bg-gray-200 rounded-full p-1"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6v12M18 12H6"></path></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center w-full">
  <button
    className="text-white bg-rgb(2, 48, 32) w-full px-6 py-2 rounded-lg"
    onClick={handleScroll}
  >
    See more →
  </button>
</div>

    </div>
  );
};

export default FrequentBuys;
