import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa6"

export default function Testimonial({ className="" }) {
    return (
        <div className={cn("px-8 py-12 grid gap-6 text-lg font-bold rounded-3xl rounded-br-none shadow-lg", className)}>
            <div className="flex gap-3">
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum alias perferendis, minus qui corporis, culpa cumque.</p>
            <div className="h-[2px] bg-gray-600 w-[60%]"></div>
            <p>Jake C.</p>
        </div>
    );
}