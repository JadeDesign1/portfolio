import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-[1vh] mx-auto bg-bg3">
      <div className=" max-w-[1040px] m-auto md:pl-20  py-8 p-4 ">
        <h1 className="phead font-semibold text-center text-[18px] sm:text-[24px]">
          Contact
        </h1>
        <p className=" text-center text text-[16px] sm:text-[18px] text-text leading-7 py-2">
          I'm available for work and open to any ideas of cooperation.
        </p>
        <form
          action="https://getform.io/f/0e78ef00-9981-49bd-ae32-63dd74b73f15"
          method="POST"
          encType="multipart/form-data"
          className="text-stone-700"
        >
          <div className=" grid md:grid-cols-2 gap-2 w-full">
            <section className=" md:col-span-1">
              <div className="relative pt-5">
                <input
                  className="peer w-full placeholder:text-transparent outline-none border sm:text-base text-sm rounded-lg pl-2 py-1 flex border-gray-300"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="pl-2 font-semibold peer-placeholder-shown:font-normal text-sm top-0 sm:text-sm text-bg1 peer-placeholder-shown:text-slate-400  peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 transition-all duration-300 absolute peer-focus:top-0 peer-focus:text-bg1 peer-focus:text-sm peer-focus:font-semibold"
                >
                  Enter Name
                </label>
              </div>

              <div className="relative pt-5">
                <input
                  className="w-full peer placeholder:text-transparent outline-none border sm:text-base text-sm rounded-lg pl-2 py-1 flex border-gray-300"
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                />
                <label
                  htmlFor="ph"
                  className="pl-2 font-semibold peer-placeholder-shown:font-normal text-sm top-0 sm:text-sm text-bg1 peer-placeholder-shown:text-slate-400  peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 transition-all duration-300 absolute peer-focus:top-0 peer-focus:text-bg1 peer-focus:text-sm peer-focus:font-semibold"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative pt-5">
                <input
                  className="w-full peer placeholder:text-transparent outline-none border sm:text-base text-sm rounded-lg pl-2 py-1 flex border-gray-300"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="pl-2 font-semibold peer-placeholder-shown:font-normal text-sm top-0 sm:text-sm text-bg1 peer-placeholder-shown:text-slate-400  peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 transition-all duration-300 absolute peer-focus:top-0 peer-focus:text-bg1 peer-focus:text-sm peer-focus:font-semibold"
                >
                  Email
                </label>
              </div>
            </section>
            <section className=" md:col-span-1">
              <div className="pt-5 relative">
                <textarea
                  className="w-full peer placeholder:text-transparent outline-none border sm:text-base text-sm rounded-lg pl-2 py-1 flex border-gray-300"
                  name="message"
                  rows="4"
                  placeholder="Subject"
                  id="subject"
                ></textarea>
                <label
                  className="pl-2 font-semibold peer-placeholder-shown:font-normal text-sm top-0 sm:text-sm text-bg1 peer-placeholder-shown:text-slate-400  peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 transition-all duration-300 absolute peer-focus:top-0 peer-focus:text-bg1 peer-focus:text-sm peer-focus:font-semibold"
                  htmlFor="subject"
                >
                  Subject
                </label>
              </div>
            </section>
          </div>
          <div className=" flex flex-row justify-center items-center">
            <button className=" bg-gradient-to-r from-text4 to-bg1 mt-4 w-fit text-center text-text3 text rounded px-4 py-1 whitespace-nowrap">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
