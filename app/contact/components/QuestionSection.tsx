import LineSeparate from "@/app/components/common/LineSeparate";
import SubtitleSection from "@/app/components/common/SubtitleSection";
import TitleSection from "@/app/components/common/TitleSection";
import CardQuestionContact from "./CardQuestionContact";
import { Cake } from "lucide-react";
import CardInstagram from "./CardInstagram";

export default function QuestionSection(){
      return(
            <section className=" flex flex-col items-center px-5 xl:px-35 2xl:px-70 ">
                  <SubtitleSection subtitleText={"preguntas frequentes"} />
                  <TitleSection titleText={"Todo lo que nesecitas saber"} />
                  <LineSeparate />
                  <section className=" grid grid-cols-1 md:grid-cols-2 md:justify-items-center gap-6 md:gap-10 pt-12  ">
                        <CardQuestionContact icon={Cake} title={"¿Con cuánta antelación debo pedir?"} text={"Para tartas personalizadas recomendamos 5-7 días. Para encargos pequeños, 48h suelen ser suficientes."} />
                        <CardQuestionContact icon={Cake} title={"¿Con cuánta antelación debo pedir?"} text={"Para tartas personalizadas recomendamos 5-7 días. Para encargos pequeños, 48h suelen ser suficientes."} />
                        <CardQuestionContact icon={Cake} title={"¿Con cuánta antelación debo pedir?"} text={"Para tartas personalizadas recomendamos 5-7 días. Para encargos pequeños, 48h suelen ser suficientes."} />
                        <CardQuestionContact icon={Cake} title={"¿Con cuánta antelación debo pedir?"} text={"Para tartas personalizadas recomendamos 5-7 días. Para encargos pequeños, 48h suelen ser suficientes."} />
                  </section>
                  <CardInstagram />
            </section>
      )
}