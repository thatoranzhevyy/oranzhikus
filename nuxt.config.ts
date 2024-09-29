// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: [
    "@nuxt/image",
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
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
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'system-color-mode',
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      {name: 'Русский', code: 'ru', file: 'ru.json'},
      {name: 'English', code: 'en', file: 'en.json'},
    ],
  },
})