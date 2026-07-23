import siteConfig from './siteConfig'
import { sharedImages } from '../assets/images'

const appContent = {
  pageHeroes: {
    about: {
      crumb: 'About Us',
      eyebrow: 'Our Story',
      title: `About ${siteConfig.brandName} ${siteConfig.brandSuffix}`,
      subtitle:
        `Established in ${siteConfig.yearFounded}, ${siteConfig.brandName} is registered with Indian Air Force Educational and Cultural Society New Delhi. The school serves students from LKG to IX with smart classrooms, child-friendly spaces, activity rooms, laboratories, library access, sports facilities and a strong culture of holistic growth.`,
      image: sharedImages.teacherImageOne,
    },
    admissions: {
      crumb: 'Admissions',
      eyebrow: 'Join Airforce School',
      title: 'Admissions Open for AY 2026-27',
      subtitle:
        "Find the admission process, required documents, eligibility notes and contact details needed to begin your child's admission journey with clarity.",
      image: sharedImages.teacherImageThree,
    },
    alumni: {
      crumb: 'Alumni',
      eyebrow: 'Stay Connected',
      title: 'The Airforce School Alumni Community',
      subtitle:
        'Thousands of graduates, one shared foundation. Hear what life after Airforce School looks like.',
      image: sharedImages.teacherImageFive,
    },
    blog: {
      crumb: 'Blog',
      eyebrow: 'Newsroom & Insights',
      title: 'Airforce School Blog',
      subtitle: 'Stories from our campuses, parenting advice and the latest in education research.',
      image: sharedImages.teacherImageSix,
    },
    brochure: {
      crumb: 'Brochure',
      eyebrow: 'Interactive Prospectus',
      title: 'Air Force School Brochure',
      subtitle:
        'Explore the school through a responsive digital brochure with smooth paging, quick campus highlights and a print-friendly format for families.',
      image: sharedImages.heroImage,
    },
    careers: {
      crumb: 'Careers',
      eyebrow: 'Join Our Team',
      title: `Build a meaningful career with ${siteConfig.shortName}`,
      subtitle:
        'We are always interested in thoughtful teachers, dependable coordinators and committed school professionals who want to contribute to a disciplined, caring learning environment.',
      image: sharedImages.teacherImageFour,
    },
    contact: {
      crumb: 'Contact Us',
      eyebrow: "We're Here to Help",
      title: 'Get in Touch with Airforce School',
      subtitle:
        'Questions about admissions, campuses or anything else - our team typically replies within one business day.',
      image: sharedImages.teacherImageSeven,
    },
    locations: {
      crumb: 'Locations',
      eyebrow: 'Find a Campus',
      title: 'Airforce School Campuses Near You',
      subtitle: 'find the one closest to you.',
    },
    whyUs: {
      crumb: 'Why Airforce School',
      eyebrow: 'The Airforce School Difference',
      title: 'Five reasons families choose Airforce School',
      subtitle:
        'Curriculum, faculty, environment, approach and skills designed together, not bolted on.',
      image: sharedImages.teacherImageFour,
    },
    privacyPolicy: {
      crumb: 'Privacy Policy',
      title: 'Privacy Policy',
    },
    terms: {
      crumb: 'Terms & Conditions',
      title: 'Terms & Conditions',
    },
  },
  sections: {
    admissions: {
      process: {
        eyebrow: 'How It Works',
        title: 'Admission Process and Important Guidelines',
      },
      enquiry: {
        eyebrow: 'Registration Enquiry',
        title: "Begin your child's admission enquiry",
        subtitle:
          'Share your child and contact details so the school office can guide you further regarding vacancies, eligibility and formalities.',
      },
    },
    alumni: {
      ctaTitle: 'Are you a Airforce School graduate?',
      ctaSubtitle:
        'Join the alumni network to stay in touch with classmates, mentor current students, and hear about reunions first.',
    },
    contact: {
      message: {
        eyebrow: 'Send a Message',
        title: 'Drop us a line',
      },
      location: {
        eyebrow: 'Find Us',
        title: 'Head Office Location',
      },
      successTitle: 'Message sent - thank you!',
    },
    footer: {
      description:
        'Air Force School VayuSena Nagar’s website experience is designed to help families find trusted information, school updates and useful resources with ease.',
      headings: {
        quickLinks: 'Quick Links',
        resources: 'Resources',
        contact: 'Contact Us',
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
      },
    },
    quickLinksStrip: {
      links: [
        { key: 'about', label: 'About Us', to: '/about' },
        { key: 'initiatives', label: 'Airforce School Initiatives', to: '/about#initiatives' },
        { key: 'locations', label: 'Locations', to: '/locations' },
        { key: 'careers', label: 'Careers', to: '/careers' },
      ],
    },
    whyUs: {
      ctaLabel: 'Talk to an Admissions Counsellor',
    },
  },
}

export default appContent
