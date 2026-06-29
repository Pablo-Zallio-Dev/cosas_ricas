import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Parisienne } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/page";
import BtnFloatWhatsapp from "./components/common/BtnFloatWhatsapp";


const cormorantGaramond = Cormorant_Garamond({
      variable: "--font-cormorant-garamond",
      subsets: ["latin"]
})

const parisienne = Parisienne({
      variable: "--font-parisienne",
      subsets: ["latin"],
      weight: ["400"]
})

const inter = Inter({
      variable: "--font-inter",
      subsets: ["latin"]
})


export const metadata: Metadata = {
title: 'Cosas Ricas 2 - Inicio',
description: 'Pasteleria creativa y artesanal. Tartas personalizadas, pasteles, postres.',
keywords: ['Pasteleria', 'Tartas', 'Postres', 'tartas para cumpleaños', 'tartas personalizadas'],
openGraph:{
      title:'Cosas Ricas 2 - Tu pasteleria de confianza'
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} ${parisienne.variable} h-full antialiased bg-bgPink`}
    >
      <body className="min-h-full flex flex-col bg-bgPink">
            <Header />
            <main>{children}</main>
                                    <BtnFloatWhatsapp />

            <Footer />
      </body>
    </html>
  );
}

