import {  LucideMenu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [show , setShow]=useState(false)
  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-gradient">NEXXPLORA</Link>
                
                {/* <!-- Desktop Menu --> */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</Link>
                    <Link to="#events" className="text-gray-300 hover:text-white transition-colors duration-200">Events</Link>
                    <Link to="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">Gallery</Link>
                    <Link to="#sponsors" className="text-gray-300 hover:text-white transition-colors duration-200">Mentors</Link>
                    <Link to="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
                </div>

                {/* <Link to="register.html" className="hidden md:block px-6 py-2 text-white font-semibold rounded-full btn-gradient shadow-lg">
                    Register Now
                </Link> */}
                
                {/* <!-- Mobile Menu Button --> */}
                <button id="mobile-menu-button" className="visible md:hidden text-white focus:outline-none" onClick={()=>{show?setShow(false):setShow(true)}}>
                    <LucideMenu/>
                </button>
            </div>
        </nav>
        
        {/* <!-- Mobile Menu --> */}
        {show && 
        <div id="mobile-menu" className="visible md:hidden bg-gray-900/90 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 py-4">
                <Link to="#about" className="block text-gray-300 hover:text-white">About</Link>
                <Link to="#events" className="block text-gray-300 hover:text-white">Events</Link>
                <Link to="#gallery" className="block text-gray-300 hover:text-white">Gallery</Link>
                <Link to="#sponsors" className="block text-gray-300 hover:text-white">Mentors</Link>
                <Link to="#contact" className="block text-gray-300 hover:text-white">Contact</Link>
                <Link to="register.html" className="mt-4 px-6 py-2 text-white font-semibold rounded-full btn-gradient">
                    Register Now
                </Link>
            </div>
        </div>
        }
    </header>
  )
}

export default Navbar