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
                ARCHITECTURAL MARVELS YOU MUST VISIT BEFORE YOU DIE
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
                src="/static/blog-images/architect.webp"
                alt="architect-image"
                fill
              />
            </div>
            {/*-------------------- END MAIN IMAGE -----------------------*/}
            <div className="mb-20">
              <p>
                Architecture is a remarkable blend of art, engineering, and
                culture, shaping the way we experience the world around us.
                Throughout history, visionary architects have crafted
                extraordinary structures that not only leave us in awe but also
                reflect the creativity and ingenuity of human civilization. In
                this article, we will embark on a journey to explore some of the
                most breathtaking architectural marvels from different corners
                of the globe. These iconic buildings deserve a spot on every
                travel enthusiast's bucket list.
              </p>
            </div>
            {/*-------------------- END FIGURE CAPTION  -----------------------*/}
            <div className="flex flex-col">
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  THE GREAT PYRAMIDS OF GIZA, EGYPT
                </h5>
                <p>
                  Standing tall for over 4,500 years, the Great Pyramids of Giza
                  continue to awe and inspire visitors. This incredible
                  architectural wonder showcases the mastery of the ancient
                  Egyptians. As the only surviving Wonder of the Ancient World,
                  the pyramids are a testament to the skill and dedication of
                  the builders who created these monumental structures as tombs
                  for pharaohs.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #1 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">TAJ MAHAL, INDIA</h5>
                <p>
                  Considered a symbol of eternal love, the Taj Mahal is an
                  architectural gem located in Agra, India. This UNESCO World
                  Heritage Site was built by Emperor Shah Jahan in memory of his
                  beloved wife. The pristine white marble, intricate carvings,
                  and symmetrical design make the Taj Mahal an exquisite
                  masterpiece of Mughal architecture.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #2 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  SYDNEY OPERA HOUSE, AUSTRALIA
                </h5>
                <p>
                  A true icon of modern architecture, the Sydney Opera House is
                  a renowned symbol of Australia. Designed by Danish architect
                  Jørn Utzon, this multi-venue performing arts center is
                  characterized by its distinctive sail-shaped roof. A visit to
                  this architectural marvel not only offers stunning views of
                  the Sydney Harbor but also allows you to witness world-class
                  performances within its magnificent halls.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #3 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  SAGRADA FAMILIA, SPAIN
                </h5>
                <p>
                  Antoni Gaudí's unfinished masterpiece, the Sagrada Familia, is
                  a unique blend of Gothic and Art Nouveau architecture. Located
                  in Barcelona, Spain, this basilica has been under construction
                  for over a century. Its intricate facades, towering spires,
                  and awe-inspiring interior, featuring an interplay of light
                  and color, make it one of the most extraordinary religious
                  structures in the world.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #4 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  BURJ KHALIFA, UNITED ARAB EMIRATES
                </h5>
                <p>
                  Dominating the skyline of Dubai, the Burj Khalifa is the
                  tallest man-made structure on Earth. Designed by Adrian Smith,
                  this skyscraper is a testament to human engineering and
                  ambition. Its sleek design and breathtaking views from the
                  observation deck on the 148th floor make it a must-visit
                  architectural marvel.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #5 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  THE LOUVRE PYRAMID, FRANCE
                </h5>
                <p>
                  Nestled in the heart of Paris, the Louvre Pyramid is an
                  architectural masterpiece that blends history and modernity.
                  Designed by Chinese-American architect I.M. Pei, the glass
                  pyramid serves as the main entrance to the iconic Louvre
                  Museum. Its geometric elegance and striking juxtaposition
                  against the classical architecture of the museum have made it
                  an iconic symbol of Paris.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #6 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  FALLINGWATER, UNITED STATES
                </h5>
                <p>
                  Frank Lloyd Wright's Fallingwater, located in rural
                  Pennsylvania, is a true testament to harmonious integration
                  with nature. This remarkable residence, built over a
                  waterfall, seamlessly blends organic architecture with its
                  surroundings. The innovative use of cantilevers and natural
                  materials make Fallingwater a must-see for architecture
                  enthusiasts.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #7 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  THE COLOSSEUM, ITALY
                </h5>
                <p>
                  As a marvel of ancient Roman architecture, the Colosseum in
                  Rome remains an enduring symbol of grandeur and engineering
                  prowess. This amphitheater, once used for gladiatorial
                  contests and spectacles, showcases the architectural
                  brilliance of the Roman Empire. Exploring the vast corridors
                  and standing amidst its towering ruins transports visitors
                  back in time.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #8 -----------------------*/}
              <div>
                <p>
                  Architecture has the power to evoke emotions, inspire
                  generations, and leave a lasting impact on our collective
                  consciousness. The buildings mentioned above represent just a
                  fraction of the world's architectural wonders, each with its
                  own unique story and significance. Exploring these remarkable
                  structures is not only a journey into the past and present but
                  also an opportunity to appreciate the remarkable achievements
                  of human creativity and innovation. So, make sure to include
                  these architectural marvels on your bucket list and embark on
                  a voyage to witness their beauty firsthand.
                </p>
              </div>
              {/*-------------------- END CONCLUSION -----------------------*/}
            </div>
          </main>
          {/*-------------------- END MAIN SECTION -----------------------*/}
        </div>
        <div className="h-fit lg:h-[280px] flex  items-center justify-end py-20">
          <div className=" h-full w-[300px] group relative hover:cursor-pointer">
            <Link href="/blog/frank-lloyd-wright-a-master-of-architectural-design">
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
