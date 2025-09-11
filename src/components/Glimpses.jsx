import React from 'react'

export const Glimpses = () => {
  return (
    // < <!-- Gallery Section -->
        <section id="gallery" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Glimpses of <span className="text-gradient">Nexxplora'24</span></h2>
                    <p className="text-lg text-gray-400 mt-2">Moments that became memories.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div><img className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop" alt="Concert Stage"/></div>
                        <div><img className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" alt="Audience enjoying"/></div>
                    </div>
                </div>
            </div>
        </section>
  )
}
