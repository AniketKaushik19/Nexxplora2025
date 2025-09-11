import React from 'react'

export const GlimpsesCard = ({img}) => {
  return (
     <div>
        <img className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" src={img} alt="Glimpses image"/>
      </div>
  )
}
