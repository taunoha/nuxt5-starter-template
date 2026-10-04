// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "nuxt-security",
    "@nuxt/eslint",
  ],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Welcome",
      titleTemplate: "%s - Nuxt 5 Starter Template",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [{ name: "description", content: "Nuxt 5 Starter Template" }],
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      buildAt: new Date().toLocaleString("nb-US", {
        timeZone: "Europe/Helsinki",
      }),
      environment: "production",
    },
  },
  future: {
    compatibilityVersion: 5,
  },
  compatibilityDate: "2025-07-15",
  typescript: {
    strict: true,
  },
  telemetry: false,
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {
    quality: 80,
    format: ["webp"],
  },
});
