import { useState } from 'react'
import {Link,anmateScroll as scroll} from 'react-scroll'
import Home from './components/Home.jsx'
import HowWorks from './components/HowWorks.jsx'
import WhyUs from './components/WhyUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col relative'>
      <nav className='flex sticky top-0 bg-[#E5E5E5] items-center justify-between p-4 z-index:2'>
        <div className='flex items-center'>
          <img className='h-10 w-10' src="logo.png" alt="logo" />
          <h1 className='text-xl font-black'>SoftSell</h1>
        </div>
        <div className=' flex gap-10 p-4 justify-center font-light '>
          <Link to='Home' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>Home</Link>
          <Link to='HowWorks' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>How It Works</Link>
          <Link to='WhyUs' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>Why Us?</Link>
          <Link to='Testimonials' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>Testimonials</Link>
          <Link to='Contact' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>Contact</Link>
        </div>
      </nav>
      <Home />
      <HowWorks/>
      <WhyUs/>
      <Testimonials/>
      <Contact/>
      <footer className='mt-10 bg-black text-white h-30'>
        <div className='flex flex-col justify-center h-full'>
          <div className='flex gap-4 border-b-1 items-center py-6 px-4 text-sm font-light'>
            <h4>EXPLORE</h4>
            <h4>KNOW MORE</h4>
            <h4>ABOUT</h4>
          </div>
          <h1 className='text-center p-2 text-sm font-semibold'>©2025 SoftSell. All rights reserved.</h1>
        </div>
        <div>

        </div>
      </footer>
    </div>
  )
}

export default App
