import React from "react";
import SuperMarketCard from "../SuperMarketCard/SuperMarketCard";
import images from "../../images";

const supermarkets = [
  { icon: images.agile, name: "Agile Store", dur: "12 mins" },
  { icon: images.thegreen, name: "7/11 Store", dur: "12 mins" },
  { icon: images.nexis, name: "Nexis Food", dur: "12 mins" },
  { icon: images.agile, name: "Agile Store", dur: "12 mins" },
  { icon: images.thegreen, name: "7/11 Store", dur: "12 mins" },
  { icon: images.nexis, name: "Nexis Food", dur: "12 mins" },
  { icon: images.agile, name: "Agile Store", dur: "12 mins" },
  { icon: images.thegreen, name: "7/11 Store", dur: "12 mins" },
  { icon: images.nexis, name: "Nexis Food", dur: "12 mins" },
  { icon: images.agile, name: "Agile Store", dur: "12 mins" },
  { icon: images.thegreen, name: "7/11 Store", dur: "12 mins" },
  { icon: images.nexis, name: "Nexis Food", dur: "12 mins" },
  { icon: images.agile, name: "Agile Store", dur: "12 mins" },
  { icon: images.thegreen, name: "7/11 Store", dur: "12 mins" },
  { icon: images.nexis, name: "Nexis Food", dur: "12 mins" },
  { icon: images.agile, name: "Agile Store", dur: "12 mins" },
  { icon: images.thegreen, name: "7/11 Store", dur: "12 mins" },
  { icon: images.nexis, name: "Nexis Food", dur: "12 mins" },
  { icon: images.agile, name: "Agile Store", dur: "12 mins" },
  { icon: images.thegreen, name: "7/11 Store", dur: "12 mins" },
];

function SuperMarkets() {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div className="font-poppinsSemiBold text-[1.1rem]">
          Supermarkets Near You
        </div>
        <button className="text-[#217229] font-poppinsSemiBold text-[1.1rem]">
          See All
        </button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center xl:gap-3 xl:justify-start mt-5 ">
        {supermarkets.map((market, idx) => (
          <div className=" w-[12%] xl:w-[9%] ">
            <SuperMarketCard market={market} position={idx} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuperMarkets;
