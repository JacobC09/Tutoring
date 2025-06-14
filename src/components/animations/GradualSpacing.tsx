"use client";

import { ReactNode, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps extends React.ComponentPropsWithoutRef<"p"> {
    className?: string;
    center?: boolean,
    margin?: number,
    delay?: number,
    length?: number,
    children: ReactNode;
}

export default function GradualSpacing({ 
    children,
    className, 
    center=false,
    margin=100,
    delay=0, 
    length=0.08 
}: GradualSpacingProps) {
    let text = typeof children === 'string' ? children : ""; 

    return (
        <div className={`flex ${center && "justify-center"}`}>
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: `0px 0px -${margin}px 0px` }}
                        exit="hidden"
                        transition={{ duration: 0.5, delay: i * length + delay }}
                        className={cn("text-centerfont-bold md:leading-[4rem]", className)}
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.p>
                ))}
            </AnimatePresence>
        </div>
    );
}