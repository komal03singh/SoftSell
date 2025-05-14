import { useState } from 'react'
import {Link,anmateScroll as scroll} from 'react-scroll'
import { Menu } from 'lucide-react'
import Home from './components/Home.jsx'
import HowWorks from './components/HowWorks.jsx'
import WhyUs from './components/WhyUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='flex flex-col relative'>
      <nav className='flex sticky top-0 bg-[#E5E5E5] items-center justify-between p-4 z-10'>
        <div className='flex items-center justify-between w-full lg:w-1/2'>

          <div className='flex items-center'>
            <img className='h-10 w-10' src="logo.png" alt="logo" />
            <h1 className='text-xl font-black ml-2'>SoftSell</h1>
          </div>

          <div className='lg:hidden'>
            <button onClick={toggleMenu} aria-label='Toggle Menu'>
              <Menu size={28} />
            </button>
          </div>

        </div>

        <div className='hidden lg:flex gap-10 p-4 justify-center font-light '>
          <Link to='Home' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>Home</Link>
          <Link to='HowWorks' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>How It Works</Link>
          <Link to='WhyUs' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>Why Us?</Link>
          <Link to='Testimonials' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>Testimonials</Link>
          <Link to='Contact' smooth={true} duration={100} className='hover:font-medium hover:border-b-1 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:cursor-pointer '>Contact</Link>
        </div>
      </nav>
      <div
        className={`fixed inset-y-0 left-0 bg-[#E5E5E5] w-64 p-6 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        } lg:hidden z-20`}>
        <div className='flex flex-col gap-4 text-lg font-light'>
          <Link to='Home' smooth={true} duration={100} onClick={toggleMenu} className='hover:font-medium cursor-pointer'>Home</Link>
          <Link to='HowWorks' smooth={true} duration={100} onClick={toggleMenu} className='hover:font-medium cursor-pointer'>How It Works</Link>
          <Link to='WhyUs' smooth={true} duration={100} onClick={toggleMenu} className='hover:font-medium cursor-pointer'>Why Us?</Link>
          <Link to='Testimonials' smooth={true} duration={100} onClick={toggleMenu} className='hover:font-medium cursor-pointer'>Testimonials</Link>
          <Link to='Contact' smooth={true} duration={100} onClick={toggleMenu} className='hover:font-medium cursor-pointer'>Contact</Link>
        </div>
      </div>
      <Home />
      <HowWorks/>
      <WhyUs/>
      <Testimonials/>
      <Contact/>
      <footer className='mt-10 bg-black text-white py-6'>
        <div className='flex flex-col items-center'>
          <div className='flex gap-4 border-b-1 items-center py-2 px-12 text-sm font-light'>
            <h4>EXPLORE</h4>
            <h4>KNOW MORE</h4>
            <h4>ABOUT</h4>
          </div>
          <h1 className='text-center p-2 text-xs font-semibold'>©2025 SoftSell. All rights reserved.</h1>
        </div>
        <div>

        </div>
      </footer>
    </div>
  )
}

export default App
