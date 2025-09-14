import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Register from './Register';
import { FaWhatsapp } from 'react-icons/fa';
const EventCard = ({ name, link, imgsrc, id }) => {
  const navigator = useNavigate();
  return (
    <div data-aos="fade-up" data-aos-duration="1000"
      data-aos-easing="ease-in-out" className="card-gradient-border transform   shadow-md shadow-gray-300 hover-translate-y-2 transition-transform duration-300 md:my-5 " >
      <div className="card-content h-full rounded-lg p-6 text-center">
        <div className='flex items-center justify-center relative overflow-hidden group'>
          {/* image  */}
          <img src={imgsrc} alt="Music Event" className="w-full h-40 hover:cursor-pointer object-cover rounded-md mb-4 z-60 relative" />
          {/* overflow gradient  */}
          <div className='absolute inset-0 z-80 w-full bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-70 border  rounded-2xl transition-all duration-700 justify-center items-center flex text-white cursor-pointer' onClick={() => { navigator(`/${id}`) }}>View here ➡️</div>
        </div>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        {/* <p className="text-gray-400 mt-2">{}</p> */}
        <div className='flex  justify-center items-center'>

          <NavLink to={link}>
            <button className='btn cursor-pointer flex px-3 bg-purple-600 rounded-md  p-2  shadow-md shadow-purple-900 border-0  relative z-50 my-3 hover:bg-amber-600 hover:shadow-amber-800  w-max '>
              Register Now
            </button>
          </NavLink>
          <NavLink to={`/${id}`}>
            <button className='btn cursor-pointer flex px-3 bg-blue-500 rounded-md border-0 p-2 shadow-md shadow-blue-800  mx-2 relative z-50 my-3 hover:bg-amber-600  hover:shadow-amber-800'>
              View
            </button>
          </NavLink>
          <NavLink
            to="https://chat.whatsapp.com/HdrAyPfWWzHHDERjAJIOMz" // Replace with your number
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-10 text-5xl bg-green-500 hover:bg-green-600 text-white  p-1 rounded-md shadow-lg  hover:cursor-pointer z-80 relative" />
          </NavLink>
        </div>
        {/* <button className='btn cursor-pointer flex px-3 bg-gradient-to-bl  from-blue-500  to-green-500  rounded-md border-0 p-2  mx-2  z-80 my-3 relative w-full justify-center hover:bg-gradient-to-tl hover:from-blue-800 hover:to-green-800'>
          Winners
        </button>      */}
           </div>
    </div>
  )
}

export default EventCard