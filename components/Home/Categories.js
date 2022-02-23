import React from "react";

function Categories() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-start items-center text-sm md:text-lg">
        <button className="py-2 px-6 bg-yellow-300 rounded-xl mr-4 text-black border-2 border-black hover:text-yellow-300 hover:border-2 hover:border-yellow-300 hover:bg-black transition-all ease-in-out">
          Create BLOG
        </button>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Category 1
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Category 2
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Category 3
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Category 4
        </div>
        <div className="py-2 px-6 hover:bg-gray-800 mx-4 rounded-xl ">
          Category 5
        </div>
      </div>
    </div>
  );
}

export default Categories;
