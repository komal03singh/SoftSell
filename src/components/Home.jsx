import React from 'react'
import homesvgone from '../assets/home/homepageone.svg'

function Home() {
  return (
    <div id='Home' className=' flex flex-col items-center mt-10 md:mb-10 md:mt-16 md:flex-row lg:flex-row lg:items-start lg:mb-0 lg:mt-2'>
        <div className='flex flex-col justify-center items-center md:items-start md:ml-6 lg:w-1/2 lg:flex-col lg:mt-6'>
          <h1 className='text-center text-3xl px-4 font-black opacity-80 text-shadow-xs text-shadow-black md:text-5xl md:text-left lg:text-7xl'>UNLOCK <span className='text-[#7c649b]'>VALUE</span> OF YOUR SOFTWARE <span className='text-[#7c649b]'>LICENCES</span> NOW!</h1>
          <h4 className='text-center md:text-left text-sm font-light px-6 mt-4 max-w-xs break-words md:text-lg lg:text-lg lg:max-w-md'>Easily resell your unused licenses and get paid fast. No hassle, just profit.</h4>
          <button className='px-4 py-2.5 text-sm md:text-base mt-8 bg-black text-white font-light hover:cursor-pointer hover:translate-y-[-4px] hover:shadow-lg shadow-gray-600 duration-300 ease-in-out md:px-8 md:ml-4 md:py-3.5 md:mt-10 lg:px-15'>Get a Quote</button>
        </div>
        <div className=' md:w-4/5 lg:w-1/2 flex justify-center'>
          <img className='w-full object-contain' src={homesvgone} alt="image" />
        </div>
    </div>
  )
}

export default Home
