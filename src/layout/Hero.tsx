"use client";

import Abstract from "@/assets/abstract";
import HoverLink from "@/components/animations/HoverLink";
import Navbar from "@/components/Navbar";
import Arrow from "@/components/Arrow";
import GradualSpacing from "@/components/animations/GradualSpacing";
import FadeIn from "@/components/animations/FadeIn";
import { FaLocationDot } from "react-icons/fa6";

export default function Hero() {
    return (
        <div className="relative w-full overflow-x-hidden" id="hero">
            <div className="relative flex flex-col items-center py-[8vh] min-h-[90vh] md:min-h-screen mx-12 xl:mx-0 xl:items-start xl:ml-[10vw]">

                <Navbar>
                    <HoverLink className="tracking-widest" href="#about">ABOUT</HoverLink>
                    <HoverLink className="tracking-widest" href="#subjects">SUBJECTS</HoverLink>
                    <HoverLink className="tracking-widest" href="#contact">CONTACT</HoverLink>
                    <HoverLink className="tracking-widest" href="#testimonials">TESTIMONIALS</HoverLink>
                    <HoverLink className="tracking-widest" href="#faq">FAQ</HoverLink>
                </Navbar>

                <div className="max-w-screen-md my-auto py-8">
                    <FadeIn distance={20}>
                        <div className="flex gap-2 items-center">
                            <FaLocationDot size={25} />
                            <p className="font-bold text-2xl">Oakville</p>
                        </div>
                    </FadeIn>
                    <div className="my-8">
                        <GradualSpacing className="text-7xl font-title sm:text-8xl lg:text-9xl text-blue-600">Personal</GradualSpacing>
                        <GradualSpacing className="text-7xl font-title sm:text-8xl lg:text-9xl text-blue-600" delay={0.25}>Tutoring</GradualSpacing>
                    </div>
                    <FadeIn distance={20}>
                        <p className="text-base sm:text-lg font">
                            Empowering students in Oakville with personalized tutoring! We provide expert guidance in math, science,
                            and more, helping students build confidence and achieve academic success. Whether it&apos;s homework help or exam prep,
                            we&apos;re here to support every learner&apos;s journey!
                        </p>
                        <button 
                            className="relative px-10 py-4 bg-black text-white font-bold rounded-full tracking-[4px] text-base my-8"
                            onClick={() => document.getElementById("contact").scrollIntoView()}
                        >
                            CONTACT US
                            <div className="absolute rounded-full size-full bg-black opacity-20 left-1 top-2 -z-10"></div>
                        </button>
                    </FadeIn>
                </div>
            </div>

            <div className="absolute h-screen hidden top-0 right-0 xl:block xl:translate-x-[60%] 2xl:translate-x-[50%] 3xl:translate-x-[25%] 4xl:translate-x-[10%] min-[2250px]:translate-x-0">
                <Abstract />
            </div>

            <Arrow></Arrow>

        </div>
    );
}
