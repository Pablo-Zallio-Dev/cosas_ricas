import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CardWhatsapp() {

            const phoneNumber = "34123456789"; // Código de país (ej. 34 España) seguido del número


      return (
            <Link target="_blank" href={`https://wa.me/${phoneNumber}`}
                  className=" flex flex-col gap-2 p-7 rounded-3xl bg-linear-to-br to-bgPink from-pinkPrimary text-cream  lg:hover:-translate-y-0.5
      lg:hover:shadow-lg/20
      transition-all duration-150 "
            >
                  <MessageCircle size={23} color={"#fbf6ee"} />
                  <h3 className=" mt-3 uppercase font-inter text-xs ">lo mas rapido</h3>
                  <h2 className=" font-cormorantGaramond text-2xl ">WhatsApp directo</h2>
                  <p className=" font-inter text-sm ">+34 333 63 63 63</p>
            </Link>
      );
}
