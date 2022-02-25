import React, { useState } from "react";
import Link from "next/link";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Spin } from "antd";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3002/posts");
  const data = await res.json();
  const newData = await data.find((p) => p._id === id);

  return {
    props: { post: newData },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3002/posts");
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { id: post._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

function Detailview({ post }) {
  return (
    <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
      {post ? (
        <>
          <div className="w-full lg:h-96 md:h-72 sm:h-60 h-48 ">
            <img
              src="/blogImage.jpeg"
              alt=""
              className=" w-full h-full object-cover shadow-2xl shadow-gray-700"
            />
          </div>
          <div className="flex justify-end py-2">
            <Link href="/Views/UpdateView" passHref>
              <div className="ml-4 md:border-2 px-2 pb-2 md:border-yellow-300 rounded-xl cursor-pointer">
                <EditFilled />
              </div>
            </Link>
            <div className="ml-4 md:border-2 px-2 pb-2 md:border-yellow-300 rounded-xl cursor-pointer">
              <DeleteFilled />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300">
              {post.title}
            </div>
          </div>
          <div className="md:flex block justify-between text-gray-400 text-xs ld:text-sm my-2">
            <div>
              Author : <span className="font-bold">{post.username}</span>
            </div>
            <div>{post.createPost}</div>
          </div>
          <div className=" my-4 lg:my-8 text-sm md:text-lg">
            <div>{post.description}</div>
          </div>
        </>
      ) : (
        <>
          <Spin size="large" />
        </>
      )}
    </div>
  );
}

export default Detailview;
