'use client'
import { useBtnMenuMobile } from "@/app/store/menuMobile.store";
import {  X } from "lucide-react";

export default function BtnCloseMenuMobile() {
      const toggleMenu = useBtnMenuMobile((state) => state.toggleMenu)

      return (
            <button className=" md:hidden " onClick={ toggleMenu }>
                  <X size={24} color="#ce3776" />
            </button>
      )
}
