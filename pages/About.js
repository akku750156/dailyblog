import React from "react";
import Image from "next/image";
function About() {
  return (
    <header className="min-h-screen w-full mt-48">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-start">
          <div className=" py-4 font-semibold lg:font-bold text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-700">
            We are creators like you...
          </div>
          <div className="flex sm:flex-row flex-col-reverse justify-between items-center lg:mt-20">
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mr-4 sm:mt-0">
              <Image
                layout="fill"
                src="/illus4.png"
                alt="Image"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="sm:w-1/2">
              <div className="my-8 lg:mt-28 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500">
                Staying up-to-date takes a lot of effort and time
              </div>
              <div className="text-md sm:text-lg md:text-xl lg:text-2xl  text-gray-400 my-12">
                <div className="mb-4">
                  1. It is essential for every creator, to share their
                  creativity and ideas to a wider audience
                </div>
                <div className="mb-4">
                  2. Top brands and businesses create blogs to educate their
                  customers, share news, and reach a wider audience.
                </div>
                <div>
                  3. Creating better information is a need since low-quality
                  content is all around
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col sm:flex-row items-center justify-between mt-20">
            <div className="font-bold text-lg sm:text-xl md:text-xl lg:text-3xl sm:w-[50%] text-left text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-700">
              Our mission is to build the home page that every Creator/Blogger
              deserves.
            </div>
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]">
              <Image
                layout="fill"
                src="/illus1.png"
                alt="Image"
                className="w-full h-full object-cover absolute bottom-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default About;
