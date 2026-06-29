"use client";
import { useBtnMenuMobile } from "@/app/store/menuMobile.store";
import { Logs } from "lucide-react";

export default function BtnMenuMobile() {
  const toggleMenu = useBtnMenuMobile((state) => state.toggleMenu);
  const isOpen = useBtnMenuMobile((state) => state.isOpen);

  return (
    <button
      className=" md:hidden "
      aria-label={
        isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
      }
      aria-expanded={isOpen}
      onClick={toggleMenu}
    >
      <Logs size={24} color="#ce3776" />
    </button>
  );
}
