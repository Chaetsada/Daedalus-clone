"use client";
import React, { useState } from "react";
import Link from "next/link";
//import icon
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

const menuLinks = [
  { id: "01", name: "ABOUT", url: "/about" },
  { id: "02", name: "PROJECTS", url: "/projects" },
  { id: "03", name: "BLOG", url: "/blog" },
  { id: "04", name: "CONTACT", url: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full fixed top-0 p-6  z-30">
      <div className="flex justify-between items-center container">
        {/*------- LOGO -------*/}
        <div>
          <Link href="/">
            <h6 className="text-2xl text-black font-heading">DAEDALUS</h6>
          </Link>
        </div>
        {/*--- HAMBURGER MENU ---*/}
        <div
          className="h-fit w-fit rounded-full p-3 hover:bg-secondary-100 hover:cursor-pointer"
          onClick={toggleDrawer}
        >
          <RxHamburgerMenu className="text-2xl text-black " />
        </div>
        {/*--- OVERLAY ---*/}
        <div
          className={` fixed top-0 right-0 h-screen w-screen ${
            open ? "opacity-100 visible" : "opacity-0 invisible "
          }  bg-black bg-opacity-50 transition-all duration-300  z-10`}
          onClick={toggleDrawer}
        />
        {/*--- DRAWER ---*/}
        <div
          className={` absolute top-0 right-0 z-20 h-screen ${
            open ? "w-screen md:w-1/3  p-20" : "w-0"
          } bg-dark flex flex-col  transition-all duration-300 overflow-hidden`}
        >
          {/*--- CLOSE BUTTON ---*/}
          <button
            className="absolute top-10 right-20 h-fit w-fit rounded-full p-3 hover:bg-gray-950"
            onClick={toggleDrawer}
          >
            <IoIosClose className="text-3xl text-white" />
          </button>
          {/*--- LINK MENU ---*/}
          <nav className="flex-1 h-full">
            <ul className="w-full h-full flex flex-col justify-center  gap-5 ">
              {menuLinks.map((link, i) => (
                <Link key={i} href={link.url} onClick={() => setOpen(false)}>
                  <li className="text-2xl  text-white font-heading group flex items-center gap-3">
                    <span className="text-xs text-white ">{link.id}</span>
                    <span className="w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-[30px] " />
                    <h4 className="text-5xl ">{link.name}</h4>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          {/*--- SOCAIL MENU ---*/}
          <div className="flex-non h-[68px]">
            <div className=" flex justify-center items-center gap-5 ">
              <a
                href="/"
                target="_blank"
                className="text-white w-[48px] h-[48px] flex justify-center items-center border border-secondary-300 rounded-full hover:border-white"
              >
                DB
              </a>
              <a
                href="/"
                target="_blank"
                className="text-white w-[48px] h-[48px] flex justify-center items-center border border-secondary-300 rounded-full hover:border-white"
              >
                YT
              </a>
              <a
                href="/"
                target="_blank"
                className="text-white w-[48px] h-[48px] flex justify-center items-center border border-secondary-300 rounded-full hover:border-white"
              >
                IG
              </a>
              <a
                href="/"
                target="_blank"
                className="text-white w-[48px] h-[48px] flex justify-center items-center border border-secondary-300 rounded-full hover:border-white"
              >
                TW
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
