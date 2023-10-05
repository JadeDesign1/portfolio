import { FaCross } from "react-icons/fa"

const Form = ({open, toggleForm}) => {

  return (
    <> 
    {open && <div className="fixed left-0 top-0 right-0 bottom-0 bg-black z-50">
         <div id='contact' className='w-full sm:w-4/5 md:w-[70%] lg:w-[60%] flex relative flex-col justify-center mx-auto md:pl-20 p-4 py-16 '>
            <div onClick={toggleForm} className=' text-primary-0 font-semibold hover:text-opacity-70 lg:text-4xl text-2xl absolute top-12 right-12 duration-200 cursor-pointer '>
                X 
            </div>
            <div>
                <h1 className='text-xl md:text-2xl lg:text-3xl py-4 font-semibold text-center text-primary-0'>Contact</h1>
                <div className='relative pt-5 flex flex-col justify-center items-center'>
                    <p className='border border-b w-60 border-gray-300'></p>
                    <span className='text-gray-400 px-4 absolute z-40 top-2 bg-secondary-0 text-center '>^</span>
                </div>
                <p className='text-center py-8 text-lg font-normal text-stone-500'>I'm available for work and open to any ideas of cooporation.</p>
                <form action="" className="w-4/5 mx-auto">
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='uppercase text-sm py-2'>Name</label>
                        <input type="text" id='name' className='border-2 rounded-lg p-3 flex border-gray-300' name='name'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='uppercase text-sm py-2'>Email</label>
                        <input type="email" id='email' className='border-2 rounded-lg p-3 flex border-gray-300' name='email'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message" className='uppercase text-sm py-2'>Message</label>
                        <textarea className="border-2 rounded-lg p-3 flex border-gray-300" name="message" id="message" rows="5"></textarea>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <button className='bg-gradient-to-r from-primary-0 to-amber-300 mt-4 w-fit p-4 rounded-lg text-black focus:text-white font-semibold whitespace-nowrap'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>}
    </>
  )
}

export default Form