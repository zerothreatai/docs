<script setup lang="ts">
// import ContentSearchButton from './ContentSearchButton.vue'
import githubIcon from './icon/github.icon.vue'
import AlgoliaSearchModel from './AlgoliaSearchModel.vue'
</script>

<template>
  <header class="sticky top-0 left-0 z-50 bg-white shadow-md">
    <div class="py-2.5">
      <div
        class="flex justify-between items-center px-16 max-w-[110rem] mx-auto text-sm text-gray-800"
      >
        <div>
          <NuxtLink :to="'/docs'">
            <div class="w-24 xl:w-32">
              <img
                src="../public/Images/ZeroThreat_logo_1000x400.png"
                alt=""
                class="border-0 m-0 rounded-none shadow-none"
              >
            </div>
          </NuxtLink>
        </div>
        <!-- search -->
        <AlgoliaSearchModel />
        <div>
          <a
            href="https://github.com/zerothreatai"
            target="_blank"
          >
            <github-icon class="w-6 fill-gray-700 hover:fill-zt_purple cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
