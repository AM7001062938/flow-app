import React from "react";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import images from "../../images";
import VendorCard from "../../components/VendorCard/VendorCard";

function NearbyVendors() {
  const vendors = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className={`h-full pt-10 w-[90%] mx-auto `}>
      {/* Title and filters */}
      <div className="flex justify-between items-center">
        <div className="font-poppinsSemiBold text-[1rem]">Vendors Near Me</div>
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
              placeholder={"Sort By"}
            />
          </div>
          <div>
            <CustomSelect
              bg={"#B3C1C521"}
              radius={"10px"}
              placeholder={"Verticals"}
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="mt-7  w-[95%] mx-auto max-h-[70vh] overflow-y-scroll">
        <div className="flex flex-wrap gap-12 items-start">
          {vendors.map((vendor, idx) => (
            <div>
              <VendorCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NearbyVendors;
