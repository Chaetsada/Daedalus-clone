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
                SUSTAINABLE AND ENVIRONMENTAL ARCHITECTURAL DESIGN: SHAPING A
                GREENER FUTURE
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
                src="/static/blog-images/sustain.webp"
                alt="sustain-image"
                fill
              />
            </div>
            {/*-------------------- END MAIN IMAGE -----------------------*/}
            <div className="mb-20">
              <p>
                In the face of pressing environmental challenges, the field of
                architecture has taken on a vital role in fostering sustainable
                and environmentally conscious design. With a focus on minimizing
                the ecological footprint of buildings and enhancing their
                efficiency, sustainable architectural design offers a pathway to
                a greener future. This article explores the principles and
                benefits of sustainable architecture, showcasing innovative
                strategies that integrate eco-friendly practices into the built
                environment.
              </p>
            </div>
            {/*-------------------- END FIGURE CAPTION  -----------------------*/}
            <div className="flex flex-col">
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  Designing with Nature in Mind
                </h5>
                <p>
                  Sustainable architectural design starts with a deep
                  understanding and respect for the natural environment. By
                  harmonizing the built environment with nature, architects can
                  create structures that function in synergy with their
                  surroundings. Incorporating elements such as green roofs,
                  vertical gardens, and natural lighting systems, buildings can
                  seamlessly blend with the natural landscape while reducing
                  energy consumption and promoting biodiversity.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #1 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  Energy Efficiency and Renewable Energy
                </h5>
                <p>
                  One of the primary objectives of sustainable architecture is
                  to reduce energy consumption. Through advanced building
                  insulation techniques, efficient HVAC systems, and the
                  integration of renewable energy sources, architects can
                  significantly decrease a building's carbon footprint. Passive
                  solar design principles, such as orienting buildings to
                  maximize natural light and heat, further enhance energy
                  efficiency while creating comfortable living and working
                  spaces.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #2 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  Resource Conservation and Recycling
                </h5>
                <p>
                  Sustainable architectural design places great emphasis on
                  resource conservation and recycling. By incorporating
                  materials with a low environmental impact, such as recycled or
                  reclaimed materials, architects can reduce the depletion of
                  natural resources and minimize waste. Additionally,
                  water-saving features like rainwater harvesting systems,
                  greywater recycling, and efficient plumbing fixtures
                  contribute to overall sustainability and conservation efforts.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #3 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  Bioclimatic Design and Green Infrastructure
                </h5>
                <p>
                  Bioclimatic design utilizes climate-specific strategies to
                  optimize energy efficiency and thermal comfort. By considering
                  factors such as local climate, wind patterns, and solar
                  radiation, architects can create buildings that adapt to their
                  environment, reducing reliance on mechanical systems. Green
                  infrastructure, such as urban gardens, green walls, and
                  permeable surfaces, not only enhance aesthetics but also
                  mitigate the urban heat island effect, promote biodiversity,
                  and improve air quality.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #4 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  Adaptive Reuse and Regeneration
                </h5>
                <p>
                  Sustainable architectural design involves reimagining existing
                  structures and repurposing them for a new lease of life. By
                  transforming old factories, warehouses, and industrial sites
                  into vibrant mixed-use spaces, architects contribute to urban
                  revitalization while minimizing the environmental impact of
                  new construction. Adaptive reuse reduces waste, preserves
                  cultural heritage, and fosters sustainable communities.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #5 -----------------------*/}
              <div className="mb-12">
                <h5 className="text-xl font-heading mb-3">
                  Community Engagement and Well-being
                </h5>
                <p>
                  Sustainable architectural design extends beyond the physical
                  structure itself and embraces the well-being of its occupants
                  and the broader community. Designing spaces that encourage
                  social interaction, collaboration, and access to natural light
                  improves productivity, mental health, and overall quality of
                  life. Furthermore, sustainable buildings can act as
                  educational tools, inspiring communities to adopt more
                  environmentally friendly practices.
                </p>
              </div>
              {/*-------------------- END PARAGRAPH #6 -----------------------*/}
              <div>
                <p>
                  Sustainable and environmental architectural design holds
                  tremendous potential to shape a greener future. By integrating
                  principles such as designing with nature in mind, prioritizing
                  energy efficiency, conserving resources, and fostering
                  community engagement, architects can create buildings that are
                  both aesthetically pleasing and environmentally responsible.
                  As society increasingly recognizes the urgent need for
                  sustainable practices, architects play a crucial role in
                  leading the way toward a more sustainable and resilient built
                  environment. By embracing sustainable architectural design, we
                  can create spaces that harmonize with nature, minimize
                  environmental impact, and inspire a global movement toward a
                  greener and more sustainable future.
                </p>
              </div>
              {/*-------------------- END CONCLUSION -----------------------*/}
            </div>
          </main>
          {/*-------------------- END MAIN SECTION -----------------------*/}
        </div>
        <div className="h-fit lg:h-[280px] flex py-20">
          <div className="h-full w-[300px] group  hover:cursor-pointer">
            <Link href="/blog/discovering-the-timeless-beauty-of-japanese-architectural-design">
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
        </div>
        {/*---------------------- END BUTTON LINK ------------------------*/}
      </div>
      <Footer />
    </div>
  );
};

export default page;
