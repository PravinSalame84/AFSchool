// Edit this array to change the entire site navigation.
// `children` creates a dropdown. `external: true` opens in a new tab.

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Campus Life', to: '/why-us' },
  { label: 'Admissions', to: '/admissions' },
  {
    label: 'Resources',
    to: 'https://www.airforce.skoolmate.in/important-documents/',
    children: [
      {
        label: 'Mandatory Public Disclosure',
        to: 'https://www.airforce.skoolmate.in/important-documents/',
        external: true,
      },
      {
        label: 'Parent Corner',
        to: 'https://www.airforce.skoolmate.in/parent-corner/',
        external: true,
      },
      {
        label: 'Pay Fee',
        to: 'https://www.airforce.skoolmate.in/payfee/',
        external: true,
      },
      {
        label: 'Photo Gallery',
        to: 'https://www.airforce.skoolmate.in/photo-gallery/',
        external: true,
      },
       {
        label: 'Careers',
        to: 'https://www.airforce.skoolmate.in/careers/',
        external: true,
      },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default navigation
