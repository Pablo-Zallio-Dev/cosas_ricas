import LineSeparate from '@/app/components/common/LineSeparate'
import Paragraph from '@/app/components/common/Paragraph'
import SubtitleSection from '@/app/components/common/SubtitleSection'
import TitleSection from '@/app/components/common/TitleSection'
import React from 'react'
import CardTypes from './CardTypes'

const TypesCakes = () => {
  return (
    <section className=" w-full max-w-340 flex flex-col items-center mt-12 p-8 border border-border bg-bgWhite rounded-3xl   ">
      <SubtitleSection subtitleText={'tipos de tartas'} />
      <TitleSection titleText={'Elige el nivel de tu tarta'} />
      <LineSeparate />
      <Paragraph center textParagraph={'Tres formas de encargarla según lo que necesites: del acabado más sencillo y económico a la decoración hecha a medida para tu evento.'} textSize={'textCard'} />
      <CardTypes />
    </section>
  )
}

export default TypesCakes