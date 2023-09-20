import React from "react";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex border border-[#eeeee] hover:bg-[#f8f8f8ee] rounded-full py-2 px-4 hover:shadow-md hover:shadow-gray-300 w-full">
      <input
        type="text"
        className="border-none outline-none w-full"
        style={{ backgroundColor: "inherit" }}
      />
      <button className="bg-primary text-white p-1 rounded-full">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
