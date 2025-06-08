"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { FaRegHandPeace, FaBars } from "react-icons/fa6";

export default function Navbar({ children }) {
    const [showNav, setShowNav] = useState<boolean>(false);
    const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

    let heroNav = useRef<HTMLDivElement>(null);
    let dropDown = useRef<HTMLDivElement>(null);
    let lastScroll: number;

    useEffect(() => {
        const onScroll = () => {
            let rect = heroNav.current?.getBoundingClientRect();

            if (rect.bottom > -50) {
                setShowNav(false);
            } else if (lastScroll > window.scrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            if (!showNav) {
                setDropDownOpen(false);
            }

            lastScroll = window.scrollY;
        }

        lastScroll = window.scrollY;

        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll)
    })

    return (
        <>
            <nav ref={heroNav} className="sm:absolute top-0 flex flex-col items-center gap-12 my-12 md:my-32 xl:items-start">
                <div className="flex items-center left-24 gap-4 text-xl sm:text-2xl tracking-wide font-title text-blue-400">
                    <FaRegHandPeace size={36} className="scale-75 sm:scale-100" />
                    <p>Comay Tutoring Co.</p>
                </div>

                <div className="hidden md:flex items-center justify-start gap-24">
                    {children}
                </div>
            </nav>

            <nav className={cn(
                "fixed left-0 top-0 w-screen z-10 bg-white opacity-100 transition-all duration-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]",
                !showNav && "translate-y-[-100%] opacity-0"
            )}>
                <div className="relative px-8 xs:12 sm:px-20 md:24 py-8 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-2xl tracking-wide font-title text-blue-400">
                        <FaRegHandPeace size={36} />
                        <p>Comay Tutoring Co.</p>
                    </div>

                    <div className="hidden 2xl:flex 3xl:absolute 3xl:w-full left-0 items-center justify-center mx-auto gap-16 3xl:gap-24">
                        {children}
                    </div>

                    <button className="hidden 2xl:block relative px-10 py-4 bg-black text-white font-bold rounded-full tracking-[4px]">
                        CONTACT US
                        <div className="absolute rounded-full size-full bg-black opacity-20 left-1 top-2 -z-10"></div>
                    </button>

                    <div className="block 2xl:hidden cursor-pointer">
                        <button onClick={() => setDropDownOpen(!dropDownOpen)}> 
                            <FaBars size={32} />
                        </button>
                    </div>
                </div>

                <div
                    ref={dropDown}
                    className="2xl:hidden overflow-y-hidden transition-[max-height] duration-300 ease-out"
                    style={{
                        maxHeight: dropDownOpen ? dropDown.current?.scrollHeight : "0px",
                    }}
                >
                    <div className={cn("flex flex-col items-center gap-8 pt-8 pb-16 transition-opacity duration-300 ease-out", dropDownOpen ? "opacity-100" : "opacity-0")}>
                        {children}
                        <button className="relative px-10 py-4 bg-black text-white font-bold rounded-full tracking-[4px] mt-4">
                            CONTACT US
                            <div className="absolute rounded-full size-full bg-black opacity-20 left-1 top-2 -z-10"></div>
                        </button>
                    </div>
                </div>
            </nav>
        </>

    );
}
