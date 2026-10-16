import Paragraph from '@/app/components/common/Paragraph'
import React from 'react'
import BadgeFilling from './BadgeFilling';

const AvailableFilling = () => {

       const fillingBadges = [
  { id: 1, label: "Crema de caramelo" },
  { id: 2, label: "Nata y frutas" },
  { id: 3, label: "Mousse de chocolate o trufa" },
  { id: 4, label: "Mousse de café" },
  { id: 5, label: "Mousse de Lotus" },
  { id: 6, label: "Mousse de Oreo" },
  { id: 7, label: "Mousse de Nutella" },
  { id: 8, label: "Mousse de dulce de leche" },
  { id: 9, label: "Crema de queso con frutos rojos" },
  { id: 10, label: "Crema de limón" },
  { id: 11, label: "Mousse de pistacho" },
];
  return (
    <div className=' flex flex-col items-center gap-2 w-full max-w-3xl p-10 mt-16 border border-border rounded-xl bg-bgWhite '>
      <p className=" text-center text-3xl font-cormorantGaramond "> Rellenos disponibles </p>
      <Paragraph center textParagraph={'Todos los tamaños admiten hasta dos rellenos sin coste adicional.'} textSize={'textCard'} />
      <div className=" flex flex-wrap gap-3 justify-center py-8 w-full ">

      {
            fillingBadges.map((fill) => (
                  <BadgeFilling key={fill.id} label={fill.label} />
            ))
      }
      
      </div>
    </div>
  )
}

export default AvailableFilling