<script setup lang="ts">
// import ContentSearchButton from './ContentSearchButton.vue'
import githubIcon from './icon/github.icon.vue'
import SearchModal from './SearchModal.vue'

const showSearchModal = ref(false)

const toggleSearch = () => {
  showSearchModal.value = !showSearchModal.value
  if (showSearchModal.value) {
    document.body.classList.add('overflow-hidden')
  }
  else {
    document.body.classList.remove('overflow-hidden')
  }
}
const handleKeydown = (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault()
    toggleSearch()
  }
}
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header class="sticky top-0 left-0 z-50 bg-white shadow-md">
    <div class="py-2.5">
      <div
        class="flex justify-between items-center px-16 max-w-[110rem] mx-auto text-sm text-gray-800"
      >
        <div>
          <NuxtLink :to="'/'">
            <div class="w-24 xl:w-32">
              <img
                src="../public/ZeroThreat_logo_1000x400.png"
                alt=""
              >
            </div>
          </NuxtLink>
        </div>
        <!-- search -->
        <div class="w-full flex justify-center">
          <div
            class="px-3.5 py-2 w-full max-w-xl cursor-pointer flex items-center justify-between border border-slate-200 rounded-md bg-white shadow-sm"
            @click="toggleSearch"
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
              >
                Ctrl
              </span>
              <span
                class="text-xs font-medium text-gray-500 px-1 text-center rounded bg-slate-50 border border-gray-300"
              >
                k
              </span>
            </div>
          </div>
        </div>
        <div>
          <github-icon
            class="w-6 fill-gray-700 hover:fill-zt_purple cursor-pointer"
          />
        </div>
      </div>
      <SearchModal
        v-if="showSearchModal"
        @close="toggleSearch"
      />
    </div>
  </header>
</template>
