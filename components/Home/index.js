import React from "react";
import Homebanner from "../Home/Homebanner";
const Header = () => {
  return (
    <>
      <header className="min-h-screen w-10/12 mx-auto mt-24 md:mt-40">
        <div className="relative w-full h-1/2"></div>
        <Homebanner />
      </header>
    </>
  );
};

export default Header;
