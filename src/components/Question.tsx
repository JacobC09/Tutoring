"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6"

export default function Question({ question, answer }) {
    const [open, setOpen] = useState<boolean>(false);

    let ref = useRef<HTMLDivElement>(null)

    return (
        <div className="border-b-2 py-8 cursor-pointer" onClick={() => setOpen(!open)} >
            <div className="flex items-center gap-8">
                <FaArrowRight size={25} className={cn("text-blue-500 transition-all duration-300 ease-out", open ? "rotate-90" : "rotate-0")} />
                <p className="text-xl sm:text-2xl font-bold">{question}</p>
            </div>
            <div ref={ref} className="overflow-hidden grid transition-all duration-300 ease-out" style={{maxHeight: open ? ref.current?.scrollHeight : 0}}>
                <p className="pt-8 text-lg">
                    {answer}
                </p>
            </div>
        </div>
    );
}
