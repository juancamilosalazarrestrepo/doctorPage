/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                bg: 'var(--color-bg)',
                text: 'var(--color-text)',
            },
            fontFamily: {
                heading: ['var(--font-heading)', 'serif'],
                body: ['var(--font-body)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
