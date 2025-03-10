<script setup></script>

<template>
  <div class="w-full bg-slate-200">
    <div class="py-14 px-16 max-w-[110rem] mx-auto  relative">
      <h4 class="uppercase tracking-[0.2em] text-sm text-gray-800 pb-2">
        Documentation
      </h4>
      <h2 class="text-4xl text-gray-900 font-zt_medium">
        Technical documentation
      </h2>
      <h4 class="text-gray-800 pt-7 pb-14">
        <!-- old : pb-5 -> pb-14-->
        Search for in-depth articles on ZeroThreat developer tools and
        technologies.
      </h4>
      <!-- serchbar old ui -->
      <div class="flex items-center gap-x-2 hidden">
        <input
          type="text"
          placeholder="Search Documentation"
          class="border border-white rounded-md placeholder:text-gray-500 text-gray-700 outline-none px-3.5 py-2 w-full max-w-2xl"
        />
        <button
          class="text-base flex items-center gap-x-2 px-4 py-2 outline-none text-white rounded-md font-medium bg-[#9b26b6]"
        >
          <span
            ><font-awesome-icon
              icon="magnifying-glass"
              class="text-sm text-white"
          /></span>
          <span> Search </span>
        </button>
      </div>
      <div class="absolute right-16 top-1/2 -translate-y-1/2 h-fit w-72">
        <img src="../public/ai-robo.svg" alt="" />
      </div>
    </div>
  </div>
</template>
