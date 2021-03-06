import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import {
  EditFilled,
  DeleteFilled,
  HeartFilled,
  HeartOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { deletePost, addCommentPost } from "../api/api";

export const getStaticProps = async (context) => {
  const id = context.params.detail;
  const res = await fetch("https://dailyblog-server.herokuapp.com/posts");
  const data = await res.json();
  const newData = await data.find((p) => p._id === id);

  return {
    props: { post: newData },
    revalidate: 1,
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
  console.log("paths", paths);
  return {
    paths,
    fallback: true,
  };
};

function Detailview({ post }) {
  const router = useRouter();
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState();

  var userData;
  if (typeof window !== "undefined") {
    userData = JSON.parse(window.localStorage.getItem("user"));
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const deleteBlog = async () => {
    await deletePost(post._id);
    router.push("/");
  };

  const addCommentBlog = async (comment) => {
    await addCommentPost(post._id, comment, userData.user.username);
    setComment("");
    router.push(`/Detail/${post._id}`);
  };

  return (
    <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
      <Head>
        <title>Daily Blog | Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blog-logo-1.png" className="text-white" />
      </Head>
      {/* {console.log("userData : " + userData.user.username)} */}
      {post ? (
        <>
          <div className="w-full lg:h-96 md:h-72 sm:h-60 h-48 relative">
            {post.picture ? (
              <Image
                layout="fill"
                src={post.picture}
                alt="Image"
                className=" w-full h-full object-cover shadow-2xl shadow-gray-700"
              />
            ) : (
              <Image
                layout="fill"
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
            {userData && userData.user.username === post.username && (
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
            )}
          </div>
          <div className="flex justify-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300">
              {post.title}
            </div>
          </div>
          <div className="md:flex block justify-between text-gray-400 text-xs lg:text-sm my-2">
            <Link href={`/?username=${post.username}`} passHref>
              <div>
                Author : <span className="font-bold">{post.username}</span>
              </div>
            </Link>
            <div>
              {new Date(post.createDate).toDateString()} {" at "}
              {new Date(post.createDate).getHours()}
              {":"}
              {new Date(post.createDate).getMinutes()}
            </div>
          </div>
          <div className=" my-4 lg:my-8 text-sm md:text-lg">
            <div>{post.description}</div>
          </div>

          <div className="mt-28 w-full ">
            {userData ? (
              <div className="w-full flex justify-center items-center">
                <div className="flex justify-center items-center mr-4 text-xl">
                  <CommentOutlined />
                </div>
                <input
                  type="text"
                  placeholder="Add a comment"
                  name="comment"
                  className="w-full px-1 rounded-sm text-black"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  type="submit"
                  className=" flex justify-center items-center mx-4 bg-yellow-300 text-black px-2 rounded-md cursor-pointer"
                  onClick={() => addCommentBlog(comment)}
                >
                  Post
                </button>
              </div>
            ) : (
              <></>
            )}

            <div className="mt-12">
              {post.comments
                .slice(0)
                .reverse()
                .map((element) => (
                  <>
                    <div
                      className="flex justify-between items-center m-1"
                      key={element._id}
                    >
                      <div className="w-9/12 lg:text-sm text-xs flex  items-start my-1 lg:my-2">
                        <div className="text-gray-400">
                          {element.userComment}:&nbsp;
                        </div>
                        <div>{element.comment}</div>
                      </div>
                      <div className="text-gray-400 text-[10px] lg:text-xs  pl-2">
                        {new Date(element.created).toDateString()}
                        {" at "}
                        {new Date(element.created).getHours() < 10
                          ? `0${new Date(element.created).getHours()}`
                          : new Date(element.created).getHours()}
                        {":"}
                        {new Date(element.created).getMinutes() < 10
                          ? `0${new Date(element.created).getMinutes()}`
                          : new Date(element.created).getMinutes()}
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <button
              className="w-full text-right cursor-pointer
            "
              // onClick={(i) => increment(i)}
            >
              View More
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Detailview;
