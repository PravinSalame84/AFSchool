const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'Highlights',
    to: '/#teachers',
    children: [
      { label: 'Meet Our Teachers', to: '/#teachers' },
      { label: 'Student Achievers', to: '/#achievers' },
      { label: 'School Activities', to: '/#activities' },
      { label: 'Campus Gallery', to: '/gallery' },
    ],
  },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Leadership & Governance', to: '/leadership' },
      { label: 'School Information', to: '/school-information' },
      { label: 'School Staff Details', to: '/staff-details' },
    ],
  },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      { label: 'Academic Overview', to: '/academics' },
      { label: 'Curricular Activities', to: '/academics/curricular-activities' },
      { label: 'Co-Curricular Activity', to: '/academics/co-curricular-activities' },
      { label: 'Sports Activity', to: '/academics/sports-activities' },
      { label: 'Other School Activity', to: '/academics/other-school-activities' },
    ],
  },
  { label: 'Admissions', to: '/admissions' },
  {
    label: 'Updates',
    to: '/notice-board',
    children: [
      { label: 'Notice Board', to: '/notice-board' },
      { label: 'Downloads', to: '/downloads' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'New Academic Session', to: '/new-academic-session-2026-2027' },
    ],
  },
  {
    label: 'Resources',
    to: '/mandatory-disclosure',
    children: [
      { label: 'Mandatory Public Disclosure', to: '/mandatory-disclosure' },
      { label: 'Parent Corner', to: '/parent-corner' },
      { label: 'Fee Support', to: '/fee-support' },
      { label: 'Careers', to: '/careers' },
      { label: 'Transfer Certificate', to: '/transfer-certificate' },
      { label: 'Annual Report', to: '/annual-report' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default navigation
