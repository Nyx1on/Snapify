import React from "react";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const SearchBar = (props: Props) => {
  return (
      <div
        className="flex border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 w-full" 
        style={{ backgroundColor: "white" }}
      >
        <input
          type="text"
          className="border-none outline-none w-full"
          // style={{ backgroundColor: "inherit" }}
        />
        <button className="bg-primary text-white p-1 rounded-full">
          <SearchIcon />
        </button>
      </div>
  );
};

export default SearchBar;
