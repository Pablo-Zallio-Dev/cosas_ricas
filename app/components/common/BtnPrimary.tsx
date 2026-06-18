import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type BtnPrimaryProps = {
      linkText: string;
      href: string;
      icon?: LucideIcon;
      min?: boolean
};

export default function BtnPrimary({
      linkText,
      min,
      href,
      icon: Icon,
}: BtnPrimaryProps) {
      return (
            <Link
                  href={href}
                  className={` 
             flex items-center gap-2 
      ${min ? ' w-min md:w-max ' : 'w-max'} py-3 px-6 
      text-chocolate font-medium font-inter
      rounded-full bg-linear-to-br from-[#fbedee] to-[#f9a3a7] md:hover:brightness-104
      shadow-xl/10 md:hover:-translate-y-0.5 
      md:transition-all md:duration-150
       `}
            >
                  {linkText}
                  {Icon && <Icon size={16} color="#4c271a" />}
            </Link>
      );
}
