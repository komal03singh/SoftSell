import React from 'react'
import question from '../assets/whyus/question.svg'

function WhyUs() {
  return (
    <div id='WhyUs' className=' md:mt-10 lg:mt-2'>
      
      <div className='lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 lg:h-4/5'> 

        <div className='text-center lg:ml-10 lg:px-2'>
          <h4 className='text-xl lg:text-4xl font-extrabold max-w-sm md:text-2xl'>STILL CONFUSED ?</h4>  
          <h1 className='text-base lg:text-4xl lg:mt-2 lg:ml-2 font-light text-[#7c649b] opacity-80 md:text-2xl md:mt-1 lg:text-left'>Why Choose Us ?</h1>
          <img className='h-auto w-auto' src={question} alt="confused man" />
        </div>

        <div className='flex flex-col gap-3 lg:gap-8 justify-center px-4 md:gap-4' >

          <div className=' bg-black text-white h-auto p-4 shadow-gray-600 shadow-lg'>
            <h3 className='text-sm lg:text-xl font-extrabold px-2 md:text-sm'>Maximize Your Returns</h3>
            <p className='text-xs lg:text-sm font-extralight px-5 py-2 md:text-xs'>Unlock the full potential of your unused software licenses by selling them through SoftSell. Our advanced valuation algorithm ensures you receive the best market price.</p>
          </div >

          <div className=' bg-black text-white h-auto p-4 ml-10 shadow-gray-600 shadow-md'>
            <h3 className='text-sm lg:text-xl font-extrabold px-2 md:text-sm'>Fast and Easy Transactions</h3>
            <p className='text-xs lg:text-sm font-extralight px-5 py-2 md:text-xs'>Selling your licenses has never been this simple! Our streamlined platform guides you through the entire process in just a few clicks.</p>
          </div>

          <div className=' bg-black text-white h-auto p-4 shadow-gray-600 shadow-md'>
            <h3 className='text-sm lg:text-xl font-extrabold px-2 md:text-sm'>Secure and Reliable</h3>
            <p className='text-xs lg:text-sm font-extralight px-5 py-2 md:text-xs'>At SoftSell, we prioritize your security. Our platform is equipped with industry-leading encryption and data protection, ensuring that your personal and license information is handled safely.</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default WhyUs
