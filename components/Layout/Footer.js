import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="h-fit  flex justify-center items-center flex-col">
        <div className="w-10/12 h-full flex flex-wrap gap-6 justify-between items-center p-6 mt-6">
          <div className="flex items-center gap-6">
            <i className="fa-solid fa-headset text-5xl"></i>
            <div>
              <h1 className="font-bold my-4">Blogger Support</h1>
              <p className="text-gray-400 text-sm">
                blogger.support@dailyblog.io
              </p>
              <p className="text-gray-400 text-sm">+91 8888888888</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <i className="fa-solid fa-truck-fast text-5xl"></i>
            <div>
              <h1 className="font-bold md:mb-2">Follow Us</h1>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a
                  href="https://www.facebook.com/profile.php?id=100037184014722"
                  target="_blank"
                  className=" border-2 border-yellow-200 p-2 rounded-full text-blue-500 cursor-pointer"
                  rel="noreferrer"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6 "
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3  border-2 border-yellow-200 p-2 rounded-full text-blue-300 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6 "
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/__s.k.yyy__/"
                  target="_blank"
                  className="ml-3  border-2 border-yellow-200 p-2 rounded-full text-red-400 cursor-pointer"
                  rel="noreferrer"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6 "
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-tiwari-03b3621b7/"
                  target="_blank"
                  className="ml-3 border-2 border-yellow-200 p-2 rounded-full text-blue-400 cursor-pointer"
                  rel="noreferrer"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-6 h-6 "
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          {/* 
          <div className="flex items-center gap-6">
            <i className="fa-solid fa-wallet text-5xl"></i>
            <div>
              <h1 className="font-bold">Payment Option</h1>
              <p className="text-gray-400 text-sm">Cash on Delivery</p>
            </div>
          </div> */}
        </div>
      </section>
      <footer className="text-gray-600 body-font flex justify-center flex-col items-center mb-16 lg:mb-0">
        <div className="w-10/12">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              ?? 2022 daily Blog ???
              <a
                href="https://github.com/akku750156"
                className="text-gray-600 ml-1 hover:text-yellow-300"
                rel="noopener noreferrer"
                target="_blank"
              >
                @akku750156
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
