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
            animation: {
                translateLeft: 'translateLeft 20s linear infinite',
            },
            keyframes: {
                translateLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },

        },
    },
    plugins: [],
} satisfies Config;
