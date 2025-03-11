<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div class="py-8">
    <div class="grid grid-cols-12 gap-x-14">
      <div class="col-span-8 border-b pb-2 border-dashed">
        <div class="border-b border-dashed">
          <h1 class="text-3xl font-semibold pb-5">
            Why do we require you to verify the ownership of a domain?
          </h1>
          <div class="flex justify-between py-2">
            <div class="flex items-center gap-x-2">
              <span>
                <font-awesome-icon
                  icon="pen-to-square"
                  class="text-blue-400"
                />
              </span>
              <span class="text-base text-gray-500">Answer</span>
              <!-- <font-awesome-icon icon="share-from-square" /> -->
            </div>
            <div class="flex items-center gap-x-3">
              <span>
                <svg
                  class="w-5 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill=""
                    d="M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5zM3.5 3A1.5 1.5 0 0 0 2 4.5v5A1.5 1.5 0 0 0 3.5 11H5v2.898L8.312 11H12.5A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  class="w-5 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill=""
                    d="m237.66 106.35l-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91c-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.2 196.2 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  class="w-5 stroke-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke=""
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 16.004V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1M12 4.5v11m3.5-3.5L12 15.5L8.5 12"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="py-5">
          <div class="flex items-center gap-x-3">
            <div class="w-10 h-10 rounded-full bg-slate-200">
              <img
                src="../public/favicon.ico"
                alt=""
              >
            </div>
            <div class="">
              <div class="flex gap-x-1 items-center">
                <span class="text-sm text-gray-900 font-medium">Vijay Vaghela ,</span>
                <span class="text-xs text-gray-500">from India</span>
              </div>
              <span class="text-xs text-gray-400">Answered Feb 21</span>
            </div>
          </div>
        </div>
        <div class="space-y-3 text-sm text-gray-600 text-justify">
          <p>
            A Target is the URL of a Web Application, Website, or API. All the
            following are examples of Targets: Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Non facilis sapiente culpa repellendus
            sunt dolores.
          </p>
          <p>
            If the Target is
            <span class="text-zt_purple underline">https://example.com,</span>
            the scanner will not scan, for instance,
            <span class="text-zt_purple underline">https://www.example.com</span>
            or any other hosts. In other words, the scanner will only scan URLs
            prefixed by example.com.
          </p>
          <p>
            You can also think of a Target as to how you want to organize your
            security testing. Imagine you have a big app at
            <span class="text-zt_purple underline">https://example.com.</span>
            This app includes different sections or modules that can even be
            built by different teams. You can split it into different Targets to
            facilitate your workflows, like
            <span class="text-zt_purple underline">https://example.com/sectionA</span>
            and
            <span class="text-zt_purple underline">https://example.com/sectionB</span>.
          </p>
          <p>
            A Target is the URL of a Web Application, Website, or API. All the
            following are examples of Targets: Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Non facilis sapiente culpa repellendus
            sunt dolores.
          </p>
          <p>
            If the Target is
            <span class="text-zt_purple underline">https://example.com,</span>
            the scanner will not scan, for instance,
            <span class="text-zt_purple underline">https://www.example.com</span>
            or any other hosts. In other words, the scanner will only scan URLs
            prefixed by example.com.
          </p>
          <p class="text-sm text-gray-700 font-medium">
            Watch this video for an overall view of Targets.
          </p>
          <div>
            <div class="w-2/3 border rounded-lg">
              <video
                src="https://s3.ap-south-1.amazonaws.com/images.zerothreat.ai/zt_homepage_gif_compressed_9b666221a3.mp4"
                controls
                class="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="mt-5 py-1.5 px-5 border rounded-full w-fit">
            <div class="flex gap-x-5">
              <span>
                <svg
                  class="w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 9v12H1V9zm4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21zm0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  class="w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 15V3h4v12zM15 3a2 2 0 0 1 2 2v10c0 .55-.22 1.05-.59 1.41L9.83 23l-1.06-1.06c-.27-.27-.44-.64-.44-1.06l.03-.31l.95-4.57H3a2 2 0 0 1-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3zm0 2H5.97L3 12v2h8.78l-1.13 5.32L15 14.97z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <span class="translate-y-3">
            <svg
              class="w-5 fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path
                fill=""
                d="m237.66 106.35l-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91c-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.2 196.2 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="col-span-4">
        <div>
          <h2 class="text-xl font-medium text-gray-500 border-b pb-1">
            Related Questions
          </h2>
          <div>
            <ul
              class="*:text-blue-500 *:py-4 *:border-b *:border-dashed hover:*:text-zt_purple hover:*:underline *:cursor-pointer"
            >
              <li>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-x-2">
                    <span>
                      <svg
                        class="article fill-gray-400 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        />
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span>What is a target?</span>
                  </div>
                  <!-- <span>
                    <font-awesome-icon icon="chevron-right" class="text-xs" />
                  </span> -->
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-x-2">
                    <span>
                      <svg
                        class="article fill-gray-400 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        />
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span>Why do we require you to verify the ownership of a
                      domain?</span>
                  </div>
                  <!-- <span>
                    <font-awesome-icon icon="chevron-right" class="text-xs" />
                  </span> -->
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-x-2">
                    <span>
                      <svg
                        class="article fill-gray-400 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        />
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span>What is the meaning of a finding’s state?</span>
                  </div>
                  <!-- <span>
                    <font-awesome-icon icon="chevron-right" class="text-xs" />
                  </span> -->
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-x-2">
                    <span>
                      <svg
                        class="article fill-gray-400 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        />
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span>What is the meaning of the .CSV coverage report?</span>
                  </div>
                  <!-- <span>
                    <font-awesome-icon icon="chevron-right" class="text-xs" />
                  </span> -->
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-x-2">
                    <span>
                      <svg
                        class="article fill-gray-400 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        />
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span>What is a target?</span>
                  </div>
                  <!-- <span>
                    <font-awesome-icon icon="chevron-right" class="text-xs" />
                  </span> -->
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-x-2">
                    <span>
                      <svg
                        class="article fill-gray-400 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        />
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span>Why do we require you to verify the ownership of a
                      domain?</span>
                  </div>
                  <!-- <span>
                    <font-awesome-icon icon="chevron-right" class="text-xs" />
                  </span> -->
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-x-2">
                    <span>
                      <svg
                        class="article fill-gray-400 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        />
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span>What is the meaning of a finding’s state?</span>
                  </div>
                  <!-- <span>
                    <font-awesome-icon icon="chevron-right" class="text-xs" />
                  </span> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
