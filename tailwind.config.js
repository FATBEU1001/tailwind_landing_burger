/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            fontFamily: {
                primary: ["Titan One", "sans-serif"],
                secondary: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: "#401c10",
                secondary: "#e54f22",
                third: "#efe1cc",
                hover: "#ffffff2b",
                bg: "#f5c935",
                border: "#f5c93557",
                icon: "#401c101f",
            },
            dropShadow: {
                xl: "4px 4px 0 #401c10",
            },
            transitionDuration: {
                DEFAULT: "0.3s",
            },
            backgroundImage: {
                gradient: "linear-gradient(90deg, rgb(64 28 16) 0%, #ffffff00 100%)",
            },
        },
    },
    plugins: [],
};
