<script setup>
const route = useRoute()
const { data: page } = await useAsyncData('page-' + route.path, () =>
  queryCollection('content').path(route.path).first(),
)
const cards = page.value.meta.cards || []
</script>

<template>
  <div class="">
    <div
      v-if="cards.length"
      class="flex flex-wrap gap-6 my-10 w-full"
    >
      <NuxtLink
        v-for="(card, index) in cards"
        :key="index"
        class="border hover:border-zt_purple/10 bg-gradient-to-r from-slate-50 via-white hover:bg-gradient-to-r hover:from-slate-100 hover:via-slate-50 hover:shadow-lg transition-all duration-300 rounded-lg shadow-md px-5 py-4 group min-w-[45%] max-w-[45%] 2xl:max-w-[30%] 2xl:min-w-[30%] min-h-48"
        :to="card.path"
      >
        <div class="flex items-center gap-x-2.5">
          <span v-if="card?.icon"><font-awesome-icon
            :icon="card.icon"
            class="text-gray-500 -translate-y-1.5 group-hover:text-zt_purple transition-all duration-300"
          /></span>
          <h5
            class="text-gray-700 group-hover:text-zt_purple text-sm tracking-wide mb-3 group-hover:underline underline"
          >
            {{ card.title }}
          </h5>
        </div>
        <span
          v-if="card.description"
          class="text-gray-600 tracking-wide text-sm"
        >
          {{ card.description }}
        </span>
      </NuxtLink>
    </div>
    <p v-else>
      No cards found.
    </p>
  </div>
</template>
