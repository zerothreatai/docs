import { ref, onMounted, onUnmounted } from 'vue'

export function useToc() {
    const activeHeadings = ref([])

    onMounted(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id

                    if (entry.isIntersecting) {
                        // If the heading is in view, add it (if not already added)
                        if (!activeHeadings.value.includes(id)) {
                            activeHeadings.value.push(id)
                        }
                    } else {
                        // If the heading is out of view, remove it
                        activeHeadings.value = activeHeadings.value.filter(
                            (headingId) => headingId !== id
                        )
                    }
                })
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.2, // Trigger when 20% of heading is visible
            }
        )

        // Observe all headings in the content
        const headings = document.querySelectorAll('h2, h3, h4, h5, h6')
        headings.forEach((heading) => observer.observe(heading))

        // Cleanup observer on unmount
        onUnmounted(() => observer.disconnect())
    })

    return { activeHeadings }
}
