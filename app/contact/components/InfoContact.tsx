import { Clock, Mail, MapPin, Phone } from "lucide-react";
import DataContact from "./DataContact";


export default function InfoContact(){
      return(
            <section className=" flex flex-col gap-7 p-7 border border-border bg-white rounded-3xl ">
                <DataContact icon={Phone} title={"Telefono"} info={"+34 600 63 63 63"} />
                <DataContact icon={Mail} title={"Email"} info={"email@cosasricas.com"} />
                <DataContact icon={MapPin} title={"direccion"} info={"C/ pepito, 46, Torrent 46900, Valencia"} />
                <DataContact icon={Clock} title={"Horarios"} info={"Lun-Vie - 9:00 - 18:00"} />
            </section>
      )
}