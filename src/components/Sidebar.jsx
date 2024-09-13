import React from "react";
import { useDispatch } from "react-redux";

import HelpCircleIcon from "../assets/help-circle-icon.png";
import ExitIcon from "../assets/exit-icon.png";
import images from "../images";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleIconClick = (iconName) => {
    dispatch({ type: "SET_ACTIVE_ICON", payload: iconName });
  };

  return (
    <div className="h-screen px-2 bg-gray-800 flex flex-col items-center">
      {/* Top Icon */}
      <div className="flex flex-col items-center mt-9">
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          onClick={() => handleIconClick("trending-topic")}
          style={{ width: "35px", height: "35px" }}
        >
          <img src={images.fire} alt="Trending Topic" className="w-[30px]" />
        </div>
      </div>

      {/* Middle Icons */}
      <div className="flex flex-col gap-10 mt-20">
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: "20px", height: "20px" }}
          onClick={() => handleIconClick("element")}
        >
          <img src={images.home} alt="Element" className="w-[30px]" />
        </div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: "20px", height: "20px" }}
          onClick={() => handleIconClick("user")}
        >
          <img src={images.user} alt="User" className="w-[30px]" />
        </div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: "20px", height: "20px" }}
          onClick={() => handleIconClick("settings")}
        >
          <img src={images.history} alt="Settings" className="w-[30px]" />
        </div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: "20px", height: "20px" }}
          onClick={() => handleIconClick("shield-lock")}
        >
          <img src={images.shop} alt="Shield Lock" className="w-full h-full" />
        </div>
        <div className="border border-[#FFFFFF4F]"></div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: "20px", height: "20px" }}
          onClick={() => handleIconClick("help-circle")}
        >
          <img src={images.help} alt="Help Circle" className="w-full h-full" />
        </div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: "20px", height: "20px" }}
          onClick={() => handleIconClick("help-circle")}
        >
          <img
            src={images.security}
            alt="Help Circle"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Bottom Icon */}
      <div className="flex flex-col items-center mb-9 mt-auto">
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          onClick={() => handleIconClick("exit")}
          style={{ width: "30px", height: "30px" }}
        >
          <img src={images.logout} alt="Exit" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
