<script setup lang="ts">
import TocLinks from "~/components/TocLinks.vue";
import Hint from "~/components/Hint.vue";
import RightArrowIcon from "~/components/icon/right-arrow-icon.vue";
// import Figure from '~/components/Figure.vue'
import Figure from "~/components/Figure.vue";

const components = {
  "hint": Hint,
  "fiqure-img":Figure
};

const route = useRoute();

const params = (route.params['slug'] as string[]) || []

// if (params.length) params.pop();

const title = params[0]
      .split('-') // Split by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' ') // Join words with space


const { data: page } = await useAsyncData(`docs-${route.path}`, () =>
  queryCollection("content").path(route.path).first()
);

definePageMeta({
  layout: "docslayout",
});

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings("content", route.path)
);

const [prev, next] = surround.value || [];

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div class="grid grid-cols-12 gap-x-10">
    <div class="content col-span-9 py-5">
      <div class="border-b pb-2">
        <div>
          <span class="text-zt_purple/80 tracking-wide font-semibold text-xs uppercase">{{ title }}</span>
        </div>
        <div class="flex items-center">
          <span class="text-3xl text-gray-500">
            <font-awesome-icon :icon="page?.meta.icon" class="pe-3 pt-6" />
          </span>
          <h1 class="text-4xl text-gray-800 pt-5 font-zt_extra_bold">{{ page?.title }}</h1>
        </div>
        <h5
        id="page-description"
          class="text-base text-gray-500 tracking-wide leading-7 text-justify"
          :class="page?.description ? 'pt-5 pb-5' : 'pb-2'"
          v-html="page?.description"
        ></h5>
      </div>
      <ContentRenderer
        v-if="page"
        :value="page"
        id="contentrenderer"
        :components="components"
      />
      <!-- <ContentRendererMarkdown id="contentrenderer" :value="page" :components="components" />
        </ContentRenderer> -->
      <hr v-if="surround?.length" />
      <div v-if="surround" class="surround-div flex justify-end my-5 gap-x-5">
        <div class="w-1/2">
          <div
            v-if="prev"
            class="prev border rounded-md hover:bg-gray-50/30 group p-1 transition-all duration-300 hover:border-zt_purple/10"
          >
            <NuxtLink :to="prev.path">
              <div v-if="prev" class="surround-prev flex justify-between items-center gap-x-3">
                <font-awesome-icon icon="angles-left" class="text-gray-600 transition-all duration-300 group-hover:text-zt_purple text-sm rounded-full group-hover:bg-slate-100 px-4 py-3.5"/>
                <div class="text-right px-4 py-2.5 space-y-1">
                  <span class="text-xs text-gray-400">Previous</span>
                  <h5 class="text-gray-800 group-hover:text-zt_purple w-full text-right text-base font-zt_medium">{{ prev.title }}</h5>
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
                <h5 class="text-gray-800 font-zt_medium text-base group-hover:text-zt_purple w-full">{{ next.title }}</h5>
              </div>
              <font-awesome-icon icon="angles-right" class="text-gray-600 group-hover:text-zt_purple text-sm transition-all duration-300 rounded-full group-hover:bg-slate-100 px-4 py-3.5" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3 flex justify-start">
      <div class="min-w-52" v-if="page?.body?.toc?.links">
        <TocLinks :toclinks="page.body.toc.links" />
      </div>
    </div>
  </div>
</template>

<style>
#contentrenderer{
  letter-spacing: 0.02rem;
}
#contentrenderer h1 {
  font-size: 2.25rem;
  font-weight: 600;
  padding-top: 20px;
}
#contentrenderer h2 {
  font-size: 1.8rem;
  font-weight: 600;
  padding-top: 40px;
  padding-bottom: 0px;
  color: #1a202c;
}
/* #contentrenderer h2 strong {
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 10px;
} */
#contentrenderer h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a202c;
  padding-top: 60px;
}
#contentrenderer h3:first-of-type{
  padding-top: 60px;
}
#contentrenderer h4 {
  font-size: 1rem;
  font-weight: 600;
  padding: 15px 0;
}
/* #contentrenderer h2 a {
  font-weight: 600;
  font-size: 1.8rem;
  color:#1a202cef;
} */
/* #contentrenderer h2 a strong {
  font-weight: 600;
  font-size: 1.8rem;
} */
/* #contentrenderer h3 a {
  font-weight: 600;
  font-size: 1.4rem;
  color:#1a202cef;
} */
/* #contentrenderer h3 a strong {
  font-weight: 600;
  font-size: 1.4rem;
} */
#contentrenderer h4 a {
  font-weight: 600;
  font-size: 1.35rem;
  color: #2c2c38 !important;
}
#contentrenderer h4 a strong {
  font-weight: 600;
  font-size: 1.35rem;
}
#contentrenderer p {
  font-size: 1rem;
  color: rgb(28 27 44);
  padding: 15px 0;
  text-align: justify;
  font-weight: 400;
}
#contentrenderer p strong {
  font-weight: 600;
  color: #1a202c;
}

#contentrenderer p a, ol li a, h6 a{
  color: #9b26b6 !important;
  font-weight: 500;
}
#contentrenderer p a:hover, ol li a:hover, h6 a:hover {
  text-decoration: underline !important;
}
/* #contentrenderer li a {
  color: #9b26b6;
  text-decoration: underline;
} */
#contentrenderer ul, ol {
  padding-top: 10px;
}
#contentrenderer ol ul {
  padding: 5px 0;
}
#contentrenderer ul li strong {
  font-size: 1rem;
  color: #212031;
  padding: 20px 0;
  font-weight: 600;
}
#contentrenderer ol li strong {
  color: #212031;
  font-weight: 600;
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
  color: rgb(28 27 44) !important;
  text-align: justify;
  padding: 7px 0;
  list-style: disc;
  margin-left: 2rem;
}
#contentrenderer ul li ul li {
  list-style: circle !important;
  text-align: left;
}
#contentrenderer ol li ul li {
  font-size: 1rem;
  color: rgb(28 27 44) !important;
  padding: 5px 0;
  list-style: disc;
  /* margin-left: 2rem; */
}
#contentrenderer ol li ul li ul li {
  list-style: square !important;
}
#contentrenderer ol li {
  font-size: 1rem;
  color: rgb(28 27 44);
  padding: 10px 0;
  list-style: decimal;
  margin-left: 20px;
}
#contentrenderer blockquote {
  border-left: 4px solid rgba(128, 128, 128, 0.493);
  padding: 5px 20px;
  margin-top: 40;
  margin-bottom: 20px;
  background-color: rgba(128, 128, 128, 0.055);
}
#contentrenderer blockquote strong {
  font-size: 1rem;
  color: rgb(55 65 81);
}
#contentrenderer code {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.911);
  background-color: rgb(247 247 251);
  padding: 1px 5px;
  border-radius: 5px;
  font-family: monospace;
  border: 1px solid rgb(216, 216, 216);
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
#contentrenderer table tbody tr td a, tr td a strong {
text-decoration: underline;
font-weight: 600 !important;
}
#contentrenderer table tbody tr td a:hover, table tbody tr td a strong :hover {
color: #9b26b6 !important;
}
#contentrenderer img {
  margin: 30px auto;
  box-shadow: 0px 2px 5px rgba(114, 114, 114);
  border: 1px solid rgba(235, 235, 235, 0.705);
  border-radius: 5px;
  /* margin-bottom: 20px; */
}
#contentrenderer ul li img  {
  display : inline;
  margin: 0px;
  translate: var(--tw-translate-x) -7px;
  margin-left: 2px;
  margin-right: 5px;
}
#contentrenderer ol li img {
  display : inline;
  margin: 0px;
  translate: var(--tw-translate-x) -4px;
  margin-left: 2px;
  margin-right: 5px;
}
/* style="display:inline; margin:0px; margin-bottom:0px; translate: var(--tw-translate-x) -7px;" */
/* #contentrenderer ul li img, ol li img {
  margin: 7px auto !important;
  box-shadow: 0px 2px 2px rgba(114, 114, 114, 0.2);
  border: 1px solid rgba(235, 235, 235, 0.705);
  border-radius: 5px;
} */
hr {
  margin: 0.5rem 0;
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
#page-description strong{
  color: rgba(0, 0, 0, 0.836);
}
.next h5, .prev h5 {
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
</style>

