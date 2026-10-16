import { TIPOS_TARTAS } from '@/app/data/typesCake.data'
import React from 'react'
import BadgeLevel from '../atoms/BadgeLevel'
import Image from 'next/image'
import TitleCard from '@/app/components/common/TitleCard'
import Paragraph from '@/app/components/common/Paragraph'
import BtnOrder from '@/app/components/layout/BtnOrder'
import Link from 'next/link'

const CardTypes = () => {
  return (
      <>
      <section className=" flex flex-wrap gap-8 justify-center w-full my-18  ">

      {
            TIPOS_TARTAS.map((cake) => (
                  <section key={cake.id} className=" w-full max-w-95 bg-bgPink border border-gold/75 rounded-4xl overflow-hidden transition-all duration-150 group lg:hover:-translate-y-2 lg:hover:shadow-xl/20 ">
                              <div className=" relative h-70 md:h-90 w-full ">
                                    <Image fill className=' absolute object-cover w-full group-hover:scale-102 transition-transform duration-300 ' src={cake.imagen} alt={''} />
                              </div>
                              <div className=" flex flex-col gap-2 p-6 ">
                                    <BadgeLevel level={cake.nivel} />
                                    <TitleCard titleCard={cake.titulo} />
                                    <Paragraph textParagraph={cake.descripcion} textSize={'textCard'} />
                                    {
                                          cake.caracteristicas.map((feature) => (
                                                <div key={feature[0]} className=" flex items-center gap-2 ">
                                                      <span className=" h-1 w-1 bg-gold rounded-full "></span>
                                                      <p className=" font-inter font-semibold text-sm text-paragraph ">{feature}</p>
                                                </div>
                                          ))
                                    }
                                    <div className=" flex items-center justify-between pt-4 border-t border-border ">
                                          <p className=" text-sm font-inter font-medium text-pinkPrimary ">{cake.precioTexto}</p>
                                          <Link href={'#contacto'}>
                                          <BtnOrder />
                                          </Link>
                                    </div>
                              </div>
                  </section>
            ))
      }
      </section>
      </>
  )
}

export default CardTypes