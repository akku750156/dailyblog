import React from "react";

function Blog() {
  return (
    <div className="lg:w-5/12 border-2 border-gray-700 md:mx-8 my-4 w-full rounded-xl">
      <div className="flex flex-col justify-center items-start w-full p-4">
        <div className="w-full lg:h-72 md:h-60 sm:h-48 h-32 mb-4 ">
          <img
            src="/blogImage.jpeg"
            alt=""
            className="rounded-2xl drop-shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="text-gray-500 text-sm">Category</div>
        <div className="text-lg lg:text-2xl my-2 font-bold">
          Hii this Landscapes
        </div>
        <div className="text-gray-500 text-sm">Author : Akash Tiwari</div>
      </div>
    </div>
  );
}

export default Blog;
