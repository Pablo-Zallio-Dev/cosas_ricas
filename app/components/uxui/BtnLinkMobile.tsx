import { useBtnMenuMobile } from "@/app/store/menuMobile.store";
import Link from "next/link";



export default function BtnLinkMobile( {linkText, href}: {linkText: string, href: string} ){
      const toggleMenu = useBtnMenuMobile((state) => state.toggleMenu)
      return(
            <Link href={href} className=" font-semibold font-cormorantGaramond text-lg text-chocolate " onClick={toggleMenu}>
                  {linkText}
            </Link>
      )
}