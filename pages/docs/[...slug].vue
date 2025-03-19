<script setup lang="ts">
import TocLinks from '~/components/TocLinks.vue'
import Hint from '~/components/Hint.vue'
import Figure from '~/components/Figure.vue'

const components = {
  'hint': Hint,
  'fiqure-img': Figure,
}

const route = useRoute()

const params = (route.params['slug'] as string[]) || []

// if (params.length) params.pop();

const title = params[0]
  .split('-') // Split by hyphen
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
  .join(' ') // Join words with space

const { data: page } = await useAsyncData(`docs-${route.path}`, () =>
  queryCollection('content').path(route.path).first(),
)

definePageMeta({
  layout: 'docslayout',
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('content', route.path.replace('/#', '#')),
)

const [prev, next] = surround.value || []

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
</script>

<template>
  <div class="grid grid-cols-12 gap-x-10 w-full">
    <div class="col-span-9 py-5 px-10">
      <div class="border-b pb-2">
        <NuxtLink :to="`/docs/${params[0]}`">
          <span class="text-zt_purple/80 tracking-wide font-semibold text-sm hover:underline">{{ title }}</span>
        </NuxtLink>
        <div class="flex items-center">
          <span class="text-3xl text-gray-500">
            <font-awesome-icon
              :icon="page?.meta.icon"
              class="pe-3 pt-6"
            />
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
          <MDC
            v-if="page?.description"
            :value="page?.description"
            unwrap="p"
          />
        </p>
      </div>
      <ContentRenderer
        v-if="page"
        id="contentrenderer"
        class="mb-5 min-w-full"
        :value="page"
        :components="components"
      />
      <!-- <ContentRendererMarkdown id="contentrenderer" :value="page" :components="components" />
        </ContentRenderer> -->
      <hr v-if="surround?.length">
      <div
        v-if="surround"
        class="surround-div flex justify-end my-5 gap-x-5"
      >
        <div class="w-1/2">
          <div
            v-if="prev"
            class="prev border rounded-md hover:bg-gray-50/30 group p-1 transition-all duration-300 hover:border-zt_purple/70"
          >
            <NuxtLink :to="prev.path">
              <div
                v-if="prev"
                class="surround-prev"
              >
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
              <div
                v-if="next"
                class="surround-next"
              >
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
      <div
        v-if="page?.body?.toc?.links"
        class="min-w-52"
      >
        <TocLinks :toclinks="page.body.toc.links" />
      </div>
    </div>
  </div>
</template>

<style>
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
</style>
