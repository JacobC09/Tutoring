'use client';

import { ReactNode } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    useAnimationFrame
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TextWaveProps extends React.ComponentPropsWithoutRef<"p"> {
    children: ReactNode;
    className?: string;
    center?: boolean;
    duration?: number;
    pause?: number;
    delay?: number,
    length?: number,
    amplitude?: number;
}

export default function TextWave({
    children,
    className,
    center = false,
    duration = 1,
    pause = 3,
    delay = 1,
    length = 0.1,
    amplitude = 10,
}: TextWaveProps) {
    const text = typeof children === "string" ? children : "";
    const time = useMotionValue(0);

    useAnimationFrame((t) => {
        time.set(t / 1000);
    });

    return (
        <div className={cn(className, "flex", center && "justify-center")}>
            {text.split("").map((char, i) => {
                const y = useTransform(time, (t) => {
                    const totalCycle = duration + pause;
                    const letterDelay = delay + i * length;
                    const localTime = (t - letterDelay) % totalCycle;

                    if (localTime >= 0 && localTime < duration) {
                        const progress = localTime / duration;
                        const radians = progress * Math.PI;
                        return -Math.sin(radians) * amplitude;
                    }

                    return 0;
                });

                return (
                    <motion.p
                        key={i}
                        style={{ y }}
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.p>
                );
            })}
        </div>
    );
}
