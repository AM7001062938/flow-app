import React from "react";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import images from "../../images";
import FrequentBuysProductCard from "../../components/FrequentBuysProductCard/FrequentBuysProductCard";

function TrendingProducts() {
  const trending = Array.from({ length: 20 }, (_, index) => index);
  return (
    <div className="bg-[#F5F2F7] px-10 py-10 h-full">
      {/* Title and filters */}
      <div className="flex justify-between items-center">
        <div className="font-poppinsSemiBold text-[1rem]">
          Frequently Brought
        </div>
        <div className="flex gap-4 ">
          <div className="bg-[#B3C1C521] px-4 flex gap-2 items-center rounded-xl border border-[#00000030] font-poppinsMedium text-[0.88rem]">
            <span>
              <img src={images.filter} alt="filter" className="w-[20px]" />
            </span>
            <span>Filter</span>
          </div>
          <div>
            <CustomSelect
              bg={"#B3C1C521"}
              radius={"10px"}
              placeholder={"Category"}
            />
          </div>
          <div>
            <CustomSelect
              bg={"#B3C1C521"}
              radius={"10px"}
              placeholder={"Vendors"}
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="mt-7 w-[95%] mx-auto max-h-[70vh] overflow-y-scroll">
        <div className="flex flex-wrap gap-8 justify-start">
          {trending.map((product, idx) => (
            <div className="basis-[14rem]">
              <FrequentBuysProductCard showOffer={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
