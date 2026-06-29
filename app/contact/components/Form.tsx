"use client";
import { useForm } from "react-hook-form";
import BtnSend from "./BtnSend";
import { Send } from "lucide-react";
import AlertFormInput from "./AlertFormInput";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalEmail from "./ModalEmail";

export default function Form() {

      const [showSuccessModal, setSuccesShowModal] = useState(false);
      const [showErrorModal, setErrorShowModal] = useState(false);
      const [showModal, setShowModal] = useState(false);



      useEffect(() => {
            if (showSuccessModal || showErrorModal) {
                  document.body.style.overflow = "hidden";
                  document.body.style.overflow = "unset";
            }

            return () => {
                  document.body.style.overflow = "unset";
            };
      }, [showSuccessModal, showErrorModal]);

      const { register, formState: { errors }, reset, handleSubmit } = useForm();

      const onSubmit = async (data: object) => {

            const formData = {
                  ...data,
                  access_key: "5de6d5e4-6d90-4eb6-8bc8-92a7b843af45" // 👈 Pega aquí tu llave
            };

            try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                              Accept: "application/json",
                        },
                        body: JSON.stringify(formData),
                  });

                  const result = await response.json();

                  if (result.success) {
                        setShowModal(true)
                        setSuccesShowModal(true)
                        setErrorShowModal(false)
                        reset();

                  } else {
                        setShowModal(true)
                        setSuccesShowModal(false)
                        setErrorShowModal(true)
                  }
            } catch {
                  setShowModal(true)
                  setSuccesShowModal(false)
                  setErrorShowModal(true)
            }

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
                                          required: true
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

                  {showModal &&
                        typeof document !== "undefined" &&
                        createPortal(
                              <ModalEmail
                                    succes={showSuccessModal}
                                    error={showErrorModal}
                                    closeModal={() => setShowModal(false)}
                              />,
                              document.body
                        )
                  }
            </section>
      );
}
