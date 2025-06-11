<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import copyIcon from './icon/copy.icon.vue'

const copied = false

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
const tabs = computed(
  () => slots.default?.()?.flatMap(transformSlot).filter(Boolean)[0] || {},
)

function copytoclipboard() {
  const code = tabs?.value.component.props.code
  navigator.clipboard.writeText(code)
}
</script>

<template>
  <div class="relative border rounded-md bg-gray-50 mb-5">
    <div class="flex items-center w-full justify-end px-3 relative">
      <span @click="copytoclipboard"><copy-icon
        class="absolute right-4 top-4 w-4 fill-gray-500 hover:fill-gray-700 cursor-pointer pb-2"
      /></span>
    </div>
    <div id="code-block" class="px-5 rounded-b-md text-xl">
      <component
        :is="tabs?.component"
        :key="tabs.label"
        class="p-0 m-0 h-fit text-wrap py-5"
      />
    </div>
  </div>
</template>