// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/nuxt/",
    head: {
      title: 'raspbry',
      link: [,
        {
          rel: 'icon',
          href: '/favicon.png'
        },
        {
          rel: 'preload',
          href: '/assets/fonts/ppneuemontreal-medium.woff2',
          as: 'font',
          type: 'font/woff',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/assets/fonts/ppneuemontreal-bold.woff2',
          as: 'font',
          type: 'font/woff',
          crossorigin: 'anonymous'
        }
      ],
      htmlAttrs: {
        lang: "en"
      },
    }
  },
  css: [
    '~/styles/main.scss',
  ],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Gloock": [400]
    },
    display: "swap",
    preload: true
  },
  modules: [
    "nuxt-icons",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/strapi",
    "@pinia/nuxt",
  ],
  image: {
    screens: {
      mobile: 320,
      tablet: 640,
      desktop: 1024,
    },
    provider: 'ipx',
    strapi: {
      baseURL: process.env.STRAPI_URL || 'http://localhost:1337'
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      strapiApiKey: process.env.STRAPI_API_KEY,
      strapiApiUrl: process.env.STRAPI_API_URL || 'http://localhost:1337/api',
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337',
      devMode: process.env.DEV_MODE || 'false',
    },
  },
  srcDir: "src/",
  ssr: true,
})
