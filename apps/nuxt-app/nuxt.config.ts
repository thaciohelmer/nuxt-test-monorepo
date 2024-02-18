// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../../packages/ui"],
  modules: ["@nuxtjs/tailwindcss"],
  ssr: true,
});
