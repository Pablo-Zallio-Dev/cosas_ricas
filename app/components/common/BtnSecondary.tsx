import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type BtnSecondaryProps = {
  linkText: string;
  href: string;
  icon?: LucideIcon;
};


export default function BtnSecondary( { linkText, href, icon:Icon }: BtnSecondaryProps ) {
      return (
            <Link
                  href={href}
                  className=" 
                  w-max py-3 px-6 
                  text-chocolate font-medium font-inter
                  rounded-full 
                  md:hover:bg-cream
                  border border-border md:hover:border-gold
                  md:transition-colors md:duration-150 ">
                        {linkText}
            </Link>
      )
}