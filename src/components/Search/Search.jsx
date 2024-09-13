import React from "react";
import images from "../../images";

function Search({ placeholder, searchText = "", setSearchText = () => {} }) {
  return (
    <>
      <div className="flex flex-row-reverse bg-white w-full border-2 border-[rgba(0, 0, 0, 0.09)] items-center rounded-3xl">
        <div className="flex-1">
          <input
            type="text"
            placeholder={placeholder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-transparent p-2 px-5 font-poppinsLight tracking-wide w-full h-full focus:outline-none"
          />
        </div>
        <div className="p-3 px-5 pe-1">
          <img src={images.lens} className="w-[15px]" alt="search" />
        </div>
      </div>
    </>
  );
}

export default Search;
