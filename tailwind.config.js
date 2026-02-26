/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                "primary-dark": "#1e3a8a",
                "background-light": "#ffffff",
                "background-dark": "#0f172a",
                "text-main": "#111827",
                "text-muted": "#4B5563",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                "grid-pattern": "radial-gradient(#e5e7eb 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
}
