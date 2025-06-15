"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps extends React.ComponentPropsWithoutRef<"p"> {
    className?: string;
    center?: boolean;
    margin?: number;
    delay?: number;
    length?: number;
    children: ReactNode;
}
export default function GradualSpacing({
    children,
    className,
    center = false,
    margin = 100,
    delay = 0,
    length = 0.08,
}: GradualSpacingProps) {
    const text = typeof children === "string" ? children : "";

    let charIndex = 0;

    return (
        <div className={cn(className, "flex flex-wrap", center && "justify-center")}>
            <AnimatePresence>
                {text.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline">
                        {word.split("").map((char) => {
                            const currentIndex = charIndex++;
                            return (
                                <motion.span
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: -18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: `0px 0px -${margin}px 0px` }}
                                    transition={{ duration: 0.5, delay: currentIndex * length + delay }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                        <motion.span
                            key={`space-${wordIndex}`}
                            initial={{ opacity: 0, x: -18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: `0px 0px -${margin}px 0px` }}
                            transition={{ duration: 0.5, delay: charIndex * length + delay }}
                        >
                            &nbsp;
                        </motion.span>
                        {(() => {
                            charIndex++;
                            return null;
                        })()}
                    </span>
                ))}
            </AnimatePresence>
        </div>
    );
}
