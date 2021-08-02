module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
