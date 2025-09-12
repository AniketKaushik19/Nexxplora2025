import React from 'react'

const About = () => {
  return (
//    <!-- About Section -->
        <div id="about" className="py-20 "  data-aos="fade-right" data-aos-easing="ease-in-out"
 >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white"  >About <span className="text-gradient" >Nexxplora</span></h2>
                    <p className="text-lg text-gray-400 mt-2" >Experience the legacy, feel the vibe.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-300 text-lg" >
                        <p>
                            Nexxplora, the engineer's day event of SR Institute of Management and Technology (SRIMT) Lucknow, is a two-day extravaganza of code, music, art, and intellectual exchange. Rooted in the ancient spirit of Lucknow, it's one of college's largest and most awaited  events.
                        </p>
                        <p>
                            From electrifying coding rounds, featuring inner engineers to a myriad of competitive events in code, music, quiz, literature, and mock interviews, Nexxplora is a melting pot of talent and creativity.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center pt-6">
                            <div>
                                <h3 className="text-4xl font-bold text-gradient">20+</h3>
                                <p className="text-gray-400">Events</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-gradient">1500+</h3>
                                <p className="text-gray-400">Participants</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop" 
                             alt="Festival crowd" 
                             className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                            />
                    </div>
                </div>
            </div>
        </div>

  )
}

export default About