// Edit this array to change the entire site navigation.
// `children` creates a dropdown. `external: true` opens in a new tab.

const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'About Airforce School', to: '/about' },
      { label: "Chairperson's Message", to: '/about#message' },
      { label: 'Our Initiatives', to: '/about#initiatives' },
      { label: 'News & Achievements', to: '/blog' },
      { label: 'Awards', to: '/about#awards' },
      { label: 'Social Outreach', to: '/about#outreach' },
    ],
  },
  {
    label: 'Why Airforce School',
    to: '/why-us',
    children: [
      { label: 'The Right Curriculum', to: '/why-us#curriculum' },
      { label: 'The Right Faculty', to: '/why-us#faculty' },
      { label: 'The Right Environment', to: '/why-us#environment' },
      { label: 'The Right Approach', to: '/why-us#approach' },
      { label: 'The Right Skills', to: '/why-us#skills' },
    ],
  },
  {
    label: 'Admissions',
    to: '/admissions',
    children: [
      { label: 'Admissions AY 2026–27', to: '/admissions' },
      { label: 'Transfer Within Network', to: '/admissions#transfer' },
      { label: 'Fee Structure', to: '/admissions#fees' },
      { label: 'Scholarship Programme', to: '/admissions#scholarship' },
    ],
  },
  { label: 'Locations', to: '/locations' },
  { label: 'Careers', to: 'https://careers.example.com', external: true },
  { label: 'Blog', to: '/blog' },
  { label: 'Alumni', to: '/alumni' },
  { label: 'Contact Us', to: '/contact' },
]

export default navigation
