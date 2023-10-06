import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import image from '../assets/2.jpg'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Homepage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const control = useAnimation()

  useEffect(() => {
    if(isInView){
      control.start("visible")
    }
  }, [isInView])

  return (
    <div className='bg-black w-full h-screen pb-10'>
      <div id='home' className={`flex lg:w-2/3 bg-black/90 flex-col gap-4 rounded-md lg:mx-auto text-secondary-0 font-bold my-auto relative`}>
      <img src={image} className='w-[100%] rounded mx-auto opacity-60 h-screen object-cover' alt="" />
      <div className='absolute top-80 lg:top-60 left-14 pr-10 sm:pr-0 sm:left-28 md:left-40 xl:left-40 opacity-100 z-20'>
         <motion.div 
            ref={ref}
            variants={{hidden: {opacity: 0, x:-75}, visible: {opacity: 1, x:0}}}
            initial={"hidden"}
            animate={control}
            transition={{duration: 0.8, delay:0.5}}
            className='text-xl sm:text-2xl xl:text-3xl text-center'  
          >
            Hi there! My name is <span className='text-tertiary-0'>Joseph Oluwafemi</span> and <br /> <span>I'm a front-end <span className='text-primary-0'>developer</ span></span>
        </motion.div>
        <div className=' flex justify-between pt-6 max-w-[200px] w-full mx-auto text-primary-0 text-xl cursor-pointer'>
            <FaFacebook />
            <FaInstagram />
            <FaGithub />
            <FaTwitter />
            <FaLinkedinIn />
        </div>
        <motion.div 
            ref={ref}
            variants={{hidden: {opacity: 0, x:75}, visible: {opacity: 1, x:0}}}
            initial={"hidden"}
            animate={control}
            transition={{duration: 0.8, delay:0.5}} 
            className='flex justify-center'
        >

          <button className="px-4 py-3 mt-8 text-black bg-gradient-to-r from-primary-0 to-tertiary-0 focus:text-white duration-300 border focus:border border-black hover:border-white rounded-xl w-fit mx-auto">Download CV</button>
        </motion.div>
      </div>
      
      </div>
    </div>
  )
}

export default Homepage