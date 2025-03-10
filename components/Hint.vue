<template>
  <div id="alert-div" class="flex gap-x-1 items-start shadow-sm text-sm px-4 py-3 my-4" :class="bgStyle">
    <font-awesome-icon :icon="icon" class="text-base pe-2 translate-y-0.5" :class="iconClass" />
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineProps } from 'vue';
defineProps({
  bgStyle:{
    default:'bg-gray-50/50 rounded-md border-gray-300 text-gray-500',
    type:String
  },
  icon:{
    default:'circle-info',
    type:String
  },
  iconClass:{
    default:'',
    type:String
  }
})

</script>

<style>
#alert-div h6 {
  font-weight: 500;
  color: rgb(48, 47, 47);
}
#alert-div h6 a {
  font-weight: 500;
  color: #9b26b6;
  text-decoration: underline;
  letter-spacing: 0.01rem;
}
#alert-div h5 {
  padding-bottom: 10px;
  letter-spacing: 0.03rem;
}
#alert-div blockquote {
  border: none !important;
  padding: 0px !important;
  background-color: transparent !important;
}
</style>


