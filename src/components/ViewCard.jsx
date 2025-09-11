import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
const ViewCard = ({title,desc,about,img}) => {
    const [event,setEvent]=useState({
            img:"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
            title:"",
            desc:"program",
            organizer:"Aniket",
            room:"B-101",
            about:[{line:"anket",line2:"kaushik"}]
    })
    const {id}=useParams()
    console.log(event)
     if (!event) {
    return (
      <div className="flex items-center justify-center h-screen bg-dark">
        <p className="text-2xl text-white-600 font-bold border p-10 rounded-2xl" >Event not found.</p>
      </div>
    );
  }
  
  return (
    <section className="bg-dark min-h-screen py-12 px-6 my-13">
      <div className="max-w-4xl mx-auto">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
        />
        {CardData.map(cdata).filter(e=>e.key === id)}
        <h1 className="text-4xl font-bold text-white-800 mb-4">{event.title}</h1>
        <p className="text-white-700 text-lg mb-6">{event.desc}</p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Event Details</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Room No:</strong> {event.room}</li>
            <li><strong>Organizer:</strong> {event.organizer}</li>
            <li><strong>Contact:</strong> {event.organizer}</li>
          </ul>


          {/* /about event  */}
           <ul className="text-gray-700 space-y-2">
               {/* {about.map((item,index)=>{
                  return <li>{item.line}</li>
               })} */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ViewCard