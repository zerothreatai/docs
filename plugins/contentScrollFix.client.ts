export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    document.addEventListener('click', (event) => {
      // Find the nearest anchor that starts with #
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return

      event.preventDefault()

      const targetId = anchor.getAttribute('href')?.substring(1)
      const targetElement = targetId ? document.getElementById(targetId) : null

      if (targetElement) {
        const headerOffset = 70 // Adjust this value as needed
        const elementPosition
            = targetElement.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })

        // Update the URL hash without reloading the page.
        history.pushState(null, '', `#${targetId}`)
      }
    })
  }
})
