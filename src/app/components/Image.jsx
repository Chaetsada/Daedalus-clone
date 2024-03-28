"use client";

import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Image = ({ src, id, link, inViewHandler }) => {
  const ref = useRef();
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      inViewHandler(id);
    }
  }, [isInView, id]);

  return (
    <div ref={ref} id={id} className="h-[100vh] w-full relative group">
      <Link href={link}>
        <img
          className="object-cover w-full h-full"
          src={`/static/home-images/${src}.webp`}
          alt="project-image"
        />
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[180px] bg-white bg-opacity-80 rounded-full flex justify-center items-center scale-0 transition-all duration-500  group-hover:scale-100">
          <h5 className="text-xl font-heading uppercase text-center">
            view <br /> Project
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Image;
