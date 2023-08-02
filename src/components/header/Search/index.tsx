import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Search(): React.JSX.Element {
  return (
    <div className="relative">
      <label className="hidden" htmlFor="search">
        search
      </label>
      <input
        className="p-1.5 text-sm px-4 md:w-96 rounded border border-gray-300 focus:outline-0"
        name="search"
        id="search"
        type="text"
        autoComplete="off"
        placeholder="Search..."
      />
      <button className="absolute right-0  h-full w-10 flex items-center justify-center top-1/2 -translate-y-1/2 ">
        <HiOutlineSearch className="text-gray-500" />
      </button>
    </div>
  );
}

export default Search;
