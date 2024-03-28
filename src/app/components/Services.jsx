"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const services = [
  { id: "01", title: "architectural Design", src: "service1" },
  { id: "02", title: "interior design", src: "service2" },
  { id: "03", title: "special planning", src: "service3" },
];

const animVarient = {
  hidden: {
    y: "110%",
    opacity: 0.2,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: easeOut,
      delay: 0.05 * i,
    },
  }),
};
const Services = () => {
  return (
    <main className="min-h-fit px-8 md:px-[100px] md:py-[80px] ">
      <div className="container min-h-fit  py-[50px] flex flex-col gap-5 md:gap-16 overflow-hidden">
        <header>
          <h2 className="text-4xl md:text-5xl font-heading uppercase">
            our sevices
          </h2>
        </header>
        {/*-------------------- END HEADER  --------------------*/}
        <div className="flex flex-col lg:flex-row lg:justify-end gap-3 ">
          {services.map((item, i) => (
            <Link key={item.id} href="/contact">
              <motion.div
                variants={animVarient}
                initial="hidden"
                whileInView="enter"
                viewport={{ once: true }}
                custom={i}
                className="h-[280px] md:h-[360px] w-full lg:w-[350px] p-[32px] flex flex-col justify-between bg-secondary-100 group overflow-hidden relative"
              >
                <div className="w-10 h-10 text-xs text-black group-hover:text-white rounded-full border-2 border-secondary-200 group-hover:border-white flex items-center justify-center relative z-20">
                  {item.id}
                </div>
                <div className="flex flex-col translate-y-14 transition-all duration-300 group-hover:translate-y-0 relative z-20">
                  <div className="flex flex-col gap-3 mb-10">
                    <h5 className="text-xl font-heading uppercase group-hover:text-white">
                      {item.title}
                    </h5>
                    <p className="group-hover:text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="group-hover:text-white hover:underline">
                      Contact us
                    </p>
                    <FaArrowRight className="group-hover:text-white" />
                  </div>
                </div>
                {/*------ CENTER IMAGE ------*/}
                <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-0 transition-all duration-500 group-hover:scale-100 ">
                  <Image
                    className="object-cover"
                    src={`/static/home-images/${item.src}.webp`}
                    alt="service-image"
                    fill
                  />
                  {/*--- OVERLAY ---*/}
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 invisible group-hover:visible" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        {/*-------------------- END SECTION  -----------------*/}
      </div>
    </main>
  );
};

export default Services;
