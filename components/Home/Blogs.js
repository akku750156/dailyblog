import React, { useState, useEffect } from "react";
import Blog from "../Home/Blog";
import Link from "next/link";

function Blogs({ posts }) {
  return (
    <div className="w-full flex  flex-wrap justify-center">
      {posts ? (
        posts.map((post) => {
          return (
            <>
              <Link href={`/Detail/${post._id}`} key={post._id} passHref>
                <div className="lg:w-5/12 border-2 border-gray-700 md:mx-8 my-4 w-full rounded-xl">
                  <Blog post={post} />
                </div>
              </Link>
            </>
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
