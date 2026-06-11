import Image, { StaticImageData } from "next/image"
import TitleCard from "../common/TitleCard"
import Paragraph from "../common/Paragraph"

export type CardHomeProps = {
      image: StaticImageData,
      titleCard: string,
      textCard: string,
}

export default function CardHome( {image, titleCard, textCard}: CardHomeProps ){
      return(
            <section className="rounded-4xl overflow-hidden bg-bgWhite border border-border ">
                  
                  <Image src={image} alt="Hola" className=" " />
                  <section className=" p-6 ">
                        <TitleCard titleCard={titleCard} />
                        <Paragraph textParagraph={textCard} textSize={"textCard"} />
                  </section>
            </section>
      )
}