import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineLunchDining , MdOutlineLocalPhone} from "react-icons/md";
import {  SiAboutdotme } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import {GiCancel} from "react-icons/gi";
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'


const Links = ({links, index}) => {
  const [title, setTitle] = useState(null)
  const {id, name, link, icon} = links
  
  function handleTitle(links){
      setTitle(open => (index + 1) === links.id ? !open : null)

  }

  return (
  <a href={link} className='flex flex-row gap-2 items-center'> 
      <span onMouseEnter={() => handleTitle(links)} onMouseLeave={() => setTitle(null)} className='rounded-full shadow-lg bg-white text-primary-0 text-xl shadow-white  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>{icon}</span>
      {title && <p className='text-base font-semibold capitalize text-primary-0 border px-1 bg-white'>{name}</p>}
  </a>
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
      {id : 1 , name : 'Home', link : '#home' , icon :  <AiOutlineHome />},
      {id : 2 , name : 'About', link : '#about', icon : < SiAboutdotme />},
      {id : 3 , name : 'Projects', link : '#projects', icon : <GoProjectSymlink />},
      {id : 4 , name : 'Contact', link : '#contact', icon : <MdOutlineLocalPhone />},
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
        className=' md:block hidden fixed left-3 top-48 z-10 '
      >
        <div className=' flex flex-col gap-2'>
        {navLink.map((sidelink, i) => 
            <Links 
                key={sidelink.id}
                links={sidelink}
                index={i}
            />    
        )}
        </div>
      </motion.div>
    </div>
  )
}

export default Header