import React, { useState, useEffect } from "react";
import Blog from "../Home/Blog";
import Link from "next/link";
import { getAllPosts } from "../../pages/api/api";

function Blogs({ posts }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let data = await getAllPosts();
  //     setPosts(data);
  //     console.log(posts);
  //   };
  //   fetchData();
  // }, [posts]);

  return (
    <div className="w-full flex  flex-wrap justify-center">
      {posts ? (
        posts.map((post) => {
          return (
            <>
              <Link href={`/Views/${post._id}`} key={post._id} passHref>
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
      {console.log("posts", posts)}
    </div>
  );
}

export default Blogs;
