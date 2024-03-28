"use client";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogData as data } from "@/app/lib/data";
import { usePathname } from "next/navigation";

const page = () => {
  const path = usePathname();
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
                      path == item.link ? "bg-black" : "bg-secondary-200"
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
                DUBAI'S ARCHITECTURE: A FUSION OF INNOVATION AND EXTRAVAGANCE
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
                src="/static/blog-images/dubai.webp"
                alt="dubai-image"
                fill
              />
            </div>
            {/*-------------------- END MAIN IMAGE -----------------------*/}
            <div className="mb-20">
              <p>
                Dubai, the shining gem of the United Arab Emirates, has earned
                its reputation as a global hub for architectural marvels. With
                its audacious vision and unparalleled ambition, the city has
                transformed itself into a playground for architectural
                creativity. From futuristic skyscrapers to stunning man-made
                islands, Dubai's architectural designs push the boundaries of
                engineering, luxury, and innovation. In this article, we will
                explore some of the most iconic architectural wonders that
                define Dubai's skyline and leave visitors in awe.
              </p>
            </div>
            {/*-------------------- END FIGURE CAPTION  -----------------------*/}
            <div className="flex flex-col">
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">BURJ KHALIFA</h5>
                <p>
                  Standing proudly as the world's tallest building, the Burj
                  Khalifa symbolizes Dubai's determination to reach new heights.
                  Designed by the renowned architecture firm Skidmore, Owings &
                  Merrill, this architectural masterpiece soars to a
                  breathtaking height of 828 meters. The tower's sleek and
                  elegant design draws inspiration from Islamic architecture,
                  with its spiraling structure reminiscent of a desert flower.
                  Visitors can admire the panoramic views of the city from its
                  observation deck, At the Top, which offers a truly
                  awe-inspiring experience.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #1 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">PALM JUMEIRAH</h5>
                <p>
                  Dubai's architectural ingenuity extends beyond the mainland,
                  with the creation of stunning man-made islands such as Palm
                  Jumeirah. Shaped like a palm tree, this artificial archipelago
                  is an engineering marvel that stretches into the Persian Gulf.
                  Its construction involved reclaiming land from the sea and
                  shaping it into an intricate network of residential,
                  commercial, and entertainment areas. The Palm Jumeirah is home
                  to luxurious resorts, including the iconic Atlantis, The Palm,
                  which showcases Dubai's ability to combine opulence and
                  environmental sustainability.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #2 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">THE DUBAI MALL</h5>
                <p>
                  Dubai's ambition is not limited to grand architectural
                  structures; it extends to creating spaces that redefine the
                  concept of shopping. The Dubai Mall, one of the largest malls
                  in the world, offers an extraordinary retail experience.
                  Designed by DP Architects, the mall features a stunning blend
                  of modern and traditional Arabic design elements. It houses
                  over 1,200 retail outlets, including high-end brands,
                  entertainment zones, an aquarium, and an ice-skating rink. The
                  Dubai Mall is a testament to the city's dedication to
                  providing visitors with immersive experiences beyond mere
                  shopping.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #3 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">CAYAN TOWER</h5>
                <p>
                  Imagine a skyscraper that twists as it rises into the
                  sky—welcome to the Cayan Tower, formerly known as the Infinity
                  Tower. Designed by Skidmore, Owings & Merrill, this
                  architectural gem showcases Dubai's passion for pushing
                  boundaries. The tower's unique twist of 90 degrees as it
                  ascends gives it a mesmerizing appearance, and each floor
                  rotates independently. The Cayan Tower stands as a testament
                  to the city's pursuit of architectural innovation and its
                  commitment to creating iconic structures.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #4 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  MUSEUM OF THE FUTURE
                </h5>
                <p>
                  Dubai's architectural vision doesn't stop at creating visual
                  spectacles. The city also embraces projects that foster
                  innovation and technological advancement. The Museum of the
                  Future, set to open in 2023, epitomizes Dubai's commitment to
                  shaping the future. Designed by architect Shaun Killa of Killa
                  Design, the building resembles an elliptical ring with an
                  intricately patterned facade. It will serve as a hub for
                  innovative technologies, showcasing cutting-edge inventions
                  and hosting events that explore humanity's potential.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #5 -----------------------*/}
              <div>
                <p>
                  Dubai's architectural landscape represents an amalgamation of
                  bold ambition, engineering prowess, and artistic expression.
                  From the awe-inspiring heights of the Burj Khalifa to the
                  imaginative artificial islands, each structure exemplifies the
                  city's determination to transcend limits and create a lasting
                  impression. Dubai's architectural design embodies its unique
                  blend of tradition and modernity, and it serves as an
                  inspiration for architects, engineers, and dreamers worldwide.
                  As Dubai continues to evolve and redefine its skyline, we
                  eagerly anticipate the unveiling of future architectural
                  masterpieces in this city of dreams.
                </p>
              </div>
              {/*-------------------- END CONCLUSION -----------------------*/}
            </div>
          </main>
          {/*-------------------- END MAIN SECTION -----------------------*/}
        </div>
        <div className="h-fit lg:h-[280px] flex flex-col lg:flex-row gap-5 items-center justify-between py-20">
          <div className="h-full w-[300px] group  hover:cursor-pointer">
            <Link href="/blog/exploring-the-masterminds-of-architecture">
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
            <Link href="/blog/discovering-the-timeless-beauty-of-japanese-architectural-design">
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
