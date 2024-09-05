import React from 'react';
import { useDispatch } from 'react-redux';
import TrendingTopicIcon from '../assets/trending-topic-icon.png';
import ElementIcon from '../assets/element-icon.png';
import UserIcon from '../assets/user-icon.png';
import SettingsIcon from '../assets/settings-icon.png';
import ShieldLockIcon from '../assets/shield-lock-icon.png';
import HelpCircleIcon from '../assets/help-circle-icon.png';
import ExitIcon from '../assets/exit-icon.png';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleIconClick = (iconName) => {
    dispatch({ type: 'SET_ACTIVE_ICON', payload: iconName });
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-[70px] bg-gray-800 flex flex-col justify-between items-center">
      {/* Top Icon */}
      <div className="flex flex-col items-center mt-9">
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          onClick={() => handleIconClick('trending-topic')}
          style={{ width: '35px', height: '35px' }}
        >
          <img src={TrendingTopicIcon} alt="Trending Topic" className="w-full h-full" />
        </div>
      </div>

      {/* Middle Icons */}
      <div className="flex flex-col mb-20 space-y-6">
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: '20px', height: '20px'  }}
          onClick={() => handleIconClick('element')}
        >
          <img src={ElementIcon} alt="Element" className="w-full h-full" />
        </div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: '20px', height: '20px', filter: 'invert(1)' }}
          onClick={() => handleIconClick('user')}
        >
          <img src={UserIcon} alt="User" className="w-full h-full" />
        </div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: '20px', height: '20px' }}
          onClick={() => handleIconClick('settings')}
        >
          <img src={SettingsIcon} alt="Settings" className="w-full h-full" />
        </div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: '20px', height: '20px' }}
          onClick={() => handleIconClick('shield-lock')}
        >
          <img src={ShieldLockIcon} alt="Shield Lock" className="w-full h-full" />
        </div>
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          style={{ width: '20px', height: '20px' }}
          onClick={() => handleIconClick('help-circle')}
        >
          <img src={HelpCircleIcon} alt="Help Circle" className="w-full h-full" />
        </div>
      </div>

      {/* Bottom Icon */}
      <div className="flex flex-col items-center mb-9">
        <div
          className="cursor-pointer hover:opacity-100 hover:scale-105 active:scale-95 transition duration-200"
          onClick={() => handleIconClick('exit')}
          style={{ width: '30px', height: '30px' }}
        >
          <img src={ExitIcon} alt="Exit" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
