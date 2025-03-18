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

const targetfaqs = ref(targetFaq.map(d => ({ ...d, isOpen: false })))
const Scanfaqs = ref(ScanFaq.map(d => ({ ...d, isOpen: false })))
const Organizationfaqs = ref(OrganizationFaq.map(d => ({ ...d, isOpen: false })))
const ScanReportfaqs = ref(ScanReportFaq.map(d => ({ ...d, isOpen: false })))
const Authenticatedfaqs = ref(authenticatedFaq.map(d => ({ ...d, isOpen: false })))
const Unathenticatefaqs = ref(unauthenticateFaq.map(d => ({ ...d, isOpen: false })))

const selectButton = (tab) => {
  activeTab.value = tab
}

const toggleAccordion = (item) => {
  item.isOpen = !item.isOpen
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
          >
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
              <div class="py-4 text-gray-600 tracking-wider text-sm font-zt_regular leading-6">
                {{ item.a }}
              </div>
              <div v-if="item.link">
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
