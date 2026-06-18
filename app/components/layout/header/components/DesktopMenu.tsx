import BtnLinkDesktop from "../../BtnLinkDesktop";

export default function DesktopMenu(){
      return(
            <nav className=" hidden md:flex md:gap-10 ">
                  <BtnLinkDesktop linkText={'Inicio'} href={"/"} />
                  <BtnLinkDesktop linkText={'Tartas'} href={"/gallery"} />
                  <BtnLinkDesktop linkText={'Contacto'} href={"/contact"} />
            </nav>
      )
}