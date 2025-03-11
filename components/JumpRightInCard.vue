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
      class="flex gap-9"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="border border-2 rounded justify-center hover:text-purple-500 grid p-1 min-w-[200px] hover:bg-slate-100"
      >
        <NuxtLink
          :to="card.path"
          class=""
        >
          <h5>
            {{ card.title }}
          </h5>
          <span>
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
