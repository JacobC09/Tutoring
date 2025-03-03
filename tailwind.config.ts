import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ["var(--font-title)"],
                text: ["var(--font-text)"],
            },
            screens: {
                '3xl': "1800px",
                '4xl': "2100px",
            },
        },
    },
    plugins: [],
} satisfies Config;
