"use client";

import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

export default function Arrow() {
    return <motion.div
        className="sm:absolute left-[50%] bottom-12 flex flex-col items-center gap-2 sm:translate-x-[-50%]"
        animate={{
            y: [0, -20, 0], // moves up then back down
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,      // repeat forever
            repeatType: "loop",    // loop smoothly
        }}
    >
        <FaAngleDown size={32} />
    </motion.div>
}