import React from "react";

function Homebanner() {
  return (
    <div className="w-full my-20 flex flex-col md:flex-row justify-between items-center ">
      <div className="md:w-2/3 w-full mb-12 md:mb-0">
        <header className="text-5xl md:text-8xl font-semibold text-yellow-300 py-4">
          dailyBLOG
        </header>
        <div className="text-sm md:text-lg">
          Discover the platform that gives you the freedom to create , write and
          publish your ideas in the form of your Blog posts on the daily basis.
          <br />
          <span className="text-yellow-300">CREATE-WRITE-PUBLISH</span>
        </div>
      </div>
      <div>
        <button className="py-2 px-6 bg-yellow-300 rounded-xl mr-4 text-black border-2 border-black hover:text-yellow-300 hover:border-2 hover:border-yellow-300 hover:bg-black transition-all ease-in-out">
          Create BLOG
        </button>
      </div>
    </div>
  );
}

export default Homebanner;
