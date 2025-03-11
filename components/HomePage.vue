<script setup>
    import Faqs from './Faqs.vue'

    const { data: navigation } = await useAsyncData(
        'navigationdocs',
        async () => {
            const result = await queryCollectionNavigation('content', ['description'])
            return result
        },
        {
            transform: (data) =>
                data
                    .find((d) => d.stem === 'docs')
                    .children.filter((d) => d.children)
                    .slice(0, 2),
        }
    )
</script>

<template>
    <div class="">
        <div class="grid grid-cols-4 gap-5 pt-5">
            <div
                v-for="(row, index) in navigation"
                :key="index"
                class="col-span-2 border relative border-gray-100 px-5 py-3 rounded shadow-md"
            >
                <div class="flex items-center group cursor-pointer">
                    <div class="flex items-center gap-x-2 border-b w-full pb-2">
                        <span
                            ><svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="css-7bk2wo w-5 -translate-y-[1px] stroke-gray-600"
                            >
                                <g
                                    stroke=""
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                >
                                    <path d="M22 10V16M2 10L12 5L22 10L12 15L2 10Z" />
                                    <path d="M6 12V17C9 20 15 20 18 17V12" />
                                </g>
                            </svg>
                        </span>
                        <div class="flex items-center">
                            <a :href="row.path" class=""
                                ><span
                                    class="relative text-lg font-zt_semibold text-gray-700 group-hover:text-zt_purple after:absolute after:invisible after:group-hover:visible after:border-b-zt_purple after:w-full after:left-0 after:bottom-0 after:border-b transition-all duration-300"
                                    >{{ row.title }}</span
                                ></a
                            >
                        </div>
                    </div>
                </div>
                <div>
                    <div class="text-gray-400 text-sm text-justify py-3 text-ellipsis text-wrap">
                        {{ row.description }}
                    </div>
                    <ul class="*:text-sm *:py-0.5">
                        <li
                            v-for="(child, index2) in row.children.slice(0, 2)"
                            :key="index2"
                            class="css-1t6p0gm"
                        >
                            <div class="flex items-center gap-x-2 py-0.5">
                                <span
                                    ><svg
                                        class="fill-zt_purple/80 text-sm"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                        width="1em"
                                        fill=""
                                    >
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                                        /></svg></span
                                ><a
                                    :href="child.path"
                                    class="text-zt_purple/80 font-normal hover:underline"
                                    >{{ child.title }}</a
                                >
                            </div>
                        </li>
                    </ul>
                </div>
                <span
                    class="absolute right-2 bottom-2 text-xs text-gray-400 underline hover:text-zt_purple cursor-pointer transition-all duration-300"
                    ><a :href="row.path" class="">Show More...</a></span
                >
            </div>
        </div>
    </div>
    <Faqs />
</template>
