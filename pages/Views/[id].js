import React from "react";
import Link from "next/link";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:3002/posts");
//   const data = await res.json();
//   const paths = data.map((post) => {
//     return {
//       params: { id: post._id },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

function Detailview() {
  return (
    <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
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
          Title of the BLOG
        </div>
      </div>
      <div className="md:flex block justify-between text-gray-400 text-xs ld:text-sm my-2">
        <div>
          Author : <span className="font-bold">Akash</span>
        </div>
        <div>31 Jan 2021</div>
      </div>
      <div className=" my-4 lg:my-8 text-sm md:text-lg">
        <div>
          This is from the new Blooger on the website..... welcome New Bloggy
          ... I wish you have a good time here....try to share your journey and
          we defiitely read it....This is from the new Blooger on the
          website..... welcome New Bloggy ... I wish you have a good time
          here....try to share your journey and we defiitely read it....This is
          from the new Blooger on the website..... welcome New Bloggy ... I wish
          you have a good time here....try to share your journey and we
          defiitely read it....This is from the new Blooger on the website.....
          welcome New Bloggy ... I wish you have a good time here....try to
          share your journey and we defiitely read it....
        </div>
      </div>
    </div>
  );
}

export default Detailview;
