<script setup >
import likeIcon from "./icon/like.icon.vue";
import targetFaq from '../assests/1.faq.json'
import ScanFaq from '../assests/2.faq.json'
import OrganizationFaq from '../assests/3.faq.json'
import ScanReportFaq from '../assests/4.faq.json'
import tabs from "~/const/categoryTab";
import { FaqCategory } from "~/utils/category.enum";
// export default defineNuxtComponent({
  // const props = defineProps({
  //   Question: {
  //     type: String,
  //     default: 'Default title'
  //   },
  //   Answer: {
  //     type: String,
  //     default: 'Default description'
  //   },})
  // data() {
  //   return {
  //     isOpen: false,
  //     isAccordionOpen: [] as boolean[],
  //     faqList: [
  //       "What programming languages does Cursor support?",
  //       "How do you keep the AI models up-to-date with latest documentation?",
  //       "Are there size limitations for project indexing?",
  //       "What programming languages does Cursor support?",
  //       "What is the purpose of the MCP server?",
  //       "How do you keep the AI models up-to-date with latest documentation?",
  //       "What programming languages does Cursor support?",
  //       "Are there size limitations for project indexing?",
  //     ],
  //   };
  // },
//   mounted() {
//     this.isAccordionOpen = Array(this.faqList.length).fill(false); // Initialize the array based on the faqList length
//   },
//   methods: {
//     toggleAccordion(index: number) {
//       this.isAccordionOpen[index] = !this.isAccordionOpen[index];
//     },
//     toggledeleteAccordion() {
//       this.isOpen = !this.isOpen;
//     },
//   },
// });
const searchQuery = ref('')

     const activeTab =ref(tabs[0])


     const targetfaqs = ref(targetFaq.map(d => ({ ...d, isOpen: false })));
     const Scanfaqs = ref(ScanFaq.map(d => ({ ...d, isOpen: false }))); 
     const Organizationfaqs = ref(OrganizationFaq.map(d => ({ ...d, isOpen: false }))); 
     const ScanReportfaqs = ref(ScanReportFaq.map(d => ({ ...d, isOpen: false }))); 

const selectButton = (tab) => {
  activeTab.value = tab;
};

const toggleAccordion = (item) => {
  item.isOpen = !item.isOpen; // Vue will now track changes properly
};

const filteredfaqs = computed(() => {
  switch(activeTab.value.category){
    case FaqCategory.Target : if (searchQuery.value.trim().length) {
      return targetfaqs.value.filter(t => t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()));
    }
    return targetfaqs.value
    break;
    case FaqCategory.Scan : if (searchQuery.value.trim().length) {
      return Scanfaqs.value.filter(t => t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()));
    }
    return Scanfaqs.value
    break;
    case FaqCategory.Organization : if (searchQuery.value.trim().length) {
      return Organizationfaqs.value.filter(t => t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()));
    }
    return Organizationfaqs.value
    break;
    case FaqCategory["Scan-Report"]:if (searchQuery.value.trim().length) {
      return ScanReportfaqs.value.filter(t => t.q.toLowerCase().includes(searchQuery.value.toLowerCase().trim()));
    }
    return ScanReportfaqs.value
  }
  return [];
});
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
        Cursor is a powerful IDE with features like code completion, real-time
        collaboration, and version control integration. It supports a wide range
        of programming languages, including Python, JavaScript, and C++. The
        platform leverages AI models for intelligent code suggestions and offers
        cloud-based project management and third-party integrations for enhanced
        productivity.
      </div>
      <div class="pb-10 space-y-5">
        <div
          class="flex items-center gap-x-3 w-full border py-3.5 px-5 rounded-md shadow-zt_shadow_two"
        >
          <span
            ><font-awesome-icon
              icon="magnifying-glass"
              class="text-sm text-gray-400"
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
            <div v-for="tab,index in tabs" :key="index" class="flex items-center gap-x-2 w-fit group transition-all duration-300" :class="{'bg-zt_purple text-white': tab.category === activeTab.category}" @click="selectButton(tab)" >
              <span><font-awesome-icon :icon="tab.icon" class= "group-hover:text-white" :class="tab.iconCLass" /></span>
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
        class="border *:border-b last:*:border-b-0 rounded-t-lg rounded-b-lg last:*:rounded-b-lg first:*:rounded-t-lg"
      >
        <template v-if="filteredfaqs.length">
        <div v-for="(item, index) in filteredfaqs" :key="index">
          <div>
            <div
              class="text-sm tracking-wide text-gray-900 flex items-center gap-x-3 px-8 py-4 cursor-pointer hover:bg-gray-100"
              :class="{
                'bg-gray-100 font-zt_medium': item.isOpen,
                'rounded-t-lg': index === 0,
                'rounded-b-lg':
                  !item.isOpen && filteredfaqs.length - 1 === index,
              }"
              @click="toggleAccordion(item)"
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
                'max-h-52 overflow-y-auto': item.isOpen,
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
        </div>
      </template>
      <template v-else>
        No FAQ Found
      </template>
      </div>
      <!-- <div class="py-5">
        <div class="border rounded-lg">
          <div
            class="text-sm tracking-wide font-zt_medium text-gray-900 flex items-center gap-x-3 px-8 py-4 cursor-pointer hover:rounded-t-lg hover:rounded-b-lg hover:bg-gray-100"
            :class="{
              'bg-gray-100 rounded-b-none hover:rounded-b-none': isOpen,
            }"
            @click="toggledeleteAccordion"
          >
            <span>
              <font-awesome-icon
                icon="chevron-right"
                class="text-[10px] transition-all duration-300 group-hover:text-zt_purple -translate-y-0.5"
                :class="{ 'rotate-90': isOpen }"
              />
            </span>
            <span> How can I delete my data ? </span>
          </div>
          <div
            :class="{
              'max-h-52 overflow-y-auto bg-slate-50/20': isOpen,
              'max-h-0': !isOpen,
            }"
            class="transition-all duration-500 overflow-hidden px-8"
          >
            <div
              class="pt-8 pb-5 text-gray-600 tracking-wide text-sm font-zt_regular text-justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur, totam numquam laudantium eum dolorem reprehenderit
              harum nobis consectetur ipsum alias accusantium rem quod error.
              Necessitatibus molestiae atque cupiditate quos neque blanditiis
              quibusdam numquam itaque eligendi? Ut sed voluptatum nemo, qui sit
              possimus deleniti culpa error. Eos, labore illo. Unde repudiandae
              quod aut!
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="py-5 mb-20">
        <div class="font-zt_bold">Additional resources :</div>
        <div class="py-5 space-y-2 ps-7">
          <div
            class="text-gray-700 relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-700 before:-left-5 before:top-1/2 before:-translate-y-1/2"
          >
            <span class="font-zt_semibold text-black underline"
              >Common Issues</span
            >
            - Solutions to frequently encountered problems
          </div> -->
          <!-- <div class="text-gray-700">
            <span class="font-zt_semibold text-black underline"
              >Keyboard Shortcuts</span
            >
            - Complete list of keybindings and shortcuts
          </div> -->
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
