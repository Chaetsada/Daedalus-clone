import Link from "next/link";
import React from "react";

const ftLinks = [
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];

const Footer = () => {
  return (
    <main className="min-h-fit md:h-[40vh] flex bg-dark px-8">
      <div className="container flex flex-col md:flex-row">
        <section className="md:flex-1 h-full py-[40px] px-[20px] md:py-[80px] md:px-[48px] flex justify-start border-b-[2px] md:border-r-[2px] border-gray-800">
          <h6 className="text-xl text-white font-heading font-semibold">DAEDALUS</h6>
        </section>
        {/*------- END LOGO ------*/}
        <section className="w-full md:w-[35%] h-full py-[40px]  px-[20px] md:py-[80px] md:px-[48px] flex flex-col gap-[24px] border-b-[2px] md:border-r-[2px] border-gray-800">
          <h4 className="text-white font-os">LINKS</h4>
          <div className="flex flex-col gap-2">
            {ftLinks.map((link, i) => (
              <Link
                key={i}
                href={link.url}
                className=" text-gray-400 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>
        {/*--- END FOOTER MENU ---*/}
        <section className="flex-1 h-full py-[40px] px-[20px] md:py-[80px] md:px-[48px] flex flex-col gap-[24px]">
          <h4 className="text-white font-os">SOCIALS</h4>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-400 hover:text-white">
              <a href="#">Dribble</a>
            </li>
            <li className="text-gray-400 hover:text-white">
              <a href="#">Youtube</a>
            </li>
            <li className="text-gray-400 hover:text-white">
              <a href="#">Instagram</a>
            </li>
            <li className="text-gray-400 hover:text-white">
              <a href="#">Twitter</a>
            </li>
          </ul>
        </section>
        {/*--- END SOCAIL LINK ---*/}
      </div>
    </main>
  );
};

export default Footer;
