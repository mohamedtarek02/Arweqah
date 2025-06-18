// nuxt.config.ts
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Arweqah",
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },

  modules: ["@nuxtjs/i18n", "nuxt-aos", "nuxt-swiper"],

  router: {
    middleware: ["redirectToLocale"],
  },

  nitro: {
    server: {
      port: 8080,
      host: "0.0.0.0", // Optional: Use to make your server accessible over the network
    },
  },

  i18n: {
    langDir: "locales",
    defaultLocale: "en", //Default if user not picked language yet
    strategy: "prefix",
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "ar",
        file: "ar.json",
      },
    ],
    detectBrowserLanguage: false,
  },

  build: {
    transpile: ["vuetify"],
  },

  components: true,

  plugins: [
    "@/plugins/axios.js",
    "@/plugins/pinia.js",
    "@/plugins/notification.js",
    "@/plugins/fontawesome.js",
  ],

  // Define alias inside the `vite` property
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname), // This resolves `@` to the root of your project
      },
    },
  },

  css: [
    "vuetify/dist/vuetify.min.css",
    "@/assets/css/main.css",
    "@/assets/scss/style.scss",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-06-18",
});