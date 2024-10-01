import {i18n} from './config/i18n'
import {colorMode} from './config/color'
import {dayjs} from './config/dayjs'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'dayjs-nuxt',
    '@vite-pwa/nuxt',
  ],
  app: {
    head: {
      title: 'LearningBy',
      titleTemplate: '%s • LearningBy',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      ],
      bodyAttrs: {
        class: 'bg-gray-100 dark:bg-gray-950 select-none'
      }
    },
  },
  css: ['~/styles/scrollbars.css'],
  colorMode,
  i18n,
  dayjs,
  pwa: {
    manifest: {
      name: "pwa nuxt 3",
      short_name: "pwa nuxt",
      theme_color: '#8a8a5e',
      description: "Arman Abi r.man.abi@gmail.com",
      icons: [
        {
          src: 'image.png',
          sizes: "150x150",
          type: "image/png"
        },
      ]
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module"
    }
  }
})