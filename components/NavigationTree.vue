<template>
  <div class="max-h-[calc(100vh-125px)] overflow-y-scroll pb-10 z-10">
    <div v-for="(items, index) in props.navigation" :key="index">
      <h5 v-if="items.children" class="text-sm font-zt_semibold tracking-wide capitalize text-gray-700 pt-4 pb-2">
        {{ items.title }}
      </h5>
      <NuxtLink v-else :to="items.path">
        <h2
          class="text-sm max-xl:mb-3 max-xl:mt-0 xl:my-3 flex items-center gap-x-2 ms-5 font-zt_medium tracking-wide text-gray-500 hover:text-zt_purple"
          :class="{ 'text-zt_purple': normalizePath(route.path) === normalizePath(items.path) }">
          <template v-if="items.meta?.imageSrc">
            <img :src="items.meta.imageSrc" class="size-6 pt-0 ps-0">

          </template>
          <template v-if="items.meta?.icon">
            <font-awesome-icon :icon="items.meta.icon" class="-translate-y-[1px]" />
          </template>
          <span>
            {{ items.title }}
          </span>
        </h2>
      </NuxtLink>
      <div v-if="items.children">
        <nav class="ps-2">
          <RecursiveNavigation v-for="item in items.children" :key="item.title" :item="item" />
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import RecursiveNavigation from './RecursiveNavigation.vue'

const props = defineProps(['navigation'])
const route = useRoute()
function normalizePath(path: string): string {
  return path !== '/' ? path.replace(/\/+$/, '') : path
}
// const routepath = computed(() => (route.path != '/' && route.path.endsWith('/') ? route.path.replace(/\/+$/, '') : route.path))
</script>

<style scoped>
::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: white;
}

::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
