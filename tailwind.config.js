/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    soft: '#4EB2E0',
                    dark: '#2590C1',
                    DEFAULT: '#28A2DA'
                },
                secondary: {
                    soft: '#F78C2A',
                    dark: '#EE7D13',
                    DEFAULT: '#F58013'
                },
                brand: {
                    black: '#0D0E0F',
                    white: '#FDFDFD'
                }
            }
        }
    }

}
