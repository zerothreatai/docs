<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRoute } from 'vue-router'

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['item'])
const route = useRoute()
const isOpen = ref(false)

function normalizePath(path: string): string {
  return path !== '/' ? path.replace(/\/+$/, '') : path
}

const openChildren = () => {
  isOpen.value = true
}

const toggleChild = (event: Event) => {
  event.stopPropagation() // Prevents event from affecting parent elements
  isOpen.value = !isOpen.value
}

const isChildActive = computed(() => {
  if (props.item.children) {
    return props.item.children.some((child: { path: string }) =>
      route.path.startsWith(child.path),
    )
  }
  return false
})

watch(
  () => route.path,
  () => {
    isOpen.value = isChildActive.value ? isChildActive.value : isOpen.value
  },
  { immediate: true }, // Runs once on component mount
)
</script>

<template>
  <div>
    <div
      class="flex justify-between hover:bg-slate-100 w-full items-center px-3 rounded-md transition-all duration-300"
    >
      <span class="min-w-5">
        <template v-if="item.meta?.imageSrc">
          <img
            :src="item.meta.imageSrc"
            class="w-[18px] p-0 border-0 m-0 opacity-70"
          >

        </template>
        <template v-if="item.meta?.icon">
          <font-awesome-icon
            :icon="item.meta.icon"
            class="-translate-y-[1px] text-gray-400"
          />
        </template>
      </span>
      <NuxtLink
        class="text-sm mt-1 ps-2 font-zt_regular text-gray-700 flex items-center justify-between hover:text-zt_purple hover:border-zt_purple/70 transition-all duration-300 cursor-pointer py-1 my-1 w-full tracking-wide"
        :class="{
          'text-zt_purple border-zt_purple/70': normalizePath(route.path) === normalizePath(item.path),
        }"
        :to="item.path"
        @click="() => openChildren()"
      >
        <span class="w-full">{{ item.title }}</span>
      </NuxtLink>
      <span
        v-if="item.children"
        class="w-5 h-5 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-full"
        @click.stop="($event) => toggleChild($event)"
      >
        <font-awesome-icon
          :icon="'chevron-right'"
          class="text-[11px] text-gray-500 transition-all duration-300"
          :class="{ 'rotate-90': isOpen }"
        />
      </span>
    </div>

    <!-- Recursively render children if they exist -->
    <div
      :class="item.children && isOpen ? 'max-h-96 overflow-y-auto' : 'max-h-0'"
      class="transition-all duration-500 overflow-hidden"
    >
      <div class="transition-all ms-5 duration-300 border-l-2 my-2">
        <template
          v-for="child in item.children"
          :key="child.title"
        >
          <RecursiveNavigation
            v-if="child.path !== item.path"
            :item="child"
            class="hover:bg-slate-100 rounded-e-md"
          />
        </template>
      </div>
    </div>
  </div>
</template>
