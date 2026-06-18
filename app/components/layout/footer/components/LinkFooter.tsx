import Link from "next/link";

export default function LinkFooter( {textLink, href}: { textLink: string, href: string } ){
      return <Link href={href} className=" text-paragraph text-sm font-inter md:hover:text-pinkPrimary " > {textLink} </Link>
}