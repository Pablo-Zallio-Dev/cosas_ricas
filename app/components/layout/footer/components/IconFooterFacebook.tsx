import Link from "next/link";



export default function IconFooterFacebook() {
      return (
            <>
            <Link target="_blank" href={"https://www.facebook.com/elisacosasricas/?locale=es_LA"} className=" flex w-min group border border-border hover:border-gold rounded-full group md:transition-all md:duration-150 " >
                  <svg className=" p-2.5 " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path className="  group-hover:stroke-pinkPrimary md:transition-all md:duration-150 " fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 10v4h3v7h4v-7h3l1-4h-4V8c0-.545.455-1 1-1h3V3h-3c-2.723 0-5 2.277-5 5v2z"/></svg>
            </Link>
            </>
      )
}