import LineSeparate from "@/app/components/common/LineSeparate";
import SubtitleSection from "@/app/components/common/SubtitleSection";
import TitleSection from "@/app/components/common/TitleSection";
import CardQuestionContact from "./CardQuestionContact";
import { Cake, Heart, Sparkles, Truck , CircleDollarSign, PackageCheck, Wand} from "lucide-react";
import CardInstagram from "./CardInstagram";

export default function QuestionSection(){
      return(
            <section className=" flex flex-col items-center px-5 xl:px-35 2xl:px-70  ">
                  <SubtitleSection subtitleText={"preguntas frequentes"} />
                  <TitleSection titleText={"Todo lo que nesecitas saber"} />
                  <LineSeparate />
                  <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-6 md:gap-10 pt-12  ">
                        <CardQuestionContact icon={Cake} title={"¿Con cuánta antelación debo pedir?"} text={"Tartas personalizadas: 3-4 días. Encargos peq: 48hs"} />
                        <CardQuestionContact icon={Truck} title={"¿Hacéis envíos a domicilio?"} text={"Sí, en Torrent y alrededores, en Valencia y otras zonas, consulta disponibilidad. Costo adicional desde 5€"} />
                        <CardQuestionContact icon={Sparkles} title={"¿Hacéis tartas personalizadas?"} text={"¡Por supuesto! Cuéntanos tu idea, temática o inspiración y la diseñamos contigo desde cero."} />
                        <CardQuestionContact icon={Heart} title={"¿Las decoraciones especiales tienen un coste adicional?"} text={"El precio de la tarta varía según la decoración solicitada, ya que los detalles especiales (fondant, láminas, toppers, flores o figuras) pueden incluir un suplemento."} />


                        <CardQuestionContact icon={CircleDollarSign} title={"¿Cómo se calcula el precio de una tarta personalizada?"} text={"El precio de cada tarta se calcula de forma personalizada según el tamaño, la cantidad de porciones, el relleno y la decoración elegidos."} />

                        <CardQuestionContact icon={PackageCheck} title={"¿Cómo se confirma y reserva un pedido?"} text={"El pedido y la fecha se confirman tras enviar el presupuesto personalizado y recibir el pago total o la señal establecida."} />

                        <CardQuestionContact icon={Wand} title={"¿Qué sabores y rellenos puedo elegir?"} text={"Ofrecemos variedad de bizcochos y rellenos personalizables, incluyendo combinaciones especiales. Algunos sabores dependen de la temporada o llevan suplemento."} />

                  </section>
                  <CardInstagram />
            </section>
      )
}