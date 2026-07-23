const secureContent = {
  site_status: {
    columns: [],
    rows: [
      {
        mode: 'Active',
        title: 'Airforce School VSN',
        message: 'The website is currently serving published school content.',
        updatedAt: '22 Jul 2026 2:01 PM',
        checkAt: '',
        extraMessage: '',
        announcementMessage: 'Admissions open. Latest notices and downloads are available here.',
        showAnouncement: false,
        isPublished: true,
      },
    ],
  },
  announcement_actions: {
    columns: [],
    rows: [
      {
        label: 'Notice Board',
        to: '/notice-board',
        showPageUnderDialogBox: '',
        isPublished: true,
      },
      {
        label: 'Results',
        to: '/results',
        showPageUnderDialogBox: '',
        isPublished: true,
      },
      {
        label: 'Admissions',
        to: '/admissions',
        showPageUnderDialogBox: '',
        isPublished: true,
      },
    ],
  },
  marquee: {
    columns: [],
    rows: [
      { text: 'Admissions open for Session 2026-27', isPublished: true },
      { text: 'Holiday homework PDFs available now', isPublished: true },
    ],
  },
  notices: {
    columns: [],
    rows: [
      {
        title: 'Class IX Unit Test Schedule',
        category: 'Notice',
        date: 'July 2026',
        to: '/notice-board',
        excerpt: 'Updated class-wise schedule for the upcoming assessment cycle.',
        isPublished: true,
      },
    ],
  },
  events: {
    columns: [],
    rows: [
      {
        title: 'Annual Function',
        date: 'July 2026',
        to: '/gallery',
        publicLinkFromDrive: '',
        galleryAnnouncement:
          'This event gallery is currently available through the school’s protected content setup.',
        galleryImages: [],
        isPublished: true,
      },
    ],
  },
  downloads: {
    columns: [],
    rows: [
      {
        label: 'Admission Form 2026-27',
        href: '',
        category: 'Admission',
        isPublished: true,
      },
      {
        label: 'Admission Form 2027-28',
        href: '',
        category: 'Admission',
        isPublished: true,
      },
    ],
  },
  sheet9: {
    columns: [],
    rows: [],
  },
}

export default secureContent
