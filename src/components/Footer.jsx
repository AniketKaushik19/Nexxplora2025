import { Facebook, Instagram, Linkedin, LucideFacebook, Mail, MapPin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const Footer = () => {
  return (
    //   <!-- Footer -->
    <footer id="contact" className="bg-black border-t border-gray-800 pt-16 pb-8">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- About & Socials --> */}
                <div>
                    <h3 className="text-2xl font-bold text-gradient">NEXXPLORA</h3>
                    <p className="mt-2 text-gray-400">Engineer's day event<br/>SR Institute of Management and Technology (SRIMT) Lucknow</p>
                    <div className="flex space-x-4 mt-4">
                        <NavLink to="#" className="text-gray-400 hover:text-white"><LucideFacebook/></NavLink>
                        <NavLink to="https://www.instagram.com/srgrouplko?igsh=MXg1aTFjZTNvNmMwNg==" className="text-gray-400 hover:text-white"><Instagram/></NavLink>
                        <NavLink to="https://x.com/SRGROUPLKO?t=9hZcCbyWxWB6pmI4OXRd9w&s=09" className="text-gray-400 hover:text-white"><Twitter/></NavLink>
                        <NavLink to="https://youtube.com/@srgrouplucknow5707?si=BPHkmQT3pbGy27tG" className="text-gray-400 hover:text-white"><Youtube/></NavLink>
                        <NavLink to="https://www.linkedin.com/company/srgrouplko/" className="text-gray-400 hover:text-white"><Linkedin/></NavLink>
                    </div>
                </div>
                {/* <!-- Quick Links --> */}
                <div>
                    <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                    <ul className="mt-4 space-y-2">
                        <li><Link to="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
                        <li><Link to="#events" className="text-gray-400 hover:text-white">Events</Link></li>
                        {/* <li><Link to="#" className="text-gray-400 hover:text-white">Schedule</Link></li>
                        <li><Link to="#" className="text-gray-400 hover:text-white">Register</Link></li> */}
                    </ul>
                </div>
                {/* <!-- Contact Info --> */}
                <div>
                    <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li className="flex items-start">
                          <MapPin/>
                           <span className='mx-3'> SR Institute of Management and Technology (SRIMT) Lucknow,Uttar Pradesh</span>
                        </li>
                        <li className="flex items-center">
                           <Mail/>
                           <span className='mx-3'>info@srgi.in</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-6">
                <p>&copy; 2025 Nexxplora,Developers Aniket Kaushik , Sonia Sharma and Ajay Singh (SRIMT) Lucknow. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
