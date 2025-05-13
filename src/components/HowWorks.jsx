import React from 'react'
import upload from '../assets/howworks/upload.svg'
import valuation from '../assets/howworks/analyse.svg'
import paid from '../assets/howworks/paid.svg'

function HowWorks() {
  return (
    <div id='HowWorks' className='mb-24'>
      <div>
        <h4 className='text-4xl font-extrabold text-center md:text-2xl'>LET'S GET STARTED</h4>  
        <h1 className='text-center text-4xl mt-2 font-light text-[#7c649b] opacity-80 md:text-2xl md:mt-1'>How It Works ?</h1>
      </div>
      <div className='flex justify-between mt-10 px-20 md:flex-col md:gap-4'>

        <div className=" flex flex-col items-center p-15  bg-black hover:translate-y-[-10px] hover:shadow-2xl shadow-gray-600 duration-300 ease-in-out">
            <h1 className="bg-white font-extrabold text-3xl border rounded-4xl mb-8 h-16 w-16 flex items-center justify-center">1</h1>
            <img className="h-52 w-52" src={upload} alt="upload" />
            <h3 className=" text-xl mt-6 text-center text-white">Upload License </h3>
        </div>

        <div className='flex flex-col items-center p-15 bg-black hover:translate-y-[-10px] hover:shadow-2xl shadow-gray-600 duration-300 ease-in-out'>
            <h1 className="bg-white font-extrabold text-3xl border rounded-4xl mb-8 h-16 w-16 flex items-center justify-center">2</h1>
            <img className='h-52 w-52' src={valuation} alt="upload" />
            <h3 className='text-xl mt-6 text-center text-white'>Get Valuation</h3>
        </div>

        <div className='flex flex-col items-center p-15 bg-black hover:translate-y-[-10px] hover:shadow-2xl shadow-gray-600 duration-300 ease-in-out'>
            <h1 className="bg-white font-extrabold text-3xl border rounded-4xl mb-8 h-16 w-16 flex items-center justify-center">3</h1>
            <img className='h-52 w-52' src={paid} alt="upload" />
            <h3 className='text-xl mt-6 text-center text-white'>Get Paid</h3>
        </div>
      </div>
    </div>
  )
}

export default HowWorks
