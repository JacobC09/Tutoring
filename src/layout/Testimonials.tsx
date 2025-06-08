import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa6"
import Slideshow from "@/components/Slideshow"
import Section from "@/components/Section";

export default function Testimonials() {
    return (
        <Section id="testimonials">
            <p className="tracking-[10px] text-center font-bold">Testamonials</p>
            <h2 className="text text-5xl sm:text-7xl text-center text-blue-400 mt-12 mb-24">Trusted By Dozens</h2>

            <div className="hidden xl:block relative w-[1000px] h-[650px] mx-auto">
                <Testimonial bg="bg-gray-800" line="bg-gray-500" className="absolute left-0 top-[50%] -rotate-6 translate-y-[-50%] w-96 text-white" />
                <Testimonial bg="bg-cyan-300" line="bg-cyan-500" className="absolute left-[50%] top-[5%] -rotate-12 translate-x-[-50%] w-96 text-gray-800" />
                <Testimonial bg="bg-yellow-300" line="bg-yellow-500" className="absolute bottom-0 left-[20%] rotate-3 w-96 text-gray-800" />
                <Testimonial bg="bg-lime-300" line="bg-lime-500" className="absolute right-0 top-[12%] rotate-6 w-96 text-gray-800" />
                <Testimonial bg="bg-rose-300" line="bg-rose-400" className="absolute right-[10%] bottom-[5%] rotate-12 w-96" />
            </div>

            <div className="block xl:hidden">
                <Slideshow>
                    <Testimonial bg="bg-gray-800" line="bg-gray-500" className="min-w-96 text-white" />
                    <Testimonial bg="bg-cyan-300" line="bg-cyan-500" className="min-w-96" />
                    <Testimonial bg="bg-yellow-300" line="bg-yellow-500" className="min-w-96" />
                    <Testimonial bg="bg-lime-300" line="bg-lime-500" className="min-w-96" />
                    <Testimonial bg="bg-rose-300" line="bg-rose-400" className="min-w-96" />
                </Slideshow>
            </div>
        </Section>
    );
}

function Testimonial({ bg, line, className="" }) {
    return (
        <div className={cn("px-8 py-12 grid gap-6 text-lg font-bold rounded-3xl rounded-br-none shadow-lg", className, bg)}>
            <div className="flex gap-3">
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum alias perferendis, minus qui corporis, culpa cumque.</p>
            <div className={cn("h-[2px] w-[60%]", line)}></div>
            <p>Jake C.</p>
        </div>
    );
}