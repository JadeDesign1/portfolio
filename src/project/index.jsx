import { FaArrowCircleRight } from "react-icons/fa";
import rider from "../assets/rider.png";
import thrift from "../assets/thrift.png";
import anchormed from "../assets/anchormed.png";
import portfolio from "../assets/portfolio.png";
import laundry from "../assets/laundry.png";
import safeguard from "../assets/safeguard.png";

const project = [
  {
    title: "Rider App",
    link: "https://delivery-client-server.vercel.app/",
    img: rider,
  },
  {
    title: "Thrift",
    link: "https://thrift-git-main-josrph135.vercel.app/",
    img: thrift,
  },
  {
    title: "Anchormed Hospital",
    link: "https://anchormed.vercel.app/",
    img: anchormed,
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
      <section className="flex flex-col sm:pl-16 gap-4">
        {project.map((proj, i) => {
          return (
            <article
              className="bg-white group hover:scale-105 duration-150  flex sm:flex-row flex-col rounded-lg text-black"
              key={i}
            >
              <div className="px-4 sm:px-10 sm:w-3/5 my-auto py-2 sm:py-4 md:py-8 duration-200">
                <h4 className="font-semibold header text-xs sm:text-sm pb-2">
                  {proj.title}
                </h4>
                <div className="w-full sm:hidden">
                  <img
                    src={proj.img}
                    className=" h-full w-full sm:rounded-r-lg "
                    alt=""
                  />
                </div>
                <p className="text w-full">{proj.desc}</p>
                <div className="sm:pt-4 pt-2">
                  <a
                    target="blank"
                    className="bg-black text-text4 text-[10px] sm:text-sm px-2 sm:px-4 duration-200 flex-row flex w-fit gap-2 items-center py-[5px] rounded"
                    href={proj.link}
                  >
                    <span>View My Work</span>
                    <span className="text-sm group group-hover:text-yellow-400">
                      <FaArrowCircleRight />
                    </span>
                  </a>
                </div>
              </div>
              <div className="hidden sm:block sm:w-2/5">
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
