import React from "react";
import Image from "next/image";
function Contact() {
  return (
    <header className="min-h-screen w-full mt-24">
      <div className="flex justify-center items-center">
        <div className="flex lg:flex-row flex-col justify-around items-center">
          <div className="w-[2/3] sm:mx-16">
            <div className="my-20 font-semibold lg:font-bold text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-700 text-center">
              We're all ears
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="sm:mb-8 mb-4 w-full flex justify-center items-center">
                <input
                  type="text"
                  name="name"
                  className="sm:w-10/12 sm:p-4 p-2 bg-gray-800 border-2 border-gray-500 rounded-xl hover:border-white"
                  placeholder="Full Name"
                />
              </div>
              <div className="sm:mb-8 mb-4 w-full flex justify-center items-center">
                <input
                  type="email"
                  name="email"
                  className="sm:w-10/12 sm:p-4 p-2 bg-gray-800 border-2 border-gray-500 rounded-xl hover:border-white"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-8 w-full flex justify-center items-center">
                <textarea
                  type="text"
                  name="message"
                  className="resize-none sm:w-10/12 sm:p-4 p-2 h-56 bg-gray-800 border-2 border-gray-500 rounded-xl hover:border-white"
                  placeholder="Message"
                />
              </div>
              <div className=" flex justify-center items-center">
                <button className="py-2 px-6 bg-gradient-to-br from-red-600 to-purple-700 rounded-xl mr-4 transition-all ease-in-out">
                  Submit FORM
                </button>
              </div>
            </div>
          </div>
          <div className="object-cover relative w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mr-4 sm:mt-0">
            <Image
              layout="fill"
              src="/illus5.png"
              alt="Image"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Contact;
