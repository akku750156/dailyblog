import React from "react";
import Homebanner from "../Home/Homebanner";
import Categories from "../Home/Categories";

const Header = () => {
  return (
    <>
      <header className="min-h-screen w-11/12 mx-auto mt-28 md:mt-40">
        <div className="relative w-full h-1/2"></div>
        <Homebanner />
        <Categories />
      </header>
    </>
  );
};

export default Header;
