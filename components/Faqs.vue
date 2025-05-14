<script setup>
import tabs from '~/const/categoryTab'

const activeTab = ref(tabs[0])

const filteredfaqs = ref([])
const selectButton = async (tab) => {
  activeTab.value = tab
  try {
    if (tab.file) {
      const res = await fetch(tab.file)
      const jsonData = await res.json()
      // console.log(jsonData)
      filteredfaqs.value = jsonData ? jsonData.map(d => ({ ...d, isOpen: false })).slice(0, 3) : []
    }
    else {
      filteredfaqs.value = []
    }
  }
  catch {
    filteredfaqs.value = []
  }
}

onMounted(async () => {
  if (activeTab.value.file) {
    try {
      const res = await fetch(activeTab.value.file)
      const jsonData = await res.json()
      // console.log(jsonData)
      filteredfaqs.value = jsonData.map(d => ({ ...d, isOpen: false })).slice(0, 3)
    }
    catch {
      filteredfaqs.value = []
    }
  }
  else {
    filteredfaqs.value = []
  }
})

const toggleItem = (item) => {
  filteredfaqs.value.map((d) => {
    if (d.q == item.q) {
      d.isOpen = !d.isOpen
    }
    else {
      d.isOpen = false
    }
  })
}
</script>

<template>
  <div class="py-16">
    <!-- Heading -->
    <div class="relative border-b pb-2">
      <div class="flex justify-between items-center">
        <div class="font-zt_medium text-2xl text-gray-900 2xl:text-2xl">
          Frequently asked questions
        </div>
      </div>
    </div>
    <!--  -->
    <div class="text-base text-gray-500 font-zt_regular tracking-wide text-justify py-5">
      Frequently asked questions about ZeroThreat features, target, scans, and scan report.
    </div>
    <!-- Tabs -->
    <div
      class="mb-10 mt-3 flex items-center gap-x-3 text-xs text-gray-600 font-zt_medium *:text-nowrap *:px-4 *:py-1.5 *:border *:rounded-full hover:*:bg-zt_purple hover:*:text-white *:transition-all *:duration-300 *:cursor-pointer max-w-full flex-wrap gap-y-4"
    >
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="flex items-center gap-x-2 w-fit group transition-all duration-300"
        :class="{
          'bg-zt_purple text-white': tab.category === activeTab.category,
        }"
        @click="() => selectButton(tab)"
      >
        <span><font-awesome-icon
          :icon="tab.icon"
          class="group-hover:text-white"
          :class="tab.category === activeTab.category ? 'text-white' : tab.iconCLass"
        /></span>
        <span>{{ tab.title }}</span>
      </div>
    </div>
    <!-- faq -->
    <div class="relative">
      <div>
        <div
          class="border *:border-b *:border-dashed last:*:border-b-0 rounded-t-lg rounded-b-lg last:*:rounded-b-lg first:*:rounded-t-lg"
        >
          <template v-if="filteredfaqs.length">
            <div
              v-for="(item, index) in filteredfaqs"
              :key="index"
            >
              <div>
                <div
                  class="text-base flex justify-between tracking-wide items-center gap-x-5 text-gray-600 font-zt_regular px-6 py-5 cursor-pointer hover:bg-gray-100"
                  :class="{
                    'bg-gray-100 text-gray-700': item.isOpen,
                    'rounded-t-lg': index === 0,
                    'rounded-b-lg': !item.isOpen && filteredfaqs.length - 1 === index,
                  }"
                  @click="
                    () => {
                      toggleItem(item)
                    }
                  "
                >
                  <span>
                    {{ item.q }}
                  </span>
                  <span>
                    <font-awesome-icon
                      icon="chevron-right"
                      class="text-[10px] transition-all duration-300 group-hover:text-zt_purple -translate-y-0.5"
                      :class="{ 'rotate-90': item.isOpen }"
                    />
                  </span>
                </div>
                <div
                  :class="{
                    'max-h-52 overflow-y-auto bg-slate-50/20': item.isOpen,
                    'max-h-0': !item.isOpen,
                  }"
                  class="transition-all duration-500 overflow-hidden px-6"
                >
                  <div class="py-4 text-gray-600 tracking-wider text-sm font-zt_regular leading-6">
                    <MDC
                      :value="item.a"
                      :unwrap="true"
                      class="custom-list"
                    />
                  </div>
                  <!-- {{ item.a }} -->
                  <div
                    v-if="item.link"
                    id="faq-list"
                    class="relative  ms-4 before:absolute before:w-[7px] before:h-[7px] before:-top-[1px] before:-left-4 before:bg-gray-500 before:rounded-full "
                  >
                    <MDC :value="item.link" />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <NuxtLink :to="'/docs/getting-started/faqs'">
        <span class="absolute cursor-pointer right-0 underline -bottom-10 text-zt_purple text-sm">Show More...</span>
      </NuxtLink>
    </div>
  </div>
</template>
