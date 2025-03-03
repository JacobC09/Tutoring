import Abstract from "@/assets/abstract";
import { FaLocationDot, FaAngleDown } from "react-icons/fa6";

export default function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <div className="relative h-screen flex flex-col justify-center ml-[10vw]">

                <nav className="absolute left-0 top-0 flex gap-24 justify-start my-32">
                    <NavItem>ABOUT</NavItem>
                    <NavItem>EXPERIENCE</NavItem>
                    <NavItem>CONTACT</NavItem>
                </nav>

                <div className="max-w-screen-md">
                    <div className="flex gap-2 items-center">
                        <FaLocationDot size={25} />
                        <p className="font-bold text-2xl">Oakville</p>
                    </div>
                    <h1 className="text-9xl text-blue-600 tracking-wider my-8">Personal Tutoring</h1>
                    <p className="text-lg font">
                        Empowering students in Oakville with personalized tutoring! We provide expert guidance in math, science,
                        and more, helping students build confidence and achieve academic success. Whether it's homework help or exam prep,
                        we're here to support every learner's journey!"
                    </p>
                    <button className="relative px-10 py-4 bg-black text-white font-bold rounded-full tracking-[4px] text-base my-8">
                        CONTACT US
                        <div className="absolute rounded-full size-full bg-black opacity-20 left-1 top-2 -z-10"></div>
                    </button>
                </div>
            </div>

            <div className="absolute h-screen hidden top-0 right-[-245px] 2xl:block 4xl:right-0 ">
                <Abstract />
            </div>

            <div className="absolute left-[50%] bottom-12 flex flex-col items-center gap-2 translate-x-[-50%]">
                <FaAngleDown size={32} />
            </div>
        </div>
    );
}

function NavItem({children, ...props}: any) {
    return (
        <a className="group tracking-widest cursor-pointer" {...props}>
            {children}
            <div className="w-0 group-hover:w-full mt-1 h-[2px] bg-black transition-all"></div>
        </a>
    );
}

