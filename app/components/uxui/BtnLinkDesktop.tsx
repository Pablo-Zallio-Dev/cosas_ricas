'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BtnLinkDesktop({ linkText, href }: { linkText: string, href: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={` w-max text-sm font-semibold font-inter transition-colors duration-150 group
        ${isActive ? 'text-pinkPrimary' : 'text-chocolate/80 hover:text-pinkPrimary'}`}
    >
      <span className="relative inline-block">
        {linkText}
        <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-150
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
        />
      </span>
    </Link>
  )
}