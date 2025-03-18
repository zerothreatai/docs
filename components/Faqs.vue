<script setup>
import targetFaq from '../assests/target.faq.json'
import ScanFaq from '../assests/scan.faq.json'
import OrganizationFaq from '../assests/organization.faq.json'
import ScanReportFaq from '../assests/scanReport.faq.json'
import authenticatedFaq from '../assests/authenticate.faq.json'
import unauthenticateFaq from '../assests/unauthenticate.faq.json'
import tabs from '~/const/categoryTab'
import { FaqCategory } from '~/utils/category.enum'

const searchQuery = ref('')

const activeTab = ref(tabs[0])

const targetfaqs = ref(targetFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))
const Scanfaqs = ref(ScanFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))
const Organizationfaqs = ref(OrganizationFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))
const ScanReportfaqs = ref(ScanReportFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))
const Authenticatedfaqs = ref(authenticatedFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))
const Unathenticatefaqs = ref(unauthenticateFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))

const selectButton = (tab) => {
  activeTab.value = tab
}
const filteredfaqs = computed(() => {
  switch (activeTab.value.category) {
    case FaqCategory.Target:
      if (searchQuery.value.trim().length) {
        return targetfaqs.value.filter(t =>
          t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()),
        )
      }
      return targetfaqs.value
      break
    case FaqCategory.Scan:
      if (searchQuery.value.trim().length) {
        return Scanfaqs.value.filter(t =>
          t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()),
        )
      }
      return Scanfaqs.value
      break
    case FaqCategory.Organization:
      if (searchQuery.value.trim().length) {
        return Organizationfaqs.value.filter(t =>
          t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()),
        )
      }
      return Organizationfaqs.value
      break
    case FaqCategory['Scan-Report']:
      if (searchQuery.value.trim().length) {
        return ScanReportfaqs.value.filter(t =>
          t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()),
        )
      }
      return ScanReportfaqs.value
      break;
    case FaqCategory['Authenticate']:
      if (searchQuery.value.trim().length) {
        return Authenticatedfaqs.value.filter(t =>
          t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()),
        )
      }
      return Authenticatedfaqs.value
    case FaqCategory['Unauthenticate']:
      if (searchQuery.value.trim().length) {
        return Unathenticatefaqs.value.filter(t =>
          t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()),
        )
      }
      return Unathenticatefaqs.value
    default:
      return []
  }
  return []
})
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
    <div class="text-base text-gray-500 font-zt_regular tracking-wide text-justify py-4">
      Frequently asked questions about ZeroThreat features, target, scans, and scan report.
    </div>
    <!-- Tabs -->
    <div
      class="mb-5 flex items-center space-x-5 text-xs text-gray-600 font-zt_medium *:px-4 *:py-1.5 *:border *:rounded-full hover:*:bg-zt_purple hover:*:text-white *:transition-all *:duration-300 *:cursor-pointer"
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
                      item.isOpen = !item.isOpen
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
                    {{ item.a }}
                  </div>
                  <div v-if="item.link">
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
