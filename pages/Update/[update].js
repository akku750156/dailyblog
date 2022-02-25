import React from "react";
import { PlusCircleFilled } from "@ant-design/icons";

export const getStaticProps = async (context) => {
  const id = context.params.update;
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
      params: { update: post._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

function UpdateView({ post }) {
  return (
    <div>
      <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
        <div className="w-full lg:h-96 md:h-72 sm:h-60 h-48 ">
          <img
            src="/blogImage4.jpg"
            alt=""
            className=" w-full h-full object-cover shadow-2xl shadow-gray-700"
          />
        </div>
        <div className="flex justify-start py-2">
          <div className="ml-4 md:border-2 px-2 pb-2 md:border-yellow-300 rounded-xl cursor-pointer">
            <PlusCircleFilled />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 bg-black outline-none"
            value={post.title}
            // placeholder="Title of your blog"
          />
        </div>
        <div className=" my-4 lg:my-8 text-sm md:text-lg">
          <textarea
            className="w-full h-48 bg-gray-800 resize-none text-sm p-2 focus:outline-none"
            value={post.description}
            // placeholder="Tell your story..."
          />
        </div>
        <div className="flex justify-end">
          <button className="py-2 px-6 bg-yellow-300 rounded-xl mr-4 text-black border-2 border-black hover:text-yellow-300 hover:border-2 hover:border-yellow-300 hover:bg-black transition-all ease-in-out">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateView;
