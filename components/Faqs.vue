<script setup>
import targetFaq from '../assests/1.faq.json'
import ScanFaq from '../assests/2.faq.json'
import OrganizationFaq from '../assests/3.faq.json'
import ScanReportFaq from '../assests/4.faq.json'
import tabs from '~/const/categoryTab'
import { FaqCategory } from '~/utils/category.enum'

const searchQuery = ref('')

const activeTab = ref(tabs[0])

const targetfaqs = ref(targetFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))
const Scanfaqs = ref(ScanFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))
const Organizationfaqs = ref(OrganizationFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))
const ScanReportfaqs = ref(ScanReportFaq.slice(0, 3).map(d => ({ ...d, isOpen: false })))

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
  }
  return []
})
</script>

<template>
  <div class="py-16">
    <!-- Heading -->
    <div class="relative mb-4 border-dashed border-b pb-2">
      <div class="flex justify-between items-center">
        <div class="font-zt_medium text-2xl text-gray-900 2xl:text-2xl">
          Frequently asked questions
        </div>
        <!-- Tabs -->
        <div
          class="flex flex-wrap items-center gap-1 overflow-hidden rounded-md p-1 shadow-zt_shadow_two md:rounded-[100px]"
        >
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="[
              tab.category === activeTab.category
                ? 'bg-zt_purple text-white'
                : 'bg-white text-gray-500 hover:bg-gray-100',
              'flex items-center justify-center gap-0 rounded-md px-2 py-1 font-zt_medium text-xs transition-all duration-300 md:rounded-[100px]',
              'lg:gap-1 lg:text-xs xl:px-3',
            ]"
            @click="selectButton(tab)"
          >
            {{ tab.title }}
          </button>
        </div>
      </div>
    </div>
    <!-- search -->
    <!-- <div class="flex w-full items-center border-b border-slate-50/10">
      <span>
        <font-awesome-icon
          icon="magnifying-glass"
          class="text-xs text-gray-400 2xl:text-xs"
        />
      </span>
      <input
      v-model="searchQuery"
        id="faqs-search"
        type="search"
        class="block w-full px-3 py-2 text-xs outline-none placeholder:text-gray-300 2xl:py-3 2xl:text-sm"
        placeholder="Search"
        autocomplete="off"
      />
    </div> -->
    <!-- FAQs list -->
    <!-- old UI -->
    <!-- <div class="block hidden w-full rounded-lg shadow-zt_shadow_two">
      <div class="relative">
        <div
          class="bg-slate-100 px-4 py-1.5 text-gray-700 font-zt_medium text-xs text-zt_gray 2xl:py-3 2xl:text-sm"
        ></div>
        <ul
          class="*:border-dashed hover:*:fill-zt_purple *:fill-gray-600 *:cursor-pointer"
        >
          <li class="border-b">
            <div
              class="flex justify-between items-center py-4 group px-4"
              :class="{ 'shadow-md': isAccordionOpen }"
              @click="toggleAccordion"
            >
              <span
                class="group-hover:text-zt_purple font-zt_medium group-hover:underline text-sm text-gray-600"
                >What is a target?</span
              >
              <span>
                <font-awesome-icon
                  icon="chevron-right"
                  class="text-xs transition-all duration-300 group-hover:text-zt_purple"
                  :class="{ 'rotate-90': isAccordionOpen }"
                />
              </span>
            </div>
            <div
              :class="{
                'max-h-52 overflow-y-auto bg-slate-50/20': isAccordionOpen,
                'max-h-0': !isAccordionOpen,
              }"
              class="transition-all duration-500 overflow-hidden px-4"
            >
              <div
                class="py-5 space-y-2 text-sm text-gray-500 tracking-wide text-justify"
              >
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam asperiores sunt deleniti, aperiam excepturi
                  assumenda, iste dolorum soluta eius magni illum neque possimus
                  ipsa. Magnam quaerat tenetur necessitatibus nemo.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  doloribus.
                </div>
              </div>
              <div
                class="flex w-full justify-end gap-x-3 items-center pt-4 pb-2"
              >
                <span>
                  <like-icon
                    class="stroke-gray-500 w-4 hover:stroke-zt_purple"
                  />
                </span>
                <span>
                  <comment-icon
                    class="fill-gray-500 w-3.5 hover:fill-zt_purple"
                  />
                </span>
              </div>
            </div>
          </li>
          <li class="border-b">
            <div>
              <div
                class="flex justify-between items-center py-4 group px-4"
                :class="{ 'shadow-md': isAccordionOpen1 }"
                @click="toggleAccordion1"
              >
                <span
                  class="group-hover:text-zt_purple font-zt_medium group-hover:underline text-sm text-gray-600"
                  >Why do we require you to verify the ownership of a
                  domain?</span
                >
                <span>
                  <font-awesome-icon
                    icon="chevron-right"
                    class="text-xs transition-all duration-300 group-hover:text-zt_purple"
                    :class="{ 'rotate-90': isAccordionOpen1 }"
                  />
                </span>
              </div>
              <div
                :class="{
                  'max-h-52 overflow-y-auto bg-slate-50/20': isAccordionOpen1,
                  'max-h-0': !isAccordionOpen1,
                }"
                class="transition-all duration-500 overflow-hidden px-4"
              >
                <div
                  class="py-5 space-y-2 text-sm text-gray-500 tracking-wide no-underline text-justify"
                >
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam asperiores sunt deleniti, aperiam excepturi
                    assumenda, iste dolorum soluta eius magni illum neque
                    possimus ipsa. Magnam quaerat tenetur necessitatibus nemo.
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, doloribus.
                  </div>
                </div>
                <div
                  class="flex w-full justify-end gap-x-3 items-center pt-4 pb-2"
                >
                  <span>
                    <like-icon
                      class="stroke-gray-500 w-4 hover:stroke-zt_purple"
                    />
                  </span>
                  <span>
                    <comment-icon
                      class="fill-gray-500 w-3.5 hover:fill-zt_purple"
                    />
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div
                class="flex justify-between items-center py-4 group px-4"
                :class="{ 'shadow-md': isAccordionOpen2 }"
                @click="toggleAccordion2"
              >
                <span
                  class="group-hover:text-zt_purple font-zt_medium group-hover:underline text-sm text-gray-600"
                  >What is the meaning of a finding’s state?</span
                >
                <span>
                  <font-awesome-icon
                    icon="chevron-right"
                    class="text-xs transition-all duration-300 group-hover:text-zt_purple"
                    :class="{ 'rotate-90': isAccordionOpen2 }"
                  />
                </span>
              </div>
              <div
                :class="{
                  'max-h-52 overflow-y-auto bg-slate-50/20': isAccordionOpen2,
                  'max-h-0': !isAccordionOpen2,
                }"
                class="transition-all duration-500 overflow-hidden px-4"
              >
                <div
                  class="py-5 space-y-2 text-sm text-gray-500 tracking-wide no-underline text-justify"
                >
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam asperiores sunt deleniti, aperiam excepturi
                    assumenda, iste dolorum soluta eius magni illum neque
                    possimus ipsa. Magnam quaerat tenetur necessitatibus nemo.
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, doloribus.
                  </div>
                </div>
                <div
                  class="flex w-full justify-end gap-x-3 items-center pt-4 pb-2"
                >
                  <span>
                    <like-icon
                      class="stroke-gray-500 w-4 hover:stroke-zt_purple"
                    />
                  </span>
                  <span>
                    <comment-icon
                      class="fill-gray-500 w-3.5 hover:fill-zt_purple"
                    />
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <span
          class="absolute cursor-pointer right-0 underline -bottom-10 text-zt_purple text-sm"
          >Show More...</span
        >
      </div>
    </div> -->
    <!-- new UI -->
    <div class="relative">
      <div>
        <ul
          class="border *:border-b last:*:border-b-0 rounded-t-lg rounded-b-lg last:*:rounded-b-lg first:*:rounded-t-lg"
        >
          <template v-if="filteredfaqs.length">
            <li
              v-for="(item, index) in filteredfaqs"
              :key="index"
            >
              <div>
                <div
                  class="text-sm tracking-wide text-gray-900 flex items-center gap-x-3 px-8 py-4 cursor-pointer hover:bg-gray-100"
                  :class="{
                    'bg-gray-100 font-zt_medium': item.isOpen,
                    'rounded-t-lg': index === 0,
                    'rounded-b-lg': !item.isOpen[index],
                  }"
                  @click="
                    () => {
                      item.isOpen = !item.isOpen
                      // console.log(item.isOpen)
                    }
                  "
                >
                  <span>
                    <font-awesome-icon
                      icon="chevron-right"
                      class="text-[10px] transition-all duration-300 group-hover:text-zt_purple -translate-y-0.5"
                      :class="{ 'rotate-90': item.isOpen }"
                    />
                  </span>
                  <span>
                    {{ item.q }}
                  </span>
                </div>
                <div
                  :class="{
                    'max-h-52 overflow-y-auto bg-slate-50/20 ': item.isOpen,
                    'max-h-0': !item.isOpen,
                  }"
                  class="transition-all duration-500 overflow-hidden px-8"
                >
                  <div
                    class="pt-8 pb-5 text-gray-600 tracking-wide text-sm font-zt_regular text-justify"
                  >
                    {{ item.a }}
                  </div>
                </div>
              </div>
            </li>
          </template>
          <template v-else>
            <div class="text-base">
              No FAQ's Found
            </div>
          </template>
        </ul>
      </div>
      <NuxtLink :to="'/docs/getting-started/faqs'">
        <span class="absolute cursor-pointer right-0 underline -bottom-10 text-zt_purple text-sm">Show More...</span>
      </NuxtLink>
    </div>
  </div>
</template>
