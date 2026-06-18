import Image from "next/image";
import TitleCard from "@/app/components/common/TitleCard";
import Paragraph from "@/app/components/common/Paragraph";
import BtnOrder from "@/app/components/layout/BtnOrder";
import { Product } from "@/app/store/useFilterStore";


type ProductProps = {
  product: Product
}



export default function CardGallery( {product}: ProductProps ){
      
      console.log(product)

      return(
            <section className=" w-full max-w-100 overflow-hidden rounded-4xl border border-border md:hover:-translate-y-1.5 md:hover:shadow-xl/10 transition-all duration-300 group   ">
                  <section className=" relative h-70 lg:h-100 overflow-hidden  ">
                        <Image src={product.image} alt={product.description} className=" lg:h-full object-cover transition-transform duration-700 group-hover:scale-110" fill />
                        <div className=" absolute top-3 left-3 py-1 px-3 uppercase font-inter text-[10px] text-chocolate bg-cream rounded-full "> {product.category} </div>
                  </section>
                  <section className=" flex flex-col gap-2 p-6 bg-bgWhite h-full ">
                        <section className=" flex justify-between items-center ">
                              <TitleCard titleCard={product.product} />
                              <p className=" text-pinkPrimary text-xs font-inter font-bold ">Desde {product.price}€</p>
                        </section>
                        <Paragraph textParagraph={product.description} textSize={"textCard"} />
                        <BtnOrder />
                  </section>

            </section>
      )
}