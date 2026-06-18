'use client'
import { useBtnMenuMobile } from "@/app/store/menuMobile.store";
import Logo from "../../common/Logo";
import BtnMenuMobile from "../BtnMenuMobile";
import MobileMenu from "./components/MobileMenu";
import BtnCloseMenuMobile from "../BtnCloseMenuMobile";
import DesktopMenu from "./components/DesktopMenu";
import BtnPrimary from "../../common/BtnPrimary";

export default function Header(){
const isOpen = useBtnMenuMobile((state) => state.isOpen)


console.log(isOpen)

      return(
            <header className=" fixed z-1000 flex justify-between items-center w-full h-20 px-5 xl:px-35 2xl:px-65 bg-bgPink border-b border-border ">
                  <Logo />
                  
                  {
                        !isOpen ? <BtnMenuMobile /> : <BtnCloseMenuMobile />
                  }
                  
                  <section className={` absolute left-0 opacity-50  invisible ${ isOpen ?'top-20 z-1000 opacity-100 visible transition-all duration-800 ease-in-out ' :'  top-30 opacity-0 invisible ' }  w-full `}>
                        <MobileMenu  />
                  </section>
                  <DesktopMenu />
                  <section className=" hidden md:block ">
                        <BtnPrimary linkText={"Haz tu pedido"} href={"/contact"} />
                  </section>
            </header>
      )
}