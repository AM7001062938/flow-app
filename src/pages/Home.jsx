// src/pages/Home.jsx
import React from "react";

import Categories from "../components/Categories";
import FrequentBuys from "../components/FrequentBuys";
import SuperMarkets from "../components/SuperMarkets/SuperMarkets";

import Offers from "../components/Offers/Offers";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="pb-8 w-[90%] mx-auto">
        <div className="mt-8">
          <Categories />
        </div>
        <div className="mt-8 bg-[#0C362A] pt-12">
          <FrequentBuys />
          <div className="bg-[#071F18] text-white font-inter font-semibold text-[1rem] mt-5 p-3 text-center">
            See More
          </div>
        </div>
        <div className="mt-5 p-2">
          <SuperMarkets />
        </div>
        {/* Offers */}
        <div className="mt-10 overflow-x-scroll">
          <Offers />
        </div>
      </div>
      <div className="bg-[#F5F2F7] mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Home;
