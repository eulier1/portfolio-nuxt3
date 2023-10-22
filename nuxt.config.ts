// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  buildAssetsDir: `/${process.env.BUILD_ASSETS_DIR}/_nuxt/`
})
