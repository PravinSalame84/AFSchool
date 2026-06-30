import siteAssets from './siteAssets'

export const resourcePages = [
  {
    slug: 'school-information',
    path: '/school-information',
    category: 'School Information',
    title: 'Institutional profile, affiliation and school overview.',
    description:
      'A concise institutional overview for parents and stakeholders covering affiliation, classes, student strength and campus facilities.',
    image: siteAssets.images.campusLearning,
    sections: [
      {
        title: 'At a Glance',
        body:
          'Air Force School VayuSena Nagar, Nagpur was established in 1968 and functions under the Indian Air Force Educational and Cultural Society, New Delhi. The school is CBSE affiliated under affiliation number 1130860 and currently serves students from LKG to Class IX.',
      },
      {
        title: 'Learning Environment',
        body:
          'The campus includes smart classrooms, a library, laboratory, stage area, play zone, synthetic court, music room, art and craft room, counselling support and sports spaces that support balanced child development.',
      },
    ],
    highlights: ['Established in 1968', 'CBSE Affiliation No. 1130860', 'Student strength 530+', 'Classes from LKG to IX'],
  },
  {
    slug: 'staff-details',
    path: '/staff-details',
    category: 'Staff Details',
    title: 'Academic and administrative teams that support daily school life.',
    description:
      'An overview of the school’s working teams, parent touchpoints and the roles that keep academic and administrative operations running smoothly.',
    image: siteAssets.images.chief,
    sections: [
      {
        title: 'Administrative Support',
        body:
          'The published administrative support structure includes the Office Superintendent, Accounts Assistant and Clerk, with the school office acting as the first point of contact for day-to-day parent support.',
      },
      {
        title: 'Teaching Approach',
        body:
          'Teachers are supported through workshops, orientation programmes and continuous learning practices so classroom delivery stays structured, caring and future-ready.',
      },
    ],
    highlights: ['Office Superintendent', 'Accounts Assistant', 'Clerk', 'Teacher orientation and workshop culture'],
  },
  {
    slug: 'mandatory-disclosure',
    path: '/mandatory-disclosure',
    category: 'Mandatory Disclosure',
    title: 'Compliance information and parent-facing official documents.',
    description:
      'Important disclosure files and core school documents are organised here for parent access and institutional transparency.',
    image: siteAssets.images.bestAward,
    sections: [
      {
        title: 'What You Will Find Here',
        body:
          'Families can use this section to access academic calendar files, book lists, homework circulars and formal disclosure-ready information presented in a clean download-first format.',
      },
    ],
    highlights: ['Academic calendar', 'Book list', 'Homework circulars', 'Policy and disclosure-ready references'],
    attachments: [
      { label: 'School Calendar 2026-2027', href: siteAssets.downloads.schoolCalendar },
      { label: 'Book List 2026-2027', href: siteAssets.downloads.bookList },
      { label: 'CCA Calendar 2025-26', href: siteAssets.downloads.ccaCalendar },
    ],
  },
  {
    slug: 'parent-corner',
    path: '/parent-corner',
    category: 'Parent Corner',
    title: 'Parent guidance, school routines and support touchpoints.',
    description:
      'A dedicated parent-facing section for common school routines, communication expectations and academic follow-up.',
    image: siteAssets.images.smartClassroom,
    sections: [
      {
        title: 'Parent Support Essentials',
        body:
          'Parents can use this section as a central reference point for key school resources, homework files, contact support, notice tracking and session-level updates.',
      },
      {
        title: 'Helpful Practices',
        body:
          'Review the notice board regularly, keep a copy of current book lists and school calendar files, and contact the school office promptly for fee, transfer certificate or admission-related assistance.',
      },
    ],
    highlights: ['Notice follow-up', 'Download centre access', 'Contact support', 'Session updates'],
  },
  {
    slug: 'fee-support',
    path: '/fee-support',
    category: 'Fee Support',
    title: 'Fee guidance and accounts assistance information.',
    description:
      'A local alternative to the earlier fee portal link, focused on directing parents to the right school support contact for current payment instructions.',
    image: siteAssets.images.campusLearning,
    sections: [
      {
        title: 'Accounts Desk Support',
        body:
          'For current fee instructions, receipt clarification or payment-window updates, families should connect with the school office and accounts support. This keeps payment communication official and up to date without depending on a third-party portal.',
      },
    ],
    highlights: ['Accounts Assistant support', 'Office phone: 0712-2511407', 'Admin support: 9146071487'],
  },
  {
    slug: 'transfer-certificate',
    path: '/transfer-certificate',
    category: 'Transfer Certificate',
    title: 'Transfer certificate guidance and document readiness.',
    description:
      'A simple parent-ready guide for initiating transfer certificate requests and keeping required details ready.',
    image: siteAssets.images.chief,
    sections: [
      {
        title: 'Suggested Process',
        body:
          'Parents should contact the school office, share the student’s current class details, keep identity and prior records ready, and follow the office timeline for verification and certificate issue.',
      },
    ],
    highlights: ['Contact school office first', 'Keep student record details ready', 'Follow office verification timeline'],
  },
  {
    slug: 'annual-report',
    path: '/annual-report',
    category: 'Annual Report',
    title: 'Highlights of school growth, activity and student participation.',
    description:
      'A concise report-style page summarising academics, participation, infrastructure and institutional focus areas.',
    image: siteAssets.images.bestAward,
    sections: [
      {
        title: 'Report Snapshot',
        body:
          'The school continues to strengthen disciplined academic delivery, co-curricular opportunity, inter-school participation, activity-based learning spaces and teaching development through workshops and internal support.',
      },
    ],
    highlights: ['Academic consistency', 'Co-curricular participation', 'Infrastructure growth', 'Teacher development'],
  },
  {
    slug: 'new-academic-session-2026-2027',
    path: '/new-academic-session-2026-2027',
    category: 'Academic Session',
    title: 'New session guidance, essentials and start-of-year readiness.',
    description:
      'A structured session-start page gathering the most useful files and reminders for parents and students.',
    image: siteAssets.images.unityDay,
    sections: [
      {
        title: 'Session Readiness',
        body:
          'Use this page to access the school calendar, book list and holiday homework files, and keep an eye on the notice board for any changes to timings, activities or academic schedules.',
      },
    ],
    highlights: ['Calendar access', 'Book list reference', 'Homework files', 'Watch notice board for updates'],
    attachments: [
      { label: 'School Calendar 2026-2027', href: siteAssets.downloads.schoolCalendar },
      { label: 'Book List 2026-2027', href: siteAssets.downloads.bookList },
    ],
  },
]

export const academicPages = [
  {
    slug: 'curricular-activities',
    path: '/academics/curricular-activities',
    category: 'Academics',
    title: 'Curricular learning focused on concept clarity and structured growth.',
    description:
      'The curricular framework supports habit-building, subject understanding, participation and steady academic progress.',
    image: siteAssets.images.smartClassroom,
    sections: [
      {
        title: 'Structured Academic Delivery',
        body:
          'Classroom learning is shaped around age-appropriate academic rigour, clarity of fundamentals, daily discipline and student confidence in applying concepts.',
      },
    ],
    highlights: ['Concept clarity', 'Balanced rigour', 'Smart classroom support'],
  },
  {
    slug: 'co-curricular-activities',
    path: '/academics/co-curricular-activities',
    category: 'Co-Curricular',
    title: 'Co-curricular participation that builds expression and confidence.',
    description:
      'Assemblies, cultural opportunities, creativity-led experiences and group events extend learning beyond textbooks.',
    image: siteAssets.images.campusActivities,
    sections: [
      {
        title: 'Expression and Exposure',
        body:
          'Students take part in school-based cultural and collaborative activity formats that encourage communication, teamwork and stage confidence.',
      },
    ],
    highlights: ['Assemblies and cultural events', 'Creativity and participation', 'Confidence building'],
  },
  {
    slug: 'sports-activities',
    path: '/academics/sports-activities',
    category: 'Sports',
    title: 'Sports participation that develops resilience, stamina and teamwork.',
    description:
      'Physical activity remains a strong contributor to discipline, wellbeing and school spirit across the campus.',
    image: siteAssets.images.unityRun,
    sections: [
      {
        title: 'Physical Development',
        body:
          'Sports and movement-focused school experiences help students build endurance, coordination, healthy habits and collective pride.',
      },
    ],
    highlights: ['Synthetic court', 'Games and movement', 'Team spirit'],
  },
  {
    slug: 'other-school-activities',
    path: '/academics/other-school-activities',
    category: 'School Activities',
    title: 'Trips, competitions and extended experiences beyond the classroom.',
    description:
      'Additional school activities give students exposure, communication practice and memorable shared experiences.',
    image: siteAssets.images.unityDay,
    sections: [
      {
        title: 'Learning Beyond the Classroom',
        body:
          'Educational trips, inter-school events and celebratory activity formats help children connect academic learning with observation, confidence and real participation.',
      },
    ],
    highlights: ['Educational trips', 'Inter-school exposure', 'Confidence and communication'],
  },
]

export const updatePages = [
  {
    slug: 'class-6-to-12-summer-holiday-homework-2026-27',
    path: '/updates/class-6-to-12-summer-holiday-homework-2026-27',
    category: 'Notice',
    title: 'Class VI to XII summer holiday homework 2026-27.',
    description:
      'Middle and senior school holiday assignments are organised here for convenient parent and student access.',
    image: siteAssets.images.smartClassroom,
    sections: [
      {
        title: 'Homework Guidance',
        body:
          'Students should use the published file as their formal holiday work reference and complete assignments in a timely, well-organised manner before school reopens.',
      },
    ],
    attachments: [{ label: 'Download Homework PDF', href: siteAssets.downloads.class6To12Homework }],
  },
  {
    slug: 'book-list-2026-27',
    path: '/updates/book-list-2026-27',
    category: 'Download',
    title: 'Book list for academic session 2026-27.',
    description:
      'The official session book list is available here for parents preparing materials for the academic year.',
    image: siteAssets.images.bestAward,
    sections: [
      {
        title: 'Session Preparation',
        body:
          'Use the published book list to prepare subject materials class-wise and keep a copy available during the opening weeks of the session.',
      },
    ],
    attachments: [{ label: 'Download Book List PDF', href: siteAssets.downloads.bookList }],
  },
  {
    slug: 'school-calendar-2026-2027',
    path: '/updates/school-calendar-2026-2027',
    category: 'Calendar',
    title: 'School calendar for academic session 2026-2027.',
    description:
      'Important term planning, event dates and session-level rhythm can be tracked through the current school calendar.',
    image: siteAssets.images.unityDay,
    sections: [
      {
        title: 'Planning Ahead',
        body:
          'Parents should refer to the calendar regularly for key school activities, breaks, planned events and academic coordination during the session.',
      },
    ],
    attachments: [{ label: 'Download School Calendar PDF', href: siteAssets.downloads.schoolCalendar }],
  },
  {
    slug: 'primary-summer-holiday-homework-2026-27',
    path: '/updates/primary-summer-holiday-homework-2026-27',
    category: 'Notice',
    title: 'Primary summer holiday homework 2026-27.',
    description:
      'Primary section holiday work is collected here in one place for easy parent follow-up.',
    image: siteAssets.images.campusActivities,
    sections: [
      {
        title: 'Primary Readiness',
        body:
          'Holiday work should be completed steadily, neatly and with parent encouragement so students return prepared for the next teaching cycle.',
      },
    ],
    attachments: [{ label: 'Download Primary Homework PDF', href: siteAssets.downloads.primaryHomework }],
  },
  {
    slug: 'pre-primary-activities-2025-26',
    path: '/updates/pre-primary-activities-2025-26',
    category: 'Event',
    title: 'Pre-primary activities and participation highlights.',
    description:
      'A visual and activity-focused summary of how pre-primary learners engage through fun, guided school experiences.',
    image: siteAssets.images.campusLearning,
    sections: [
      {
        title: 'Early Learning in Motion',
        body:
          'Pre-primary experiences are designed to be joyful, supervised and developmentally appropriate, helping children build routine, expression and comfort with the school environment.',
      },
    ],
    highlights: ['Activity-led learning', 'Supervised participation', 'Confidence through routine'],
  },
]

export const hubIndex = [...resourcePages, ...academicPages, ...updatePages]

export function findHubPageByPath(pathname) {
  return hubIndex.find((item) => item.path === pathname)
}
