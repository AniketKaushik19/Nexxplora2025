import React from 'react'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
function Card2({name, room_number, hosted_by, about, mobile_number, rounds }) {
     useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 300,
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-in-out',
      reset: false,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
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
  {/* // foreground  */}
    <div className="relative  text-gray-100 rounded-xl shadow-lg p-6 max-w-3xl mx-auto my-6 border border-gray-700">
    <h2 className="text-2xl font-bold text-indigo-400 mb-4">
      🧠 {name}
    </h2>

    <div className="space-y-2 text-sm sm:text-base">
      <p><span className="font-semibold text-gray-300">📌 Hosted By:</span> {hosted_by}</p>
      <p><span className="font-semibold text-gray-300">🏫 Room Number:</span> {room_number}</p>
      <p><span className="font-semibold text-gray-300">📞 Contact:</span> {mobile_number}</p>
      <p className="mt-4 text-gray-400 italic">{about}</p>
    </div>

    {rounds && <h3 className="mt-6 text-lg font-semibold text-indigo-300">🧩 Rounds Overview:</h3>
     } <ul className="mt-2 space-y-3">
      {rounds?.map((round, index) => (
        <li
          key={index}
          className="bg-gray-800 border border-gray-700 rounded-md p-3 hover:bg-gray-700 transition"
        >
          <strong className="text-indigo-200">{round.round} - {round.title}:</strong>
          <span className="text-gray-300">{round.task}</span>
        </li>
      ))}
    </ul>
  </div>
    </>
  )
}

export default Card2
