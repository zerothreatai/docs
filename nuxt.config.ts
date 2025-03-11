// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'tailwindcss'],
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
            global: true,
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
    eslint: {
        config: {
            stylistic: true, // <---
        },
    },
})
