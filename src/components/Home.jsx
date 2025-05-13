import React from 'react'
import homesvgone from '../assets/home/homepageone.svg'

function Home() {
  return (
    <div id='Home' className='flex'>
        <div className='ml-10 w-1/2'>
          <h1 className='text-7xl mt-6 font-black opacity-80 text-shadow-xs text-shadow-black md:text-4xl'>UNLOCK <span className='text-[#7c649b]'>VALUE</span> OF YOUR SOFTWARE <span className='text-[#7c649b]'>LICENCES</span> NOW!</h1>
          <h4 className='text-lg mt-2 font-light max-w-md break-words md:text-sm'>Easily resell your unused licenses and get paid fast. No hassle, just profit.</h4>
          <button className='px-15 mt-10 bg-black text-white font-light py-4 hover:cursor-pointer hover:translate-y-[-4px] hover:shadow-lg shadow-gray-600 duration-300 ease-in-out md:px-8 md:py-3.5 md:text-sm md:mt-8'>Get a Quote</button>
        </div>
        <div className='w-1/2'>
          <img src={homesvgone} alt="image" />
        </div>
    </div>
  )
}

export default Home
