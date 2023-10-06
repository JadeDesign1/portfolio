import React, { useEffect, useRef } from 'react'
import Resource from "../component/resource"
import { motion, useAnimation, useInView } from 'framer-motion'


const Skill = ({card}) => {
  const ref = useRef()
  const isinView = useInView(ref)
  const control = useAnimation()

  useEffect(() => {
    if(isinView){
      control.start("visible")
    }
  }, [isinView])

  return(
        <motion.div
          initial={"hidden"}
          ref={ref}
          variants={{hidden: {opacity: 0, x:-95}, visible: {opacity: 1, x: 0}}}
          transition={{duration: 0.8, delay: 0.3}}
          animate={control} 
        >
          <div className='text-stone-700 rounded-full p-3 md:p-4 bg-gradient-to-r from-primary-0 to-tertiary-0 text-xs hover:bg-primary-0 duration-300 hover:border-white border border-black transition font-semibold md:text-sm  w-fit uppercase' >
            {card}
          </div>
        </motion.div> 
  )
}
const Skills = () => {
  return (
    <div className='flex flex-col bg-secondary-0 justify-center gap-4 items-center'>
      <h2 className='text-black font-semibold text-lg md:text-2xl lg:text-3xl '>My Skills</h2>
      <div className='flex flex-row w-2/3 mx-auto flex-wrap justify-center gap-2 md:gap-4'>
        {Resource.map(links => links.skills.map((link,i) => 
          <Skill
            key={i}
            card={link}
          /> 
        ))}
      </div>
    </div>
  )
}

export default Skills