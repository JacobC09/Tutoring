import type { Metadata } from "next";
import { Bevan, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const titleFont = Bevan({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-title",
});

const textFont = Poppins({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-text",
});

export const metadata: Metadata = {
    title: "Comay Tutoring | Oakville",
    description: "Empowering students in Oakville with personalized tutoring!",
    metadataBase: new URL("https://tutoring.comay.ca"),
    openGraph: {
        title: "Comay Tutoring - Oakville",
        description: "Empowering students in Oakville with personalized tutoring!",
        url: "https://tutoring.comay.ca",
        siteName: "Comay Tutoring",
        locale: "en_CA",
        type: "website",
    },
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="ltr">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://tutoring.comay.ca" />
            </head>
            <body
                className={cn(
                    "antialiased bg-white text-black",
                    titleFont.variable,
                    textFont.variable
                )}
            >
                <main>{children}</main>
            </body>
        </html>
    );
}
