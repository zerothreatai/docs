import { FaqCategory } from '~/utils/category.enum'

const tabs = [
  {
    title: 'Getting Started',
    category: FaqCategory['Getting-Started'],
    icon: 'circle-play',
    iconCLass: 'text-blue-400',
    file: '/assets/target.faq.json',
  },
  // <i class="fa-solid fa-bullseye"></i>
  {
    title: 'Targets',
    category: FaqCategory.Targets,
    icon: 'crosshairs',
    iconCLass: 'text-zt_purple',
    file: '/assets/target.faq.json',
  },
  {
    title: 'Target Verification',
    category: FaqCategory['Target Verification'],
    icon: 'check-double',
    iconCLass: 'text-green-500',
    file: '/assets/target.faq.json',
  },
  {
    title: 'Organization',
    category: FaqCategory.Organizations,
    icon: 'building',
    iconCLass: 'text-yellow-500',
  },
  {
    title: 'Authenticate',
    category: FaqCategory['Authenticate'],
    icon: 'shield-halved',
    iconCLass: 'text-green-500',
  },
  {
    title: 'Unauthenticate',
    category: FaqCategory['Unauthenticate'],
    icon: 'shield-virus',
    iconCLass: 'text-red-500',
  },
  {
    title: 'Product',
    category: FaqCategory.Product,
    icon: 'cube',
    iconCLass: 'text-stone-500',
  },
  {
    title: 'Scan',
    category: FaqCategory.Scan,
    icon: 'expand',
    iconCLass: 'text-blue-500',
  },
  {
    title: 'API Security',
    category: FaqCategory['API Security'],
    icon: 'key',
    iconCLass: 'text-green-500',
  },
  {
    title: 'Reports',
    category: FaqCategory.Reports,
    icon: 'file-lines',
    iconCLass: 'text-zt_purple',
  },
  {
    title: 'Plans',
    category: FaqCategory.Plans,
    icon: 'lightbulb',
    iconCLass: 'text-yellow-500',
  },
  {
    title: 'Pricing',
    category: FaqCategory.Pricing,
    icon: 'dollar-sign',
    iconCLass: 'text-green-500',
  },
  {
    title: 'Promos',
    category: FaqCategory.Promos,
    icon: 'tags',
    iconCLass: 'text-zt_purple',
  },
  {
    title: 'Integrations',
    category: FaqCategory.Integrations,
    icon: 'code',
    iconCLass: 'text-blue-500',
  },
  {
    title: 'Mannaging Account',
    category: FaqCategory['Managing Account'],
    icon: 'gear',
    iconCLass: 'text-gray-500',
  },
  {
    title: 'Trouble Shooting',
    category: FaqCategory['Trouble Shooting'],
    icon: 'screwdriver-wrench',
    iconCLass: 'text-blue-500',
  },
]

export default tabs
