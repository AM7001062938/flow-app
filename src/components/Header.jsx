import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import images from "../images";

import Search from "./Search/Search";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleUserIconClick = () => {
    setShowSignIn(true);
  };

  return (
    <div style={{ boxShadow: "0px 4px 14.4px 0px" }} className="w-full mb-1">
      <div className="flex items-center justify-between bg-white p-4 ">
        {/* Left: Timer and Location */}
        <div>
          <p className="font-bold font-inter text-[1.5rem]">8 minutes</p>
          <p className="font-medium text-[1.1rem] font-inter mt-1 w-[300px] cutoff-text-one">
            <span className="font-bold ">HOME</span> - Block D / Flat 90 fdjijf
            jf djfids ifjdijfid
          </p>
        </div>

        {/* Center: Search Input */}
        <div className="w-[50%]">
          <Search placeholder={`Search "Chips"`} />
        </div>

        {/* Right: User Icon and Cart Button */}
        <div className="flex items-center gap-4">
          <div onClick={handleUserIconClick} className="cursor-pointer">
            <img
              src={images.usericon}
              alt="User Icon"
              className="w-[30px] h-8"
            />
          </div>

          <button className="font-inter font-semibold px-5 text-[1rem] py-3 bg-[#217229] text-white rounded-full flex items-center gap-2 shadow-md hover:bg-green-600">
            <img src={images.carticon} alt="Cart Icon" className="w-[25px]" />
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
