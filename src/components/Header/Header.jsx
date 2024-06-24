import React from "react";
import HeaderLogo from "./HeaderLogo";
import UserIcons from "./UserIcons";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" h-16 shadow-md bg-white">
      <div className="container mx-auto h-full flex items-center px-4 justify-between">
        <Link to="/">
          <HeaderLogo width={90} height={50} />
        </Link>
        <SearchInput />
        <UserIcons />
      </div>
    </header>
  );
};

export default Header;
