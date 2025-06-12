<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import copyIcon from './icon/copy.icon.vue'

const copied = ref(false)

const slots = useSlots()

function transformSlot(slot: any, index: number) {
  if (typeof slot.type === 'symbol') {
    return slot.children?.map(transformSlot)
  }

  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    icon: slot.props?.icon,
    component: slot,
  }
}

// Computed
const tabs = computed(() => slots.default?.()?.flatMap(transformSlot).filter(Boolean)[0] || {})

function copytoclipboard() {
  const code = tabs?.value.component.props.code
  navigator.clipboard.writeText(code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="relative border rounded-md bg-gray-50 mb-5">
    <div class="flex items-center w-full justify-end px-3">
      <div class="relative group w-fit">
        <span @click="copytoclipboard"><copy-icon
          class="absolute right-0 top-4 w-4 fill-gray-500 hover:fill-gray-700 cursor-pointer pb-2"
        /></span>
        <span
          v-if="!copied"
          class="invisible absolute left-3.5 -translate-x-full -top-5  text-nowrap rounded-md border bg-white px-2 py-1 font-zt_regular text-xs text-zt_gray opacity-0 shadow-zt_shadow_two transition-all duration-300 group-hover:visible group-hover:opacity-100 2xl:-top-3"
        >Copy</span>
        <span
          v-else
          class="invisible absolute left-5 -top-5 -translate-x-full text-nowrap rounded-md border bg-white px-2 py-1 font-zt_regular text-xs text-zt_gray opacity-0 shadow-zt_shadow_two transition-all duration-300 group-hover:visible group-hover:opacity-100 2xl:-top-3"
        >Copied</span>
      </div>
    </div>
    <div
      id="code-block"
      class="px-5 rounded-b-md text-xl"
    >
      <component
        :is="tabs?.component"
        :key="tabs.label"
        class="p-0 m-0 h-fit text-wrap py-5"
      />
    </div>
  </div>
</template>
