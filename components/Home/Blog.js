import React from "react";
import Image from "next/image";

function Blog({ post }) {
  return (
    <div className="flex flex-col justify-center items-start w-full p-4">
      <div className="w-full lg:h-72 md:h-60 sm:h-48 h-32 mb-4 relative">
        {post.picture ? (
          <Image
            layout="fill"
            src={post.picture}
            alt=""
            className="rounded-2xl drop-shadow-xl w-full h-full object-cover"
          />
        ) : (
          <Image
            layout="fill"
            src="/blogImage4.jpg"
            alt=""
            className="rounded-2xl drop-shadow-xl w-full h-full object-cover"
          />
        )}
      </div>
      <div className="text-gray-500 text-sm">{post.categories}</div>
      <div className="text-lg lg:text-2xl my-2 font-bold">{post.title}</div>
      <div className="text-gray-500 text-sm">Author : {post.username}</div>
    </div>
  );
}

export default Blog;
