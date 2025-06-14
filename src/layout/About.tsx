import FadeIn from "@/components/animations/FadeIn";
import GradualSpacing from "@/components/animations/GradualSpacing";
import TextWave from "@/components/animations/TextWave";
import Section from "@/components/Section"
import { FaHeadset, FaCalendarCheck, FaBookOpenReader } from "react-icons/fa6"

export default function About() {
    return (
        <Section dark id="about">
            <FadeIn distance={20}>
                <TextWave center={true} className="tracking-[10px] text-center font-bold">About Us</TextWave>
            </FadeIn>
            <GradualSpacing center={true} length={0.02} className="font-title text-5xl sm:text-7xl text-blue-400 mt-12 mb-24">How Does It Work?</GradualSpacing>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 4xl:gap-8">

                <FadeIn>
                    <div className="p-4 h-full bg-blue-100 rounded-md border-blue-200 border-2">
                        <div className="flex justify-center w-full py-10">
                            <FaHeadset size={48} className="text-blue-500" />
                        </div>

                        <p className="mx-4 text-2xl font-bold">Online & In-Person</p>
                        <div className="pt-4 pb-8">
                            <ul className="list-disc ml-10 text-gray-600">
                                <li>Join sessions in person (Oakville Libary) or online from anywhere</li>
                                <li>Use your preferred platform (Zoom, Google Meet, etc.)</li>
                                <li>Seamless transition between formats whenever you need</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                    <div className="p-4 h-full bg-blue-100 rounded-md border-blue-200 border-2">
                        <div className="flex justify-center w-full py-10">
                            <FaCalendarCheck size={48} className="text-blue-500" />
                        </div>

                        <p className="mx-4 text-2xl font-bold">Convinient & Flexable</p>
                        <div className="pt-4 pb-8">
                            <ul className="list-disc ml-10 text-gray-600">
                                <li>Sessions built around your schedule</li>
                                <li>Adjustable lesson lengths to match your pace</li>
                                <li>Easy to book, reschedule, or switch between online and in-person</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                    <div className="p-4 h-full bg-blue-100 rounded-md border-blue-200 border-2">
                        <div className="flex justify-center w-full py-10">
                            <FaBookOpenReader size={48} className="text-blue-500" />
                        </div>

                        <p className="mx-4 text-2xl font-bold">Personalized Learning</p>
                        <div className="pt-4 pb-8">
                            <ul className="list-disc ml-10 text-gray-600">
                                <li>Custom lesson plans based on your goals and learning style</li>
                                <li>One-on-one support with full attention on you</li>
                                <li>Ongoing progress tracking and feedback</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}