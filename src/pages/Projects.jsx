import React from 'react'
import background from '../assets/4.jpeg'

const Projectitem = ({title, image , link}) => {
    return (
      <div className=' relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#63a780]'>
          <img src={image} alt="" className=' rounded-xl group-hover:opacity-10' />
          <div className=' hidden group-hover:block absolute top-[50% left-[50%] translate-x-[-50%] translate-y-[-50%]  '>
              <h3 className=''>{title}</h3>
              <a href={link} className=' flex flex-row justify-center'>View</a>
          </div>
      </div>
    )
  }

const Projects = () => {
  return (
    <div id='projects' className='bg-secondary-0 w-full mx-auto pt-4'>
        <div id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className=' lg:text-4xl text-lg font-semibold text-center text-black'>Projects</h1>
        <p className=' text-center py-8 text-lg font-normal text-stone-500 '>Here are some of my projects</p>
        <div className=' grid sm:grid-cols-2 gap-12'>
            <Projectitem 
                title='Project 1'
                
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 2'
                
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 3'
               
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 4'
                
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 5'
               
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 6'
                
                image={background}
                link='https://github.com'
            />
        </div>
        </div>
    </div>
    
  )
}

export default Projects