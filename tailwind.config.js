/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'gray': '#777',
                'ice': '#F1F1F1',
                'peru': '#D87D4A',
                'sandy': '#fbaf85',
                'shadow': '#181818', // 101010
                'snow': '#FAFAFA'
            },
            screens: {
                'sm': '375px', // mobile
                'sml': '420px',
                'md': '560px',
                'lg': '768px', // tablet
                'xl': '1024px', // not
                '2xl': '1280px',
                '3xl': '1440px', // wide
                '4xl': '1536px'
            }
        },
    },
    plugins: [],
}

