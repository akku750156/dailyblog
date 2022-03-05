import React, { useState, useEffect } from "react";
import Blog from "../Home/Blog";
import Link from "next/link";

function Blogs({ posts }) {
  console.log(posts);

  return (
    <div className="w-full flex  flex-wrap justify-center">
      {posts ? (
        posts
          .slice(0)
          .reverse()
          .map((post) => {
            return (
              <Link href={`/Detail/${post._id}`} key={post._id} passHref>
                <div className="lg:w-5/12 border-2 border-gray-700 md:mx-8 my-4 w-full rounded-xl cursor-pointer hover:border-yellow-300 hover:shadow-[0px_0px_100px_10px_rgba(253,224,71,0.3)] transition:all ease-in-out">
                  <Blog post={post} />
                </div>
              </Link>
            );
          })
      ) : (
        <>
          <div>No Blogs available</div>
        </>
      )}
    </div>
  );
}

export default Blogs;
