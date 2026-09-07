import LineSeparate from "@/app/components/common/LineSeparate";
import Paragraph from "@/app/components/common/Paragraph";
import SubtitleSection from "@/app/components/common/SubtitleSection";
import TitleSection from "@/app/components/common/TitleSection";
import GalleryCategorySection from "./GalleryCategorySection";

export default function CategorySection(){
      return(
            <section className=" flex flex-col justify-center items-center w-full pt-36">
                  <SubtitleSection subtitleText={"nuestra carta"} />
                  <section className=" text-center ">

                  <TitleSection titleText={"Pequeños placeres, grandes momentos"} />
                  </section>
                  <LineSeparate />
                  <Paragraph center textParagraph={"¿Quieres una tarta diferente, creada especialmente para ti y para una ocasión importante? ¿Tienes un evento especial y quieres sorprender a todos tus invitados?"} textSize={"textSection"} />
                  <Paragraph center textParagraph={"Elige un producto artesanal, creativo y hecho con productos de calidad, elaborado en nuestro obrador para que cada detalle sea especial."} textSize={"textSection"} />
                  <GalleryCategorySection />
            </section>
      )
}