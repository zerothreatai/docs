<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div class="py-8">
    <h1 class="font-zt_medium text-2xl text-gray-900 2xl:text-3xl border-b pb-2">
      Curious How Its Work ?
    </h1>
    <div class="grid grid-cols-12 py-5 gap-x-10 justify-center">
      <div
        v-for="index in [0, 1, 2]"
        :key="index"
        class="col-span-4 flex justify-center"
      >
        <div class="w-full max-w-md rounded-lg shadow-md border border-gray-100">
          <div class="w-full">
            <video
              src="https://s3.ap-south-1.amazonaws.com/images.zerothreat.ai/zt_homepage_gif_compressed_9b666221a3.mp4"
              controls
              class="rounded-t-lg"
            />
          </div>
          <div class="px-3 py-2">
            <h2 class="text-sm font-zt_medium text-gray-700 tracking-wide pt-2">
              What is the meaning of a finding’s state?
            </h2>
            <p class="text-sm text-gray-400 py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi, amet labore ex minus earum?
            </p>
            <div class="flex justify-between pt-2">
              <span class="text-gray-500 text-sm"><font-awesome-icon
                icon="stopwatch"
                class="translate-y-[1px] pe-0.5"
              /> 1hr</span>
              <span class="text-gray-500 text-sm"><font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                class="hover:text-zt_purple cursor-pointer"
              /> 154</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
