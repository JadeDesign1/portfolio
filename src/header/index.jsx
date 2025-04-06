import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { GiCancel, GiSkills } from "react-icons/gi";
import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./navlink";

const navLink = [
  { id: 1, name: "Home", link: "#home", icon: <AiOutlineHome /> },
  { id: 2, name: "About", link: "#about", icon: <SiAboutdotme /> },
  { id: 3, name: "Skill", link: "#skill", icon: <GiSkills /> },
  { id: 4, name: "Projects", link: "#projects", icon: <GoProjectSymlink /> },
  { id: 5, name: "Contact", link: "#contact", icon: <MdOutlineLocalPhone /> },
];

const Header = () => {
  const [openOverlay, setOverlay] = useState(false);
  const showNav = () => setOverlay(!openOverlay);

  // Animation control for the side navigation
  const motionVariants = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  };

  // Mobile dropdown animation control
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="head fixed pr-6">
      {/* menu icons */}
      <section className="flex text-text3 font-semibold items-center flex-row justify-between">
        <h1>Jade Design</h1>
        {openOverlay ? (
          <GiCancel onClick={showNav} className=" navicon sm:hidden" />
        ) : (
          <AiOutlineMenu onClick={showNav} className="navicon sm:hidden" />
        )}
      </section>

      {/* mobile menu with animation */}
      <motion.nav
        initial="hidden"
        animate={openOverlay ? "visible" : "hidden"}
        variants={mobileMenuVariants}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute top-[42px] left-0 right-0 w-full h-fit bg-bg1 z-20 sm:hidden"
      >
        <section className="w-full flex flex-col gap-1">
          {navLink.map((link, index) => {
            return (
              <a
                onClick={showNav}
                href={link.link}
                key={index}
                className="mobileNav hover:bg-black/40 text-text3"
              >
                <span className="">{link.icon}</span>
                <span className="pl-2">{link.name}</span>
              </a>
            );
          })}
        </section>
      </motion.nav>

      {/* Side Navigation for Larger Screens */}
      <motion.div
        variants={motionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.8 }}
        className="sm:block hidden fixed left-2 top-[20%] z-10"
      >
        <div className="flex flex-col gap-2">
          {navLink.map((sidelink) => (
            <Links key={sidelink.id} links={sidelink} />
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
