<script setup lang="ts">
  import TocLinks from '~/components/TocLinks.vue'
  import Hint from '~/components/Hint.vue'
  import Figure from '~/components/Figure.vue'

  const components = {
    hint: Hint,
    'fiqure-img': Figure,
  }

  const route = useRoute()

  const params = (route.params['slug'] as string[]) || []

  // if (params.length) params.pop();

  const title = params[0]
    .split('-') // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' ') // Join words with space

  const { data: page } = await useAsyncData(`docs-${route.path}`, () =>
    queryCollection('content').path(route.path).first()
  )

  definePageMeta({
    layout: 'docslayout',
  })

  const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
    queryCollectionItemSurroundings('content', route.path)
  )

  const [prev, next] = surround.value || []

  useSeoMeta({
    title: page.value?.title,
    description: page.value?.description,
  })
</script>

<template>
  <div class="grid grid-cols-12 gap-x-10">
    <div class="content col-span-9 py-5 px-10">
      <div class="border-b pb-2">
        <div>
          <span class="text-zt_purple/80 tracking-wide font-semibold text-sm">{{ title }}</span>
        </div>
        <div class="flex items-center">
          <span class="text-3xl text-gray-500">
            <font-awesome-icon :icon="page?.meta.icon" class="pe-3 pt-6" />
          </span>
          <h1 class="text-3xl text-gray-800 pt-5 font-zt_bold">
            {{ page?.title }}
          </h1>
        </div>
        <p
          id="page-description"
          class="text-base text-[#3c3c43] tracking-wide leading-7 pb-2 m-0"
          :class="page?.description ? 'mt-3' : 'm-0'"
        >
          <MDC v-if="page?.description" :value="page?.description" unwrap="p" />
        </p>
      </div>
      <ContentRenderer
        v-if="page"
        id="contentrenderer"
        class="mb-5"
        :value="page"
        :components="components"
      />
      <!-- <ContentRendererMarkdown id="contentrenderer" :value="page" :components="components" />
        </ContentRenderer> -->
      <hr v-if="surround?.length" />
      <div v-if="surround" class="surround-div flex justify-end my-5 gap-x-5">
        <div class="w-1/2">
          <div
            v-if="prev"
            class="prev border rounded-md hover:bg-gray-50/30 group p-1 transition-all duration-300 hover:border-zt_purple/70"
          >
            <NuxtLink :to="prev.path">
              <div v-if="prev" class="surround-prev">
                <div class="px-3 py-1">
                  <span class="text-xs text-gray-500 font-zt_regular tracking-wide">Previous</span>
                  <h5 class="text-zt_purple text-base font-zt_medium">
                    {{ prev.title }}
                  </h5>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="w-1/2">
          <div
            v-if="next"
            class="next text-right border rounded-md hover:bg-slate-50/30 p-1 group transition-all duration-300 hover:border-zt_purple/70"
          >
            <NuxtLink :to="next.path">
              <div v-if="next" class="surround-next">
                <div class="px-3 py-1">
                  <span class="text-xs text-gray-500 font-zt_regular tracking-wide">Next</span>
                  <h5 class="text-zt_purple font-zt_medium text-base">
                    {{ next.title }}
                  </h5>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3 flex justify-start">
      <div v-if="page?.body?.toc?.links" class="min-w-52">
        <TocLinks :toclinks="page.body.toc.links" />
      </div>
    </div>
  </div>
</template>

<!-- <style>
  #contentrenderer {
    letter-spacing: 0.03rem;
  }
  #contentrenderer h1 {
    font-size: 1.5rem;
    font-family: 'Inter-Bold';
    padding-top: 20px;
  }
  #contentrenderer h2 {
    font-size: 22px;
    font-family: 'Inter-Bold';
    padding-top: 48px;
    padding-bottom: 0px;
    color: #3c3c43;
  }
  #contentrenderer h3 {
    font-size: 19px;
    font-family: 'Inter-Bold';
    color: #3c3c43;
    padding-top: 32px;
  }
  #contentrenderer h4 {
    font-size: 1rem;
    font-family: 'Inter-Bold';
    padding-top: 40px;
  }
  #contentrenderer h4 a {
    font-family: 'Inter-Bold';
    font-size: 1.35rem;
    color: #2c2c38 !important;
    padding-top: 40px;
  }
  #contentrenderer h4 a strong {
    font-family: 'Inter-Bold';
  }
  #contentrenderer p {
    font-size: 1rem;
    color: #3c3c43;
    padding-top: 15px;
    /* text-align: justify; */
    font-weight: 400;
  }
  #contentrenderer p strong {
    font-family: 'Inter-Bold';
    color: #3c3c43;
  }

  #contentrenderer p a,
  ol li a,
  h6 a {
    color: #9b26b6 !important;
    font-weight: 500;
  }
  #contentrenderer p a:hover,
  ol li a:hover,
  h6 a:hover {
    text-decoration: underline !important;
  }
  #contentrenderer ul li strong {
    font-size: 1rem;
    color: #3c3c43;
    font-family: 'Inter-Bold';
  }
  #contentrenderer ol li strong {
    color: #3c3c43;
    font-family: 'Inter-Bold';
    font-size: 1rem;
  }
  #contentrenderer ol li a strong,
  ol li a {
    color: #9b26b6;
  }
  #contentrenderer ul li a strong,
  ul li a {
    color: #9b26b6;
  }
  #contentrenderer ul li {
    font-size: 1rem;
    /* text-align: justify; */
    list-style: disc;
    margin-left: 2rem;
  }
  #contentrenderer ul li ul li {
    list-style: disc;
    text-align: left;
  }
  #contentrenderer ol li ul li {
    font-size: 1rem;
    list-style: disc;
  }
  #contentrenderer ol li ul li ul li {
    list-style: list;
  }
  #contentrenderer ol li,
  ul li {
    font-size: 1rem;
    color: #3c3c43;
    margin-top: 10px;
    list-style: decimal;
    margin-left: 20px;
  }
  #contentrenderer ol li *:last-child,
  ul li *:last-child {
    margin-bottom: 0;
  }
  #contentrenderer blockquote {
    border-left: 4px solid rgba(128, 128, 128, 0.493);
    padding: 5px 20px;
    margin-top: 20px;
    /* margin-bottom: 20px; */
    background-color: rgba(128, 128, 128, 0.055);
  }
  #contentrenderer blockquote strong {
    font-size: 1rem;
    color: rgb(55 65 81);
  }
  #contentrenderer code {
    font-size: 14px;
    color: rgb(158, 0, 158);
    background-color: rgba(255, 232, 255, 0.623);
    padding: 1px 5px;
    border-radius: 5px;
  }
  #contentrenderer table {
    font-size: 1rem;
    width: 100%;
    border-radius: 50%;
    text-align: left;
  }
  #contentrenderer table thead {
    background-color: rgb(249 250 251);
    border-radius: 20px;
  }
  #contentrenderer table thead tr th {
    font-size: 0.9rem;
    color: rgb(75 85 99);
    padding: 10px 20px;
    font-weight: 500;
  }
  #contentrenderer table tbody tr td {
    font-size: 0.9rem;
    color: rgb(107 114 128);
    padding: 8px 20px;
    border-bottom: 1px solid rgb(243 244 246);
    border-style: dashed;
  }
  #contentrenderer table tbody tr td a,
  tr td a strong {
    text-decoration: underline;
    font-weight: 600 !important;
  }
  #contentrenderer table tbody tr td a:hover,
  table tbody tr td a strong :hover {
    color: #9b26b6 !important;
  }
  #contentrenderer img {
    margin-top: 20px;
    box-shadow: 0px 2px 5px rgb(160, 160, 160);
    border: 1px solid rgba(235, 235, 235, 0.705);
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
  }
  #contentrenderer ul li img {
    display: inline;
    /* margin: 0px 0px; */
    translate: var(--tw-translate-x) -7px;
    margin-left: 2px;
    margin-right: 5px;
  }
  #contentrenderer ol li img {
    display: inline;
    margin: 0px;
    translate: var(--tw-translate-x) -4px;
    margin-left: 2px;
    margin-right: 5px;
  }
  hr {
    margin-top: 20px;
  }

  pre {
    max-width: 640px;
    overflow-x: auto;
  }
  #contentrenderer details {
    /* background-color: red; */
    padding: 15px 20px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #6c6c81;
    cursor: pointer;
  }
  #contentrenderer details :hover {
    color: rgb(28 27 44);
  }
  #contentrenderer details ol {
    padding: 15px 5px;
  }
  pre code {
    font-size: 0.9rem;
  }
  #page-description strong {
    color: rgba(0, 0, 0, 0.836);
  }
  .next h5,
  .prev h5 {
    font-size: 600;
  }
  ::-webkit-scrollbar {
    height: 4px;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(216, 214, 214, 0.658);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(161, 160, 160, 0.603);
  }
</style> -->
