<template>
  <div class="max-h-[calc(100vh-125px)] overflow-y-scroll pb-10 z-10">
    <div
      v-for="(items, index) in props.navigation"
      :key="index"
    >
      <h5
        v-if="items.children"
        class="text-sm font-zt_semibold tracking-wide capitalize text-gray-700 pt-4 pb-2"
      >
        {{ items.title }}
      </h5>
      <NuxtLink
        v-else
        :to="items.path"
      >
        <h2
          class="text-sm my-3 flex items-center gap-x-2 ms-5 font-zt_medium tracking-wide text-gray-500 hover:text-zt_purple"
          :class="{ 'text-zt_purple': route.path === items.path || route.path.replace('#/', '#') == items.path }"
        >
          <font-awesome-icon
            :icon="items.meta.icon"
            class="-translate-y-[1px]"
          />
          <span>
            {{ items.title }}
          </span>
        </h2>
      </NuxtLink>
      <div v-if="items.children">
        <nav class="ps-2">
          <RecursiveNavigation
            v-for="item in items.children"
            :key="item.title"
            :item="item"
          />
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
