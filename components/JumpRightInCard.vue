<script setup>
// Get frontmatter data

const route = useRoute()
const { data: page } = await useAsyncData('page-' + route.path, () =>
  queryCollection('content').path(route.path).first(),
)
// console.log(page)
// const page = usePage(); // Access current Markdown page data
const cards = page.value.meta.cards || [] // Default to empty array if undefined

// console.log('Retrieved cards:', cards)
</script>

<template>
  <div class="">
    <div
      v-if="cards.length"
      class="flex flex-wrap gap-3 my-10 w-full"
    >
      <NuxtLink
        v-for="(card, index) in cards"
        :key="index"
        class="border hover:border-zt_purple/20 hover:bg-slate-50 hover:shadow-lg transition-all duration-300 rounded-lg shadow-md px-5 py-4 group max-w-[30%]"

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
