"use client";
import { useForm } from "react-hook-form";
import BtnSend from "./BtnSend";
import { Send } from "lucide-react";
import AlertFormInput from "./AlertFormInput";

export default function Form() {
  const { register, formState: { errors }, reset , handleSubmit } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
    reset()
  };

  return (
    <section
      className=" 
            w-full
            lg:w-1/2
            p-8 
            border border-border 
            rounded-3xl
            bg-bgWhite
             "
    >
      <h2 className=" font-cormorantGaramond text-2xl ">Cuentanos tu idea</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-8 mt-8 "
      >
        <div className=" relative flex flex-col gap-2  ">
          <label className="font-inter uppercase text-xs text-chocolate/70 tracking-widest" htmlFor="name">Nombre*</label>
          <input
            className=" py-3 px-4 bg-bgPink border border-border rounded-xl font-inter  "
            placeholder="Tu nombre"
            type="text"
            id="name"
            {...register("name", {
                  required: true,
                  minLength: 1
            })}
          />
          {
            errors.name?.type === 'required' && <AlertFormInput text={'El nombre es requerido'} />
          }
        </div>
        <div className=" relative flex flex-col gap-2 ">
          <label className="font-inter uppercase text-xs text-chocolate/70 tracking-widest" htmlFor="email">Email*</label>
          <input
            className=" py-3 px-4 bg-bgPink border border-border rounded-xl font-inter  "
            placeholder="email@email.com"
            type="text"
            id="email"
            {...register("email", {
                  required: true,
                  pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            })}
          />
       {
            errors.email?.type === 'required' && <AlertFormInput text={'El email es requerido'} />
          }
          {
            errors.email?.type === 'pattern' && <AlertFormInput text={'Requerimos un formato de email valido'} />
          }
        </div>
        <div className="relative flex flex-col gap-2 ">
          <label className="font-inter uppercase text-xs text-chocolate/70 tracking-widest" htmlFor="phone">Telefono*</label>
          <input
            className=" py-3 px-4 bg-bgPink border border-border rounded-xl font-inter  "
            placeholder="Tu telefono"
            type="text"
            id="phone"
            {...register("phone", {
                  required:true
            })}
          />
          {
            errors.phone?.type === 'required' && <AlertFormInput text={'El telefono es requerido'} />
          }
        </div>
        <div className="relative flex flex-col gap-2 ">
          <label className="font-inter uppercase text-xs text-chocolate/70 tracking-widest" htmlFor="email">mensaje*</label>
          <textarea
            className=" py-3 px-4 bg-bgPink border border-border rounded-xl font-inter resize-none  "
            placeholder="Cuentanos que nesecitas, fecha del evento, numero de personas..."
            id="message"
            rows={6}
            {...register('message', {
                  required: true,
                  minLength: 1,
                  maxLength: 255
            })}
          ></textarea>
          {
            errors.message?.type === 'required' && <AlertFormInput text={'Por favor, comentenos sus dudas'} />
          }
          {
            errors.message?.type === 'maxLength' && <AlertFormInput text={'El mensaje debe contener menos de 255 caracteres'} />
          }
        </div>
        <BtnSend text="Enviar mensaje" icon={Send} />
      </form>
    </section>
  );
}
