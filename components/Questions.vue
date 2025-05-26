<script setup>
import tabs from '~/const/categoryTab'

const condifgsRuntime = useRuntimeConfig()

console.log('condifgsRuntime', condifgsRuntime)
const irrevelantCategory = [FaqCategory['API Security'], FaqCategory.Integrations, FaqCategory.Plans, FaqCategory.Promos, FaqCategory.Pricing, FaqCategory.Product]
const fileredtabs = condifgsRuntime.public.workingEnv === 'production' || condifgsRuntime.public.workingEnv === 'staging' ? tabs.filter(tabs => !irrevelantCategory.includes(tabs.category)) : tabs
const activeTab = ref(fileredtabs[0])

const searchQuery = ref('')

const filteredfaqs = ref([])
const selectButton = async (tab) => {
  activeTab.value = tab
  try {
    if (tab.file) {
      const res = await fetch(`/${tab.file}`)
      const jsonData = (await res.json()).map(d => ({ ...d, isOpen: false }))
      // console.log(jsonData)
      filteredfaqs.value = jsonData ? searchQuery.value.trim().length ? jsonData.filter(d => d.q.lowerCase().includes(searchQuery.value.trim().toLowerCase())) : jsonData : []
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
  activeTab.value = tabs[0]
  if (activeTab.value.file) {
    try {
      const res = await fetch(`/${activeTab.value.file}`)
      const jsonData = await res.json()
      // console.log(jsonData)
      filteredfaqs.value = jsonData.map(d => ({ ...d, isOpen: false }))
    }
    catch {
      filteredfaqs.value = []
    }
  }
  else {
    filteredfaqs.value = []
  }
})
const toggleAccordion = (item) => {
  filteredfaqs.value.map((d) => {
    if (d.q == item.q) {
      d.isOpen = !d.isOpen
    }
    else {
      d.isOpen = false
    }
  })
}

const filteredfaqsSearch = () => {
  filteredfaqs.value = filteredfaqs.value.filter(d => d.q.lowerCase().includes(searchQuery.value.trim().toLowerCase()))
}
</script>

<template>
  <div>
    <div class="w-full">
      <div class="text-base text-gray-500 font-zt_regular tracking-wide text-justify pt-5 pb-8">
        Frequently asked questions about ZeroThreat features, target, scans, and scan report.
      </div>
      <div class="pb-10 space-y-5">
        <div
          class="flex items-center gap-x-3 w-full border py-3.5 px-5 rounded-md shadow-zt_shadow_two"
        >
          <span><font-awesome-icon
            icon="magnifying-glass"
            class="text-sm text-gray-400"
          /></span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="How can we help you today ?"
            class="text-sm w-full placeholder:text-gray-400 placeholder:font-zt_regular text-gray-700 font-zt_medium outline-none"
            @change="() => filteredfaqsSearch()"
          >
        </div>
        <!-- tabs -->
        <div>
          <div
            class="flex items-center justify-start gap-x-3 text-xs text-gray-600 font-zt_medium *:text-nowrap *:px-4 *:py-1.5 *:border *:rounded-full hover:*:bg-zt_purple hover:*:text-white *:transition-all *:duration-300 *:cursor-pointer max-w-full flex-wrap gap-y-3"
          >
            <div
              v-for="(tab, index) in fileredtabs"
              :key="index"
              class="flex items-center gap-x-2 w-fit group transition-all duration-300"
              :class="{
                'bg-zt_purple text-white': tab.category === activeTab.category,
              }"
              @click="selectButton(tab)"
            >
              <span><font-awesome-icon
                :icon="tab.icon"
                class="group-hover:text-white"
                :class="tab.category === activeTab.category ? 'text-white' : tab.iconCLass"
              /></span>
              <span>{{ tab.title }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="filteredfaqs.length"
        class="border *:border-b *:border-dashed last:*:border-b-0 rounded-t-lg rounded-b-lg last:*:rounded-b-lg first:*:rounded-t-lg mb-24"
      >
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
              @click="toggleAccordion(item)"
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
                'max-h-52 overflow-y-auto': item.isOpen,
                'max-h-0': !item.isOpen,
              }"
              class="transition-all duration-500 overflow-hidden px-6"
            >
              <!-- {{ item.a }} -->
              <div class="py-4 text-gray-600 tracking-wider text-sm font-zt_regular leading-6">
                <MDC
                  :value="item.a"
                  :unwrap="true"
                  class="custom-list"
                />
              </div>
              <div
                v-if="item.link"
                id="faq-list"
                class="relative ms-4 before:absolute before:w-[7px] before:h-[7px] before:-top-[1px] before:-left-4 before:bg-gray-500 before:rounded-full"
              >
                <MDC :value="item.link" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-else>
        <div
          v-if="searchQuery.trim().length"
          class="min-w-full px-6 py-4 text-sm text-gray-700 flex items-center tracking-wide gap-x-2 border border-gray-100 rounded-md bg-slate-50 font-zt_medium mb-10"
        >
          <span><font-awesome-icon
            icon="circle-xmark"
            class="text-red-500"
          /></span>
          <span>Sorry, we couldn't find any FAQs matching with your search term.</span>
        </div>
        <div
          v-else
          class="min-w-full px-6 py-4 text-sm text-gray-700 flex items-center tracking-wide gap-x-2 border border-gray-100 rounded-md bg-slate-50 font-zt_medium mb-10"
        >
          <span><font-awesome-icon
            icon="circle-xmark"
            class="text-red-500"
          /></span>
          <span>Sorry, we couldn't find any FAQs.</span>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
  .custom-list > li {
    margin-left: 20px !important;
    padding: 1px 0px !important;
  }
  .custom-list > a {
    color: #9b26b6 !important;
  }
  .custom-list > a:hover {
    text-decoration: underline !important;
  }
</style>
