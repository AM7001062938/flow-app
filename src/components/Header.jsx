import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserIcon from '../assets/user-icon.png';
import CartIcon from '../assets/cart-icon.png';
import SearchIcon from '../assets/search-icon.png';
import SignIn from './SignIn';

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleUserIconClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className="absolute w-[92%] top-[2%] left-[7%] mb-4">
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-lg">
        {/* Left: Timer and Location */}
        <div>
          <p className="font-bold text-lg">8 minutes</p>
          <p className="font-medium text-base">
            <span className="font-bold">HOME</span> - Block D / Flat 901...
          </p>
        </div>

        {/* Center: Search Input */}
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder='Search "Chips"'
              className="rounded-full pl-10 pr-4 py-2 bg-gray-100 w-[300px] focus:outline-none"
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>
        </div>

        {/* Right: User Icon and Cart Button */}
        <div className="flex items-center space-x-2">
          <div onClick={handleUserIconClick} className="cursor-pointer">
            <img src={UserIcon} alt="User Icon" className="w-8 h-8" />
          </div>

          <button className="px-3 py-3 bg-green-700 text-white rounded-full flex items-center shadow-md hover:bg-green-600">
            <img src={CartIcon} alt="Cart Icon" className="w-6 h-6 mr-2" />
            My Cart
          </button>
        </div>

        {/* SignIn Modal */}
        {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      </div>
    </div>
  );
};

export default Header;
