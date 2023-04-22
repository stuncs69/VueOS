// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        server: {
            fs: {
                // Really caveman solution, only works on Windows
                allow: ["..", `${require('os').homedir()}\\node_modules`]
            }
        }
    },
    css: [
        '@/assets/default.css'
    ],
    modules: ['nuxt-icon']
})