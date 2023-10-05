import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineLunchDining , MdOutlineLocalPhone} from "react-icons/md";
import {  SiAboutdotme } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import {GiCancel} from "react-icons/gi";
import React, { useEffect, useRef, useState } from 'react'
import Resource from './resource'
import { motion, useAnimation, useInView } from 'framer-motion'


const Links = ({icon , href}) => {
  return (
    <a href={href} className=' rounded-full shadow-lg bg-white text-primary-0 text-xl shadow-white  m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-300'> {icon}</a>
  )
}

const Header = () => {
    const [nav , setNav] = useState(false)
    const showNav = () => setNav(!nav)
    const ref = useRef()
    const isInView = useInView(ref)
    const control = useAnimation()

    useEffect(() => {
      if(isInView){
        control.start("visible")
      }
    },[isInView])

    
    const navLink = [
        {id : 1 , name : 'Home', link : '#home' ,},
        {id : 2 , name : 'About', link : '#about'},
        {id : 3 , name : 'Projects', link : '#projects'},
        {id : 4 , name : 'Contact', link : '#contact'},
        
        
    ]

  return (
    <div>
      
        {nav ? (<GiCancel onClick={showNav}  className=' cursor-pointer text-primary-0 text-2xl font-semibold  absolute top-4 right-4 z-[99] md:hidden block'/>) : (<AiOutlineMenu onClick={showNav}  className=' cursor-pointer text-primary-0 text-2xl font-semibold  absolute top-4 right-4 z-[99] md:hidden block'/>)}
        
        {nav ? (
            <div className=' fixed w-full h-screen bg-black flex flex-col gap-4 justify-center items-center z-50 md:hidden '>
             {navLink.map((link , index) => {
                    
                    return(
                        <a onClick={showNav} href={link.link} key={index} className=' w-[75%] justify-center flex items-center rounded-full shadow-lg text-primary-0 bg-secondary-0/80 text-[22px] font-bold shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    
                    <span className=' pl-4'>{link.name}</span>
                   </a>
                    )
                  
                  })}
            </div>
        ) : (
           ""
        )}

      <motion.div
        ref={ref}
        variants={{hidden: {opacity: 0, x: -75}, visible: {opacity: 1, x: 1}}}
        initial={"hidden"}
        animate={control}
        transition={{delay:0.5, duration:0.8}}
        className=' md:block hidden fixed left-3 top-44 z-10 '
      >
        <div className=' flex flex-col gap-2'>
          <Links  icon = { <AiOutlineHome />} href={`#main`}/>
          <Links  icon = { < SiAboutdotme />} href={`#about`}/>
          <Links   icon = { <GoProjectSymlink />} href={`#projects`}/>
          <Links   icon = { <MdOutlineLunchDining />} href={`#resume`}/>
          <Links   icon = { <MdOutlineLocalPhone />} href={`#contact`}/>
        </div>
      </motion.div>
    </div>
  )
}

export default Header