import { FaArrowCircleRight } from "react-icons/fa";
import rider from "../assets/rider.png";

import portfolio from "../assets/portfolio.png";

import safeguard from "../assets/safeguard.png";

const project = [
  
  {    title: "Cosavings",
    link: "https://cosavings.vercel.app/",
    img: "/ajonest.png",},
  {
    title: "Product Store",
    link: "https://productstore-mu.vercel.app/",
    img: "/pstore.png",
  },
  {
    title: "Joroservices",
    link: "https://www.joroservices.org",
    img: "/jservices1.png",
  },
  {
    title: "Rider App",
    link: "https://delivery-client-server.vercel.app/",
    img: rider,
  },
  {
    title: "Safeguard pet",
    link: "https://safeguard-one.vercel.app/",
    img: safeguard,
  },
  {
    title: "Portfolio",
    link: "https://micheal-portfolio-dusky.vercel.app/",
    img: portfolio,
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-8 bg-bg2 px-4 md:px-10 py-8"
    >
      <h4 className="text-center text-base phead font-semibold text-text3 text-[18px] sm:text-[24px] duration-200 pb-4 md:pb-6 ">
        Featured Work
      </h4>
      <section className="grid grid-cols-1 lg:grid-cols-2 sm:pl-16 gap-8 pr-8">
        {project.map((proj, i) => {
          return (
            <article
              className="bg-white group hover:scale-105 duration-150 h-[40vh] flex sm:flex-row flex-col rounded-lg text-black"
              key={i}
            >
              <div className="px-2 flex flex-row items-center sm:px-4 my-auto py-2 sm:py-4 md:py-8 lg:flex-col  duration-200">
                <h4 className="font-semibold whitespace-nowrap header text-xs sm:text-sm pb-2">
                  {proj.title}
                </h4>

                <p className="text w-full">{proj.desc}</p>
                <div className="sm:pt-4 pt-2">
                  <a
                    target="blank"
                    className="bg-black text-text4 text-[10px] sm:text-sm px-2 sm:px-4 duration-200 flex-row flex w-fit gap-2 items-center py-[5px] rounded whitespace-nowrap"
                    href={proj.link}
                  >
                    <span>Live Demo</span>
                    <span className="text-sm group group-hover:text-yellow-400">
                      <FaArrowCircleRight />
                    </span>
                  </a>
                </div>
              </div>
              <div className="w-full">
                <img
                  src={proj.img}
                  className=" h-full w-full sm:rounded-r-lg "
                  alt=""
                />
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
