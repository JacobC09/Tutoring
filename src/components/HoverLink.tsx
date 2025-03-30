import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HoverLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    children: ReactNode;
    underline?: string;
}

export default function HoverLink({ children, underline="bg-black", className="", ...props }: HoverLinkProps) {
    return (
        <div>
            <a className={cn("relative group cursor-pointer", className)} {...props}>
                {children}
                <div className={cn("absolute w-0 group-hover:w-full mt-1 h-[2px] transition-all", underline)}></div>
            </a>
        </div>
    );
}