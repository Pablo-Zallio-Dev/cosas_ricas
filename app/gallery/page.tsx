import { Metadata } from "next";
import LineSeparate from "../components/common/LineSeparate";
import Paragraph from "../components/common/Paragraph";
import SubtitleSection from "../components/common/SubtitleSection";
import TitleSection from "../components/common/TitleSection";
import GalleryProducts from "./components/GalleryProducts";

export const metadata: Metadata = {
title: 'Cosas Ricas 2 - Galeria',
description: 'Pasteleria creativa y artesanal. Tartas personalizadas, pasteles y postres.',
keywords: ['Pasteleria', 'Tartas', 'Postres', 'tartas para cumpleaños', 'tartas personalizadas'],
openGraph:{
      title:'Cosas Ricas 2 - Encuentra lo mejor en nuestra galeria de productos'
}
}

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