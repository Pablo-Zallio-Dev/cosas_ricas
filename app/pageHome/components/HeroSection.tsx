import BtnPrimary from "@/app/components/common/BtnPrimary";
import BtnSecondary from "@/app/components/common/BtnSecondary";
import Paragraph from "@/app/components/common/Paragraph";
import { ArrowRight, Building2, ClockAlert, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import heroImage from '@/public/images/image_hero.webp'

export default function HeroSection() {

      /* 
      pt-20 px-5 mt-20
      */
      return (
            <section className=" grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center items-center w-full h-full  pt-30 px-5 xl:px-35 2xl:px-50  ">
                  <section className=" flex flex-col justify-between 2xl:gap-6  ">
                        <section className=" flex gap-2 w-max py-1.5 px-4 border border-border rounded-full uppercase font-inter font-medium tracking-widest text-xs">
                              <Sparkles size={16} color="#e2c179" />
                              <h3 className=" text-chocolate  ">Pasteleria Artesanal</h3>
                        </section>

                        <h1 className=" mt-6 font-cormorantGaramond text-5xl md:text-6xl lg:text-7xl ">Los sabores que <span className=" text-pinkPrimary italic ">hacen especiales</span> tus momentos</h1>

                        <Paragraph textParagraph={"En Cosas Ricas 2 horneamos cada receta como en casa: con mantequilla de verdad, ingredientes seleccionados y mucho cariño. Tartas para celebrar, dulces para regalar y momentos para guardar."} textSize={"textLarge"} />

                        <section className="flex flex-wrap gap-4 mt-10 ">
                              <BtnPrimary linkText={"Ver tartas"} href={"/gallery"} icon={ArrowRight} />
                              <BtnSecondary linkText={"Contactar"} href={"/contact"} />
                        </section>

                        <section className=" flex flex-wrap justify-center gap-10 xl:gap-18 2xl:gap-26 mt-8 ">
                              <section className=" flex flex-col w-40 sm:w-max text-center items-center ">
                                    <Heart size={22} color="#ce3776" />
                                    <p className=" font-inter text-sm font-medium text-chocolate ">Hecho a mano</p>
                              </section>
                              <section className=" flex flex-col w-40 sm:w-max text-center items-center ">
                                    <Building2 size={22} color="#ce3776" /> 
                                    <p className=" font-inter text-sm font-medium text-chocolate ">Ingredientes locales</p>
                              </section>
                              <section className=" flex flex-col w-40 sm:w-max text-center items-center ">
                                    <ClockAlert size={22} color="#ce3776" />
                                    <p className=" font-inter text-sm font-medium text-chocolate ">Sin prisas</p>
                              </section>
                        </section>
                  </section>
                  <section className="  ">
                       <section className=" relative lg:h-full  ">
                        <Image src={heroImage} alt={"Imagen de tarta en pagina principal  "} className=" lg:h-full lg:object-cover border border-cream rounded-4xl shadow-xl/20 " />
                        <section className=" absolute -bottom-6 -left-4 p-4 flex flex-col gap-2 rounded-xl border border-border bg-white ">
                              <p className=" font-inter text-xs uppercase tracking-widest ">Tarta del mes</p>
                              <p className=" font-cormorantGaramond text-sm ">Dulce azul artesanal</p>
                        </section>
                       </section>
                  </section>
            </section>
      )
}