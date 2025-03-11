<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { defineProps, nextTick } from 'vue';
import { useToc } from '~/composables/useTocs';
  const route = useRoute();
  const scrollToSection = async (id: string) => {
  await nextTick();  // Ensure DOM is updated before calculation
  const target = document.getElementById(id);
  if (target) {
    const headerOffset = 60; // Adjust as needed
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const { activeHeadings } = useToc();
  interface TocLink {
    id: string;
    text: string;
    children?: TocLink[];
  }

  console.log(activeHeadings)
  defineProps<{
    toclinks: TocLink[];
  }>();
</script>

<template>
  <div class="max-h-[calc(100vh-110px)] sticky right-0 top-24 toc-links overflow-y-scroll">
    <h5 class="text-sm font-zt_semibold tracking-wide capitalize text-gray-700 pt-4 pb-2">
      Table Of Content
    </h5>
    <p v-for="item, index in toclinks" :key="index" class="py-[3px]">
      <NuxtLink class="text-sm mt-1 tracking-wide font-zt_regular text-gray-700 hover:text-zt_purple cursor-pointer py-1"
        :to="route.path + '#' + item?.id" :class="{ 'text-zt_purple': route.hash === `${item.id}` || activeHeadings.includes(item?.id) }"
        @click.prevent="scrollToSection(item.id)">{{ item.text }}
      </NuxtLink>
    <ul v-if="item?.children">
      <li v-for="link, index in item['children']" :key="index"  class="py-0.5 ps-6">
        <NuxtLink class="text-sm mt-1 tracking-wide font-zt_regular text-gray-700 hover:text-zt_purple cursor-pointer py-1"
          :to="route.path + '#' + link.id" :class="{ 'text-zt_purple': (route.hash === `#${link.id}`) || activeHeadings.includes(link.id)  }"
          @click.prevent="scrollToSection(link.id)">{{ link.text }}
        </NuxtLink>
      </li>

    </ul>
    </p>
  </div>
</template>

<style scoped>
ul li {
  font-size: 1rem;
  padding: 0px !important;
  list-style: none !important;
}
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }


</style>
