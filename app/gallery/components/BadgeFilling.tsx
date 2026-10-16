import React from 'react'

const BadgeFilling = ({label}: {label:string}) => {
      
  return (
      <div className=" py-2 px-5 font-inter text-sm text-center rounded-full border border-border hover:border-gold bg-cream transition-colors duration-200">
            <p className=" ">{label}</p>

      </div>
  )
}

export default BadgeFilling