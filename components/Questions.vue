<script setup>
    import targetFaq from '../assests/1.faq.json'
    import ScanFaq from '../assests/2.faq.json'
    import OrganizationFaq from '../assests/3.faq.json'
    import ScanReportFaq from '../assests/4.faq.json'
    import tabs from '~/const/categoryTab'
    import { FaqCategory } from '~/utils/category.enum'

    const searchQuery = ref('')

    const activeTab = ref(tabs[0])

    const targetfaqs = ref(targetFaq.map((d) => ({ ...d, isOpen: false })))
    const Scanfaqs = ref(ScanFaq.map((d) => ({ ...d, isOpen: false })))
    const Organizationfaqs = ref(OrganizationFaq.map((d) => ({ ...d, isOpen: false })))
    const ScanReportfaqs = ref(ScanReportFaq.map((d) => ({ ...d, isOpen: false })))

    const selectButton = (tab) => {
        activeTab.value = tab
    }

    const toggleAccordion = (item) => {
        item.isOpen = !item.isOpen // Vue will now track changes properly
    }

    const filteredfaqs = computed(() => {
        switch (activeTab.value.category) {
            case FaqCategory.Target:
                if (searchQuery.value.trim().length) {
                    return targetfaqs.value.filter((t) =>
                        t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim())
                    )
                }
                return targetfaqs.value
                break
            case FaqCategory.Scan:
                if (searchQuery.value.trim().length) {
                    return Scanfaqs.value.filter((t) =>
                        t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim())
                    )
                }
                return Scanfaqs.value
                break
            case FaqCategory.Organization:
                if (searchQuery.value.trim().length) {
                    return Organizationfaqs.value.filter((t) =>
                        t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim())
                    )
                }
                return Organizationfaqs.value
                break
            case FaqCategory['Scan-Report']:
                if (searchQuery.value.trim().length) {
                    return ScanReportfaqs.value.filter((t) =>
                        t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim())
                    )
                }
                return ScanReportfaqs.value
        }
        return []
    })
    // const isOpen = ref(false);
    // console.log(props.Question);
</script>

<template>
    <!-- <div class="w-full">
        <div @click="isOpen = !isOpen" cla>
          <slot />
        </div>
        <div v-if="isOpen" >
            <slot  name ='answer' />
        </div>
    </div> -->
    <div>
        <div class="">
            <div
                class="text-base text-gray-500 font-zt_regular tracking-wide text-justify pt-5 pb-8"
            >
                Frequently asked questions about ZeroThreat features, target, scans, and scan
                report.
            </div>
            <div class="pb-10 space-y-5">
                <div
                    class="flex items-center gap-x-3 w-full border py-3.5 px-5 rounded-md shadow-zt_shadow_two"
                >
                    <span
                        ><font-awesome-icon icon="magnifying-glass" class="text-sm text-gray-400"
                    /></span>
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="How can we help you today ?"
                        class="text-sm w-full placeholder:text-gray-400 placeholder:font-zt_regular text-gray-700 font-zt_medium outline-none"
                    />
                </div>
                <div>
                    <div
                        class="flex items-center space-x-5 text-xs text-gray-600 font-zt_medium *:px-4 *:py-1.5 *:border *:rounded-full hover:*:bg-zt_purple hover:*:text-white *:transition-all *:duration-300 *:cursor-pointer"
                    >
                        <div
                            v-for="(tab, index) in tabs"
                            :key="index"
                            class="flex items-center gap-x-2 w-fit group transition-all duration-300"
                            :class="{
                                'bg-zt_purple text-white': tab.category === activeTab.category,
                            }"
                            @click="selectButton(tab)"
                        >
                            <span
                                ><font-awesome-icon
                                    :icon="tab.icon"
                                    class="group-hover:text-white"
                                    :class="tab.iconCLass"
                            /></span>
                            <span>{{ tab.title }}</span>
                        </div>
                        <!-- <div class="flex items-center gap-x-2 w-fit group transition-all duration-300">
              <span><font-awesome-icon icon="dollar-sign" class="text-green-500 group-hover:text-white"/></span>
              <span>Pricing</span>
            </div>
            <div
              class="flex items-center gap-x-2 w-fit group transition-all duration-300"
            >
              <span
                ><font-awesome-icon
                  icon="table-cells-large"
                  class="text-blue-500 group-hover:text-white"
              /></span>
              <span>Dashboard</span>
            </div>
            <div
              class="flex items-center gap-x-2 w-fit group transition-all duration-300"
            >
              <span
                ><font-awesome-icon
                  icon="lightbulb"
                  class="text-yellow-500 group-hover:text-white"
              /></span>
              <span>Troubleshooting</span>
            </div>
            <div
              class="flex items-center gap-x-2 w-fit group transition-all duration-300"
            >
              <span
                ><font-awesome-icon
                  icon="key"
                  class="text-blue-500 group-hover:text-white"
              /></span>
              <span>Security</span>
            </div>
            <div
              class="flex items-center gap-x-2 w-fit group transition-all duration-300"
            >
              <span
                ><font-awesome-icon
                  icon="wand-sparkles"
                  class="text-orange-500 group-hover:text-white"
              /></span>
              <span>API</span>
            </div> -->
                    </div>
                </div>
            </div>
            <div
                class="border *:border-b *:border-dashed last:*:border-b-0 rounded-t-lg rounded-b-lg last:*:rounded-b-lg first:*:rounded-t-lg"
            >
                <template v-if="filteredfaqs.length">
                    <div v-for="(item, index) in filteredfaqs" :key="index">
                        <div>
                            <div
                                class="text-base flex justify-between items-center gap-x-5 text-gray-600 font-zt_regular px-6 py-5 cursor-pointer hover:bg-gray-100"
                                :class="{
                                    'bg-gray-100 text-gray-700': item.isOpen,
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg':
                                        !item.isOpen && filteredfaqs.length - 1 === index,
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
                                <div
                                    class="py-4 text-gray-600 tracking-wide text-sm font-zt_regular leading-6"
                                >
                                    {{ item.a }}
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else> No FAQ Found </template>
            </div>
            <div class="py-10 mb-20">
                <div class="font-zt_bold">Additional resources :</div>
                <ul class="text-gray-700">
                    <li>
                        <span class="font-zt_semibold text-gray-800 underline"
                            >Keyboard Shortcuts</span
                        >
                        - Complete list of keybindings and shortcuts
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- <div class="flex gap-x-8 py-5 items-center mb-20">
        <div class="text-gray-700">Was this page helpful?</div>
        <div class="flex items-center gap-x-3">
          <div
            class="flex items-center gap-x-3 px-4 py-1.5 border group rounded-lg bg-white cursor-pointer shadow-sm text-sm"
          >
            <span
              ><like-icon
                class="w-4 stroke-gray-500 group-hover:stroke-zt_purple"
            /></span>
            <span>Yes</span>
          </div>
          <div
            class="flex items-center gap-x-3 px-4 py-1.5 group border rounded-lg bg-white cursor-pointer shadow-sm text-sm"
          >
            <span
              ><like-icon
                class="w-4 stroke-gray-500 group-hover:stroke-zt_purple -rotate-180"
            /></span>
            <span>No</span>
          </div>
        </div>
      </div> -->
    <!-- </div>
  </div> -->
</template>
