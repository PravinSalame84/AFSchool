import schoolContent from './schoolContent'

export const siteNavigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Campus Life', to: '/why-us' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Careers', to: '/careers' },
  {
    label: 'Resources',
    to: schoolContent.resources[0]?.href || '/',
    children: schoolContent.resources.map((item) => ({
      label: item.label,
      to: item.href,
      external: true,
    })),
  },
  { label: 'Contact', to: '/contact' },
]

export const footerQuickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Campus Life', to: '/why-us' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const resourceLinks = schoolContent.resources
