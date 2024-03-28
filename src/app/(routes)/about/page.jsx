"use client";
import Divider from "@/app/components/Divider";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { projects, teamMembers, services, stats } from "@/app/lib/data";

//animate varients
const slideInVarient = {
  initial: {
    x: 50,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
const animContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const slideUpVarient = {
  hidden: { y: 150, opacity: 0.2 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
    },
  },
};

const aboutPage = () => {
  return (
    <main className="min-h-screen w-screen">
      <div className="container px-10">
        <header className="h-[50vh] md:h-screen w-full flex flex-col gap-5">
          <div className="h-[25vh] w-full flex items-end ">
            <h1 className="text-5xl md:text-8xl font-heading">ABOUT US</h1>
          </div>
          <div className="flex-1 relative">
            <Image
              className="object-cover"
              src="/static/about-images/aboutimage.webp"
              alt="about-image"
              fill
            />
          </div>
        </header>
        {/*------------------------- END HEADER ----------------------------*/}
        <div className="h-fit md:h-[30vh] w-full py-14 md:py-20">
          <h3 className="text-xl md:text-4xl font-heading max-w-3xl">
            WE'RE COMMITTED TO MAKING THE WORLD A BETTER PLACE THROUGH
            INNOVATIVE AND SUSTAINABLE DESIGN.
          </h3>
        </div>
        {/*------------------------- END PHRASE SECTION ----------------------------*/}
        <div className="h-fit w-full flex flex-col md:flex-row gap-5 py-14 ">
          <div className="flex-1 h-full flex justify-start md:justify-center">
            <h5 className="text-xl font-heading">FOUNDED IN 2004</h5>
          </div>
          <div className="flex-1 h-full flex flex-col gap-10">
            <p>
              Daedalus Architects is a U.S. based architecture and design
              practice celebrated for its eco-friendly and inventive designs in
              residential, leisure, and workplace spaces. We are pioneers in
              cutting-edge design, technology, and architectural trends.
            </p>
            <p>
              Our incredibly talented team is widely recognized for
              groundbreaking ideas and prompt, hands-on project execution.
              Keeping pace with the rapid evolution of the global market,
              Daedalus fuses contemporary trends with imaginative originality.
            </p>
            <div className=" grid md:grid-cols-2 max-w-[500px] gap-8">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="w-full md:max-w-[200px] flex flex-col gap-3"
                >
                  <h4 className="text-5xl font-heading">{item.data}</h4>
                  <span className="w-full h-[2px] bg-secondary-200" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*------------------------- END FOUNDED SECTION ----------------------------*/}
        <Divider />
        <div className="h-fit w-full py-20 flex flex-col">
          <div className="flex flex-col md:flex-row mb-10">
            <div className="flex-1 mb-5">
              <h5 className="text-4xl md:text-5xl font-heading">
                AWARD-WINNING <br /> DESIGN
              </h5>
            </div>
            <div className="flex-1">
              <p>
                Our achievements are a testament to the dedication and expertise
                of our talented team. We pride ourselves on thoughtful,
                sustainable, and innovative design.
              </p>
            </div>
          </div>
          <div className="flex-1 flex  justify-start md:justify-end ">
            <div className="w-full md:w-2/3 h-full mt-10">
              {projects.map((project, i) => (
                <div key={i} className="h-fit w-full flex flex-col">
                  <div className="flex flex-col md:flex-row  w-full py-3">
                    <div className="flex flex-col md:flex-row items-start mb-2 md:gap-3">
                      <span className="text-xl font-heading">
                        {project.year}
                      </span>
                      <h5 className="text-xl font-heading">{project.name}</h5>
                    </div>
                    <div className="md:ml-auto">{project.award}</div>
                  </div>
                  {project.divide && (
                    <span className="h-[2px] bg-secondary-100 w-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*------------------------- END AWARD SECTION ----------------------------*/}
        <Divider />
        <div className="h-fit w-full py-20 flex flex-col">
          <div className="flex flex-col md:flex-row mb-10">
            <div className="flex-1 mb-5">
              <h5 className="text-5xl font-heading">OUR SERVICES</h5>
            </div>
            <div className="flex-1">
              <p>
                We offer a wide variety of services in-house. From concept to
                completion, our architects will work with you to bring you
                vision to life.
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-end ">
            <div className="w-full md:w-2/3 h-full">
              <ul className="flex h-full flex-col gap-3 md:mt-28">
                {services.map((service, i) => (
                  <motion.li
                    variants={slideInVarient}
                    initial="initial"
                    whileInView="enter"
                    viewport={{ once: true }}
                    key={i}
                    className="p-5 flex items-center bg-secondary-100 hover:bg-secondary-200"
                  >
                    <span>{service.id}</span>
                    <p className="text-xl font-heading ml-auto">
                      {service.name}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/*------------------------- END SERVICES SECTION ----------------------------*/}
        <Divider />
        <div className="min-h-screen w-full py-20 ">
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex-1 mb-4">
              <h5 className="text-5xl font-heading">OUR TEAM</h5>
            </div>
            <div className="flex-1">
              <p>
                Daedalus Architects is a small team of 6 problems solvers and
                innovative thinkers dedicated to making the world around us a
                better place for everyone.
              </p>
            </div>
          </div>

          <motion.div
            variants={animContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className=" w-full grid md:grid-cols-2 lg:grid-cols-3  mt-20 "
          >
            {teamMembers.map((item, i) => (
              <motion.div
                variants={slideUpVarient}
                key={i}
                className="w-full md:max-w-[350px] h-[450px] flex flex-col gap-5"
              >
                <div className="h-2/3 w-full relative">
                  <Image
                    className="object-cover"
                    src={item.url}
                    alt="team-images"
                    fill
                  />
                </div>
                <div className="h-fit w-full">
                  <h5 className="text-xl font-heading">{item.name}</h5>
                  <p>{item.role}</p>
                </div>
                <span className="h-[2px] w-full bg-secondary-100"></span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/*------------------------- END TEAM SECTION ----------------------------*/}
      </div>
      <Footer />
    </main>
  );
};

export default aboutPage;
