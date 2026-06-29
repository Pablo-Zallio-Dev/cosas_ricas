import { Metadata } from "next";
import AboutSection from "./components/AboutSection";
import CategorySection from "./components/CategorySection";
import HeroSection from "./components/HeroSection";
import OrderSection from "./components/OrderSection";

export const metadata: Metadata = {
title: 'Cosas Ricas 2 - Inicio',
description: 'Pasteleria creativa y artesanal. Tartas personalizadas, pasteles, postres.',
keywords: ['Pasteleria', 'Tartas', 'Postres', 'tartas para cumpleaños', 'tartas personalizadas'],

}
export default function PageHome() {



      return (
            <>
                  <HeroSection />
                  <CategorySection />
                  <AboutSection />
                  <OrderSection />
            </>
      )
}