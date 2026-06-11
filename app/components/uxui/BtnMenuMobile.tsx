'use client'
import { useBtnMenuMobile } from "@/app/store/menuMobile.store";
import { Logs } from "lucide-react";

export default function BtnMenuMobile() {
      const toggleMenu = useBtnMenuMobile((state) => state.toggleMenu)

      return (
            <button className=" md:hidden " onClick={ toggleMenu }>
                  <Logs size={24} color="#ce3776" />
            </button>
      )
}