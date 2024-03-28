import React from "react";
import ButtonLink from "./ButtonLink";
import Image from "next/image";

const blogs = [
  {
    imageSrc: "blog1",
    link: "/blog/architectural-marvels-you-must-visit-before-you-die",
    tag: "ARCHITECTURE",
    date: "JUNE 1, 2023",
    title: "ARCHITECTURAL MARVELS YOU MUST VISIT BEFORE YOU DIE",
  },
  {
    imageSrc: "blog2",
    link: "/blog/frank-lloyd-wright-a-master-of-architectural-design",
    tag: "PEOPLE",
    date: "MAY 1, 2023",
    title: "FRANK LLOYD WRIGHT: A LEGEND OF ARCHITECTURAL DESIGN",
  },
  {
    imageSrc: "blog3",
    link: "/blog/exploring-the-masterminds-of-architecture",
    tag: "PEOPLE",
    date: "APRIL 1, 2023",
    title: "EXPLORING THE MASTERMINDS OF ARCHITECTURE",
  },
];

const Blog = () => {
  return (
    <main className="min-h-fit flex items-center justify-center px-5 md:py-[30px] ">
      <div className="container min-h-fit py-[100px] flex flex-col gap-5 md:gap-16">
        <header className="w-full flex flex-col md:flex-row items-start justify-between gap-5">
          <div>
            <h2 className="text-5xl font-heading">BLOG</h2>
          </div>
          <ButtonLink name={"View all"} link={"/blog"} />
        </header>
        {/*------------------ END HEADER  --------------------------*/}
        <div className="w-full min-h-fit">
          <div className="flex flex-col md:flex-row gap-8 justify-end">
            {blogs.map((blog, i) => (
              <a key={i} href={blog.link}>
                <div className="md:w-[320px] h-[360px] flex flex-col gap-4 pb-3 border-b-[2px] border-secondary-200 group">
                  <div className="min-h-[70%] w-full overflow-hidden">
                    <div className="w-full h-full relative transition-all duration-300 group-hover:scale-110">
                      <Image
                        className=" object-cover"
                        src={`/static/home-images/${blog.imageSrc}.webp`}
                        alt="blog-images"
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <small className="text-gray-600">{blog.tag}</small>
                    <small className="text-gray-600">{blog.date}</small>
                  </div>
                  <div>
                    <h5 className="text-xl font-heading leading-tight">
                      {blog.title}
                    </h5>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/*---------------------- END SECTION -----------------------*/}
      </div>
    </main>
  );
};

export default Blog;
