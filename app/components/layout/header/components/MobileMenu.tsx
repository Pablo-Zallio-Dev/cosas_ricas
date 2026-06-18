import BtnPrimary from "@/app/components/common/BtnPrimary";
import BtnLinkMobile from "../../BtnLinkMobile";

export default function MobileMenu( ){
      return(
            <nav className=" flex flex-col gap-4 w-full py-6 px-5 bg-bgPink border-y border-border md:hidden ">
                  <BtnLinkMobile linkText={"Inicio"} href={"/"} />
                  <BtnLinkMobile linkText={"Tartas"} href={"/gallery"} />
                  <BtnLinkMobile linkText={"Contacto"} href={"/contact"} />
                  <BtnPrimary linkText={"Haz tu pedido"} href={"/contact"} />
            </nav>
      )
}