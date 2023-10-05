import React from 'react'

function ModalOverLay({openForm}) {
   
    const [formData, setformData] = React.useState({
    firstname : "", email : "", message : ""
    })
   
   function handleData(event) {
    event.preventDefault();
    const {name, value, checked, type} = event.target
    setformData(prevData => {
      return {...prevData, [name] : value}
    })
    formData.message = ""
   }


   
  return (
    <>
      <div className=' absolute left-[800px] top-24  bg-white w-3/12 h-[450px] z-40 rounded-2xl  transition ease-out duration-1000 shadow-2xl '>
      <div className='flex justify-center items-center mt-5'>
            <form action="https://getform.io/f/051da957-c0c9-4a7a-8609-173d757da273"  method='POST' className='flex flex-col w-screen md:w-10/12'>
                <input type="text" name='firstname' placeholder='Enter your name' value={formData.firstname} onChange={handleData} className='p-2 hover:border-cyan-400  border-2 rounded-md text-slate-900 focus:outline-none'/>

                <input type="text" name='email' placeholder='Enter your email' value={formData.email} onChange={handleData} className='p-2 my-2  hover:border-cyan-400 border-2 rounded-md text-slate-900 focus:outline-none'/>

                <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleData} rows="10" className='p-2 border-2  hover:border-cyan-400 rounded-md text-slate-900 focus:outline-none'></textarea>

                <button className='text-white bg-gradient-to-r from-cyan-400 to-cyan-800 hover:from-cyan-800 hover:to-cyan-400 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-2  mt-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>let's connect</button>
            </form>
      </div>

    </div>
  </>
  )
}

export default ModalOverLay