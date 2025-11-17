// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'tailwindcss', '@nuxtjs/algolia'],
  plugins: [
    '~/plugins/contentScrollFix.client.ts',
    '~/plugins/directives.ts',
    '~/plugins/fontawesome.ts',
    '~/plugins/external-link.client.ts'
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
  app: {
    // trailingSlash: false,
  },
  css: ['~/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  router: {
    // trailingSlash: false,
  },
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
      projectEnv: process.env.PROJECT_ENV || '',
      appEnv: process.env.NODE_ENV || 'development',
      workingMode: process.env.WORKING_MODE || 'development',
      siteUrl: process.env.SITE_URL,
    },
  },
  dir: {
    static: 'public',
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
    '/docs/plans': { redirect: '/docs/plans/target-association' },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
    publicAssets: [{
      baseURL: 'public/assets',
      dir: 'public',
    }],
  },
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    docSearch: {
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
    // workingMode: 'https://localhost:3201' // Removed invalid property
  },

  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
  // trailingSlashRedirect: false,
  trailingSlash: false,
})
