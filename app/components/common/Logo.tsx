import Link from "next/link";


export default function Logo(){
      return(
            <>
            <Link className="  " href='/'>
            <h2 className=" text-2xl sm:text-3xl lg:text-4xl font-cormorantGaramond text-chocolate ">Cosas <span className=" text-pinkPrimary italic ">Ricas<sup>2</sup></span> </h2>
            </Link>
            </>
      )
}