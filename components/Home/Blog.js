import React from "react";

function Blog({ post }) {
  const url =
    post.picture ||
    "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_1280.png";

  return (
    <div className="flex flex-col justify-center items-start w-full p-4">
      <div className="w-full lg:h-72 md:h-60 sm:h-48 h-32 mb-4 ">
        <img
          src={url}
          alt=""
          className="rounded-2xl drop-shadow-xl w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-500 text-sm">{post.categories}</div>
      <div className="text-lg lg:text-2xl my-2 font-bold">{post.title}</div>
      <div className="text-gray-500 text-sm">Author : {post.username}</div>
    </div>
  );
}

export default Blog;
