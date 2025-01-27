export default defineNuxtConfig({
  extends: '../base',

  compatibilityDate: '2024-11-01',

  routeRules: {
    '/': { prerender: true }
  },

  modules: ['@nuxt/scripts', '@nuxthub/core'],

  runtimeConfig: {
    private: {
      encryptionKey: process.env.NUXT_PRIVATE_ENCRYPTION_KEY,
    },
  },

  hub: {
    kv: true,
  },

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  css: ['~/assets/css/index.css'],
})
