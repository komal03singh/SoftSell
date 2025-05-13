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
    <div id='Testimonials' className='mt-10 relative'>

      <div className='text-center mt-10'>
        <h4 className='text-4xl font-extrabold'>SEE WHAT OUR CUSTOMERS HAVE TO SAY</h4>  
        <h1 className='text-4xl mt-4 font-light text-[#7c649b] opacity-80'>Customer Testimonials</h1>
      </div>

      <div className='relative mt-10 overflow-hidden'>
        <div className='flex absolute inset-0 -z-10 '>
          <img className='w-1/3' src={feedback} alt="feedback img" />
          <img className='w-1/3' src={feedback} alt="feedback img" />
          <img className='w-1/3' src={feedback} alt="feedback img" />
        </div>

        <div>
          <div className='grid grid-cols-3 gap-6 p-5 mb-16'>
            {testimonials.slice(0,2).map((e)=>(
              <div className='bg-black/30 shadow-gray-200 shadow-xl p-10 backdrop-blur-2xl text-white h-96' key={e.id}>
                <h3 className='text-2xl font-extrabold py-2' >{e.name}</h3>
                <p className='text-lg font-semibold'>{e.designation}</p>
                <p className='text-lg font-medium mb-4'>{e.location}</p>
                <p className='text-base font-extralight'>{e.lorem}</p>
              </div>
            ))}
        </div>
        </div>

      </div>

    </div>
  )
}

export default Testimonials
