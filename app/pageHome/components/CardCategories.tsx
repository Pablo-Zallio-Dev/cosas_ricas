import Paragraph from "@/app/components/common/Paragraph"
import TitleCard from "@/app/components/common/TitleCard"
import Image from "next/image"


export type CardCategoriesProps = {
      image: string,
      titleCard: string,
      textCard: string,
}

export default function CardCategories({ image, titleCard, textCard }: CardCategoriesProps) {
      return (
            <section className="rounded-4xl overflow-hidden bg-bgWhite w-70 border border-border md:hover:-translate-y-1.5 md:hover:shadow-xl/10 transition-all duration-300 group ">

                  <section className="relative overflow-hidden w-full aspect-square h-70  ">
                        <Image src={image} alt={textCard} fill className="object-cover transition-transform duration-700 group-hover:scale-110  " />
                  </section>
                  <section className=" flex flex-col gap-2  p-6 ">
                        <TitleCard titleCard={titleCard} />
                        <Paragraph textParagraph={textCard} textSize={"textCard"} />
                  </section>
            </section>
      )
}