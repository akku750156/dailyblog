import React from "react";
import Homebanner from "../Home/Homebanner";
import Categories from "../Home/Categories";
import Blogs from "../Home/Blogs";

const Header = ({ posts }) => {
  return (
    <>
      <header className="min-h-screen w-11/12 mx-auto mt-28 md:mt-40">
        <Homebanner />
        <Categories />
        <Blogs posts={posts} />
      </header>
    </>
  );
};

export default Header;
