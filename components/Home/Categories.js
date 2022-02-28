import React from "react";
import Link from "next/link";
function Categories() {
  return (
    <>
      <div className="w-full my-12">
        <div className="flex flex-wrap md:justify-start justify-around items-center text-sm md:text-lg">
          <Link href="/" passHref>
            <div className="py-2 px-6 hover:bg-gray-800 mr-4 rounded-xl ">
              All Categories
            </div>
          </Link>
          <Link href="/?category=Movies" passHref>
            <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
              Movies
            </div>
          </Link>

          <Link href="/?category=Music" passHref>
            <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
              Music
            </div>
          </Link>
          <Link href="/?category=Sports" passHref>
            <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
              Sports
            </div>
          </Link>
          <Link href="/?category=Technology" passHref>
            <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
              Technology
            </div>
          </Link>
          <Link href="/?category=Fashion" passHref>
            <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
              Fashion
            </div>
          </Link>
        </div>
        <hr className="my-8 border-gray-800" />
      </div>
    </>
  );
}

export default Categories;
