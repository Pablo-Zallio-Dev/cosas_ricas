import LineSeparate from "@/app/components/common/LineSeparate";
import SubtitleSection from "@/app/components/common/SubtitleSection";
import TitleSection from "@/app/components/common/TitleSection";
import CardQuestionContact from "./CardQuestionContact";
import { Cake, Heart, Sparkles, Truck } from "lucide-react";
import CardInstagram from "./CardInstagram";

export default function QuestionSection(){
      return(
            <section className=" flex flex-col items-center px-5 xl:px-35 2xl:px-70  ">
                  <SubtitleSection subtitleText={"preguntas frequentes"} />
                  <TitleSection titleText={"Todo lo que nesecitas saber"} />
                  <LineSeparate />
                  <section className=" grid grid-cols-1 md:grid-cols-2 md:justify-items-center gap-6 md:gap-10 pt-12  ">
                        <CardQuestionContact icon={Cake} title={"¿Con cuánta antelación debo pedir?"} text={"Para tartas personalizadas recomendamos 5-7 días. Para encargos pequeños, 48h suelen ser suficientes."} />
                        <CardQuestionContact icon={Heart} title={"¿Tenéis opciones sin gluten o veganas?"} text={"Sí. Trabajamos versiones sin gluten, sin lactosa y veganas de la mayoría de nuestras tartas. Consúltanos."} />
                        <CardQuestionContact icon={Sparkles} title={"¿Hacéis tartas personalizadas?"} text={"¡Por supuesto! Cuéntanos tu idea, temática o inspiración y la diseñamos contigo desde cero."} />
                        <CardQuestionContact icon={Truck} title={"¿Hacéis envíos a domicilio?"} text={"Sí, en Valencia capital. Para otras zonas, consulta disponibilidad."} />
                  </section>
                  <CardInstagram />
            </section>
      )
}