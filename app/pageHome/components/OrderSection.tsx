import BtnPrimary from '@/app/components/common/BtnPrimary'
import Paragraph from '@/app/components/common/Paragraph'
import SubtitleSection from '@/app/components/common/SubtitleSection'
import TitleSection from '@/app/components/common/TitleSection'
import imageBg from '@/public/images/image_reservation.webp'
import { ArrowRight } from 'lucide-react'

export default function OrderSection() {
      return (
            <section className=" mt-36 px-5 lg:px-20 xl:px-65 2xl:px-100 ">
                  <section
                        className="w-full rounded-4xl border bg-cover bg-center overflow-hidden"
                        style={{
                              backgroundImage: `url(${imageBg.src})`,
                              backgroundSize: 'cover',
                        }}
                  >
                        <section className="w-full  h-full bg-black/40">

                              <section className="  w-full max-w-xl  h-full p-10 lg:py-20 ">
                                    <SubtitleSection gold subtitleText={'encargos personlizados'} />
                                    <TitleSection white titleText={'¿Tienes una celebración especial?'} />
                                    <Paragraph textParagraph={'Diseñamos tartas únicas para bodas, cumpleaños y eventos. Cuéntanos tu idea y la hacemos realidad, bocado a bocado.'} textSize={'textSectionLight'} />
                                    <section className=" mt-6 lg:mt-18 w-1/2 ">
                                          <BtnPrimary min icon={ArrowRight} linkText={'Pidenos presupuesto'} href={'/contact'} />
                                    </section>
                              </section>
                        </section>
                  </section>

            </section>
      )
}