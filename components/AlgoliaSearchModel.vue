<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const searchComponent = ref(null)

// Function to focus the hidden input and open the modal
const openSearch = () => {
  if (searchComponent.value) {
    // Find the input element within AlgoliaDocSearch
    const input = (searchComponent.value as any).$el.querySelector('input')
    if (input) {
      input.focus() // Focusing the input should trigger the modal
    }
  }
}
</script>

<template>
  <div class="w-full flex justify-center">
    <AlgoliaDocSearch
      ref="searchComponent"
      placeholder="Search Documentation"
      :transform-items="(items) => {
        return items.map((item) => ({ ...item, url: item.url.replace('/#', '#') }))
      }"
    />
    <div
      class="px-3 py-2 w-full max-w-xl cursor-pointer flex items-center justify-between border border-slate-200 rounded-md bg-white shadow-sm"
      @click="openSearch"
    >
      <div class="flex items-center gap-x-3">
        <span><font-awesome-icon
          icon="magnifying-glass"
          class="text-gray-400 translate-y-0.5"
        /></span>
        <span class="text-gray-400">Search Documentation</span>
      </div>
      <div class="flex items-center gap-x-1">
        <span
          class="text-xs font-medium text-gray-500 px-1 text-center rounded bg-slate-50 border border-gray-300"
        >Ctrl</span>
        <span
          class="text-xs font-medium text-gray-500 px-1 text-center rounded bg-slate-50 border border-gray-300"
        >k</span>
      </div>
    </div>
  </div>
</template>

<style>

</style>
