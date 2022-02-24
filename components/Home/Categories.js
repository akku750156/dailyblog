import React from "react";

function Categories() {
  return (
    <div className="w-full my-12">
      <div className="flex flex-wrap md:justify-start justify-around items-center text-sm md:text-lg">
        <div className="py-2 px-6 hover:bg-gray-800 mr-4 rounded-xl ">
          All Categories
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Movies
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Music
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Sports
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Technology
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Fashion
        </div>
      </div>
      <hr className="my-8 border-gray-800" />
    </div>
  );
}

export default Categories;
