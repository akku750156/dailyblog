import React, { useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { createPost } from "./api/api";
import { useRouter } from "next/router";
import axios from "axios";

function CreateView() {
  const router = useRouter();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [username] = useState("akku750156");
  const [categories] = useState("All");
  const [createDate] = useState(new Date());
  const [url, setUrl] = useState();

  const uploadImage = (image) => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "praveen");

      axios
        .post("https://api.cloudinary.com/v1_1/di6pzmxin/upload", formData)
        .then((response) => {
          setUrl(response.data.url);
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

    console.log(title, description, url, username, categories, createDate);

    await createPost(payload);
    router.push("/");
  };

  return (
    <div>
      <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
        <div className="w-full lg:h-96 md:h-72 sm:h-60 h-32 ">
          <img
            src="/blogImage2.png"
            alt=""
            className=" w-full h-full object-cover shadow-2xl shadow-gray-700"
          />
        </div>
        <div className="flex justify-start py-2">
          <div className="ml-4 md:border-2 px-2 pb-2 md:border-yellow-300 rounded-xl cursor-pointer">
            <PlusCircleFilled />
            <input
              type="file"
              onChange={(e) => uploadImage(e.target.files[0])}
            />
          </div>
        </div>
        <div className="flex justify-center items-centers">
          <input
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 bg-black outline-none"
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
