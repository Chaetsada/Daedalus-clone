import React from "react";
import ButtonLink from "./ButtonLink";

const stats = [
  { data: "19", title: "Years of experience" },
  { data: "06", title: "Team members" },
  { data: "09", title: "Countries operated in" },
  { data: "100+", title: "Completed projects" },
];

const About = () => {
  return (
    <main className="min-h-fit flex items-center justify-center px-12 md:px-[100px]  md:py-[80px] ">
      <div className="container min-h-fit  py-[100px] flex flex-col md:flex-row gap-5 md:gap-16">
        <div className="md:w-[35%] h-full flex flex-col gap-10 ">
          <div>
            <h2 className="text-4xl md:text-5xl font-of uppercase">About us</h2>
          </div>
          <ButtonLink name={"Learn more"} link={"/about"} />
        </div>
        {/*----------- END SECTION - 1  ---------------*/}
        <div className="flex-1 h-full flex flex-col gap-10">
          <div>
            <p className="text-xs md:text-base text-pretty">
              Daedalus Architects is a U.S. based architecture company
              recognized for sustainable and innovative residential, leisure,
              and workplace environments. We stand at the forefront of new
              trends in design, technology, and architecture.
            </p>
          </div>
          <div className=" grid md:grid-cols-2 max-w-[500px] gap-8">
            {stats.map((item, i) => (
              <div key={i} className="max-w-[200px] flex flex-col gap-3">
                <h4 className="text-4xl font-heading">{item.data}</h4>
                <span className="w-full h-[2px] bg-secondary-200" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        {/*----------- END SECTION - 2  ---------------*/}
      </div>
    </main>
  );
};

export default About;
