import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Left Sidebar */}
      <nav className="">
        <Sidebar />
      </nav>

      {/* Right Side */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="">
          <Header />
        </header>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-scroll w-full mx-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
