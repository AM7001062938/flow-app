import React from "react";

function SuperMarketCard({ market, position }) {
  return (
    <div className="h-full text-center">
      <div className=" flex items-center justify-center">
        <div className=" w-[95px] h-[95px]  overflow-hidden rounded-full flex items-baseline justify-center ">
          <img
            src={market.icon}
            alt={market.name}
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-2 font-poppinsMedium text-[1rem] text-center">
        {market.name}
      </div>
      <div className="font-poppinsMedium text-[#00000073] text-[0.825rem] mt-2 text-center">
        {market.dur}
      </div>
    </div>
  );
}

export default SuperMarketCard;
