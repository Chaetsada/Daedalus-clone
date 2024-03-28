import React from "react";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    year: "2004",
    name: "DAE HOUSE",
    imageSrc: "DAE",
    award: "FRANKLLOYD WRIGHT AWARD",
    url: "/projects/dae-house",
    divide: true,
  },
  {
    year: "2006",
    name: "ARBOR HOUSE",
    imageSrc: "ARBOR",
    award: "AGA KHAN AWARD",
    url: "/projects/arbor-house",
    divide: true,
  },
  {
    year: "2013",
    name: "KANSO HOSE",
    imageSrc: "KANSO",
    award: "PRIZER ARTHITCTYRE PRIZE ",
    url: "/projects/kanso-house",
    divide: true,
  },
  {
    year: "2016",
    name: "OPA PENTHOUSE",
    imageSrc: "OPA",
    award: "INTL.ARTHITCTYRE AWARD",
    url: "/projects/opa-penthouse",
    divide: true,
  },
  {
    year: "2021",
    name: "PINETREE HOUSE",
    imageSrc: "PINETREE",
    award: "MUSE DESIGN AWARD",
    url: "/projects/pinetree-house",
    divide: true,
  },
  {
    year: "2023",
    name: "RESIDENCE 948",
    imageSrc: "RESIDENCE",
    award: "LEAF AWARD",
    url: "/projects/residence-948",
    divide: false,
  },
];

const Awards = () => {
  return (
    <main className="min-h-fit flex items-center justify-center px-5  md:py-[30px] ">
      <div className="container min-h-fit py-[100px] flex flex-col md:flex-row gap-5 md:gap-[200px]">
        <div className="w-full md:w-[20%] h-full flex flex-col gap-8 ">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading uppercase">
              Awards
            </h2>
          </div>
          <ButtonLink name={"View all projects"} link={"/projects"} />
        </div>
        {/*------------------------ END SECTION - 1 --------------------------------*/}
        <div className="flex-1 min-h-fit flex flex-col gap-5">
          {projects.map((project, i) => (
            <Link key={i} href={project.url}>
              <div className="w-full flex flex-col group relative">
                <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-2 h-fit">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10">
                    <span>{project.year}</span>
                    <h5 className="text-3xl md:text-5xl font-heading ">
                      {project.name}
                    </h5>
                  </div>
                  <p>{project.award}</p>
                  {/*--- PROJECT IMAGE ---*/}
                  <div className="hidden md:block size-[200px] absolute left-1/2 translate-x-[50px] z-20 scale-0 transition-all duration-300 shadow-xl group-hover:scale-100">
                    <Image
                      className="object-cover"
                      src={`/static/home-images/${project.imageSrc}.webp`}
                      alt="award-image"
                      fill
                    />
                  </div>
                </div>
              </div>
              {/*-- DIVIDER --*/}
              {project.divide && (
                <div className="w-full h-[2px] mt-6 bg-secondary-100" />
              )}
            </Link>
          ))}
        </div>
        {/*------------------------ END SECTION - 2 --------------------------------*/}
      </div>
    </main>
  );
};

export default Awards;
