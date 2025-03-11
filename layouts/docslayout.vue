<script setup lang="ts">
import NavigationTree from '~/components/NavigationTree.vue'

const { data: navigation } = await useAsyncData(
  'contentNavigation',
  () => queryCollectionNavigation('content', ['meta']),
  { transform: data => data.find(d => d.path == '/docs')?.children },
)
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="grid grid-cols-12 2xl:gap-x-8 px-16 max-w-[110rem]">
      <div class="col-span-2 2xl:col-span-3 relative 2xl:ps-10 max-2xl:min-w-60">
        <div class="sticky left-0 top-24">
          <NavigationTree
            v-if="navigation"
            :navigation="navigation"
          />
        </div>
        <!-- Pass the navigation data -->
      </div>
      <div class="col-span-10 2xl:col-span-9 2xl:pe-10 max-2xl:ps-14 pb-20">
        <div class="flex gap-x-10">
          <div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
