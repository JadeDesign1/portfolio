
const Workitem = ({year,title, duration, Role1, Role2, Role3, Role4, Role5}) => {
  return (
    <ol className=' flex flex-col md:flex-row relative border-l border-stone-200 '>

        <li className=' mb-10 ml-4 '>
            <div className=' absolute w-3 h-3 bg-amber-300 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className=' inline-block px-2 py-1 font-semibold text-white bg-[#123b2e] rounded-md '>{year}</span>
                <span className=' text-lg font-semibold text-[#123b2e]'>{title}</span>
                <span className=' my-1 text-sm font-normal leading-none text-stone-400 '>{duration}</span>
            </p>

            <div className=' flex flex-col gap-3 my-2 text-base font-normal text-stone-500 '>
               <p>{Role1}</p>
               <p>{Role2}</p>
               <p>{Role3}</p>
               <p>{Role4}</p>
               <p>{Role5}</p>
            </div>
        </li>
    </ol>
  )
}
const Work = () => {

    const data = [
        {
            year : 2023,
            title : 'Frontend Developer',
            duration : '3years', 
            company : 'Emtok',
            Role1 : "Spearheaded the redesign of the firm's website layout using HTML, CSS, and JavaScript,    collaborating with backend engineers and product designers, achieving a 40% increase in user engagement and a 25% boost in conversion rates.",
            
            Role2 : "Engineered a design system with reusable ReactJS components, reducing development time by 30% and increasing consistency across multiple projects by 50%.",
            
            Role3 : "Led the implementation of responsive design with CSS Grid and Flexbox, enhancing cross-device performance and improving mobile user satisfaction by 20%. Developed dynamic and interactive UIs using modern frameworks such as React, Vue.js, Angular, and integrating state management tools like Redux.",
            
            Role4 : "Collaborated with UI/UX designers, translating Figma and Adobe XD prototypes into pixel-perfect, accessible, and user-friendly web interfaces",

            Role5 : "Collaborated in an Agile/Scrum environment, using project management tools like Jira, Trello, and utilizing GitFlow for collaborative version control. Employed Progressive Web Apps (PWAs) techniques, Service Workers, and caching strategies to enhance offline capabilities and loading speed. "

        },

        {

            year : 2020,
            title : 'Frontend Developer',
            duration : '2years', 
            company : 'Dev and Design',
            Role1 : "Boosted the Average Time on Page by optimizing website images and code using ReactJS, React Hooks (useEffect, props), and state management libraries like Redux, resulting in more efficient rendering",
            Role2 : "Drove increased client satisfaction and new business leads by developing responsive and interactive designs using HTML5, CSS3 (Sass, Less), JavaScript (ES6+), and WebGL for engaging visual effects.",
            
            Role3 : "Implemented complex frontend logic using modern frameworks like Vue.js, Angular, and Svelte, integrating third-party APIs, WebSockets for real-time communication, and creating reusable components.",
            
            Role4 : "Utilized CSS frameworks like Bootstrap, Tailwind CSS, and Materialize, aligning with responsive grid layouts, Flexbox, and CSS Grid for consistent cross-browser styling. Managed the frontend build process with tools like Webpack, Gulp, and Babel, employing code splitting, tree shaking, and lazy loading for optimized performance.",
            
            Role5 : "Conducted thorough testing using Jest, Cypress, Selenium, and leveraging continuous integration (CI) with tools like Jenkins and Travis CI for robust and reliable applications.",
            
            
        },

        {
          year : 2018,
            title : 'Ux and Ui Designer',
            company : 'Myles Technology',
            duration : '2years', 
            Role1 : "Collaborate closely with UX/UI designers, utilizing wireframing and prototyping techniques, to transform design concepts into functional and visually appealing web interfaces.",
            Role2 : "Created wireframes, mockups, and prototypes using tools like Figma, Adobe XD, and Sketch, ensuring pixel-perfect designs and consistent user experiences across all platforms.",

            Role3 : "Conducted user research and usability testing, gathering feedback and analyzing user behavior to identify and resolve usability issues and pain points.",

            Role4 : "Collaborated with developers to implement designs, ensuring the technical feasibility of UI/UX designs and optimizing designs for maximum speed and scalability.",

            Role5 : "Developed style guides, design systems, and UI kits, ensuring consistency across multiple projects and improving the efficiency of the design and development processes.",

        },
    ]
  return (
    <div id='about' className=' max-w-[1040px] m-auto md:pl-20 p-4 '>

         {data.map((item , index) => {
             return(
                 <Workitem key={index} 
                 year={item.year}
                 title={item.title}
                    duration={item.duration}
                    company={item.company}
                    Role1={item.Role1}
                    Role2={item.Role2}
                    Role3={item.Role3}
                    Role4={item.Role4}
                    Role5={item.Role5}
                 />
             )
         })}

    </div>
  )
}

export default Work