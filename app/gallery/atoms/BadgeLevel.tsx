import React from 'react'

const BadgeLevel = ({level} : {level: string}) => {
  return (
    <div className='  w-max py-1 px-3 rounded-full text-[10px] font-inter text-chocolate tracking-wider border border-gold '>{level}</div>
  )
}

export default BadgeLevel