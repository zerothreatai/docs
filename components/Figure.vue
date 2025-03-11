<script setup>
    import { ref } from 'vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    defineProps({
        source: {
            required: true,
            type: String,
        },
        width: {
            default: 1,
            type: Number,
        },
    })

    const selectedImage = ref(null)
    const isModalOpen = ref(false)

    const openModal = (image) => {
        document.body.classList.add('overflow-hidden')
        selectedImage.value = image
        isModalOpen.value = true
    }

    const closeModal = () => {
        document.body.classList.remove('overflow-hidden')
        isModalOpen.value = false
    }
</script>

<template>
    <div>
        <div class="flex justify-center">
            <img
                :key="index"
                :src="source"
                class="object-cover rounded-lg shadow-md cursor-zoom-in"
                :width="width"
                alt="Thumbnail"
                @click="openModal(source)"
            />
        </div>

        <!-- Modal -->
        <div
            v-if="isModalOpen"
            class="z-50 fixed inset-0 flex items-center justify-center overflow-hidden transition-300 bg-gray-500 bg-opacity-75"
            @click="closeModal"
        >
            <div class="p-5 rounded-lg relative">
                <img
                    :src="source"
                    class="max-w-[90vw] max-h-[80vh] cursor-zoom-out"
                    alt="Modal Image "
                />
            </div>
            <button class="fixed top-2 right-2 text-white p-2 text-2xl" @click="closeModal">
                <font-awesome-icon icon="close" />
            </button>
        </div>
    </div>
</template>
