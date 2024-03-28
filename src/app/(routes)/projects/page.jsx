"use client";
import React, { useState } from "react";

import Image from "@/app/components/Image";
import Link from "next/link";

const projects = [
  { id: "1", name: "DAE HOUSE", src: "DAE", link: "/projects/dae-house" },
  { id: "2", name: "ARBOR HOUSE", src: "ARBOR", link: "/projects/arbor-house" },
  { id: "3", name: "KANSO HOUSE", src: "KANSO", link: "/projects/kanso-house" },
  { id: "4", name: "OPA PENTHOUSE", src: "OPA", link: "/projects/opa-penthouse",},
  { id: "5", name: "PINETREE HOUSE", src: "PINETREE", link: "/projects/pinetree-house",},
  { id: "6", name: "RESIDENCE 948", src: "RESIDENCE", link: "/projects/residence-948",},
];

const ProjectPage = () => {
  const [inView, setInView] = useState(null);

  const inViewHandler = (id) => {
    setInView(id);
  };

  return (
    <div className="min-h-screen w-screen">
      <div className="hidden md:block w-1/2 min-h-[100vh] ">
        {projects.map((project, i) => (
          <Image
            key={i}
            src={project.src}
            id={project.id}
            link={project.link}
            inViewHandler={inViewHandler}
          />
        ))}
      </div>
      {/*--------------------------- END IMAGE SECTION ----------------------------*/}
      <div className="hidden md:flex w-1/2 h-[100vh] fixed top-0 right-0 bg-secondary px-10 py-20  items-end">
        <div className="flex flex-col gap-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={`#${project.id}`}
              className="flex items-center gap-2"
            >
              <span
                className={` ${
                  inView === project.id ? "w-[25px]" : "w-0"
                } hidden md:block h-[2px] bg-black transition-all duration-500`}
              />
              <h5 className="text-base md:text-2xl font-heading text-black">
                {project.name}
              </h5>
            </a>
          ))}
        </div>
      </div>
      {/*---------------------- END POROJECT MENU SECTION --------------------------*/}
      <div className="md:hidden flex flex-col px-5 pt-24">
        {projects.map((project) => (
          <div key={project.id} className="w-full h-fit flex flex-col gap-3 mb-5">
            <div className="h-[350px] w-full">
              <img
                className="h-full w-full object-cover"
                src={`/static/home-images/${project.src}.webp`}
                alt="project-images"
              />
            </div>
            <h5 className="text-xl font-heading">{project.name}</h5>
            <Link className="underline" href={project.link}>view project</Link>
          </div>
        ))}
      </div>
      {/*---------------------- @MEDIA QUERY SMILL SCREEN --------------------------*/}
    </div>
  );
};

export default ProjectPage;
