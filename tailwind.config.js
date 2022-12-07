/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        screens: {
            'xs': '475px',
            'smed': '704px',
            'mdplus': '896px',
            'lgplus': '1152px',
            'xlplus': '1428px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                primary: {
                    soft: '#4EB2E0',
                    dark: '#2590C1',
                    DEFAULT: '#28A2DA'
                },
                secondary: {
                    soft: '#fb923c',
                    dark: '#ea580c',
                    DEFAULT: '#F97316'
                },
                brand: {
                    black: '#0D0E0F',
                    white: '#FDFDFD'
                }
            },
        }
    },
}
