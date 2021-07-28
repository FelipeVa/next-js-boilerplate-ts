module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    purge: ["./src/**/*.tsx", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}