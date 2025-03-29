"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function Navbar({ children }) {
    let [showNav, setShowNav] = useState<boolean>(false);

    let ref = useRef<HTMLDivElement>(null);
    let lastScroll: number;

    useEffect(() => {
        const onScroll = (e) => {
            let rect = ref.current?.getBoundingClientRect();
            
            if (rect.bottom > -50) {
                setShowNav(false);
            } else if (lastScroll > window.scrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            lastScroll = window.scrollY;
        }

        lastScroll = window.scrollY;

        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll)
    })

    return (
        <>
            <nav ref={ref} className="absolute left-0 top-0 flex gap-24 justify-start my-32">
                {children}
            </nav>
            <nav className={cn("fixed left-0 top-0 w-screen z-10 bg-white flex justify-center items-center gap-24 px-24 py-12 transition-transform shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]", !showNav && "translate-y-[-100%]")}>
                {children}
            </nav>
        </>

    );
}

export function NavItem({children, ...props}: any) {
    return (
        <a className="relative group tracking-widest cursor-pointer" {...props}>
            {children}
            <div className="absolute w-0 group-hover:w-full mt-1 h-[2px] bg-black transition-all"></div>
        </a>
    );
}

