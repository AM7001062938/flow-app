import React from "react";
import images from "../../images";

function VendorCard() {
  return (
    <div className="w-[170px] h-[300px] bg-[#F6F6F6] border rounded-t-full border-[#2B34401C] flex flex-col items-center tracking-wide">
      <div className="relative top-[5%] w-[70%]">
        <img src={images.openshop} alt="shop-open" className="w-[100%]" />
      </div>
      <div className="font-poppinsMedium text-[1rem] mt-8">Zoom Market</div>
      <div className="font-poppinsMedium text-[0.88rem] text-[#00000070] mt-1 cutoff-text-one max-w-[150px]">
        BUSINESS BAY
      </div>
      <div className="flex items-center gap-1 border border-[#00000038] rounded-full px-4 py-1 mt-2">
        <span>
          <img src={images.star} alt="rating" className="w-[15px]" />
        </span>
        <span className="font-poppinsMedium text-[0.88rem]">4.9</span>
      </div>
      <div className="bg-[#0C362A] text-white mt-auto w-full text-center p-2 font-poppinsSemiBold text-[0.88rem]">
        SUPERMARKET
      </div>
    </div>
  );
}

export default VendorCard;
