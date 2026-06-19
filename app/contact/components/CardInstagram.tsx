import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function CardInstagram() {
  return (
    <Link
      className=" flex flex-col md:flex-row md:justify-around gap-10 items-center 
      w-full md:w-3/4  
      mt-20 py-10 
      bg-[linear-gradient(90deg,rgba(255,228,228,1)_0%,rgba(251,246,237,1)_50%,rgba(242,230,215,1)_100%)] 
      rounded-3xl 
      border border-border
      lg:hover:-translate-y-0.5
      lg:hover:shadow-xl/10
      transition-all duration-150 "
      href={""}
    >
      <section className=" flex gap-4 ">
        <div className=" bg-bgWhite p-3 rounded-full ">
          <svg
            className="w-8 h-8 text-pinkPrimary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <section className=" flex flex-col justify-center ">
          <h2 className=" uppercase tracking-widest font-inter text-chocolate text-xs ">
            siguenos
          </h2>
          <h2 className=" font-cormorantGaramond text-2xl ">@cosasricas2</h2>
        </section>
      </section>
      <section className=" flex items-center gap-3 ">
        <p className=" font-inter text-sm ">
          Inspirate con nuestas ultimas creaciones
        </p>
        <MoveRight strokeWidth={1.75} />
      </section>
    </Link>
  );
}
