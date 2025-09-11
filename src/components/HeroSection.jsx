import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const HeroSection = () => {
  


  return (
    //  <!-- Hero Section -->
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            {/* <video autoplay loop muted playsinline className="hero-video">
                {/* <!-- Using a placeholder video. Ideally, this would be a high-quality festival video. --> */}
                {/* <source src="https://assets.mixkit.co/videos/preview/mixkit-a-crowd-of-people-at-a-concert-1149-large.mp4" type="video/mp4"/> */}
                {/* Your browser does not support the video tag. */}
            {/* </video> */} 
            {/* <div className="video-overlay"></div> */}
            <div className="relative z-10 px-4">
                <h1 className="  text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-white drop-shadow-2xl">
                    Nexxplora <span className="text-gradient">'25</span>
                </h1>
                <p className=" mt-4 text-lg md:text-2xl font-semibold text-gray-200 tracking-wide">
                    THE ENGINEER'S DAY , S.R.I.M.T. LUCKNOW
                </p>
                <p className=" mt-2 text-xl md:text-3xl font-bold text-gradient">
                    SEPTEMBER 16-09-2025
                </p>
            </div>
        </section>
  )
}

export default HeroSection