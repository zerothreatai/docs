<script setup lang="ts">
import SearchIcon from "./icon/search.icon.vue";
import DocumentIcon from "./icon/document.icon.vue";
import MiniSearch from "minisearch";
import { defineEmits } from "vue";
import { transform } from "typescript";

const query = ref("");

const { data } = await useAsyncData(`search-${query}`, () =>
  queryCollectionSearchSections("content")
);

const { data: nav } =
  (await useAsyncData("nav", () =>
    queryCollectionNavigation("content", ["description"])
  )) ?? [];

  console.log(nav)
const miniSearch = new MiniSearch({
  fields: ["title", "content"],
  storeFields: ["title", "content"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
});

miniSearch.addAll(toValue(data.value) as {}[]);
const result = computed(() => {
  if (query.value.length)
    return groupSearchData(miniSearch.search(toValue(query)));
  return nav;
});

const groupSearchData = (data: any) => {
  // Clone navigation to avoid modifying original data
  const navigation = JSON.parse(JSON.stringify(toValue(nav) || []));
  // Process each top-level element
  const filteredNavigation = navigation
    .map((element: any) => {
      if (!element?.path) return null;

      // Get all data related to this element
      const elementData = data.filter((d: any) => d.id.includes(element.path));

      if (Array.isArray(element.children)) {
        // Process children and remove those with empty children arrays
        element.children = element.children
          .map((child: any) => {
            if (!child?.path) return null;

            // Filter data related to this child
            const childData = elementData.filter((d: any) =>
              d.id.includes(child.path)
            );

            // Only return child if it has data
            return childData.length ? { ...child, children: childData } : null;
          })
          .filter(Boolean); // Remove null values
      }

      // Remove the element if it has no children left
      return element.children.length ? element : null;
    })
    .filter(Boolean); // Remove null values

  return filteredNavigation;
};
const emit = defineEmits(["close"]);

const closeModel = (event: KeyboardEvent) => {
    if (event.key == 'Escape') {
      event.preventDefault()
      emit('close')
    }
}
onMounted(() => {
    window.addEventListener('keydown', closeModel)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', closeModel)
  })

</script>

<template>
  <div
    class="modal-overlay fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
  >
    <div
      class="w-[50vw] bg-white p-6 rounded-lg shadow-lg relative"
    >
      <h2
        class="relative font-zt_semibold text-2xl text-zt_purple after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-[80px] after:bg-slate-300"
      >
        Search Documentation
      </h2>
      <div class="flex justify-between items-center my-4 px-1 mt-10 relative">
        <span>
          <search-icon
            class="w-3.5 stroke-gray-400 absolute top-1/2 -translate-y-1/2 left-4"
          />
        </span>
        <input
          v-model="query"
          ref="inputRef"
          type="text"
          class="w-full ps-8 py-2.5 rounded-md outline-none border text-sm focus:border focus:border-zt_purple"
          placeholder="Type to search..."
          v-focus
        />
      </div>
      <button
        class="absolute right-5 top-3 text-gray-400 hover:text-gray-600 text-xl"
        @click="$emit('close')"
      >
        ✕
      </button>
      <ul
        v-if="query.trim().length > 0 && result.length"
        class="mt-4 space-y-3 max-h-[40vh] overflow-y-scroll"
      >
        <li v-for="(item, index) in result" :key="index">
          <div v-if="true" class="mt-2 border-b pb-1">
            <span class="text-black font-zt_medium">{{ item.title }}</span>
          </div>
          <ul
            v-for="(itemlist, index) in item.children"
            :key="index"
            class="py-2 border-b border-dashed"
          >
            <!-- <div
              class="my-3 mb-4 font-zt_medium tracking-wide text-sm text-zt_purple relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-[50px] after:bg-slate-300"
            >
              {{ itemlist.title }}
            </div> -->
            <li v-for="(itemdata, index) in itemlist.children" :key="index">
              <NuxtLink
                class="flex items-start space-x-2 overflow-hidden text-ellipsis px-2 py-1 rounded-md hover:bg-gray-200/30"
                @click="$emit('close')"
                :to="itemdata.id"
              >
                <document-icon
                  v-if="itemdata.level == 1"
                  class="w-4 h-4 stroke-gray-400 text-gray-500 translate-y-0.5 bg-transparent fill-transparent"
                />
                <span v-else class="text-base -translate-y-0.5 text-gray-500"
                  >#</span
                >
                <div class="flex-1 flex items-start space-x-1 text-sm">
                  <span class="text-gray-600 whitespace-nowrap font-zt_medium">
                    {{ itemdata.title }} :
                  </span>
                  <span v-if="itemdata.level != 1"> </span>
                  <span
                    class="text-slate-400 text-nowrap max-w-full overflow-hidden font-zt_regular text-ellipsis ps-1 text-justify"
                    v-html="itemdata.content"></span
                  >
                </div>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
      <ul
        v-else-if="!query.trim().length"
        class="mt-4 space-y-3 max-h-[40vh] h-full overflow-y-scroll"
      >
        <li v-for="(item, index) in nav" :key="index">
          <div v-if="true" class="mt-2 border-b pb-1">
            <span class="text-gray-800 font-zt_medium">{{ item.title }}</span>
          </div>
          <ul
            v-for="(itemlist, index) in item.children"
            :key="index"
            class="py-2 border-b"
          >
            <div v-if="itemlist.children"
              class="my-3 mb-4 font-zt_medium tracking-wide text-sm text-zt_purple relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-[50px] after:bg-slate-300"
            >
              {{ itemlist.title }}
            </div>
            <li v-for="(itemdata, index) in itemlist.children" :key="index">
              <NuxtLink
                class="flex items-start space-x-2 overflow-hidden text-ellipsis px-2 py-1 rounded-md hover:bg-gray-200/30"
                @click="$emit('close')"
                :to="itemdata.path ?? item.id"
              >
                <document-icon
                  class="w-4 h-4 stroke-gray-400 text-gray-500 translate-y-0.5 bg-transparent fill-transparent"
                />
                <div class="flex-1 min-w-0 flex items-start space-x-1 text-sm">
                  <span class="text-gray-600 whitespace-nowrap font-zt_medium">
                    {{ itemdata.title }} :
                  </span>
                  <span
                    class="text-slate-400 text-nowrap max-w-full overflow-hidden text-ellipsis font-zt_regular ps-1 text-justify"
                    v-html="itemdata.description"></span
                  >
                </div>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
      <div v-else
      class="min-h-[40vh] h-full">
        <p
          class="text-gray-500 w-full flex justify-center items-center gap-x-2 py-2 text-base"
        >
          <!-- <span
            ><font-awesome-icon icon="circle-xmark" class="text-red-500"
          /></span> -->
          <span
            >We couldn't find any items with that term. Please try again.</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  z-index: 50;
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: white;
}

::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
