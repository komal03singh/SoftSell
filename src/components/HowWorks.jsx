import React from 'react'
import upload from '../assets/howworks/upload.svg'
import valuation from '../assets/howworks/analyse.svg'
import paid from '../assets/howworks/paid.svg'

function HowWorks() {
  return (
    <div id='HowWorks' className='mb-10 lg:mb-24 px-4 lg:py-4'>

      <div className='text-center'>
        <h4 className='text-lg lg:text-4xl font-extrabold text-center md:text-2xl'>LET'S GET STARTED</h4>  
        <h1 className='text-base lg:mt-2 text-center lg:text-4xl font-light text-[#7c649b] opacity-80 md:text-2xl md:mt-1'>How It Works ?</h1>
      </div>

      <div className=' px-4 mt-6 flex justify-center md:justify-between lg:justify-between lg:mt-10 gap-2 lg:gap-6 lg:px-10 flex-wrap md:flex-nowrap lg:flex-nowrap md:gap-4'>

        <div className=" px-16 p-8 flex flex-col items-center lg:p-15  bg-black hover:translate-y-[-10px] hover:shadow-2xl shadow-gray-600 duration-300 ease-in-out sm:w-full lg:w-1/3">
            <h1 className="bg-white font-extrabold text-xl lg:text-3xl h-8 w-8 mb-2 rounded-4xl lg:mb-8 lg:h-16 lg:w-16 flex items-center justify-center">1</h1>
            <img className=" h-24 w-24 lg:h-52 lg:w-52" src={upload} alt="upload" />
            <h3 className=" text-sm lg:text-xl mt-6 text-center text-white">Upload License </h3>
        </div>

        <div className='px-16 p-8 flex flex-col items-center lg:p-15 bg-black hover:translate-y-[-10px] hover:shadow-2xl shadow-gray-600 duration-300 ease-in-out sm:w-full lg:w-1/3'>
            <h1 className="bg-white font-extrabold text-xl lg:text-3xl rounded-4xl h-8 w-8 mb-2 lg:mb-8 lg:h-16 lg:w-16 flex items-center justify-center">2</h1>
            <img className='h-24 w-24 lg:h-52 lg:w-52' src={valuation} alt="upload" />
            <h3 className='text-sm lg:text-xl mt-6 text-center text-white'>Get Valuation</h3>
        </div>

        <div className='px-16 p-8 flex flex-col items-center lg:p-15 bg-black hover:translate-y-[-10px] hover:shadow-2xl shadow-gray-600 duration-300 ease-in-out sm:w-full lg:w-1/3'>
            <h1 className="bg-white font-extrabold text-xl not-[]:lg:text-3xl rounded-4xl h-8 w-8 mb-2 lg:mb-8 lg:h-16 lg:w-16 flex items-center justify-center">3</h1>
            <img className='h-24 w-24 lg:h-52 lg:w-52' src={paid} alt="upload" />
            <h3 className='text-sm lg:text-xl mt-6 text-center text-white'>Get Paid</h3>
        </div>
      </div>
    </div>
  )
}

export default HowWorks
