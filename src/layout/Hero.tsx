import Abstract from "@/assets/abstract";
import HoverLink from "@/components/HoverLink";
import Navbar from "@/components/Navbar";
import { FaLocationDot, FaAngleDown } from "react-icons/fa6";

export default function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden" id="hero">
            <div className="relative h-screen flex flex-col justify-center items-center mx-12 xl:m-0 xl:items-start xl:ml-[10vw]">

                <Navbar>
                    <HoverLink className="tracking-widest">ABOUT</HoverLink>
                    <HoverLink className="tracking-widest">SUBJECTS</HoverLink>
                    <HoverLink className="tracking-widest">CONTACT</HoverLink>
                    <HoverLink className="tracking-widest">TESTIMONIALS</HoverLink>
                </Navbar>

                <div className="max-w-screen-md">
                    <div className="flex gap-2 items-center">
                        <FaLocationDot size={25} />
                        <p className="font-bold text-2xl">Oakville</p>
                    </div>
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl text-blue-600 tracking-wider my-8">Personal Tutoring</h1>
                    <p className="text-lg font">
                        Empowering students in Oakville with personalized tutoring! We provide expert guidance in math, science,
                        and more, helping students build confidence and achieve academic success. Whether it&apos;s homework help or exam prep,
                        we&apos;re here to support every learner&apos;s journey!
                    </p>
                    <button className="relative px-10 py-4 bg-black text-white font-bold rounded-full tracking-[4px] text-base my-8">
                        CONTACT US
                        <div className="absolute rounded-full size-full bg-black opacity-20 left-1 top-2 -z-10"></div>
                    </button>
                </div>
            </div>

            <div className="absolute h-screen hidden top-0 right-0 xl:block xl:translate-x-[60%] 2xl:translate-x-[50%] 3xl:translate-x-[25%] 4xl:translate-x-[10%] min-[2250px]:translate-x-0">
                <Abstract />
            </div>

            <div className="absolute left-[50%] bottom-12 flex flex-col items-center gap-2 translate-x-[-50%]">
                <FaAngleDown size={32} />
            </div>

        </div>
    );
}
