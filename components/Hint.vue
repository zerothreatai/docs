<template>
  <div
    id="alert-div"
    class="flex gap-x-1 items-start rounded-2xl shadow-sm text-[15px] tracking-wide px-5 py-5 mt-7 mb-5"
    :class="bgStyle"
  >
    <font-awesome-icon
      :icon="icon"
      class="text-sm pe-2 translate-y-[3px]"
      :class="iconClass"
    />
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineProps } from 'vue'

defineProps({
  bgStyle: {
    default: 'bg-slate-50/50 rounded-2xl border-gray-300 text-gray-500',
    type: String,
  },
  icon: {
    default: 'circle-info',
    type: String,
  },
  iconClass: {
    default: '',
    type: String,
  },
})
</script>

<style>
  #alert-div h6 {
    font-weight: 500;
    line-height: 1.4rem;
  }
  #alert-div h5 {
    padding-bottom: 10px;
    letter-spacing: 0.05rem;
    font-weight: 600;
  }
</style>
