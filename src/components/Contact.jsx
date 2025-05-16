import React from 'react'
import contact from '../assets/contact/contact.svg'

function Contact() {
  return (
    <div id='Contact'>

      <div>
        <div className='text-center md:text-left md:ml-6 lg:ml-10 px-2'>
          <h1 className='text-lg lg:text-4xl font-extrabold max-w-md md:text-2xl'>QUESTIONS ? WE'RE HERE TO HELP.</h1>
          <h1 className='text-base lg:text-4xl mt-2 font-light text-[#7c649b] opacity-80 md:text-2xl'>Contact Us<i className="fa-solid fa-phone pl-2 lg:pl-4"></i></h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 px-10 mt-8 '>
          <div className='bg-black text-white'>
            <form className='flex flex-col p-10' action="#">
              <label className='text-sm lg:text-base font-light mb-2' htmlFor="name"><i className="fa-solid fa-user text-white pr-2"></i>Name</label>
              <input className=' bg-white/20  backdrop-blur-2xl p-2 mb-8 text-sm font-extralight' type="text" id='name' placeholder='Enter your name' />
              <label className='text-sm lg:text-base font-light mb-2' htmlFor="email"><i className="fa-solid text-white pr-2 fa-envelope"></i>E-mail</label>
              <input className=' bg-white/20 backdrop-blur-2xl p-2 mb-8' type="email" id='email' placeholder='Enter your E-mail' />
              <label className='text-sm lg:text-base font-light mb-2' htmlFor="company"><i class="fa-solid fa-building text-white pr-2"></i>Company</label>
              <input className=' bg-white/20 backdrop-blur-2xl p-2 mb-8' type="text" id='company' placeholder='Enter your company name' />
              <label className='text-sm lg:text-base font-light mb-2' htmlFor="license"><i class="fa-solid fa-file-invoice text-white pr-2"></i>License Type</label>
              <select className=' bg-white/20 backdrop-blur-2xl p-2 mb-8' name="license">
                <div className='text-sm font-light text-black'>
                  <option value="">Select License Type</option>
                  <option value="perpetual">Perpetual License</option>
                  <option value="subscription">Subscription License</option>
                  <option value="site">Site License</option>
                  <option value="volume">Volume License</option>
                  <option value="open-source">Open-Source License</option>
                  <option value="trial">Trial License</option>
                  <option value="single-user">Single-User License</option>
                  <option value="multi-user">Multi-User License</option>
                  <option value="oem">OEM License</option>
                  <option value="academic">Academic License</option>
                </div>
              </select>
              <label className='text-sm lg:text-base font-light mb-2' htmlFor="message"><i class="fa-solid fa-message text-white pr-2"></i>Message</label>
              <textarea className=' text-sm lg:text-base bg-white/20 backdrop-blur-2xl p-2 font-light resize-none' rows={'5'} id="message" placeholder='Enter your message . . .'></textarea>
              <button className='text-sm lg:text-base w-1/3 mt-10 bg-white text-black font-light py-3 hover:cursor-pointer hover:translate-y-[-4px] hover:shadow-lg shadow-gray-500 duration-300 ease-in-out'>Submit</button>
            </form>
          </div>

          <div className='flex justify-center md:1/2 lg:h-3/4 h-3/4'>
            <img src={contact} alt="customer servie" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
