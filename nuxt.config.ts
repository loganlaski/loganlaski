// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
    app: {
        head: {
            viewport: 'width=device-width,initial-scale=1',
            link: [
              { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
            ],

            title: 'Logan Laski',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'loganlaski' },
            ],
        },

        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    build: {
        transpile: [
            '@headlessui/vue', 
            '@heroicons/vue',
            'gsap',
        ]
    },
    modules: [
        '@nuxt/ui',
        '@vueuse/nuxt',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    'Inter': {
                        wght: [300, 400, 500, 600, 700, 800],
                    }
                },
            },
        ],
    ],
})