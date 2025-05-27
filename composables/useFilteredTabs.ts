import { computed } from 'vue'
import { useRuntimeConfig } from '#imports'
import tabs from '~/const/categoryTab'

export function useFilteredTabs() {
  const { public: { appEnv } } = useRuntimeConfig()

  const irrelevantCategories = [
    FaqCategory['API Security'],
    FaqCategory.Integrations,
    FaqCategory.Plans,
    FaqCategory.Promos,
    FaqCategory.Pricing,
    FaqCategory.Product,
  ]

  const filteredTabs = computed(() => {
    if (appEnv === 'development') {
      return tabs
    }

    return tabs.filter(t => !irrelevantCategories.includes(t.category))
  })

  return { filteredTabs }
}
