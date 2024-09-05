// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Categories from '../components/Categories';
import FrequentBuys from '../components/FrequentBuys';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header Component */}
        <Header />

        {/* Content (Categories and Frequent Buys) */}
        <div className="p-4 flex">
          <Categories className="w-1/2" />
          <FrequentBuys className="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
