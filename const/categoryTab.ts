import { FaqCategory } from '~/utils/category.enum'

const tabs = [
  {
    title: 'Getting Started',
    category: FaqCategory['Getting-Started'],
    icon: 'circle-play',
    iconCLass: 'text-blue-400',
    file: 'assests/getting-started.faq.json',
  },
  {
    title: 'Targets',
    category: FaqCategory.Targets,
    icon: 'crosshairs',
    iconCLass: 'text-zt_purple',
    file: 'assests/target.faq.json',
  },
  {
    title: 'Target Verification',
    category: FaqCategory['Target Verification'],
    icon: 'check-double',
    iconCLass: 'text-green-500',
    file: 'assests/target-verification.faq.json',
  },
  {
    title: 'Organization',
    category: FaqCategory.Organizations,
    icon: 'building',
    iconCLass: 'text-yellow-500',
    file: 'assests/organization.faq.json',
  },
  {
    title: 'Authenticate',
    category: FaqCategory['Authenticate'],
    icon: 'shield-halved',
    iconCLass: 'text-green-500',
    file: 'assests/authenticate.faq.json',
  },
  {
    title: 'Unauthenticate',
    category: FaqCategory['Unauthenticate'],
    icon: 'shield-virus',
    iconCLass: 'text-red-500',
    file: 'assests/unauthenticate.faq.json',
  },
  {
    title: 'Product',
    category: FaqCategory.Product,
    icon: 'cube',
    iconCLass: 'text-stone-500',
    file: 'assests/product.faq.json',
  },
  {
    title: 'Scan',
    category: FaqCategory.Scan,
    icon: 'expand',
    iconCLass: 'text-blue-500',
    file: 'assests/scan.faq.json',
  },
  {
    title: 'API Security',
    category: FaqCategory['API Security'],
    icon: 'key',
    iconCLass: 'text-green-500',
    file: 'assests/api-security.faq.json',
  },
  {
    title: 'Reports',
    category: FaqCategory.Reports,
    icon: 'file-lines',
    iconCLass: 'text-zt_purple',
    file: 'assests/reports.faq.json',
  },
  {
    title: 'Plans',
    category: FaqCategory.Plans,
    icon: 'lightbulb',
    iconCLass: 'text-yellow-500',
    file: 'assests/plans.faq.json',
  },
  {
    title: 'Pricing',
    category: FaqCategory.Pricing,
    icon: 'dollar-sign',
    iconCLass: 'text-green-500',
    file: 'assests/pricing.faq.json',
  },
  {
    title: 'Promos',
    category: FaqCategory.Promos,
    icon: 'tags',
    iconCLass: 'text-zt_purple',
    file: 'assests/promos.faq.json',
  },
  {
    title: 'Integrations',
    category: FaqCategory.Integrations,
    icon: 'code',
    iconCLass: 'text-blue-500',
    file: 'assests/integrations.faq.json',
  },
  {
    title: 'Managing Account',
    category: FaqCategory['Managing Account'],
    icon: 'gear',
    iconCLass: 'text-gray-500',
    file: 'assests/managing-account.faq.json',
  },
  {
    title: 'Trouble Shooting',
    category: FaqCategory['Trouble Shooting'],
    icon: 'screwdriver-wrench',
    iconCLass: 'text-blue-500',
    file: 'assests/troubleshooting.faq.json',
  },
]

const irrevelantCategory = [FaqCategory['API Security'], FaqCategory.Integrations, FaqCategory.Plans, FaqCategory.Promos, FaqCategory.Pricing, FaqCategory.Product]
const fileredtabs = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ? tabs.filter(tabs => !irrevelantCategory.includes(tabs.category)) : tabs

export default fileredtabs
