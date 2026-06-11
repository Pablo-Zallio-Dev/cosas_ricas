import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BtnOrder(){
      return(
            <Link href={""} className=" flex items-center gap-1 w-max font-inter font-medium text-sm text-pinkPrimary border-b border-transparent hover:border-pinkPrimary transition-all " >
                  Encargar
                  <ArrowRight size={16} color="#ce3776" />
            </Link>
      )
}