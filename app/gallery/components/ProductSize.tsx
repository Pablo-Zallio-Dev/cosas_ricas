import Paragraph from '@/app/components/common/Paragraph'
import TitleCard from '@/app/components/common/TitleCard'
import { SIZES_DATA } from '@/app/data/sizes.data'
import React from 'react'
import PriceProductGallery from '../atoms/PriceProductGallery'

const ProductSize = () => {


      return (
            <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 my-10 w-full ">
                  {
                        SIZES_DATA.map((product) => (
                              <div key={product.id} className={` relative flex flex-col items-center gap-6 w-full p-6 border ${ product.mas_pedida ? 'border-pinkPrimary' : 'border-border' }  rounded-2xl bg-white lg:hover:-translate-y-2  lg:hover:shadow-2xl/10 transition-all duration-300 `}>
                                    {
                                          product.mas_pedida &&
                                          <p className=" absolute -top-2.75 py-1 px-3 rounded-full text-[10px] font-inter text-white bg-pinkPrimary uppercase ">más pedida</p>
                                    }
                                    <div className=" flex flex-col items-center w-full">
                                          <TitleCard titleCard={product.nombre} />
                                          <Paragraph center textParagraph={product.medida} textSize={'textCard'} />
                                    </div>
                                    <div className=" flex flex-col items-center w-full">
                                          <p className=" text-paragraph font-inter text-xs tracking-widest uppercase ">desde</p>
                                          <PriceProductGallery>{product.precio}</PriceProductGallery>
                                    </div>
                                    <div className=" w-full flex flex-col items-center pt-4 border-t border-border ">
                                          <Paragraph center textParagraph={product.porciones} textSize={'textCard'} className=' w-full font-bold ' />  
                                          <Paragraph center textParagraph={product.descripcion} textSize={'textCard'} className=' w-full ' />  
                                    </div>
                              </div>
                        ))
                  }
            </section>
      )
}

export default ProductSize