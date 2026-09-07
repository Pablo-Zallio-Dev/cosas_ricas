import Image from "next/image";
import imageAbout from "@/public/images/image_about.webp";
import SubtitleSection from "@/app/components/common/SubtitleSection";
import TitleSection from "@/app/components/common/TitleSection";
import Paragraph from "@/app/components/common/Paragraph";
import BtnSecondary from "@/app/components/common/BtnSecondary";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="  flex flex-col xl:flex-row gap-18 w-full pt-24 px-5 xl:px-20 2xl:px-50 ">
      <section className=" relative  flex justify-center self-center  rounded-2xl overflow-hidden ">
        <Image
          className="  "
          src={imageAbout}
          alt={"Imagen de seccion about, trabajando en reposteria"}
        />
      </section>
      <section className="  m-auto w-11/12">
        <SubtitleSection subtitleText={"sobre nosotros"} />

        <TitleSection titleText={"Una historia que se hornea cada día."} className=" xl:px-10 2xl:px-18" />

        <Paragraph
          textParagraph={
            "Si echo la vista atrás, todos mis recuerdos empiezan en el mismo lugar: la cocina. Me veo charlando con mi madre y mis hermanas, observando con atención los secretos de mi tía al cocinar."
          }
          textSize={"textSection"}
        />
        <Paragraph
          textParagraph={
            "Mi pasión por la cocina se forjó durante las vacaciones de verano en nuestra casa de campo, donde el tiempo transcurría despacio y las horas libres se convertían en la oportunidad perfecta para practicar, experimentar y aprender el arte culinario. Una forma de compartir momentos de complicidad, disfrutar juntas y mantenernos unidas. Y, como suele ocurrir en la vida, los caminos cambian y nos llevan hacia nuevos lugares."
          }
          textSize={"textSection"}
        />

        <Paragraph
          textParagraph={
            "Hace cinco años, por circunstancias de la vida, nos instalamos en este nuevo lugar y decidimos embarcarnos en un nuevo proyecto: Cosas Ricas 2, una pastelería artesanal nacida de aquella pasión por la cocina y de las ganas de seguir creando y compartiendo."
          }
          textSize={"textSection"}
        />

                <Paragraph
          textParagraph={
            "Hoy elaboramos nuestros productos con ingredientes naturales y productos propios de este país, buscando mantener ese sabor de toda la vida que nos conecta con nuestros recuerdos, pero adaptándonos también a las nuevas circunstancias, a las nuevas tendencias y, sobre todo, a las necesidades y deseos de nuestros clientes. Porque cada encargo es diferente y detrás de cada tarta hay una historia, una celebración y alguien que ha confiado en nosotros para formar parte de un momento especial. Cosas Ricas 2 es la unión entre lo que aprendimos ayer y todo lo que seguimos creando hoy."
          }
          textSize={"textSection"}
        />
        
                <Paragraph
          textParagraph={
            "Cosas Ricas 2 es la unión entre lo que aprendimos ayer y todo lo que seguimos creando hoy."
          }
          textSize={"textSection"}
        />

        <section className=" my-8 ">
          <BtnSecondary
            icon={ArrowRight}
            linkText={"Conocenos mas"}
            href={"/contact"}
          />
        </section>
      </section>
    </section>
  );
}
