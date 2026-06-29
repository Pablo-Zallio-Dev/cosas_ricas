import { Metadata } from "next";
import LineSeparate from "../components/common/LineSeparate";
import Paragraph from "../components/common/Paragraph";
import SubtitleSection from "../components/common/SubtitleSection";
import TitleSection from "../components/common/TitleSection";
import GalleryProducts from "./components/GalleryProducts";

export const metadata: Metadata = {
  title: "Cosas Ricas 2 - Galeria",
  description: "Todos los productos puedes verlo en nuestra galeria",
};


export default function PageGallery(){
      return(
           <section className=" flex flex-col items-center pt-50 px-5  ">
           <SubtitleSection subtitleText={"Catálogo"} />
           <TitleSection titleText={"Nuestros Productos"} />
           <LineSeparate />
           <Paragraph textParagraph={"Cada tarta se hornea por encargo para que llegue a tu mesa fresca, recién decorada y lista para sorprender."} textSize={"textSectionCenter"} />
           <GalleryProducts />
           </section>
      )
}