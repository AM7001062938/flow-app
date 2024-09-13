import React from "react";

function CategoryCard({ category, position }) {
  const getBgColor = () => {
    const colors = ["#D0FFDB", "#EBF1C2", "#E5D0FF"];
    return colors[position % colors.length];
  };
  return (
    <div style={{ backgroundColor: getBgColor() }} className="p-3 rounded-3xl ">
      <div
        key={category.id}
        className="flex flex-col justify-center items-center"
      >
        <div className="h-[60px] xl:h-[80px] text-center">
          <img
            src={category.icon}
            alt={category.name}
            className="h-full min-w-[80px] object-contain"
          />
        </div>

        <div className="mt-3 text-center font-poppinsMedium text-[0.825rem]">
          {category.name}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
