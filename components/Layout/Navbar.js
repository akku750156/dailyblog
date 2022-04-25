import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 bg-gradient-to-b from-black to-transparent h-20 w-full flex justify-center items-center flex-col">
      <div className="w-10/12 flex items-center justify-between h-full">
        <div className="flex w-full justify-between items-center">
          <Link href="/" passHref>
            <div className="flex items-center gap-5 cursor-pointer">
              <Image
                src="/blog-logo-1.png"
                height={30}
                width={30}
                alt="Logo"
                className="rounded-lg"
              />
              <h1 className="font-bold text-2xl">dailyBLOG</h1>
            </div>
          </Link>
        </div>
        <div className="fixed left-0 w-full bg-black lg:bg-transparent lg:w-fit bottom-0 py-3 lg:py-0 flex justify-evenly lg:justify-center lg:static lg:gap-8">
          <Link href="/" passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:text-white text-gray-300">
              <HomeOutlined />
              <h1 className="text-md font-light">Home</h1>
            </div>
          </Link>
          <Link href="/Contact" passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:text-white text-gray-300">
              <PhoneOutlined />
              <h1 className="text-md font-light">Contact</h1>
            </div>
          </Link>
          <Link href="/About" passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:text-white text-gray-300">
              <UserOutlined />
              <h1 className="text-md font-light">About</h1>
            </div>
          </Link>
          <Link href="/SignUpPage" passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:text-white text-gray-300">
              <LoginOutlined />
              <h1 className="text-md font-light">Login</h1>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
