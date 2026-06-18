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
                  <Paragraph center textParagraph={"Cada categoría está pensada para acompañarte: desde el primer café del día hasta la celebración más esperada."} textSize={"textSection"} />
                  <GalleryCategorySection />
            </section>
      )
}