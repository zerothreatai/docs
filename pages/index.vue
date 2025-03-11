<script setup>
import VideoSection from '~/components/VideoSection.vue'

navigateTo('/docs')
</script>

<template>
  <div class="px-16 max-w-[110rem] mx-auto py-16">
    <!-- new ui -->
    <!-- <div class="grid grid-cols-12 gap-x-16">
      <div class="col-span-8">
        <faqs />
      </div>
      <div class="col-span-4 space-y-5">
        <div v-for="(items, index) in navigation" :key="index">
          <div
            v-if="items.path != '/'"
            class="border relative border-gray-100 px-5 py-3 rounded shadow-md"
          >
            <div class="flex items-center group cursor-pointer">
              <div class="flex items-center gap-x-2 border-b w-full pb-2">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="css-7bk2wo w-5 -translate-y-[1px] stroke-gray-600"
                  >
                    <g
                      stroke=""
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="M22 10V16M2 10L12 5L22 10L12 15L2 10Z"></path>
                      <path d="M6 12V17C9 20 15 20 18 17V12"></path>
                    </g>
                  </svg>
                </span>
                <div class="flex items-center -translate-y-0.5">
                  <NuxtLink
                    v-if="items?.children[0]"
                    :to="items?.children[0]?.path ?? ''"
                  >
                    <span
                      class="relative text-lg font-zt_semibold text-gray-700 group-hover:text-zt_purple after:absolute after:invisible after:group-hover:visible after:border-b-fuchsia-700 after:w-full after:left-0 after:bottom-0 after:border-b"
                      >{{ items.title }}</span
                    ></NuxtLink
                  >
                  <span
                    v-else
                    class="relative text-lg font-zt_semibold text-gray-700 group-hover:text-zt_purple after:absolute after:invisible after:group-hover:visible after:border-b-fuchsia-700 after:w-full after:left-0 after:bottom-0 after:border-b"
                    >{{ items.title }}</span
                  >
                </div>
              </div>
            </div>
            <div>
              <p class="text-gray-400 text-sm text-justify py-3">
                 {{ descriptions[items.path] || "No description available" }} -->
    <!-- {{ items.description }}
              </p>
              <ul class="*:text-sm *:py-0.5">
                <li
                  class="css-1t6p0gm"
                  v-for="(child, index) in items.children"
                  :key="index"
                >
                  <div
                    v-if="index < 2"
                    class="flex items-center gap-x-2 py-0.5"
                  >
                    <span>
                      <svg
                        class="fill-[#9b26b6]/80 text-sm"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                        fill=""
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        ></path>
                      </svg>
                    </span>
                    <NuxtLink
                      class="text-zt_purple/80 font-normal hover:underline"
                      :to="child.path"
                    >
                      {{ child.title }}
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </div>
            <span
              class="absolute right-2 bottom-2 text-xs text-gray-400 underline hover:text-zt_purple cursor-pointer transition-all duration-300"
            >
              <NuxtLink :to="items?.children[0].path"
                >Show More...</NuxtLink
              ></span
            >
          </div>
        </div>
      </div>
    </div> -->
    <!-- <info-corner /> -->
    <video-section />
  </div>
</template>
