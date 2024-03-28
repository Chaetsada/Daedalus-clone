"use client";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogData as data } from "@/app/lib/data";
import { usePathname } from "next/navigation";

const page = () => {
  const pathName = usePathname();
  return (
    <div className="min-h-screen">
      <div className="container pt-[170px] px-5 flex flex-col gap-10">
        <div className="flex gap-12">
          <aside className="w-[320px] h-fit hidden md:flex flex-col gap-10">
            {data.map((item, i) => (
              <div key={i} className="group">
                <Link href={item.link} className="flex flex-col gap-3">
                  <div
                    className={`w-full h-[2px]  relative ${
                      pathName == item.link ? "bg-black" : "bg-secondary-200"
                    }`}
                  >
                    <div className="absolute z-10 left-0 top-0 h-[2px] opacity-5 w-0 bg-black transition-all duration-500 group-hover:opacity-100 group-hover:w-full" />
                  </div>
                  <p className="text-xs text-gray-500">{item.tag}</p>
                  <h6 className="font-heading leading-none">{item.name}</h6>
                </Link>
              </div>
            ))}
          </aside>
          {/*---------------------- END ASIDE SECTION --------------------------*/}
          <main className="flex-1  flex flex-col ">
            <header className="mb-5">
              <h2 className="text-3xl md:text-5xl font-heading">
                DISCOVERING THE TIMELESS BEAUTY OF JAPANESE ARCHITECTURAL DESIGN
              </h2>
            </header>
            <div className="flex items-center justify-between mb-12">
              <small className="text-gray-500">ARCHITECTURE</small>
              <small className="text-gray-500">JUNE 1,2023</small>
            </div>
            {/*-------------------- END HEADER -----------------------*/}
            <div className="h-[50vw] lg:h-[410px] relative mb-10">
              <Image
                className="object-cover"
                src="/static/blog-images/discover.webp"
                alt="discover-image"
                fill
              />
            </div>
            {/*-------------------- END MAIN IMAGE -----------------------*/}
            <div className="mb-20">
              <p>
                When it comes to architectural design, few cultures can rival
                the elegance, precision, and timelessness of Japanese
                architecture. Rooted in a rich history that spans centuries,
                Japanese design principles have influenced and inspired
                architects worldwide. From the minimalist aesthetics of
                traditional homes to the innovative designs of contemporary
                buildings, Japanese architecture continues to captivate and
                enchant observers. In this article, we delve into the essence of
                Japanese architectural design, exploring its key elements and
                the philosophy that underlies its creation.
              </p>
            </div>
            {/*-------------------- END FIGURE CAPTION  -----------------------*/}
            <div className="flex flex-col">
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  HARMONY WITH NATURE
                </h5>
                <p>
                  One of the fundamental principles of Japanese architectural
                  design is the seamless integration with nature. Drawing
                  inspiration from the country's stunning landscapes,
                  architecture in Japan often embraces the concept of "suki" or
                  "emptiness." This philosophy seeks to create a harmonious
                  relationship between the built environment and the natural
                  world surrounding it. Open spaces, large windows, and sliding
                  doors, such as the traditional "shoji" screens, allow for a
                  constant interplay of light, shadow, and the changing seasons.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #1 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  SIMPLICITY AND MINIMALISM
                </h5>
                <p>
                  Japanese architectural design is characterized by its
                  simplicity and minimalism. The concept of "less is more" is
                  deeply ingrained in Japanese culture and is evident in the
                  clean lines, uncluttered spaces, and restrained color palettes
                  often found in traditional Japanese homes. By eliminating
                  unnecessary ornamentation and focusing on essential elements,
                  Japanese architecture achieves a sense of tranquility and
                  balance that resonates with its occupants.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #2 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  MODULAR AND FLEXIBLE SPACES
                </h5>
                <p>
                  Flexibility and adaptability are key features of Japanese
                  architecture. Traditional Japanese houses are built using a
                  modular system that allows for easy reconfiguration of rooms
                  to accommodate changing needs. Sliding walls, known as
                  "fusuma" and "shoji," enable homeowners to transform open-plan
                  spaces into intimate rooms or merge separate areas for larger
                  gatherings. This flexibility reflects the practicality and
                  efficiency valued in Japanese culture.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #3 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  USE OF NATURAL MATERIALS
                </h5>
                <p>
                  The choice of materials plays a crucial role in Japanese
                  architecture. Natural materials, such as wood, stone, and
                  paper, are favored for their organic beauty and ability to age
                  gracefully. Traditional Japanese homes often employ wooden
                  frameworks, such as "post-and-beam" construction, and feature
                  intricate joinery techniques that eliminate the need for
                  nails. By utilizing natural materials, Japanese architects
                  create spaces that feel warm, inviting, and connected to the
                  environment.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #4 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  ATTENTION TO DETAIL AND CRAFTSMANSHIP
                </h5>
                <p>
                  Japanese architectural design is renowned for its meticulous
                  attention to detail and exceptional craftsmanship. From the
                  intricate wooden lattice screens called "kumiko" to the art of
                  Japanese garden design, every element is carefully considered
                  and executed with precision. Japanese artisans take immense
                  pride in their work, and this commitment to perfection is
                  reflected in the flawless execution of architectural details,
                  resulting in spaces that exude a sense of timeless beauty.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #5 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  INTEGRATION OF TRADITION AND MODERNITY
                </h5>
                <p>
                  While deeply rooted in tradition, Japanese architecture
                  seamlessly incorporates modern elements and technologies.
                  Contemporary Japanese architects are adept at blending ancient
                  design principles with cutting-edge materials and sustainable
                  practices. This integration of tradition and modernity has
                  given rise to innovative structures that are both visually
                  striking and functional, such as the Tokyo Skytree and the
                  Naoshima Contemporary Art Museum.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #6 -----------------------*/}
              <div>
                <p>
                  Japanese architectural design is a testament to the harmonious
                  coexistence of man and nature. Its simplicity, flexibility,
                  and attention to detail create spaces that evoke a sense of
                  peace and serenity. By embracing the principles of harmony,
                  minimalism, and craftsmanship, Japanese architecture has left
                  an indelible mark on the global design landscape. As we
                  continue to explore and appreciate the beauty of Japanese
                  architecture, we gain a deeper understanding of the profound
                  connection between the built environment and the human
                  experience.
                </p>
              </div>
              {/*-------------------- END CONCLUSION -----------------------*/}
            </div>
          </main>
          {/*-------------------- END MAIN SECTION -----------------------*/}
        </div>
        <div className="h-fit lg:h-[280px] flex flex-col lg:flex-row gap-5 items-center justify-between py-20">
          <div className="h-full w-[300px] group  hover:cursor-pointer">
            <Link href="/blog/dubai-s-architecture-a-fusion-of-innovation-and-extravagance">
              <div className="flex relative">
                <div className="size-[120px] border-[2px] border-secondary-200 rounded-full transition-all duration-300 group-hover:border-black" />
                <div className="flex-1 flex items-center justify-end">
                  <h5>PREVIOUS POST</h5>
                </div>
                <div className="absolute z-10 top-1/2 left-16 -translate-y-1/2 w-[100px] h-[2px] bg-black" />
              </div>
            </Link>
          </div>
          {/*--- PREVIOUS BUTTON ---*/}
          <div className=" h-full w-[300px] group relative hover:cursor-pointer">
            <Link href="/blog/sustainable-and-environmental-architectural-design-shaping-a-greener-future">
              <div className="flex relative">
                <div className="flex-1 flex items-center justify-start">
                  <h5>NEXT POST</h5>
                </div>
                <div className="size-[120px] border-[2px] border-secondary-200 rounded-full transition-all duration-300 group-hover:border-black" />
                <div className="absolute z-10 top-1/2 right-16 -translate-y-1/2 w-[130px] h-[2px] bg-black" />
              </div>
            </Link>
          </div>
          {/*--- NEXT BUTTON ---*/}
        </div>
        {/*---------------------- END BUTTON LINK ------------------------*/}
      </div>
      <Footer />
    </div>
  );
};

export default page;
