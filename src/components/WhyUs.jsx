import React from 'react'
import question from '../assets/whyus/question.svg'

function WhyUs() {
  return (
    <div id='WhyUs' className='mt-10'>
      

      <div className='grid grid-cols-2 h-4/5'> 

        <div className='ml-10 px-2'>
          <h4 className='text-4xl font-extrabold max-w-sm'>STILL CONFUSED ?</h4>  
          <h1 className='text-4xl mt-2 font-light text-[#7c649b] opacity-80'>Why Choose Us ?</h1>
          <img className='h-4/5' src={question} alt="confused man" />
        </div>

        <div className='flex flex-col gap-8 justify-center px-4' >

          <div className=' bg-black text-white h-1/5 p-4 shadow-gray-600 shadow-lg'>
            <h3 className='text-lg font-extrabold px-2'>Maximize Your Returns</h3>
            <p className='text-sm font-extralight px-5 py-2'>Unlock the full potential of your unused software licenses by selling them through SoftSell. Our advanced valuation algorithm ensures you receive the best market price.</p>
          </div >

          <div className=' bg-black text-white h-1/5 p-4 ml-10 shadow-gray-600 shadow-md'>
            <h3 className='text-lg font-extrabold px-2'>Fast and Easy Transactions</h3>
            <p className='text-sm font-extralight px-5 py-2'>Selling your licenses has never been this simple! Our streamlined platform guides you through the entire process in just a few clicks.</p>
          </div>

          <div className=' bg-black text-white h-1/5 p-4 shadow-gray-600 shadow-md'>
            <h3 className='text-lg font-extrabold px-2'>Secure and Reliable</h3>
            <p className='text-sm font-extralight px-5 py-2'>At SoftSell, we prioritize your security. Our platform is equipped with industry-leading encryption and data protection, ensuring that your personal and license information is handled safely.</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default WhyUs
