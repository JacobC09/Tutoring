import ContactForm from "@/components/ContactForm"
import Section from "@/components/Section"
import FadeIn from "@/components/animations/FadeIn";
import { FaPhone, FaEnvelope } from "react-icons/fa6"
import { EMAIL, PHONE } from "@/lib/constants";
import GradualSpacing from "@/components/animations/GradualSpacing";

export default function Contact() {
    return (
        <Section dark id="contact">
            <FadeIn distance={20}>
                <p className="tracking-[10px] text-center font-bold">Contact Us</p>
            </FadeIn>

            <div className="mt-12 mb-24 lg:my-20 grid lg:grid-cols-2 items-center gap-24">
                <div>
                    <GradualSpacing length={0.02} className="font-title justify-center lg:justify-start text-5xl sm:text-7xl text-blue-400">Let's Chat!</GradualSpacing>
                    
                    <p className="py-10">
                        Feel free to send us a message. We'll be happy to schedule a session or answer any questions you may have.
                    </p>

                    <div className="grid gap-4">
                        <FadeIn>
                            <div className="flex items-center gap-4 bg-blue-100 border-blue-200 border-2 rounded-lg p-4">
                                <div className="bg-blue-300 text-blue-700 p-4 rounded-lg">
                                    <FaPhone size={22} />
                                </div>
                                <div>
                                    <p className="text-sm">Phone:</p>
                                    <p className="text-lg font-bold tracking-widest">{PHONE}</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="flex items-center gap-4 bg-blue-100 border-blue-200 border-2 rounded-lg p-4">
                                <div className="bg-blue-300 text-blue-700 p-4 rounded-lg">
                                    <FaEnvelope size={22} />
                                </div>
                                <div>
                                    <p className="text-sm">Email:</p>
                                    <p className="text-lg font-bold tracking-widest">{EMAIL}</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn>
                    <ContactForm />
                </FadeIn>
            </div>
        </Section>
    );
}