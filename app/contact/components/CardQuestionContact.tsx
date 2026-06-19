import IconContact from "@/app/components/layout/IconContact";
import { LucideIcon } from "lucide-react";

export interface CardQuestionProps {
      icon: LucideIcon;
      title: string;
      text: string;
}

export default function CardQuestionContact({
      icon: Icon,
      title,
      text,
}: CardQuestionProps) {
      return (
            <section
                  className=" flex flex-col gap-4 p-7 w-full md:w-3/4 border border-border bg-bgWhite rounded-3xl text-chocolate  lg:hover:-translate-y-0.5
      lg:hover:shadow-xl/10
      transition-all duration-150  "
            >
                  <section className=" flex gap-6 ">
                        <IconContact icon={Icon} />
                        <p className=" text-xl font-cormorantGaramond "> {title} </p>
                  </section>
                  <p className=" text-sm font-inter leading-relaxed "> {text} </p>
            </section>
      );
}
