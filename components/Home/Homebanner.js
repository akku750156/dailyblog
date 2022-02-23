import React from "react";

function Homebanner() {
  return (
    <div className="w-full my-20">
      <div className="md:w-2/3 w-full">
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
    </div>
  );
}

export default Homebanner;
