import React from "react";
import images from "../../images";

const categories = [
  "Supermarket",
  "Party Essentials",
  "Homecare",
  "Grab & Go",
  "Ethnic Products",
  "Organic",
  "Stationery",
  "Pharmacies",
  "Fruits",
  "Groceries",
  "Flower shop",
  "Electronics",
  "Pet Shops",
  "Vegetables",
  "Butchery",
];

function Footer() {
  return (
    <>
      <div className="pt-12 pb-5 w-[95%] mx-auto tracking-wide">
        {/* Content Area */}
        <div className="">
          {/* Upper */}
          <div className="flex gap-10">
            {/* left */}
            <div className="w-1/2 pe-4">
              <div className="font-poppinsSemiBold text-[1.25rem]">
                Short Links
              </div>
              {/* 3 columns */}
              <div className="flex mt-2 gap-3">
                <div className="flex-1">
                  <div className="font-poppinsSemiBold text-[#040505] text-[0.825rem]">
                    Resources
                  </div>
                  <div className="font-poppinsLight text-[#000000CF] text-[0.9rem] mt-2 flex flex-col gap-2">
                    <div>Documentation</div>
                    <div>Delivery</div>
                    <div>Press Conferences</div>
                    <div>Privacy Policy</div>
                    <div>Terms & Condition</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-poppinsSemiBold text-[#040505] text-[0.825rem]">
                    Company
                  </div>
                  <div className="font-poppinsLight text-[#000000CF] text-[0.9rem] mt-2 flex flex-col gap-2">
                    <div>About</div>
                    <div>Contact</div>
                    <div>Press Conferences</div>
                    <div>Vendor</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-poppinsSemiBold text-[#040505] text-[0.885rem]">
                    Office Location
                  </div>
                  <div className="font-poppinsLight text-[#000000CF] text-[0.9rem] mt-2 flex flex-col gap-2">
                    <div>
                      Circle Technology Pvt Ltd. 810, Iris Tech Park, Sector 48,
                      Gurugram, Haryana - 122018
                    </div>
                    <div>
                      Circle Technology Pvt Ltd. 810, Iris Tech Park, Sector 48,
                      Gurugram, Haryana - 122018
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-1/2">
              <div className="font-poppinsSemiBold text-[1.25rem]">
                Categories
              </div>
              <div className="mt-2 flex flex-wrap items-start">
                {categories.map((category, idx) => (
                  <div className="font-poppinsLight text-[#000000CF] text-[0.9rem] mt-2 w-[33%] text-start">
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#00000052] mt-8"></div>
        {/* Platforms */}
        <div className="mt-8 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <span>
              <img
                src={images.blacktick}
                alt="Available on all platforms"
                className="w-[20px]"
              />
            </span>
            <span className="font-poppinsLight text-[#040505] text-[0.88rem]">
              Available on all platforms
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center px-5 border border-[#00000052] py-2 rounded-3xl">
              <span>
                <img src={images.appleicon} alt="ios" className="w-[20px]" />
              </span>
              <span className="font-poppinsMedium text-[0.88rem] text-[#040505]">
                iOS
              </span>
            </div>
            <div className="flex gap-2 items-center px-5 border border-[#00000052] py-2 rounded-3xl">
              <span>
                <img
                  src={images.androidicon}
                  alt="android"
                  className="w-[20px]"
                />
              </span>
              <span className="font-poppinsMedium text-[0.88rem] text-[#040505]">
                Android
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(70.97deg, #3F32FF 0%, #8A12FF 111.98%)",
        }}
        className="py-4"
      >
        {/* Content */}
        <div className="w-[95%] mx-auto flex justify-between items-center">
          <div className="flex gap-2 items-center text-white font-poppinsMedium text-[0.88rem]">
            <div className=" w-[20px] h-[20px] border-2 border-white rounded-full flex items-center justify-center">
              c
            </div>
            <div>2024 Circle Inc.</div>
          </div>
          <div className="flex items-center gap-5">
            <img src={images.instagram} alt="instagram" className="w-[20px]" />
            <img src={images.facebook} alt="facebook" className="w-[20px]" />
            <img src={images.twitter} alt="twitter" className="w-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
