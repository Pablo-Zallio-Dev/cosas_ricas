import CardWhatsapp from "./components/CardWhatsapp";
import Form from "./components/Form";
import HeadSection from "./components/HeadSection";
import InfoContact from "./components/InfoContact";
import QuestionSection from "./components/QuestionSection";

export default function Contact() {
      return (
            <section className=" flex flex-col items-center justify-center mt-20 ">
                  <HeadSection />
                  <section className=" flex flex-col lg:flex-row lg:justify-center gap-12 w-full pb-16 px-5 xl:px-35 2xl:px-50">
                        <Form />
                        <section className=" flex flex-col gap-6 ">
                              <CardWhatsapp />
                              <InfoContact />
                        </section>
                  </section>
                  <QuestionSection />
            </section>
      )
}