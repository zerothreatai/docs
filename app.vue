<script setup>
import Header from './components/Header.vue'

useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <div>
    <div
      class="fixed left-0 top-0 -z-10 h-full w-full bg-white bg-[url('/Images/pattern.jpg')] bg-cover bg-center bg-no-repeat after:fixed after:left-0 after:top-0 after:h-full after:w-full after:bg-white/20"
    />
    <Header />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>
