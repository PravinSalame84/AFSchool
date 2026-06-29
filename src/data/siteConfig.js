// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — the single source of truth for branding & contact details.
// Change the values here to re-skin the entire site (name, logo text,
// contact info, socials, CTAs) without touching any component code.
// ─────────────────────────────────────────────────────────────────────────

const siteConfig = {
  brandName: 'Air Force School',
  brandSuffix: 'VayuSena Nagar, Nagpur',
  shortName: 'AFS Nagpur',
  tagline: 'Discipline, care and future-ready learning for every child',
  yearsOfExperience: 58,
  yearFounded: 1968,

  contact: {
    address: 'Airforce School House, Air Force School VayuSena Nagar, Nagpur - 440007, Maharashtra, India',
    email: 'airforceschoolvsn@gmail.com',
    phone: '0712-2511407',
    whatsapp: '9146071487', // digits only, with country code
  },

  social: {
    website: '/',
    maps: 'https://maps.app.goo.gl/LT2Ls78TT3M81j9N7',
    gallery: '/gallery',
    // Add official school profile URLs here when available.
    facebook: 'https://www.facebook.com/airforceschoolvsn',
    instagram: 'https://www.instagram.com/airforceschoolvsn/',
    x: 'https://x.com/vayusenanagar',
    youtube: 'https://www.youtube.com/@airforceschoolvsnnagpur4141',
    linkedIn: 'https://www.linkedin.com/in/airforceschoolvsnnagpur/',

  },

  cta: {
    enquire: 'Enquire',
    brochure: 'Request School Details',
    admissions: 'Start Admission Enquiry',
  },

  // DYNAMIC CONTENTS:
  // Put your public Google Apps Script web app URL here, or use the
  // `VITE_RUNTIME_CONTENT_ENDPOINT` environment variable during deployment.
  // The site will fetch live notices, events, results/timetable PDFs,
  // admission updates and marquee text from this endpoint at runtime.
  runtimeContent: {
    endpoint: import.meta.env.VITE_RUNTIME_CONTENT_ENDPOINT || '',
    revalidateMs: 5 * 60 * 1000,
    storageKey: 'afs-runtime-content-cache-v1',
  },

  // Toggle features on/off without deleting code — flip to false to hide a
  // whole section across the site from one place.
  features: {
    floatingWhatsapp: true,
    floatingEnquire: true,
    announcementBar: true,
  },
}

export default siteConfig
