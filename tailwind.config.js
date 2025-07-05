/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            zIndex: { 60: '60', 70: '70', 80: '80', 90: '90', 100: '100' },
            // GradientText.jsx
            keyframes: {
                gradient: {
                   '0%': { backgroundPosition: '0% 50%' },
                   '50%': { backgroundPosition: '100% 50%' },
                   '100%': { backgroundPosition: '0% 50%' },
                }
            },
            animation: {
                gradient: 'gradient 8s linear infinite'
            },
            fontFamily: {
                sans: ['Ubuntu', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}