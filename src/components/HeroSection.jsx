import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 300,
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-in-out',
      reset: false,
    });
  }, []);

  return (
  <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
  {/* Background GIF */}
  <div className="absolute inset-0 z-0">
    <img
      src="/metor.gif"
      alt="Background animation"
      className="w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 px-4 text-white">
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider drop-shadow-2xl">
      Nexxplora <span className="text-gradient">'25</span>
    </h1>
    <p className="mt-4 text-lg md:text-2xl font-semibold tracking-wide">
      THE ENGINEER'S DAY , S.R.I.M.T. LUCKNOW
    </p>
    <p className="mt-2 text-xl md:text-3xl font-bold text-gradient">
      SEPTEMBER 16-09-2025
    </p>
   <marquee behavior="scroll" direction="left" scrollamount="8" className="text-white text-lg px-4 py-2 font-semibold font-sans mt-5 my-10">
  🎉 Participation in all events is absolutely FREE — no registration fee required. Come showcase your talent, learn, and lead without spending a dime! 🌟
</marquee>
   <div className="text-white text-lg px-4 py-2 font-semibold font-sans mt-5 my-10">
    <strong>!!!Some Events are organize at 15 Sep -</strong> SR got Talent , Mock Interview , Poster Making (Kindly check information at event description)
</div>
 <NavLink
  to="https://wa.me/7905093236"
  target="_blank"
  className="text-[#e6efe9] font-bold no-underline "
>
  💬 Have a question about this website? <div className='w-50 mx-auto text-xl rounded-xl border p-1 bg-blue-300 text-black'>Connect with us!</div>
</NavLink><br/>

<div className='flex items-center gap-2 md:gap-7 justify-center'>

 <NavLink
  to="https://chat.whatsapp.com/HdrAyPfWWzHHDERjAJIOMz"
  target="_blank"
  className="text-[#e6efe9] font-bold no-underline "
>
 <button className='text-xl border my-4 rounded-2xl bg-amber-600 p-2 font-bold hover:cursor-pointer z-50'> Join Community</button>
</NavLink><br/>
 <a href="#events"><button className='text-xl border my-4 rounded-2xl bg-purple-600 p-2 font-bold hover:cursor-pointer z-50'> Register in Events 👇 </button></a>
</div>

  </div>
</section>
  );
};

export default HeroSection;