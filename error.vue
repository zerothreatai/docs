<script setup>
import { computed } from 'vue'

const props = defineProps({
  error: Object, // The error object provided by Nuxt
})

// Access specific error details
const statusCode = computed(() => props.error.statusCode)
const message = computed(() => props.error.message)
const is404 = computed(() => props.error.statusCode === 404)

useHead({
  meta: [
    { name: 'robots', content: workingMode === 'noIndex, nofollow' },
  ],
})
const handleError = () => clearError({ redirect: '/' }) // Redirect to homepage
</script>

<template>
  <Header />
  <div class="flex min-h-screen flex-col items-center justify-center p-4">
    <div class="max-w-md text-center">
      <h1
        v-if="is404"
        class="text-6xl font-bold text-gray-800"
      >
        404
      </h1>
      <h1
        v-else
        class="text-6xl font-bold text-red-600"
      >
        {{ statusCode }}
      </h1>

      <p class="mt-4 text-xl text-gray-700">
        {{ is404 ? 'Page Not Found' : 'An error occurred.' }}
      </p>
      <p
        v-if="message && !is404"
        class="mt-2 text-gray-600"
      >
        {{ message }}
      </p>

      <button
        class="mt-8 rounded-md bg-zt_purple px-6 py-3 text-white transition hover:bg-gray-50 hover:text-zt_purple border border-zt_purple"
        @click="handleError"
      >
        Go to Homepage
      </button>

      <div class="mt-12 text-sm text-gray-500">
        <p>If you believe this is an error, please contact support.</p>
        <!-- You might want to log the error for debugging in development -->
        <!-- <pre v-if="!is404 && $nuxt.dev">{{ error }}</pre> -->
      </div>
    </div>
  </div>
</template>
