import Image from "next/image";
import imageAbout from '@/public/images/image_about.webp'
import SubtitleSection from "@/app/components/common/SubtitleSection";
import TitleSection from "@/app/components/common/TitleSection";
import Paragraph from "@/app/components/common/Paragraph";
import BtnSecondary from "@/app/components/common/BtnSecondary";
import { ArrowRight } from "lucide-react";

export default function AboutSection(){
      return(
           <section className="  flex flex-col lg:flex-row gap-18 w-full pt-24 px-5 xl:px-35 2xl:px-50 ">
                  <section className=" relative  flex justify-center self-center w-11/12 lg:w-full rounded-2xl overflow-hidden ">
                        <Image className="  " src={imageAbout} alt={'Imagen de seccion about, trabajando en reposteria'} />
                  </section>
                  <section className="  m-auto w-11/12">
                        <SubtitleSection subtitleText={"sobre nosotros"} />
                        <TitleSection titleText={"Una historia que se hornea cada día."} />
                        <Paragraph textParagraph={"Cosas Ricas 2 nació en una cocina pequeña, con un horno viejo y una idea muy clara: hacer pastelería como antes. Sin atajos. Con tiempo. Con la receta de la abuela en una mano y un cuaderno de ideas en la otra."} textSize={"textSection"} />
                        <Paragraph textParagraph={"Hoy seguimos siendo el mismo equipo familiar, amasando temprano para que cada bocado te sepa a hogar. Porque lo dulce, cuando se hace con cariño, se nota."} textSize={"textSection"} />
                        <section className=" my-8 ">
                        <BtnSecondary icon={ArrowRight} linkText={"Conocenos mas"} href={"/contact"} />

                        </section>
                  </section>
           </section>
      )
}