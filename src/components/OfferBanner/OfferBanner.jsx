import React from "react";
import images from "../../images";

function OfferBanner({ position }) {
  const bgColors = ["#B8BE8E", "#ECC752", "#E9D9FF"];
  const innerBannerColors = ["#636C33", "#6A5B34", "#8A76A5"];

  const getBg = () => {
    return bgColors[position % bgColors.length];
  };

  const innerBg = () => {
    return innerBannerColors[position % innerBannerColors.length];
  };
  return (
    <div
      style={{
        backgroundColor: getBg(),
      }}
      className=" rounded-xl w-full tracking-wide mx-3 overflow-hidden relative"
    >
      {/* Upper */}
      <div className="flex justify-between items-start">
        <div
          style={{
            backgroundColor: innerBg(),
          }}
          className=" px-6 py-2 -skew-x-[30deg] relative -left-2"
        >
          <div className="text-white font-poppinsSemiBold text-[0.8rem] skew-x-[30deg] ms-1">
            20% OFF
          </div>
        </div>
        <div>
          <div className="mt-3 me-4">
            <img src={images.cans} className="w-[100px]" alt="product" />
          </div>
        </div>
      </div>
      {/* Lower */}
      <div className="flex justify-between mt-2">
        <div>
          <img src={images.meals} className="w-[60px]" />
        </div>
        <div className="self-center relative top-4">
          <button
            style={{
              backgroundColor: innerBg(),
            }}
            className="font-poppinsMedium text-[0.825rem] text-white py-3 flex items-center gap-2 px-5 rounded-l-lg"
          >
            <div>View Products</div>
            <img
              src={images.rightArrow}
              alt="view products"
              className="w-[20px]"
            />
          </button>
        </div>
      </div>
      {/* Text */}
      <div className="absolute left-[65px] top-[30%] w-[60%] ">
        <div className="font-poppinsSemiBold text-[#0D0D0DB2] text-[0.825rem]">
          Sleepy owl
        </div>
        <div className="font-poppinsSemiBold text-[#0D0D0D75] text-[0.78rem] mt-[2px] underline underline-[#0D0D0DB2] underline-offset-[8px]">
          PREMIUM INSTANT COFFEE
        </div>
        <div className="mt-[8px] font-poppinsMedium text-[#0D0D0DB2] text-[0.7rem]">
          Premium cup of coffee ready in seconds.
        </div>
      </div>
    </div>
  );
}

export default OfferBanner;
