import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ children, className = "", dark = false, ...props }: SectionProps) {
  return (
    <section className={cn("px-6 sm:px-20 md:px-24 py-48 mt-12", className, dark && "bg-gray-50")} {...props}>
      <div className="m-auto max-w-screen-xl">{children}</div>
    </section>
  );
}