"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInOnScrollProps {
    children: ReactNode;
    className?: string;
    distance?: number,
    delay?: number;
    duration?: number;
    margin?: number;
}

export default function FadeIn({
    children,
    className = "",
    distance = 100,
    delay = 0,
    duration = 0.6,
    margin = 150,
}: FadeInOnScrollProps) {
    return <motion.div
        className={className}
        initial={{ opacity: 0, y: distance }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: `0px 0px -${margin}px 0px` }}
        transition={{ duration, delay }}
    >
        {children}
    </motion.div>
}
