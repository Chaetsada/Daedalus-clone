"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const fadeRightVarient = {
  hidden: {
    x: "-50",
    opacity: 0.2,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
const fadeLeftVarient = {
  hidden: {
    x: "50",
    opacity: 0.2,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

const page = () => {
  return (
    <main className="pt-[15vh]">
      <header className="flex flex-col gap-5 container px-8 py-10 md:py-20">
        <h1 className="text-5xl md:text-8xl font-heading">OPA PENTHOUSE</h1>
        <div className="w-full  h-[300px] md:h-[400px] lg:h-[600px] relative">
          <Image
            className="object-cover"
            src="/static/project-images/opa-penthouse/1.webp"
            alt="header-image"
            fill
          />
        </div>
      </header>
      {/*---------------------------- END HEADER ---------------------------------*/}
      <div className="container flex flex-col gap-10 md:flex-row  px-8 py-10 md:py-20">
        <div className=" h-full flex justify-start md:justify-center w-full md:w-[40%]">
          <h5 className="text-xl font-heading">ABOUT PROJECT</h5>
        </div>
        <div className="flex-1 h-full flex flex-col gap-14">
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus cupiditate minus sapiente veniam! Culpa recusandae eaque
              ut, vero asperiores atque quas id officiis delectus, fugit cum
              consequatur impedit praesentium repudiandae tempore eius voluptate
              officia. Impedit necessitatibus praesentium omnis ipsum.
              Voluptatem saepe reiciendis quo vel maiores harum sed modi magni
              deleniti.
            </p>
          </div>
          <ul className="flex flex-col max-w-[500px]">
            <li className="flex justify-between  py-5 border-t-[2px] border-secondary-100">
              <p className="font-heading">LOCATION</p>
              <p>Portland, Oregon</p>
            </li>
            <li className="flex justify-between  py-5 border-t-[2px] border-secondary-100">
              <p className="font-heading">TOTAL AREA</p>
              <p>7577 ft²</p>
            </li>
            <li className="flex justify-between  py-5 border-t-[2px] border-secondary-100">
              <p className="font-heading">ARCHITECTS</p>
              <p>Louis Khan, Antoni Gaudi</p>
            </li>
          </ul>
        </div>
      </div>
      {/*---------------------------- END INFO SECTION ---------------------------------*/}
      <div className="flex flex-col  md:flex-row gap-5 h-fit container px-8 py-10 md:py-20">
        <motion.div
          variants={fadeRightVarient}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full md:w-[60%] h-[240px] md:h-[480px] relative"
        >
          <Image
            className="object-cover"
            src="/static/project-images/opa-penthouse/2.webp"
            alt="opa-penthouse-image"
            fill
          />
        </motion.div>
        <motion.div
          variants={fadeLeftVarient}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full lg:flex-1 h-[240px] md:h-[480px] relative"
        >
          <Image
            className="object-cover"
            src="/static/project-images/opa-penthouse/3.webp"
            alt="opa-penthouse-image"
            fill
          />
        </motion.div>
      </div>
      {/*---------------------------- END IMAGE SECTION #1 ---------------------------------*/}
      <div className="flex justify-start container px-8 py-10 md:py-20">
        <div className="max-w-3xl">
          <p className=" text-pretty">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum
            omnis id aliquid cupiditate delectus et commodi perferendis
            repellendus, aperiam, hic inventore quibusdam necessitatibus nihil
            aliquam ad repellat obcaecati sunt adipisci quae iste sint deserunt.
          </p>
        </div>
      </div>
      {/*---------------------------- END PARAGRAPH #1 ---------------------------------*/}
      <div className="flex flex-col  md:flex-row  gap-5 h-fit container px-8 py-10 md:py-20">
        <motion.div
          variants={fadeRightVarient}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full lg:flex-1 h-[240px] md:h-[480px] relative"
        >
          <Image
            className="object-cover"
            src="/static/project-images/opa-penthouse/4.webp"
            alt="opa-penthouse-image"
            fill
          />
        </motion.div>
        <motion.div
          variants={fadeLeftVarient}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full md:w-[60%] h-[240px] md:h-[480px] relative"
        >
          <Image
            className="object-cover"
            src="/static/project-images/opa-penthouse/5.webp"
            alt="opa-penthouse-image"
            fill
          />
        </motion.div>
      </div>
      {/*---------------------------- END IMAGE SECTION #2 ---------------------------------*/}
      <div className="flex justify-center container px-8 py-10 md:py-20">
        <div className="max-w-3xl">
          <p className="text-pretty">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum
            omnis id aliquid cupiditate delectus et commodi perferendis
            repellendus, aperiam, hic inventore quibusdam necessitatibus nihil
            aliquam ad repellat obcaecati sunt adipisci quae iste sint deserunt.
          </p>
        </div>
      </div>
      {/*---------------------------- END PARAGRAPH #2 ---------------------------------*/}
      <div className="flex flex-col  md:flex-row  gap-5 h-fit container px-8 py-10 md:py-20">
        <motion.div
          variants={fadeRightVarient}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full md:w-[60%] h-[240px] md:h-[480px] relative"
        >
          <Image
            className="object-cover"
            src="/static/project-images/opa-penthouse/6.webp"
            alt="opa-penthouse-image"
            fill
          />
        </motion.div>
        <motion.div
          variants={fadeLeftVarient}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full lg:flex-1 h-[240px] md:h-[480px] relative"
        >
          <Image
            className="object-cover"
            src="/static/project-images/opa-penthouse/7.webp"
            alt="opa-penthouse-image"
            fill
          />
        </motion.div>
      </div>
      {/*---------------------------- END IMAGE SECTION #3 ---------------------------------*/}
      <div className="flex justify-start container px-8 py-10 md:py-20">
        <div className="max-w-3xl">
          <p className=" text-pretty">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum
            omnis id aliquid cupiditate delectus et commodi perferendis
            repellendus, aperiam, hic inventore quibusdam necessitatibus nihil
            aliquam ad repellat obcaecati sunt adipisci quae iste sint deserunt.
          </p>
        </div>
      </div>
      {/*---------------------------- END PARAGRAPH #3 ---------------------------------*/}
      <div className="flex flex-col md:flex-row items-center justify-between container px-8 py-10 md:py-20">
        <Link href="/projects/kanso-house">
          <div className="h-[120px] w-[350px] flex relative group hover:cursor-pointer">
            <div className="size-[120px]">
              <div className="h-full w-full rounded-full border-[2px] border-secondary-200 group-hover:border-black"></div>
            </div>
            <div className="flex-1 flex justify-end  items-center">
              <h5>PREVIOUS PROJECT</h5>
            </div>
            <div className="absolute top-1/2 left-[17%] -translate-y-1/2 w-[120px] h-[2px] bg-black"></div>
          </div>
        </Link>
        {/*--- PREVIOUS BUTTON ---*/}
        <Link href="/projects/pinetree-house">
          <div className="h-[120px] w-[300px] flex relative group hover:cursor-pointer">
            <div className="flex-1 flex justify-start items-center">
              <h5>NEXT PROJECT</h5>
            </div>
            <div className="size-[120px]">
              <div className="h-full w-full rounded-full border-[2px] border-secondary-200 group-hover:border-black"></div>
            </div>
            <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-[120px] h-[2px] bg-black"></div>
          </div>
        </Link>
        {/*--- NEXT BUTTON ---*/}
      </div>
      {/*---------------------------- END FOOTER LINK ---------------------------------*/}
      <Footer />
    </main>
  );
};

export default page;
