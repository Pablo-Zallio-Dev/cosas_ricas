import { Mail, MapPinCheckInside, Phone } from "lucide-react";
import Logo from "../../common/Logo";
import Paragraph from "../../common/Paragraph";
import IconFooterFacebook from "./components/IconFooterFacebook";
import IconFooterInstagram from "./components/IconFooterInstagram";
import LinkFooter from "./components/LinkFooter";

export default function Footer() {
  return (
    <section>
      <section className="  grid grid-cols-1 lg:grid-cols-5 gap-10  lg:justify-items-center mt-30 py-12 px-10 lg:px-40 bg-footer border-y border-border ">
        <section className=" flex flex-col gap-4 lg:col-start-1 lg:col-end-3 ">
          <Logo />
          <Paragraph
            textParagraph={
              "Pastelería artesanal hecha con mimo, ingredientes de calidad y la receta de siempre. Dulces que hacen especiales tus momentos."
            }
            textSize={"textCard"}
          />
          <section className=" flex gap-2 ">
            <IconFooterFacebook />
            <IconFooterInstagram />
          </section>
        </section>
        <section className=" ">
          <h3 className=" py-3 uppercase font-cormorantGaramond tracking-[.3em] ">
            Menú
          </h3>
          <nav className=" flex flex-col gap-1.5 ">
            <LinkFooter textLink={"Inicio"} href={"/"} />
            <LinkFooter textLink={"Tartas"} href={"/gallery"} />
            <LinkFooter textLink={"Contacto"} href={"/contact"} />
          </nav>
        </section>
        <section className=" flex flex-col gap-3 lg:col-start-4 lg:col-end-6 ">
          <h3 className=" py-3 uppercase font-cormorantGaramond tracking-[.3em] ">
            Contacto
          </h3>
          <div className=" flex gap-3 ">
            <Phone size={20} color="#ce3776" />
            <p className=" font-inter text-chocolate text-sm ">
              +34 600 36 35 35
            </p>
          </div>
          <div className=" flex gap-3 ">
            <Mail size={20} color="#ce3776" />
            <p className=" font-inter text-chocolate text-sm ">
              elisa@cosasricas2.com
            </p>
          </div>
          <div className=" flex gap-3 ">
            <MapPinCheckInside size={20} color="#ce3776" />
            <p className=" font-inter text-chocolate text-sm ">
              Av. El vedat 132, Torrent, Valencia
            </p>
          </div>
        </section>
      </section>
      <section className=" flex justify-around gap-12 w-full font-inter py-8 text-xs text-chocolate  ">
        <p className=" mx-6 text-center ">
          © 2026 Cosas Ricas 2. Todos los derechos reservados.
        </p>
        <p className=" mx-6 text-center ">
          Hecho con cariño y mucha mantequilla.
        </p>
      </section>
    </section>
  );
}
