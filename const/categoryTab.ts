import { FaqCategory } from '~/utils/category.enum'

const tabs = [
  {
    title: 'Target',
    category: FaqCategory.Target,
    icon: 'crosshairs',
    iconClass: 'text-fuchsia-500',
  },
  {
    title: 'Scan',
    category: FaqCategory.Scan,
    icon: 'expand',
    iconCLass: 'text-green-500',
  },
  {
    title: 'Organization',
    category: FaqCategory.Organization,
    icon: 'building',
    iconCLass: 'text-yellow-500',
  },
  {
    title: 'Scan Report',
    category: FaqCategory['Scan-Report'],
    icon: 'file-lines',
    iconCLass: 'text-blue-500',
  },
  {
    title: 'Authenticate',
    category: FaqCategory['Authenticate'],
    icon: 'shield-halved',
    iconCLass: 'text-green-500',
  },
  {
    title: 'Un-Authenticate',
    category: FaqCategory['Un-Authenticate'],
    icon: 'shield-virus',
    iconCLass: 'text-red-500',
  },
]

export default tabs
