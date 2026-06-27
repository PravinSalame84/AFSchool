import siteAssets from './siteAssets'

const schoolContent = {
  meta: {
    title: 'Air Force School, VayuSena Nagar, Nagpur',
    description:
      'Air Force School, VayuSena Nagar, Nagpur is a CBSE-affiliated campus focused on disciplined, inclusive, future-ready learning from LKG to Class IX.',
  },

  hero: {
    eyebrow: 'Air Force School, Nagpur',
    title: 'Modern learning with discipline, creativity and an Air Force spirit.',
    subtitle:
      'Established in 1968, Air Force School VayuSena Nagar blends strong academics, caring mentorship and vibrant student life for the wards of Air Force personnel and the wider community.',
    motto: 'Teaching is Learning',
    badges: ['Established 1968', 'CBSE Affiliation 1130860', 'Classes LKG to IX'],
    slides: [
      {
        id: 'unity-run',
        label: 'Student Life',
        title: 'Energy, teamwork and school pride in every experience.',
        description:
          'A disciplined environment paired with activities, celebrations and inter-school exposure that help students grow beyond the classroom.',
        image: siteAssets.images.unityRun,
      },
      {
        id: 'award',
        label: 'Achievement',
        title: 'Recognising effort, excellence and collective achievement.',
        description:
          'The school celebrates meaningful student milestones and creates opportunities for every learner to participate, compete and progress.',
        image: siteAssets.images.bestAward,
      },
      {
        id: 'campus',
        label: 'Campus',
        title: 'A safe and modern school environment built for learning.',
        description:
          'Smartboards, activity spaces, counselling support and child-friendly infrastructure shape a campus that feels focused, warm and future-ready.',
        image: siteAssets.images.campusLearning,
      },
    ],
  },

  announcementBar: {
    message: 'Admissions, downloads, academic session notices and school information are now organised directly inside this website.',
    actions: [
      { label: 'Mandatory Disclosure', to: '/mandatory-disclosure' },
      { label: 'Parent Corner', to: '/parent-corner' },
      { label: 'Fee Support', to: '/fee-support' },
    ],
  },

  facts: [
    { label: 'Founded', value: '1968' },
    { label: 'Student Strength', value: '530+' },
    { label: 'Learning Range', value: 'LKG - IX' },
    { label: 'Affiliation', value: 'CBSE 1130860' },
  ],

  statistics: [
    { label: 'Years of Legacy', value: '58+' },
    { label: 'Students', value: '530+' },
    { label: 'Learning Stages', value: 'LKG - IX' },
    { label: 'Core Focus', value: 'Holistic Growth' },
  ],

  quickStats: [
    {
      title: 'Academics',
      value: 'Smart Classrooms',
      description: 'Digital boards, child-friendly furniture and structured learning support.',
      image: siteAssets.images.smartClassroom,
      accent: 'from-[#ff7b3d] to-[#ffb16a]',
    },
    {
      title: 'Campus Life',
      value: 'Holistic Activities',
      description: 'Co-curricular events, educational trips and inter-school participation.',
      image: siteAssets.images.unityRun,
      accent: 'from-[#2146d0] to-[#5b44ff]',
    },
    {
      title: 'Wellbeing',
      value: 'Safe & Supportive',
      description: 'Counselling, clean washrooms, safe drinking water and supervised play.',
      image: siteAssets.images.campusLearning,
      accent: 'from-[#118ba3] to-[#35d5d0]',
    },
  ],

  about: {
    narrative:
      'Air Force School is registered with the Indian Air Force Educational and Cultural Society, New Delhi. The school was established to provide quality education with a broad, well-balanced and relevant curriculum. Students benefit from Smartboards, child-safe classrooms, fire-safety equipment and a campus designed to support both strong academics and joyful exploration.',
    extended:
      'The campus includes an outdoor stage, play area, synthetic court, laboratory, library, dedicated music and art-craft rooms, sports facilities and counselling support. Regular co-curricular activities, educational trips and inter-school competitions are organised for holistic development, while staff orientation programmes and workshops strengthen teaching excellence.',
    vision:
      'To inculcate love, respect, tolerance and cooperation, while empowering students to acquire, comprehend, apply and value knowledge and skills that help them become confident, self-sustaining individuals who can serve the global community.',
    mission:
      'To provide inclusive education that recognises the potential and talent of every child, supports social, emotional, physical and intellectual growth, and nurtures values needed to become a worthy citizen.',
  },

  leadership: {
    intro:
      'School governance and administrative transparency are important parts of the institution. Families can access governance, staff and formal school records through the internal resources listed below.',
    resources: [
      {
        title: 'School Management Committee',
        description: 'Leadership and governance information presented locally for parent access.',
        to: '/leadership',
      },
      {
        title: 'School Information',
        description: 'Published school profile and institutional information.',
        to: '/school-information',
      },
      {
        title: 'School Staff Details',
        description: 'Administrative and staff-facing overview for parents and stakeholders.',
        to: '/staff-details',
      },
      {
        title: 'Annual Report',
        description: 'Report-style highlights about school growth and participation.',
        to: '/annual-report',
      },
      {
        title: 'Transfer Certificate',
        description: 'Parent guidance for transfer certificate requests and readiness.',
        to: '/transfer-certificate',
      },
    ],
  },

  pillars: [
    {
      title: 'Disciplined Academic Foundation',
      description: 'A broad, well-balanced curriculum delivered with consistency, care and clarity.',
    },
    {
      title: 'Holistic Development',
      description: 'Students are encouraged through arts, clubs, trips, competitions and collaborative experiences.',
    },
    {
      title: 'Safe Learning Environment',
      description: 'Clean, child-friendly, supervised spaces support comfort, confidence and wellbeing.',
    },
    {
      title: 'Modern Infrastructure',
      description: 'Smartboards, laboratories, library spaces and activity rooms enhance daily learning.',
    },
    {
      title: 'Teacher Growth Culture',
      description: 'Workshops and orientation programmes keep staff learning, reflecting and improving.',
    },
  ],

  academics: {
    overview:
      'The school aims to provide a broad, well-balanced and relevant curriculum that supports concept clarity, confidence, values and readiness for the wider world.',
    programmes: [
      {
        title: 'Curricular Learning',
        description:
          'Classroom instruction is built to strengthen core concepts, structured habits and age-appropriate academic rigour.',
        to: '/academics/curricular-activities',
      },
      {
        title: 'Co-Curricular Development',
        description:
          'Students participate in assemblies, events, cultural activities and collaborative opportunities that broaden expression and confidence.',
        to: '/academics/co-curricular-activities',
      },
      {
        title: 'Sports & Physical Activity',
        description:
          'Sports participation and physical activity develop resilience, discipline, coordination and team spirit.',
        to: '/academics/sports-activities',
      },
      {
        title: 'Other School Activities',
        description:
          'Additional school activities reinforce holistic development and active student participation throughout the academic year.',
        to: '/academics/other-school-activities',
      },
    ],
  },

  facilities: [
    'Smart classrooms with digital learning support',
    'Laboratory and library for hands-on exploration',
    'Outdoor stage, play area and synthetic court',
    'Dedicated music, art-craft, sports and counselling rooms',
    'Safe drinking water and hygienic washrooms',
    'Child-safe, user-friendly furniture and fire-safety provisions',
  ],

  activities: [
    {
      title: 'Curricular Activities',
      description: 'Structured classroom learning that builds concepts, confidence and academic habits.',
      to: '/academics/curricular-activities',
    },
    {
      title: 'Co-Curricular Activities',
      description: 'Assemblies, celebrations, clubs and creativity-led opportunities that broaden perspective.',
      to: '/academics/co-curricular-activities',
    },
    {
      title: 'Sports Activities',
      description: 'Physical training, games and team spirit that support endurance, coordination and resilience.',
      to: '/academics/sports-activities',
    },
    {
      title: 'Educational Trips & Competitions',
      description: 'Inter-school exposure and learning beyond the classroom strengthen communication and confidence.',
      to: '/academics/other-school-activities',
    },
  ],

  notices: [
    {
      title: 'Class VI To XII Summer Holiday Homework 2024-25',
      category: 'Notice',
      date: 'May 2024',
      to: '/updates/class-6-to-12-summer-holiday-homework-2024-25',
      excerpt: 'Published holiday homework guidance for students in middle and senior classes.',
    },
    {
      title: 'Book List 2024-25',
      category: 'Download',
      date: 'March 2024',
      to: '/updates/book-list-2024-25',
      excerpt: 'Reference the official book list for the academic session 2024-25.',
    },
    {
      title: 'School Calendar 2024-2025',
      category: 'Calendar',
      date: 'March 2024',
      to: '/updates/school-calendar-2024-2025',
      excerpt: 'Academic session calendar and key dates for the school year.',
    },
    {
      title: 'Primary Summer Holiday Homework 2024-25',
      category: 'Notice',
      date: 'May 2024',
      to: '/updates/primary-summer-holiday-homework-2024-25',
      excerpt: 'Primary section holiday homework information and class preparation support.',
    },
    {
      title: 'Pre-Primary Activities 2023-24',
      category: 'Event',
      date: '2023-24',
      to: '/updates/pre-primary-activities-2023-24',
      excerpt: 'Highlights from pre-primary student participation and school activity.',
    },
    {
      title: 'Mandatory Public Disclosure',
      category: 'Compliance',
      date: 'Current',
      to: '/mandatory-disclosure',
      excerpt: 'Local access to mandatory public disclosure style information and important documents.',
    },
  ],

  events: [
    {
      title: 'Pre-Primary Activities 2023-24',
      date: 'Academic Session 2023-24',
      to: '/updates/pre-primary-activities-2023-24',
    },
    {
      title: 'Mandatory Public Disclosure',
      date: 'Official Publication',
      to: '/mandatory-disclosure',
    },
  ],

  downloads: [
    {
      label: 'CCA Calendar 2023-24',
      href: siteAssets.downloads.ccaCalendar,
      category: 'Calendar',
    },
    {
      label: 'Primary Summer Holiday Homework 2024-25',
      href: siteAssets.downloads.primaryHomework,
      category: 'Homework',
    },
    {
      label: 'School Calendar 2024-2025',
      href: siteAssets.downloads.schoolCalendar,
      category: 'Calendar',
    },
    {
      label: 'Book List 2024-2025',
      href: siteAssets.downloads.bookList,
      category: 'Book List',
    },
    {
      label: 'Class VI To XII Summer Holiday Homework 2024-25',
      href: siteAssets.downloads.class6To12Homework,
      category: 'Homework',
    },
  ],

  gallery: [
    {
      title: 'Campus Moments',
      caption: 'Student experiences and day-to-day learning energy across the campus.',
      image: siteAssets.images.campusLearning,
    },
    {
      title: 'Unity & Participation',
      caption: 'Community-driven events that shape teamwork, discipline and shared pride.',
      image: siteAssets.images.unityRun,
    },
    {
      title: 'Recognition & Achievement',
      caption: 'Celebrating milestones, effort and student accomplishment.',
      image: siteAssets.images.bestAward,
    },
    {
      title: 'Leadership & Guidance',
      caption: 'A culture of mentorship, responsibility and values-based growth.',
      image: siteAssets.images.chief,
    },
    {
      title: 'Unity Day Participation',
      caption: 'National spirit and participation reflected in school events and observances.',
      image: siteAssets.images.unityDay,
    },
    {
      title: 'Campus Activities',
      caption: 'Snapshots from activity-driven learning across academic and co-curricular spaces.',
      image: siteAssets.images.campusActivities,
    },
  ],

  admissions: {
    intro:
      'Families can connect with the school office for guidance on availability, process and documentation. The school currently serves learners from LKG to Class IX.',
    steps: [
      'Submit an admission enquiry or contact the school office.',
      'Discuss class availability and eligibility with the admissions team.',
      'Share student and parent details with required documents.',
      'Complete the school process and fee formalities as advised by the office.',
    ],
    documents: ['Birth certificate', 'Previous school records', 'Passport photographs', 'Parent identity details'],
  },

  resources: [
    {
      label: 'Mandatory Public Disclosure',
      to: '/mandatory-disclosure',
      description: 'Compliance-ready downloads and official document access.',
    },
    {
      label: 'Parent Corner',
      to: '/parent-corner',
      description: 'Parent-facing information and school access points.',
    },
    {
      label: 'Fee Support',
      to: '/fee-support',
      description: 'School office and accounts guidance for fee-related help.',
    },
    {
      label: 'School Information',
      to: '/school-information',
      description: 'Published school profile and institutional overview.',
    },
    {
      label: 'New Academic Session 2024-2025',
      to: '/new-academic-session-2024-2025',
      description: 'Session-specific guidance and essential files.',
    },
  ],

  quickLinks: [
    { label: 'About School', to: '/about', description: 'History, vision, mission and institutional overview.' },
    { label: 'Leadership & Governance', to: '/leadership', description: 'Committee, staff and governance resources.' },
    { label: 'Academics', to: '/academics', description: 'Curricular, co-curricular and sports learning paths.' },
    { label: 'Notice Board', to: '/notice-board', description: 'Latest notices, updates and school publications.' },
    { label: 'Downloads', to: '/downloads', description: 'Homework, calendars and official downloadable resources.' },
    { label: 'Gallery', to: '/gallery', description: 'Campus photos and school highlights.' },
  ],

  marquee: [
    'Air Force School VayuSena Nagar, Nagpur',
    'Indian Air Force Educational and Cultural Society, New Delhi',
    'CBSE Affiliation 1130860',
    'Classes from LKG to IX',
    'Holistic development through academics, sports and co-curricular activities',
    'Teaching is Learning',
  ],

  contact: {
    address: 'Air Force School House, Air Force School VayuSena Nagar, Nagpur - 440007, Maharashtra, India',
    phone: '0712-2511407',
    email: 'airforceschoolvsn@gmail.com',
    affiliation: 'CBSE Affiliation No. 1130860',
    adminPhone: '9146071487',
    adminRoles: ['Office Superintendent', 'Accounts Assistant', 'Clerk'],
    mapLink: 'https://maps.app.goo.gl/LT2Ls78TT3M81j9N7',
    mapEmbed: 'https://www.google.com/maps?q=Air%20Force%20School%20VayuSena%20Nagar%20Nagpur&z=15&output=embed',
  },

  directory: [
    { group: 'Pages', label: 'Home', to: '/', description: 'School homepage overview.' },
    { group: 'Pages', label: 'About School', to: '/about', description: 'History, vision and mission.' },
    { group: 'Pages', label: 'Leadership & Governance', to: '/leadership', description: 'Management committee and staff resources.' },
    { group: 'Pages', label: 'Academics', to: '/academics', description: 'Curricular and co-curricular programmes.' },
    { group: 'Pages', label: 'Admissions', to: '/admissions', description: 'Admission process and required documents.' },
    { group: 'Pages', label: 'Notice Board', to: '/notice-board', description: 'Latest notices and updates.' },
    { group: 'Pages', label: 'Downloads', to: '/downloads', description: 'Homework, calendars and published files.' },
    { group: 'Pages', label: 'Gallery', to: '/gallery', description: 'Campus photo highlights.' },
    { group: 'Pages', label: 'Contact', to: '/contact', description: 'Campus address, map and enquiry support.' },
    { group: 'Resources', label: 'Mandatory Public Disclosure', to: '/mandatory-disclosure', description: 'Compliance and disclosure-style school information.' },
    { group: 'Resources', label: 'Parent Corner', to: '/parent-corner', description: 'Parent-facing information and resources.' },
    { group: 'Resources', label: 'Fee Support', to: '/fee-support', description: 'School fee support information.' },
    { group: 'Resources', label: 'School Staff Details', to: '/staff-details', description: 'Administrative and staff overview.' },
    { group: 'Downloads', label: 'School Calendar 2024-2025', to: siteAssets.downloads.schoolCalendar, external: true, description: 'Published school calendar PDF.' },
    { group: 'Downloads', label: 'Book List 2024-2025', to: siteAssets.downloads.bookList, external: true, description: 'Published book list PDF.' },
  ],
}

export default schoolContent
