

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useRoute } from "vue-router";

const props=defineProps(["item"]);
const route = useRoute();
const isOpen = ref(false);

const openChildren = () => {
  isOpen.value = true;
};

const toggleChild = (event: Event) => {
  event.stopPropagation(); // Prevents event from affecting parent elements
  isOpen.value = !isOpen.value;
};

const isChildActive=computed(()=>{
  if (props.item.children) {
    return props.item.children.some(
      (child) => route.path.startsWith(child.path) 
    );
}
  return false
})

watch(
  () => route.path,
  () => {
    isOpen.value = isChildActive.value ? isChildActive.value : isOpen.value;
  },
  { immediate: true } // Runs once on component mount
);

</script>

<template>
  <div>
    <div class="flex justify-between hover:bg-slate-100 w-full items-center px-3 rounded-md  transition-all duration-300">
      <span v-if="item.meta.icon" class="min-w-5">
        <font-awesome-icon :icon="item.meta.icon" class="text-gray-400"/>
      </span>
      <NuxtLink
        class="text-sm mt-1 ps-2 font-DMSans_Regular text-gray-500 flex items-center justify-between hover:text-zt_purple hover:border-zt_purple/70 transition-all duration-300 cursor-pointer  py-1 my-1 w-full"
        :class="{ 'text-zt_purple border-zt_purple/70': route.path === item.path }"
        @click="()=>openChildren()"
        :to="item.path"
      >
       
        <span class="w-full">{{ item.title }}</span>

        </NuxtLink>
        <span @click.stop="($event)=>toggleChild($event)" v-if="item.children" class="w-5 h-5 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-full"> <font-awesome-icon :icon="'chevron-right'" class="text-[11px] text-gray-500 transition-all duration-300" :class="{'rotate-90':isOpen}"/> </span>
    </div>

    <!-- Recursively render children if they exist -->
     <div :class="item.children && isOpen ? 'max-h-96 overflow-y-auto' : 'max-h-0'" class="transition-all duration-500 overflow-hidden">
       <div class="transition-all ms-5 duration-300 border-l-2 my-2">
         <template v-for="child in item.children" :key="child.title">
           <RecursiveNavigation v-if="child.path !== item.path" :item="child" class="hover:bg-slate-100 rounded-e-md"/>
         </template>
       </div>
     </div>
  </div>
</template>
