import { cn } from "@/lib/utils";

export default function Button({ className, children, ...props }: React.ComponentPropsWithoutRef<"button">) {
    return (
        <button {...props} className={cn(className, 
            "hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none shadow-md hover:bg-blue-400 transition-all duration-200"
        )}>
            {children}
        </button>
    );
}