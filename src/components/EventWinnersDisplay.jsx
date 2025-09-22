import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carddata from './CardData';

const EventWinnersDisplay = ({ data }) => {
  const {id}=useParams()
   const basicInfo = Carddata.find(val => val.key == id);
   const extraDetails=data[id];

   useEffect(()=>{ 
    window.scrollTo({ top: 0, behavior: 'smooth' });
   },[])

  return (
    <>
    {basicInfo && extraDetails ? (
    <div className="max-w-3xl mx-auto px-6 py-5 bg-black/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-gray-500
    shadow-[0_0_30px_rgba(0,0,0,0.6)]">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wide drop-shadow-md">
          {data.eventName}
        </h1>
        <p className="text-lg text-gray-300 mt-2">{extraDetails.eventName}</p>
      </div>

      <div className="text-center mb-5" data-aos="fade-up" data-aos-duration="1000"
 data-aos-easing="ease-in-out" >
        <p className="text-xl text-gray-200">
          Total Participants:{' '}
          <span className="font-bold text-cyan-300">{data.totalParticipants}</span>
        </p>
      </div>

      <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000"
 data-aos-easing="ease-in-out" >
        {extraDetails.winners.map((winner, index) => (
          <div
            key={index}
            className="bg-gradient-to-br  to-gray-800 border border-gray-700 rounded-xl p-3 shadow-lg hover:shadow-cyan-500/30 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              {winner.position} Place
            </h3>
            <p className="text-gray-300 text-lg">
              👤 Name: <span className="font-medium text-white">{winner.name}</span>
            </p>
            <p className="text-gray-300 text-lg">
              🆔 Roll No: <span className="font-medium text-white">{winner.rollNumber}</span>
            </p>
          </div>
        ))}
      </div>
    </div> ) : (
        <p className='my-5 px-5 font-extrabold text-3xl font-sans'>Data Not Available</p>
      )}
      </>
  );
};

export default EventWinnersDisplay;