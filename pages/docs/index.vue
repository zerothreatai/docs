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
  <div class="flex">
    <div class="w-9/12">
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
          <h1 class="text-4xl text-gray-800 font-zt_extra_bold">
            {{ page?.title }}
          </h1>
        </div>
        <h5
          id="page-description"
          class="text-base text-gray-500 tracking-wide leading-7 text-justify"
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
                class="surround-prev flex justify-between items-center gap-x-3"
              >
                <font-awesome-icon
                  icon="angles-left"
                  class="text-gray-600 transition-all duration-300 group-hover:text-zt_purple text-sm rounded-full group-hover:bg-slate-100 px-4 py-3.5"
                />
                <div class="text-right px-4 py-2.5 space-y-1">
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
                class="surround-next flex justify-between items-center gap-x-3 transition-all duration-300"
              >
                <div class="text-left px-4 py-2.5 space-y-1">
                  <span class="text-xs text-gray-400">Next</span>
                  <h5
                    class="text-gray-800 font-zt_medium text-base group-hover:text-zt_purple w-full"
                  >
                    {{ next.title }}
                  </h5>
                </div>
                <font-awesome-icon
                  icon="angles-right"
                  class="text-gray-600 group-hover:text-zt_purple text-sm transition-all duration-300 rounded-full group-hover:bg-slate-100 px-4 py-3.5"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-3/12 flex justify-end">
      <div
        v-if="page.body.toc.links"
        class="min-w-52"
      >
        <TocLinks :toclinks="page.body.toc.links" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  #homeContent h3 {
    font-size: 1rem;
    font-family: 'Inter-Bold';
    color: rgb(0, 0, 0);
    padding-top: 30px;
    padding-bottom: 8px;
  }

  #homeContent h3 a {
    font-family: 'Inter-Bold';
    font-size: 1.4rem;
    color: #1a202cef;
  }

  /* #homeContent h3 a strong {
  font-family: 'Inter-Bold';
  font-size: 1.4rem;
} */

  #homeContent p {
    font-size: 1rem;
    color: rgb(28 27 44);
    padding: 10px 0;
    text-align: justify;
    font-weight: 400;
  }

  #homeContent p a,
  p a strong {
    color: #9b26b6 !important;
  }
  #homeContent p a:hover,
  p a strong:hover {
    text-decoration: underline;
  }
</style>
