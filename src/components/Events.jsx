import axios from 'axios'
import EventCard from './EventCard'
import Carddata from './CardData'

const Events = () => {

  return (
        // <!-- Events Section -->
        <section id="events" className="py-20 bg-gray-900 ">
            <div className="container mx-auto px-6">

                {/* heading  */}
                <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000"
 data-aos-easing="ease-in-out">
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