'use client'
export default function ModalEmail({ succes, error, closeModal }: { succes: boolean, error: boolean, closeModal: () => void }) {
      return (
            <section className=" fixed top-0 left-0 z-5000 w-full h-screen flex justify-center items-center bg-chocolate/20 ">
                 <section className=" flex flex-col items-center p-6 rounded-2xl border border-border bg-cream ">
                   {
                        succes && 
                        <section className=" flex flex-col items-center gap-2 pb-10 ">
                              <p className=" text-3xl ">✅</p>
                              <p className=" font-inter ">¡Mensaje enviado con exito!</p>
                        </section>
                  }
                  {
                        error &&
                         <section className=" flex flex-col items-center gap-2 px-10 pb-10 ">
                              <p className=" text-xl ">❌</p>
                              <p className=" font-inter ">¡Error de envio!</p>
                        </section>
                  }

                  <button className=" font-inter border border-border rounded-xs px-4 text-sm uppercase " onClick={closeModal}>cerrar</button>
                 </section>
            </section>
      )
}


