import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import Carddata from './CardData'

const Events = () => {
    const [events,setEvents]=useState([
        {eventname:"Coding",
          desc:"abc",
          pic:"https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop",
          about:{}
        }
    ])
   useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await axios.get("http://130.30.29.215:7000/api/events/get");
            setEvents(response.data.event);
            console.log(response.data.event);
        } catch (error) {
            console.log(error.message);
        }
    };
    fetchEvents();
}, []);
   console.log(events)
  return (
        // <!-- Events Section -->
        <section id="events" className="py-20 bg-gray-900 ">
            <div className="container mx-auto px-6">

                {/* heading  */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Our <span className="text-gradient">Events</span></h2>
                    <p className="text-lg text-gray-400 mt-2">A stage for every passion.</p>
                </div>

                {/* Cards  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* //map for event here  */}
                    {/* {events.length} */}
                    {Carddata.map((item,index)=>{
                         return <EventCard key={index} id={item.check} name={item.name} link={item.link} imgsrc={item.imgsrc} />
                    })
                    }
                </div>   
            </div>
        </section>

  )
}

export default Events