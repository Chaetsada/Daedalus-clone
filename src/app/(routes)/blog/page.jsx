import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPage = () => {
  return (
    <main>
      <div className="container pt-[170px] px-5">
        <div className="flex flex-col gap-8">
          <header className="mb-12">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading ">
              BLOG
            </h1>
          </header>

          <section className="flex flex-col lg:flex-row gap-8">
            <div className="h-[360px] lg:h-[672px] lg:w-[90%] group">
              <Link href="/blog/architectural-marvels-you-must-visit-before-you-die">
                <div className="h-full w-full flex flex-col justify-between">
                  <div className="h-[250px] lg:h-[88%] overflow-hidden relative">
                    <Image
                      className="object-cover transition-all duration-300 group-hover:scale-110"
                      src="/static/blog-images/architect.webp"
                      alt="blog-images"
                      fill
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <small className="text-gray-500">PEOPLE</small>
                    <small className="text-gray-500">MAY 2,2023</small>
                  </div>
                  <div>
                    <h5 className="text-base md:text-xl font-heading">
                      ARCHITECTURAL MARVELS YOU MUST VISIT BEFORE YOU DIE
                    </h5>
                  </div>
                  <div className="h-[2px] w-full bg-secondary-100" />
                </div>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-8">
              <div className="h-[360px] lg:h-1/2  group ">
                <Link href="/blog/frank-lloyd-wright-a-master-of-architectural-design">
                  <div className="h-full flex flex-col justify-between">
                    <div className="h-[250px] lg:h-[200px] overflow-hidden relative">
                      <Image
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                        src="/static/blog-images/frank.webp"
                        alt="blog-image"
                        fill
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <small className="text-gray-500">PEOPLE</small>
                      <small className="text-gray-500">MAY 2,2023</small>
                    </div>
                    <div>
                      <h5 className="text-base md:text-xl font-heading">
                        ARCHITECTURAL MARVELS YOU MUST VISIT BEFORE YOU DIE
                      </h5>
                    </div>
                    <div className="h-[2px] w-full bg-secondary-100" />
                  </div>
                </Link>
              </div>
              <div className="h-[360px] lg:h-1/2  group ">
                <Link href="/blog/exploring-the-masterminds-of-architecture">
                  <div className="h-full flex flex-col justify-between">
                    <div className="h-[250px] lg:h-[200px] overflow-hidden relative">
                      <Image
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                        src="/static/blog-images/explore.webp"
                        alt="blog-image"
                        fill
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <small className="text-gray-500">PEOPLE</small>
                      <small className="text-gray-500">MAY 2,2023</small>
                    </div>
                    <div>
                      <h5 className="text-base md:text-xl font-heading">
                        ARCHITECTURAL MARVELS YOU MUST VISIT BEFORE YOU DIE
                      </h5>
                    </div>
                    <div className="h-[2px] w-full bg-secondary-100" />
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-5 sm:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="h-[360px] group">
              <Link href="/blog/dubai-s-architecture-a-fusion-of-innovation-and-extravagance">
                <div className="h-full flex flex-col justify-between">
                  <div className="h-[250px] lg:h-[245px] overflow-hidden relative">
                    <Image
                      className="object-cover transition-all duration-300 group-hover:scale-110"
                      src="/static/blog-images/dubai.webp"
                      alt="blog-image"
                      fill
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <small className="text-gray-500">PEOPLE</small>
                    <small className="text-gray-500">MAY 2,2023</small>
                  </div>
                  <div>
                    <h5 className="text-base md:text-xl font-heading">
                      DUBAI'S ARCHITECTURE: A FUSION OF INNOVATION AND
                      EXTRAVAGANCE
                    </h5>
                  </div>
                  <div className="h-[2px] w-full bg-secondary-100" />
                </div>
              </Link>
            </div>
            <div className="h-[360px] group">
              <Link href="/blog/sustainable-and-environmental-architectural-design-shaping-a-greener-future">
                <div className="h-full flex flex-col justify-between">
                  <div className="h-[250px] lg:h-[245px] overflow-hidden relative">
                    <Image
                      className="object-cover transition-all duration-300 group-hover:scale-110"
                      src="/static/blog-images/sustain.webp"
                      alt="blog-image"
                      fill
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <small className="text-gray-500">PEOPLE</small>
                    <small className="text-gray-500">MAY 2,2023</small>
                  </div>
                  <div>
                    <h5 className="text-base md:text-xl font-heading">
                      SUSTAINABLE AND ENVIRONMENTAL ARCHITECTURAL DESIGN
                    </h5>
                  </div>
                  <div className="h-[2px] w-full bg-secondary-100" />
                </div>
              </Link>
            </div>
            <div className="h-[360px] group">
              <Link href="/blog/discovering-the-timeless-beauty-of-japanese-architectural-design">
                <div className="h-full flex flex-col justify-between">
                  <div className="h-[250px] lg:h-[245px] overflow-hidden relative">
                    <Image
                      className="object-cover transition-all duration-300 group-hover:scale-110"
                      src="/static/blog-images/discover.webp"
                      alt="blog-image"
                      fill
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <small className="text-gray-500">PEOPLE</small>
                    <small className="text-gray-500">MAY 2,2023</small>
                  </div>
                  <div>
                    <h5 className="text-base md:text-xl font-heading">
                      DISCOVERING THE TIMELESS BEAUTY OF JAPANESE ARCHITECTURAL
                      DESIGN
                    </h5>
                  </div>
                  <div className="h-[2px] w-full bg-secondary-100" />
                </div>
              </Link>
            </div>
          </section>

          <div className="w-full h-[280px] p-7 flex justify-center my-10">
            <div className="w-[120px] h-full flex flex-col justify-center relative group hover:cursor-pointer">
              <div className="flex-1 flex justify-center items-center">
                <h6 className="text-base font-heading">LOAD MORE</h6>
              </div>
              <div className="size-[120px] rounded-full border-[2px] border-secondary-100 transition-all duration-300 group-hover:border-black"></div>
              <div className="h-[100px] w-[2px] absolute top-20 left-1/2 -translate-x-1/2 bg-black" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default blogPage;
