// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxt/content",'@nuxtjs/tailwindcss', "tailwindcss"],
  content: {
    markdown: {
      toc: {
        depth: 3, // include h3 headings
      },
      remarkPlugins: [
        ['remark-external-links', { target: '_blank', rel: 'noopener noreferrer' }]
      ]
      
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true, // Stops unnecessary crawling
      routes: ['/'],
      ignore: ['/docs/getting-started/"https://zerothreat.ai/"'],
    },
  },
  css: ['~/main.css','@fortawesome/fontawesome-svg-core/styles.css'],
  
  plugins:['~/plugins/contentScrollFix.client.ts','~/plugins/directives.ts','~/plugins/fontawesome.ts'],

  routeRules:{
    '/docs/getting-started':{redirect:'/docs/getting-started/quickstart'},
    '/docs/manage-targets':{redirect:'/docs/manage-targets/targets-section'},
    '/docs/manage-scans':{redirect:'/docs/manage-scans/scans-section'},
    '/docs/manage-organizations':{redirect:'/docs/manage-organizations/manage-organization'}
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false 
    },
    {
      global:true
    }
  ]
});

