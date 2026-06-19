import LineSeparate from "@/app/components/common/LineSeparate";
import Paragraph from "@/app/components/common/Paragraph";
import SubtitleSection from "@/app/components/common/SubtitleSection";
import TitleSection from "@/app/components/common/TitleSection";

export default function HeadSection(){
      return(
            <section className=" flex flex-col items-center py-20 ">
                  <SubtitleSection subtitleText={"hablemos"} />
                  <TitleSection titleText={"Pide tu dulce"} />
                  <LineSeparate />
                  <Paragraph textParagraph={"Cuéntanos qué quieres celebrar y te respondemos en menos de 24 horas con propuesta y presupuesto."} textSize={"textSectionCenter"} />
            </section>
      )
}