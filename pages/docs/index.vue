<script setup>
// import JumpRightInCard from '~/components/JumpRightInCard.vue';
import TocLinks from '~/components/TocLinks.vue'

definePageMeta({
  layout: 'docslayout',
})

const components = {
  //   "hint": Hint,
  //   "fiqure-img":Figure,
  // "jump-right":JumpRightInCard
}
const route = useRoute()
const { data: page } = await useAsyncData(`page`, () =>
  queryCollection('content').path(route.path).first(),
)

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('content', route.path),
)

const [prev, next] = surround.value || []
</script>

<template>
  <div class="grid grid-cols-12 gap-x-10 w-full">
    <div class="col-span-12 xl:col-span-9 py-5 px-10">
      <div class="border-b pb-2">
        <div>
          <span class="text-zt_purple/80 tracking-wide font-zt_semibold text-xs uppercase">{{
            title
          }}</span>
        </div>
        <div class="flex items-center gap-x-3 pt-10">
          <span class="text-3xl text-gray-500">
            <font-awesome-icon
              :icon="page?.meta.icon"
              class=""
            />
          </span>
          <h1 class="text-3xl text-gray-800 font-zt_bold">
            {{ page?.title }}
          </h1>
        </div>
        <h5
          id="page-description"
          class="text-base text-gray-700 font-zt_regular tracking-wide leading-7"
          :class="page?.description ? 'pt-5 pb-5' : 'pb-2'"
        >
          <MDC
            v-if="page?.description"
            :value="page?.description"
            unwrap="p"
          />
        </h5>
      </div>
      <ContentRenderer
        id="homeContent"
        :value="page"
        :components="components"
      />
      <hr>
      <div
        v-if="surround"
        class="surround-div flex justify-end my-5 gap-x-5"
      >
        <div class="w-1/2">
          <div
            v-if="prev"
            class="prev border rounded-md hover:bg-gray-50/30 group p-1 transition-all duration-300 hover:border-zt_purple/10"
          >
            <NuxtLink :to="prev.path">
              <div
                v-if="prev"
                class="surround-prev flex justify-between items-center gap-x-3 px-4"
              >
                <font-awesome-icon
                  icon="angles-left"
                  class="text-gray-600 transition-all duration-300 group-hover:text-zt_purple text-sm"
                />
                <div class="text-right py-2.5 space-y-1">
                  <span class="text-xs text-gray-400">Previous</span>
                  <h5
                    class="text-gray-800 group-hover:text-zt_purple w-full text-right text-base font-zt_medium"
                  >
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
            class="next text-right border rounded-md hover:bg-slate-50/30 p-1 group transition-all duration-300 hover:border-zt_purple/10"
          >
            <NuxtLink :to="next.path">
              <div
                v-if="next"
                class="surround-next flex justify-between items-center gap-x-3 transition-all duration-300 px-4"
              >
                <div class="text-left py-2.5 space-y-1">
                  <span class="text-xs text-gray-400">Next</span>
                  <h5
                    class="text-gray-800 font-zt_medium text-base group-hover:text-zt_purple w-full"
                  >
                    {{ next.title }}
                  </h5>
                </div>
                <font-awesome-icon
                  icon="angles-right"
                  class="text-gray-600 group-hover:text-zt_purple text-sm"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:col-span-3 hidden xl:flex justify-start">
      <div
        v-if="page.body.toc.links"
        class="min-w-52"
      >
        <TocLinks :toclinks="page.body.toc.links" />
      </div>
    </div>
  </div>
</template>

<style>
  #homeContent h3 {
    font-size: 1.5rem;
    font-family: 'Inter-Bold';
    margin-top: 40px !important;
  }
  #homeContent p {
    margin: 4px 0 !important;
  }
</style>
