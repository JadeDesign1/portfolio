import { Ski } from "./Skills";

const Skills = () => {
  return (
    <section id="skill" className="sm:h-screen h-full scroll-mt-8 w-screen">
      <div className="flex flex-col h-full gap-4 py-8  bg-black items-center">
        <h2 className="phead  text-text4 text-[18px] sm:text-[24px]">
          My Skills
        </h2>
        <div className="flex flex-row w-[90%] sm:w-[80%] sm:pl-4 mx-auto flex-wrap justify-center gap-2 md:gap-4">
          {Ski.map((ski, i) => {
            return (
              <section key={i}>
                <h3 className="phead  text-text4 text-[18px] sm:text-[20px] font-semibold pb-1 ">
                  {ski.title}
                </h3>
                <p className="text text-[16px] sm:text-[18px] text-text3">
                  {ski.desc}
                </p>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
