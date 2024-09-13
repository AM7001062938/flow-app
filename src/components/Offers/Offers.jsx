import React, { useEffect, useRef, useState } from "react";
import OfferBanner from "../OfferBanner/OfferBanner";
const offers = [1, 2, 3, 4, 5, 6, 7];

function Offers() {
  const [hovered, setHovered] = useState(false);
  const scrollContainerRef = useRef(null);

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
    <div className="px-3">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-scroll scroll-smooth"
      >
        {offers.map((offer, idx) => (
          <div className="w-[390px] shrink-0">
            <OfferBanner position={idx} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
