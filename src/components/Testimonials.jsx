import React, { useEffect,useState } from 'react'
import feedback from '../assets/testimonials/feedback.svg'

function Testimonials() {

  const [testimonials,setTestimonals] = useState([])

  const url='https://testimonialapi.vercel.app/api'

  useEffect(()=>{
    async function demoTest() {

      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setTestimonals(data)
        } catch (error) {
        console.log("error in fetching") 
      }
      
    }
    demoTest()
  },[])
  
  return (
    <div id='Testimonials' className='mt-10 md:mt-16 relative'>
      <div className='text-center px-4 mt-5 md:mt-8 lg:mt-10 '>
        <h4 className='text-lg lg:text-4xl font-extrabold md:text-2xl'>SEE WHAT OUR CUSTOMERS HAVE TO SAY</h4>  
        <h1 className='text-base lg:text-4xl lg:mt-4 font-light text-[#7c649b] opacity-80 md:text-2xl'>Customer Testimonials</h1>
      </div>

      <div className='flex flex-col md:flex md:flex-row items-center md:relative lg:relative md:mt-6 lg:mt-10 lg:overflow-hidden'>
        <div className=' lg:flex md:flex hidden lg:absolute md:absolute md:inset-0 md:-z-10 lg:inset-0 lg:-z-10 '>
          <img className='w-1/2 md:w-1/3 lg:w-1/3' src={feedback} alt="feedback img" />
          <img className='w-1/2 md:w-1/3 lg:w-1/3' src={feedback} alt="feedback img" />
          <img className='w-1/2 md:w-1/3 lg:w-1/3' src={feedback} alt="feedback img" />
        </div>

        <div>
          <div className='grid md:grid-cols-3 lg:grid-cols-3 md:gap-3 lg:gap-6 p-5 mb-16'>
            {testimonials.slice(0,2).map((e)=>(
              <div className='bg-black/30 shadow-gray-200 shadow-xl p-10 lg:mt-10 lg:p-14 backdrop-blur-2xl text-white lg:h-96 mb-5' key={e.id}>
                <h3 className='text-xl lg:text-2xl font-extrabold py-2' >{e.name}</h3>
                <p className=' text-sm lg:text-lg font-semibold'>{e.designation}</p>
                <p className='text-sm lg:text-lg font-medium mb-4'>{e.location}</p>
                <p className='text-xs lg:text-base font-extralight'>{e.lorem}</p>
              </div>
            ))}
        </div>
        </div>

      </div>

    </div>
  )
}

export default Testimonials
