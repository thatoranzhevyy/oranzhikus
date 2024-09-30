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
      title: 'Zymyran',
      titleTemplate: '%s • Zymyran',
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
    registerType: 'autoUpdate',
    manifest: {
      name: 'Glitch',
      short_name: 'Glitch',
      description: "Testing Glitch PWA",
      display: 'fullscreen',
      icons: [
        {
          "src": "assets/icons/icon-36x36.png",
          "sizes": "36x36",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-48x48.png",
          "sizes": "48x48",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable any"
        }
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
})