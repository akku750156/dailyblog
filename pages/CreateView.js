import React, { useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { createPost } from "./api/api";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

function CreateView() {
  const router = useRouter();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [categories, setCategories] = useState();
  const [createDate] = useState(new Date());
  const [url, setUrl] = useState("/blogImage2.png");

  const uploadImage = (image) => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "dailyBlog");

      axios
        .post("https://api.cloudinary.com/v1_1/daily-blog/upload", formData)
        .then((response) => {
          setUrl(response.data.url);
          console.log(response.data.url);
        });
    }
  };

  const savePost = async () => {
    const payload = {
      title: title,
      description: description,
      picture: url,
      username: username,
      categories: categories,
      createDate: createDate,
    };

    await createPost(payload);
    router.push("/");
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="flex flex-col justify-center w-full items-center text-6xl font-bold mx-12">
            <div className="py-4 font-semibold lg:font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-700">
              401
            </div>
            <div className="py-4 text-center font-semibold lg:font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-700">
              Access Denied !
            </div>
          </div>
          <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mr-4 sm:mt-0">
            <Image
              layout="fill"
              src="/404.png"
              alt="Image"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Daily Blog | Create</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blog-logo-1.png" className="text-white" />
      </Head>
      <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
        <div className="w-full lg:h-96 md:h-72 sm:h-60 h-32 relative">
          <Image
            layout="fill"
            src={url}
            alt=""
            className=" w-full h-full object-cover shadow-2xl shadow-gray-700"
          />
        </div>
        <div className="flex justify-between py-2 mx-4">
          <div className="md:border-2 px-2 pb-2 md:border-yellow-300 rounded-xl cursor-pointer">
            <label htmlFor="fileInput">
              <PlusCircleFilled />
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => uploadImage(e.target.files[0])}
              />
            </label>
          </div>
          <div className="flex justify-center items-center md:border-2 border-yellow-300 rounded-xl cursor-pointer">
            <select
              name="category"
              className="mx-2 text-sm sm:text-md bg-transparent border-0 focus:ouline-none appearance-none"
              onChange={(e) => setCategories(e.target.value)}
            >
              <option>Choose Category</option>
              <option value="Movies">Movies</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center items-centers">
          <input
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 bg-black outline-none "
            placeholder="Title of your blog"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className=" my-4 lg:my-8 text-sm md:text-lg">
          <textarea
            className="w-full h-24 md:h-48 bg-gray-800 resize-none text-sm p-2 focus:outline-none"
            placeholder="Tell your story..."
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              savePost();
            }}
            className="py-2 px-6 bg-yellow-300 rounded-xl mr-4 text-black border-2 border-black hover:text-yellow-300 hover:border-2 hover:border-yellow-300 hover:bg-black transition-all ease-in-out"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateView;
