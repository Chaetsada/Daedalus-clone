"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const ButtonLink = ({ name , link}) => {
  return (
    <>
      <Link href={link}>
        <div className="flex items-center justify-start gap-5 min-w-fit group hover:cursor-pointer">
          <div className="w-14 h-14 rounded-full border border-dark bg-primary flex justify-center items-center group relative overflow-hidden">
            <div className=" w-6 h-6 flex justify-center items-center overflow-hidden relative z-20">
              <IoIosArrowRoundForward className="text-black w-7 h-7 group-hover:text-white" />
            </div>
            <span className="absolute -left-[110%] z-10 w-14 h-14 rounded-full transition-all duration-500 bg-dark group-hover:left-0" />
          </div>
          <p className="group-hover:underline">{name}</p>
        </div>
      </Link>
    </>
  );
};

export default ButtonLink;
