import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section"
import { FaHeadset, FaCalendarCheck, FaBookOpenReader } from "react-icons/fa6"

export default function About() {
    return (
        <Section dark id="about">
            <p className="tracking-[10px] text-center font-bold">About Us</p>
            <h2 className="text text-5xl sm:text-7xl text-center text-blue-400 mt-12 mb-24">How Does It Work?</h2>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 4xl:gap-8">

                <FadeIn>
                    <div className="p-4 bg-blue-100 rounded-md border-blue-200 border-2">
                        <div className="flex justify-center w-full py-10">
                            <FaHeadset size={48} className="text-blue-500" />
                        </div>

                        <p className="mx-4 text-2xl font-bold">Online & In-Person</p>
                        <div className="pt-4 pb-8">
                            <ul className="list-disc ml-10 text-gray-600">
                                <li>Customized lesson plans to target your strengths and challenges</li>
                                <li>Flexible session lengths to match your learning pace</li>
                                <li>Available on your preferred platform (Zoom, Google Meet, etc.)</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                    <div className="p-4 bg-blue-100 rounded-md border-blue-200 border-2">
                        <div className="flex justify-center w-full py-10">
                            <FaCalendarCheck size={48} className="text-blue-500" />
                        </div>

                        <p className="mx-4 text-2xl font-bold">Convinient & Flexable</p>
                        <div className="pt-4 pb-8">
                            <ul className="list-disc ml-10 text-gray-600">
                                <li>Customized lesson plans to target your strengths and challenges</li>
                                <li>Flexible session lengths to match your learning pace</li>
                                <li>Available on your preferred platform (Zoom, Google Meet, etc.)</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                    <div className="p-4 bg-blue-100 rounded-md border-blue-200 border-2">
                        <div className="flex justify-center w-full py-10">
                            <FaBookOpenReader size={48} className="text-blue-500" />
                        </div>

                        <p className="mx-4 text-2xl font-bold">Personalized Learning</p>
                        <div className="pt-4 pb-8">
                            <ul className="list-disc ml-10 text-gray-600">
                                <li>Customized lesson plans to target your strengths and challenges</li>
                                <li>Flexible session lengths to match your learning pace</li>
                                <li>Available on your preferred platform (Zoom, Google Meet, etc.)</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}