"use client";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const data = [
  {
    tag: "PEOPLE",
    name: "ARCHITECTURAL MARVELS YOU MUST VISIT BEFORE YOU DIE",
    link: "/blog/architectural-marvels-you-must-visit-before-you-die",
  },
  {
    tag: "PEOPLE",
    name: "FRANK LLOYD WRIGHT: A LEGEND OF ARCHITECTURAL DESIGN",
    link: "/blog/frank-lloyd-wright-a-master-of-architectural-design",
  },

  {
    tag: "ARCHITECTURE",
    name: `DUBAI'S ARCHITECTURE: A FUSION OF INNOVATION AND EXTRAVAGANCE`,
    link: "/blog/dubai-s-architecture-a-fusion-of-innovation-and-extravagance",
  },

  {
    tag: "ARCHITECTURE",
    name: "DISCOVERING THE TIMELESS BEAUTY OF JAPANESE ARCHITECTURAL DESIGN",
    link: "/blog/discovering-the-timeless-beauty-of-japanese-architectural-design",
  },
  {
    tag: "PEOPLE",
    name: "SUSTAINABLE AND ENVIRONMENTAL ARCHITECTURAL DESIGN: SHAPING A GREENER FUTURE",
    link: "/blog/sustainable-and-environmental-architectural-design-shaping-a-greener-future",
  },
];
const page = () => {
  return (
    <div className="min-h-screen">
      <div className="container pt-[170px] px-5 flex flex-col gap-10">
        <div className="flex gap-12">
          <aside className="w-[320px] h-fit hidden md:flex flex-col gap-10">
            {data.map((item, i) => (
              <div key={i} className="group">
                <Link href={item.link} className="flex flex-col gap-3">
                  <div className="w-full h-[2px] bg-secondary-200 relative">
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
                EXPLORING THE MASTERMINDS OF ARCHITECTURE
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
                src="/static/blog-images/explore.webp"
                alt="explore-image"
                fill
              />
            </div>
            {/*-------------------- END MAIN IMAGE -----------------------*/}
            <div className="mb-20">
              <p>
                Architecture is a powerful form of artistic expression that
                shapes the world we live in. Behind every iconic building, there
                is a visionary architect whose creativity, talent, and passion
                have left an indelible mark on our collective history. In this
                article, we will embark on a journey to celebrate some of the
                most famous architects who have revolutionized the field of
                architecture and continue to inspire generations to come.
              </p>
            </div>
            {/*-------------------- END FIGURE CAPTION  -----------------------*/}
            <div className="flex flex-col">
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  FRANK LLOYD WRIGHT (1867-1959)
                </h5>
                <p>
                  Frank Lloyd Wright, an American architect, is often regarded
                  as one of the greatest pioneers in modern architecture. Known
                  for his organic architectural style, Wright designed
                  structures that seamlessly blended with their natural
                  surroundings. Notable works such as Fallingwater, the
                  Guggenheim Museum, and the Robie House exemplify his unique
                  design principles and attention to detail. Wright's innovative
                  approach transformed the way we perceive space and influenced
                  countless architects worldwide.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #1 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  ANTONI GAUDÍ (1852-1926)
                </h5>
                <p>
                  Antoni Gaudí, a Spanish architect, left an unmistakable
                  imprint on the cityscape of Barcelona with his extraordinary
                  works. His masterpieces, including the Sagrada Família, Park
                  Güell, and Casa Batlló, exhibit a distinctive style
                  characterized by intricate details, organic forms, and a
                  fusion of Gothic and Art Nouveau elements. Gaudí's
                  architectural marvels continue to mesmerize visitors, and his
                  unparalleled creativity has made him an enduring icon in the
                  field.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #2 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  ZAHA HADID (1950-2016)
                </h5>
                <p>
                  Zaha Hadid, an Iraqi-British architect, broke numerous
                  barriers in the world of architecture with her bold and
                  avant-garde designs. Known for her futuristic and dynamic
                  style, Hadid's iconic structures, such as the Guangzhou Opera
                  House, the Heydar Aliyev Center, and the London Aquatics
                  Centre, challenge conventional notions of space and form.
                  Hadid's architectural legacy embodies innovation, pushing
                  boundaries, and redefining what is possible in the realm of
                  design.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #3 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  LE CORBUSIER (1887-1965)
                </h5>
                <p>
                  Le Corbusier, a Swiss-French architect, was a pioneer of
                  modern architecture and urban planning. With his "Five Points
                  of Architecture" and principles of functionality, Le Corbusier
                  aimed to create a new aesthetic for the modern era. Noteworthy
                  projects like Villa Savoye, the Unité d'Habitation, and the
                  Chandigarh Capitol Complex showcase his commitment to clean
                  lines, open spaces, and the efficient use of materials. Le
                  Corbusier's ideas continue to influence urban planners and
                  architects globally.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #4 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  I. M. PEI (1917-2019)
                </h5>
                <p>
                  I. M. Pei, a Chinese-American architect, is renowned for his
                  striking modernist designs and innovative use of geometry. His
                  works, such as the Louvre Pyramid in Paris, the Bank of China
                  Tower in Hong Kong, and the Rock and Roll Hall of Fame in
                  Cleveland, reflect his mastery of blending tradition with
                  contemporary aesthetics. Pei's architectural prowess has left
                  an indelible mark on skylines worldwide, and his designs stand
                  as testaments to his unwavering pursuit of excellence.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #5 -----------------------*/}
              <div>
                <p>
                  These are just a few of the many famous architects who have
                  left an indelible impact on the world of architecture. Their
                  visions, creativity, and dedication have shaped our cities,
                  challenged our perceptions, and transformed the way we
                  interact with the built environment. From Frank Lloyd Wright's
                  organic designs to Zaha Hadid's futuristic creations, each
                  architect has contributed to the rich tapestry of
                  architectural history, inspiring future generations to push
                  the boundaries of what is possible. As we celebrate the
                  achievements of these masterminds, we recognize the enduring
                  legacy they have left behind, reminding us of the power of
                  architecture to shape our world.
                </p>
              </div>
              {/*-------------------- END CONCLUSION -----------------------*/}
            </div>
          </main>
          {/*-------------------- END MAIN SECTION -----------------------*/}
        </div>
        <div className="h-fit lg:h-[280px] flex flex-col lg:flex-row gap-5 items-center justify-between py-20">
          <div className="h-full w-[300px] group  hover:cursor-pointer">
            <Link href="/blog/frank-lloyd-wright-a-master-of-architectural-design">
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
            <Link href="/blog/dubai-s-architecture-a-fusion-of-innovation-and-extravagance">
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
