import React, { useEffect, useRef, useState } from "react";
import CustomSelect from "./CustomSelect/CustomSelect";
import FrequentBuysProductCard from "./FrequentBuysProductCard/FrequentBuysProductCard";

const frequentBuys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function FrequentBuys() {
  const scrollContainerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (hovered) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.currentTarget.scrollLeft += e.deltaX * 2;
        } else {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY * 2;
        }
      }
    };
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, [hovered]);
  return (
    <div className="px-10">
      <div className="flex justify-between ">
        <div className="font-poppinsSemiBold text-[1.1rem] text-white">
          Frequent Buys
        </div>
        <div className="flex gap-4">
          <CustomSelect
            bg={"#FFFFFF"}
            radius={"27px"}
            placeholder={"Vendors"}
          />
          <CustomSelect
            bg={"#FFFFFF"}
            radius={"27px"}
            placeholder={"Category"}
          />
        </div>
      </div>
      {/* Cards */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        ref={scrollContainerRef}
        className="mt-5 flex gap-5 overflow-x-scroll scroll-smooth"
      >
        {frequentBuys.map((product, idx) => (
          <div className="basis-[14rem] shrink-0">
            <FrequentBuysProductCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentBuys;
