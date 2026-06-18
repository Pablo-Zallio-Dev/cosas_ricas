import { LucideIcon } from "lucide-react";

export default function IconContact({icon: Icon}: {icon:LucideIcon}){
      return(
            <section className=" w-max p-2.5 rounded-full border-pinkPrimary bg-bgPinkIcon ">
                  {Icon && <Icon size={18} color="#ce3776" />}
            </section>
      )
}