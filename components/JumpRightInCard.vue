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
      class="flex flex-wrap gap-5 my-10 w-full"
    >
      <NuxtLink
        v-for="(card, index) in cards"
        :key="index"
        class="border hover:border-zt_purple/20 hover:bg-slate-50 hover:shadow-lg transition-all duration-300 rounded-lg shadow-md px-5 py-4 group max-w-[45%] 2xl:max-w-[30%]"

        :to="card.path"
      >
        <h5
          class="text-gray-700 group-hover:text-zt_purple text-sm tracking-wide mb-2 group-hover:underline"
        >
          {{ card.title }}
        </h5>
        <span class="text-gray-600 tracking-wide text-sm">
          {{ card.description }}
        </span>
      </NuxtLink>
    </div>
    <p v-else>
      No cards found.
    </p>
  </div>
</template>
