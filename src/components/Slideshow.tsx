"use client";

export default function Slideshow({ children }) {
    return (
        <div className="relative flex gap-2 overflow-x-hidden">
            <div className="animate-translateLeft flex gap-2">
                {children}
            </div>
            <div className="animate-translateLeft flex gap-2">
                {children}
            </div>
            <div className="absolute top-0 left-[2%] w-[8%] h-full bg-gradient-to-l from-transparent to-[rgba(255,255,255,0.6)]"></div>
            <div className="absolute top-0 left-0 w-[2%] h-full bg-gradient-to-l from-[rgba(255,255,255,0.6)] to-white"></div>
            <div className="absolute top-0 right-[2%] w-[8%] h-full bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.6)]"></div>
            <div className="absolute top-0 right-0 w-[2%] h-full bg-gradient-to-r from-[rgba(255,255,255,0.6)] to-white"></div>
        </div>
    );
}
