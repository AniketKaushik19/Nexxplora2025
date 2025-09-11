import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Register from './Register';

const EventCard = ({name,link,imgsrc,id}) => {
    const navigator=useNavigate();
  return (
        <div  data-aos="fade-up" data-aos-duration="1000"
 data-aos-easing="ease-in-out" className="card-gradient-border transform   shadow-md shadow-gray-300 hover-translate-y-2 transition-transform duration-300 md:my-5" >
             <div className="card-content h-full rounded-lg p-6 text-center">
                <img src={imgsrc} alt="Music Event" className="w-full h-40 hover:cursor-pointer object-cover rounded-md mb-4 z-60 relative"/>
                <h3 className="text-2xl font-bold text-white">{name}</h3>
                {/* <p className="text-gray-400 mt-2">{}</p> */}
                <NavLink to={link}>
                <button className='btn cursor-pointer bg-purple-600 rounded-2xl border p-2  relative z-50 my-3 hover:bg-amber-700'>
                  Register Now
                  </button>
                  </NavLink>
            </div>
        </div>
  )
}

export default EventCard