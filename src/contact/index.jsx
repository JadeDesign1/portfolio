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
          <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
            <input
              className=" border text-xs rounded-lg pl-2 py-1 flex border-gray-300"
              type="text"
              placeholder="Enter Name"
              name="name"
            />

            <input
              className=" border text-xs rounded-lg pl-2 py-1 flex border-gray-300"
              type="text"
              placeholder="Phone Number"
              name="phone"
            />

            <input
              className=" border text-xs rounded-lg pl-2 py-1 flex border-gray-300"
              type="email"
              placeholder="Email"
              name="email"
            />

            <textarea
              className="border text-xs rounded-lg pl-2 py-1 flex border-gray-300"
              name="message"
              rows="4"
              placeholder="Subject"
            ></textarea>
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
