/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            backgroundColor: {
                darkBg: "hsl(207, 26%, 17%)",
                darkElement: "hsl(209, 23%, 22%)",
                lightBg: "hsl(0, 0%, 98%)",
            },
            textColor: {
                lightText: "hsl(200, 15%, 8%)",
                darkText: "hsl(0, 0%, 100%)",
            },
            colors: {},
        },
    },
    plugins: [require("tailwindcss-animate")],
};
