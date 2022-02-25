import React, { useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { updatePost } from "../api/api";
import { useRouter } from "next/router";

export const getStaticProps = async (context) => {
  const id = context.params.update;
  const res = await fetch("https://dailyblog-server.herokuapp.com/posts");
  const data = await res.json();
  const newData = await data.find((p) => p._id === id);

  return {
    props: { blog: newData },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://dailyblog-server.herokuapp.com/posts");
  const data = await res.json();
  const paths = data.map((blog) => {
    return {
      params: { update: blog._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "akku750156",
  categories: "All",
  createDate: new Date(),
};

<<<<<<< HEAD
function UpdateView({ post }) {
  const router = useRouter();
  const [blog, setBlog] = useState(initialValues);
  const hanadleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const updateBlog = async (blog) => {
    await updatePost(post._id, blog);
    router.push("/");
  };
=======
function UpdateView({ blog }) {
  const router = useRouter();
  const [post, setPost] = useState(initialValues);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updateBlog = async (post) => {
    await updatePost(blog._id, post);
    router.push("/");
  };

>>>>>>> 216e3f0c7aa6376c541bb71d1f9e83a9bae45316
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
<<<<<<< HEAD
            // value={post.title}
=======
            // value={blog.title}
            onChange={(e) => {
              handleChange(e);
            }}
            name="title"
>>>>>>> 216e3f0c7aa6376c541bb71d1f9e83a9bae45316
            // placeholder="Title of your blog"
            name="title"
            onChange={(e) => {
              hanadleChange(e);
            }}
          />
        </div>
        <div className=" my-4 lg:my-8 text-sm md:text-lg">
          <textarea
            className="w-full h-48 bg-gray-800 resize-none text-sm p-2 focus:outline-none"
<<<<<<< HEAD
            // value={post.description}
=======
            // value={blog.description}
            onChange={(e) => {
              handleChange(e);
            }}
            name="description"
>>>>>>> 216e3f0c7aa6376c541bb71d1f9e83a9bae45316
            // placeholder="Tell your story..."
            name="description"
            onChange={(e) => {
              hanadleChange(e);
            }}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
<<<<<<< HEAD
              updateBlog(blog);
=======
              updateBlog(post);
>>>>>>> 216e3f0c7aa6376c541bb71d1f9e83a9bae45316
            }}
            className="py-2 px-6 bg-yellow-300 rounded-xl mr-4 text-black border-2 border-black hover:text-yellow-300 hover:border-2 hover:border-yellow-300 hover:bg-black transition-all ease-in-out"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateView;
