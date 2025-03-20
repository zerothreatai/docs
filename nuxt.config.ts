// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'tailwindcss', '@nuxtjs/algolia'],
  plugins: [
    '~/plugins/contentScrollFix.client.ts',
    '~/plugins/directives.ts',
    '~/plugins/fontawesome.ts',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false, // Allows <JumpRight> without <JumpRight.vue>
    },
    {
      global: false,
    },
  ],
  devtools: { enabled: false },
  css: ['~/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  content: {
    markdown: {
      toc: {
        depth: 3, // include h3 headings
      },
      remarkPlugins: ['remark-external-links'],
    },
  },
  runtimeConfig: {
    public: {
      algoliaAppId: process.env.ALGOLIA_APPLICATION_ID || '',
      algoliaSearchKey: process.env.ALGOLIA_SEARCH_API_KEY || '',
      algoliaIndexName: process.env.ALGOLIA_INDEX_NAME || '',
    },
  },
  // head: {
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;400;500;600;700&display=swap'
  //     }
  //   ]
  // }
  routeRules: {
    '/docs/getting-started': { redirect: '/docs/getting-started/quickstart' },
    '/docs/manage-targets': {
      redirect: '/docs/manage-targets/targets-section',
    },
    '/docs/manage-scans': { redirect: '/docs/manage-scans/scans-section' },
    '/docs/manage-organizations': {
      redirect: '/docs/manage-organizations/manage-organization',
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    docSearch: {
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
  },
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
  // trailingSlashRedirect: false,
  trailingSlash: false,
})
