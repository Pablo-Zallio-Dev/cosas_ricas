import IconContact from "@/app/components/layout/IconContact"
import { LucideIcon } from "lucide-react"

export interface DataContactProps {
      icon: LucideIcon,
      title: string,
      info: string | string[]
}

export default function DataContact({ icon: Icon, title, info }: DataContactProps) {
      return (
            <section className=" flex items-center gap-4 ">
                  <IconContact icon={Icon} />
                  <section className="  ">
                        <h2 className=" text-xs text-chocolate font-inter uppercase tracking-widest "> {title} </h2>
                        {Array.isArray(info) ? (
                              <div className="flex flex-col gap-0.5 mt-1">
                                    {info.map((line, index) => (
                                          <p key={index} className="font-inter text-base text-chocolate">
                                                {line}
                                          </p>
                                    ))}
                              </div>
                        ) : (
                              <h3 className="font-inter text-base text-chocolate">{info}</h3>
                        )}
                  </section>
            </section>
      )
}