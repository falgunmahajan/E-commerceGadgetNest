import { Search } from "@mui/icons-material";
import React from "react";
import ButtonComponent from "./ButtonComponent";

const SearchInput = () => {
  return (
    <div className="flex items-center rounded-2xl border shadow-sm pl-3 max-md:order-3 max-md:mt-4">
      <input
        className="pr-20 outline-none"
        placeholder="search product here..."
      />
      <ButtonComponent style="rounded-r-full">
        <Search />
      </ButtonComponent>
    </div>
  );
};

export default SearchInput;
