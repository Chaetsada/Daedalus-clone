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
    name: "EXPLORING THE MASTERMINDS OF ARCHITECTURE",
    link: "/blog/exploring-the-masterminds-of-architecture",
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
                FRANK LLOYD WRIGHT: A LEGEND OF ARCHITECTURAL DESIGN
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
                src="/static/blog-images/frank.webp"
                alt="frank-lloyed-image"
                fill
              />
            </div>
            {/*-------------------- END MAIN IMAGE -----------------------*/}
            <div className="mb-20">
              <p>
                Frank Lloyd Wright, an iconic American architect, is revered for
                his groundbreaking architectural designs that continue to
                inspire and captivate us to this day. With a career spanning
                over seven decades, Wright left an indelible mark on the world
                of architecture, revolutionizing the field with his innovative
                concepts and organic approach. In this article, we will delve
                into the visionary mind of Frank Lloyd Wright and explore the
                key elements that define his architectural design.
              </p>
            </div>
            {/*-------------------- END FIGURE CAPTION  -----------------------*/}
            <div className="flex flex-col">
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  ORGANIC ARCHITECTURE
                </h5>
                <p>
                  At the core of Frank Lloyd Wright's design philosophy was the
                  concept of organic architecture. He believed that buildings
                  should be harmoniously integrated with their natural
                  surroundings, reflecting the inherent beauty of the
                  environment. Wright's designs often incorporated natural
                  materials, such as stone, wood, and glass, and featured open
                  floor plans that blurred the boundaries between indoor and
                  outdoor spaces. Fallingwater, his masterpiece nestled within
                  the forest of Pennsylvania, exemplifies this approach with its
                  cantilevered design and seamless integration with the
                  surrounding landscape.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #1 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">UNITY WITH NATURE</h5>
                <p>
                  Wright sought to establish a connection between human
                  habitation and the natural world. His designs often featured
                  large windows and skylights, allowing ample natural light to
                  flood the interiors. He also incorporated elements like water
                  features, gardens, and courtyards to create a sense of
                  tranquility and serenity. Taliesin West, his winter home and
                  architectural school in Arizona, showcases his belief in
                  integrating nature and architecture harmoniously, with its
                  terraces and gardens that merge seamlessly with the desert
                  surroundings.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #2 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  ORGANIC MATERIALS AND FORMS
                </h5>
                <p>
                  Rejecting the ornate and elaborate styles of his time, Wright
                  embraced simplicity and the use of natural materials. He
                  believed that materials should be used in their purest form to
                  showcase their innate beauty. His designs often incorporated
                  exposed brick, stone, and concrete, which were left in their
                  natural state or adorned with intricate geometric patterns.
                  The Guggenheim Museum in New York City stands as a testament
                  to his innovative use of materials, with its spiraling ramp
                  that creates a continuous flow and a unique viewing
                  experience.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #3 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  INNOVATIVE STRUCTURAL SYSTEMS
                </h5>
                <p>
                  Wright's architectural vision was not limited to aesthetics
                  alone but also encompassed structural innovation. He developed
                  the concept of the cantilever, allowing for extended
                  horizontal projections without the need for excessive
                  supports. This approach resulted in visually striking designs
                  that defied conventional architectural norms. The Johnson Wax
                  Headquarters in Wisconsin features a remarkable cantilevered
                  roof, creating a sense of weightlessness and visual intrigue.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #4 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  INTEGRATION OF INTERIOR AND EXTERIOR SPACES
                </h5>
                <p>
                  Wright believed that architecture should embrace the totality
                  of human experience. He aimed to break down the barriers
                  between interior and exterior spaces, creating a seamless flow
                  that connected people with their surroundings. His open floor
                  plans, generous use of windows, and incorporation of outdoor
                  elements facilitated a sense of unity and harmony. The Robie
                  House in Chicago exemplifies this concept, with its horizontal
                  emphasis, expansive windows, and integrated balconies that
                  blur the distinction between indoor and outdoor living.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #5 -----------------------*/}
              <div>
                <p>
                  Frank Lloyd Wright's architectural designs have stood the test
                  of time, leaving an indelible mark on the field of
                  architecture. Through his innovative approach, he reshaped our
                  understanding of how buildings should interact with their
                  natural surroundings and the people who inhabit them. His
                  emphasis on organic architecture, unity with nature,
                  innovative structural systems, and integration of interior and
                  exterior spaces continue to inspire architects and designers
                  worldwide. Frank Lloyd Wright's legacy serves as a constant
                  reminder that great design is not only aesthetically pleasing
                  but also deeply rooted in the harmony between people,
                  architecture, and the environment.
                </p>
              </div>
              {/*-------------------- END CONCLUSION -----------------------*/}
            </div>
          </main>
          {/*-------------------- END MAIN SECTION -----------------------*/}
        </div>
        <div className="h-fit lg:h-[280px] flex flex-col lg:flex-row gap-5 items-center justify-between py-20">
          <div className="h-full w-[300px] group  hover:cursor-pointer">
            <Link href="/blog/architectural-marvels-you-must-visit-before-you-die">
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
            <Link href="/blog/exploring-the-masterminds-of-architecture">
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
