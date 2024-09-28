// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@nuxt/ui', '@nuxt/content', "@nuxt/image"],
  app: {
    head: {
      title: 'Zymyran',
      titleTemplate: '%s • Zymyran',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      bodyAttrs: {
        class: 'bg-gray-100 dark:bg-gray-950 select-none'
      }
    },
  },
  css: ['~/styles/scrollbars.css'],
})