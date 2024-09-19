import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

function AppLayout({ setIsCartOpen }) {
  return (
    <div className="flex h-screen overflow-hidden ">
      <nav>
        <Sidebar />
      </nav>

      <div className="flex-grow flex flex-col overflow-hidden">
        <header>
          <Header setIsCartOpen={setIsCartOpen} />
        </header>

        <div className="flex-grow overflow-y-scroll w-full mx-auto">
          <Outlet /> {/* This renders the child routes, including Categories */}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
