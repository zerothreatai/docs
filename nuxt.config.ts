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
    },
  },
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  css: ['~/main.css','@fortawesome/fontawesome-svg-core/styles.css'],
  
  plugins:['~/plugins/contentScrollFix.client.ts','~/plugins/directives.ts','~/plugins/fontawesome.ts'],
  // head: {
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;400;500;600;700&display=swap'
  //     }
  //   ]
  // }
  routeRules:{
    '/docs/getting-started':{redirect:'/docs/getting-started/quickstart'},
    '/docs/manage-targets':{redirect:'/docs/manage-targets/targets-section'},
    '/docs/manage-scans':{redirect:'/docs/manage-scans/scans-section'},
    '/docs/manage-organizations':{redirect:'/docs/manage-organizations/manage-organization'}
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false // Allows <JumpRight> without <JumpRight.vue>
    },
    {
      global:true
    }
  ]
});