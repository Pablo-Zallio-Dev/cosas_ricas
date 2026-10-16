import LineSeparate from '@/app/components/common/LineSeparate'
import Paragraph from '@/app/components/common/Paragraph'
import SubtitleSection from '@/app/components/common/SubtitleSection'
import TitleSection from '@/app/components/common/TitleSection'
import React from 'react'
import AvailableFilling from './AvailableFilling'
import ProductSize from './ProductSize'

const OrderGuide = () => {
  return (
    <div className='flex flex-col items-center pt-18 px-5 ' >

      <SubtitleSection subtitleText={'guia de encargos'}  />
      <TitleSection titleText={'Tamaños y precios'} />
      <LineSeparate />
      <Paragraph center textParagraph={'Elige el tamaño según tus invitados. El precio final puede variar según la decoración personalizada.'} textSize={'textCard'} />
      <ProductSize />
      <AvailableFilling />
    </div>
  )
}

export default OrderGuide