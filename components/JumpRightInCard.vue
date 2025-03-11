<script setup>
// Get frontmatter data

const route = useRoute()
const { data: page } = await useAsyncData('page', () =>
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
      class="flex flex-wrap justify-start gap-5 my-10"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="border hover:border-zt_purple/20 hover:bg-slate-50 hover:shadow-lg transition-all duration-300 rounded-lg shadow-md px-5 py-4 min-w-60 group"
      >
        <NuxtLink
          :to="card.path"
          class=""
        >
          <h5 class="text-gray-600 group-hover:text-zt_purple text-sm tracking-wide mb-1 ">
            {{ card.title }}
          </h5>
          <span class="text-gray-500 text-sm">
            {{ card.description }}
          </span>
        </NuxtLink>
      </div>
    </div>
    <p v-else>
      No cards found.
    </p>
  </div>
</template>
