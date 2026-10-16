import React from 'react'

export default function PriceProductGallery({children}: {children: React.ReactNode}) {
  return (
    <p className=" font-cormorantGaramond text-center text-4xl text-pinkPrimary ">{children}€</p>
  )
}
