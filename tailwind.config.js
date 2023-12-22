// tailwind.config.js
module.exports = {
    // ...
    plugins: [
        // ...
        require(
            '@tailwindcss/forms',
            '@tailwindcss/aspect-ratio'
        ),
    ],

    darkMode: 'class',
}