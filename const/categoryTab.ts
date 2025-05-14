import { FaqCategory } from '~/utils/category.enum'

const tabs = [
  {
    title: 'Getting Started',
    category: FaqCategory['Getting-Started'],
    icon: 'crosshairs',
    iconCLass: 'text-zt_purple',
    file: '/assets/target.faq.json',
  },
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
    icon: 'crosshairs',
    iconCLass: 'text-zt_purple',
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
    icon: 'shield-virus',
    iconCLass: 'text-red-500',
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
    icon: 'expand',
    iconCLass: 'text-blue-500',
  },
  {
    title: 'Reports',
    category: FaqCategory.Reports,
    icon: 'file-lines',
    iconCLass: 'text-gray-500',
  },
  {
    title: 'Plans',
    category: FaqCategory.Plans,
    icon: 'file-lines',
    iconCLass: 'text-gray-500',
  },
  {
    title: 'Pricing',
    category: FaqCategory.Pricing,
    icon: 'file-lines',
    iconCLass: 'text-gray-500',
  },
  {
    title: 'Promos',
    category: FaqCategory.Promos,
    icon: 'file-lines',
    iconCLass: 'text-gray-500',
  },
  {
    title: 'Integrations',
    category: FaqCategory.Integrations,
    icon: 'file-lines',
    iconCLass: 'text-gray-500',
  },
  {
    title: 'Mannaging Account',
    category: FaqCategory['Managing Account'],
    icon: 'file-lines',
    iconCLass: 'text-gray-500',
  },
  {
    title: 'Trouble Shooting',
    category: FaqCategory['Trouble Shooting'],
    icon: 'file-lines',
    iconCLass: 'text-gray-500',
  },
]

export default tabs
