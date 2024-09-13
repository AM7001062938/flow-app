import React from "react";
import images from "../../images";

function FrequentBuysProductCard() {
  return (
    <div className="bg-white rounded-xl pt-1 ">
      <div className="px-1">
        <div className="flex items-center justify-center rounded-xl bg-[#EBEEF2] p-2 border">
          <img src={images.sampleLays} className="w-[100px]" />
        </div>
        <div className="font-poppinsMedium text-[0.825rem] cutoff-text mx-3 mt-2">
          Oman Chili Potato Chips Spicy Indian Flavour fidji
          fjdsijfidsjfisdifsdii
        </div>
        <div className=" font-poppinsMedium text-[0.825rem] underline underline-[#217229] underline-offset-4 text-[#217229] mx-3 mt-2 cutoff-text-one">
          Zoom Supermarket
        </div>
        <div className="flex items-center gap-5 mx-3 mt-2">
          <div className="font-poppinsMedium text-[#00000094] text-[0.825rem]">
            48g
          </div>
          <div className="flex items-center gap-1">
            <div>
              <img src={images.star} className="w-[13px]" />
            </div>
            <div className="font-poppinsMedium text-[0.825rem]">4.9</div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between p-3 px-3 bg-[#071F18] rounded-b-xl text-white">
        <div className="font-poppinsSemiBold text-[0.825rem] ">20 AED</div>
        <div className="flex items-center gap-3">
          <button className="text-[1rem]"> - </button>
          <div> 0 </div>
          <button className="text-[1rem]"> + </button>
        </div>
      </div>
    </div>
  );
}

export default FrequentBuysProductCard;
