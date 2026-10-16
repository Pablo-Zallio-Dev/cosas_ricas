import Image from "next/image";
import TitleCard from "@/app/components/common/TitleCard";
import Paragraph from "@/app/components/common/Paragraph";
import BtnOrder from "@/app/components/layout/BtnOrder";
import { Product } from "@/app/store/useFilterStore";


type ProductProps = {
      product: Product
}



export default function CardGallery({ product }: ProductProps) {

      const isValidUrl =
            product.image &&
            (product.image.startsWith("http://") ||
                  product.image.startsWith("https://") ||
                  product.image.startsWith("/"));

      const imageSrc = isValidUrl ? product.image : "/images/logo.png";

      return (
            <section className="flex flex-col h-full w-full max-w-80 overflow-hidden rounded-4xl border border-border bg-bgWhite md:hover:-translate-y-1.5 md:hover:shadow-xl/10 transition-all duration-300 group">

                  {/* Contenedor de la imagen */}
                  <section className="relative h-50 lg:h-70 overflow-hidden">
                        <Image src={imageSrc} alt={product.description} className="lg:h-full object-cover transition-transform duration-700 group-hover:scale-110" fill />
                        <div className="absolute top-3 left-3 py-1 px-3 uppercase font-inter text-[10px] text-chocolate bg-cream rounded-full">
                              {product.category}
                        </div>
                  </section>

                  {/* Contenedor de la información: flex-1 y justify-between para estirar y separar */}
                  <section className="flex flex-col flex-1 p-6  justify-between">

                        {/* Bloque superior (Título y Precio) */}
                        <div className="flex flex-col gap-2">
                              <section className="flex justify-between items-center">
                                    <TitleCard titleCard={product.product} />
                                    {product.price > 0 && (
                                          <p className="text-pinkPrimary text-xs font-inter font-bold">
                                                Desde {product.price}€
                                          </p>
                                    )}
                              </section>

                              <Paragraph textParagraph={product.description} textSize={"textCard"} />
                        </div>

                        {/* Bloque inferior (Botón empujado al fondo con mt-auto) */}
                        <div className="mt-auto pt-4">
                              <BtnOrder />
                        </div>

                  </section>
            </section>
      )
}