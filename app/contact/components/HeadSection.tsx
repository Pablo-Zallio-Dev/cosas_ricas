import LineSeparate from "@/app/components/common/LineSeparate";
import Paragraph from "@/app/components/common/Paragraph";
import SubtitleSection from "@/app/components/common/SubtitleSection";
import TitleSection from "@/app/components/common/TitleSection";

export default function HeadSection(){
      return(
            <section className=" flex flex-col items-center py-20 w-full ">
                  <SubtitleSection subtitleText={"hablemos"} />
                  <TitleSection titleText={"Pide tu dulce"} />
                  <LineSeparate />
                  <Paragraph textParagraph={"Porque una celebración especial merece una tarta especial."} textSize={"textSectionCenter"} />
                  <Paragraph textParagraph={"Cuéntanos tu idea y la hacemos realidad."} textSize={"textSectionCenter"} />
            </section>
      )
}