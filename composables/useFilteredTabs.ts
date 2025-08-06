import { computed } from 'vue'
import { useRuntimeConfig } from '#imports'
import tabs from '~/const/categoryTab'
import { FaqCategory } from '~/utils/category.enum'

export function useFilteredTabs() {
  const { public: { appEnv } } = useRuntimeConfig()

  const irrelevantCategories = [
    FaqCategory['API Security'],
    FaqCategory.Integrations,
    FaqCategory.Promos,
  ]

  const filteredTabs = computed(() => {
    if (appEnv === 'development') {
      return tabs
    }

    return tabs.filter(t => !irrelevantCategories.includes(t.category))
  })

  return { filteredTabs }
}
