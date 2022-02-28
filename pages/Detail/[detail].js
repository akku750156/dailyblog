import React, { useState } from "react";
import Link from "next/link";
import {
  EditFilled,
  DeleteFilled,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";
import { useRouter } from "next/router";
import { deletePost } from "../api/api";

export const getStaticProps = async (context) => {
  const id = context.params.detail;
  const res = await fetch("https://dailyblog-server.herokuapp.com/posts");
  const data = await res.json();
  const newData = await data.find((p) => p._id === id);

  return {
    props: { post: newData },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://dailyblog-server.herokuapp.com/posts");
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { detail: post._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

function Detailview({ post }) {
  const router = useRouter();
  const [like, setLike] = useState(false);

  const deleteBlog = async () => {
    await deletePost(post._id);
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
      {post ? (
        <>
          <div className="w-full lg:h-96 md:h-72 sm:h-60 h-48 ">
            {post.picture ? (
              <img
                src={post.picture}
                alt="Image"
                className=" w-full h-full object-cover shadow-2xl shadow-gray-700"
              />
            ) : (
              <img
                src="/blogImage.jpeg"
                alt="Image"
                className=" w-full h-full object-cover shadow-2xl shadow-gray-700"
              />
            )}
          </div>
          <div className="w-full flex justify-between items-center">
            {like ? (
              <HeartFilled
                className="text-red-500 text-xl"
                onClick={() => setLike(false)}
              />
            ) : (
              <HeartOutlined
                className="text-xl"
                onClick={() => setLike(true)}
              />
            )}

            <div className="flex justify-end py-2">
              <Link href={`/Update/${post._id}`} passHref>
                <div className="ml-4 md:border-2 px-2 pb-2 md:border-yellow-300 rounded-xl cursor-pointer">
                  <EditFilled />
                </div>
              </Link>
              <div
                onClick={() => deleteBlog()}
                className="ml-4 md:border-2 px-2 pb-2 md:border-yellow-300 rounded-xl cursor-pointer"
              >
                <DeleteFilled />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300">
              {post.title}
            </div>
          </div>
          <div className="md:flex block justify-between text-gray-400 text-xs ld:text-sm my-2">
            <Link href={`/?username=${post.username}`} passHref>
              <div>
                Author : <span className="font-bold">{post.username}</span>
              </div>
            </Link>
            <div>{new Date(post.createDate).toDateString()}</div>
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
