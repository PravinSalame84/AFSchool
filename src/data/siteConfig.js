// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — the single source of truth for branding & contact details.
// Change the values here to re-skin the entire site (name, logo text,
// contact info, socials, CTAs) without touching any component code.
// ─────────────────────────────────────────────────────────────────────────

const siteConfig = {
  brandName: 'Air Force School',
  brandSuffix: 'Vayusena Nagar, Nagpur',
  shortName: 'AFS Nagpur',
  tagline: 'Discipline, dignity and future-ready learning for every child',
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
    gallery: '/photo-gallery/',
    facebook: 'https://www.facebook.com/airforceschoolvsn',
    instagram: 'https://www.instagram.com/airforceschoolvsn/',
    x: 'https://x.com/vayusenanagar',
    youtube: 'https://www.youtube.com/@airforceschoolvsnnagpur4141',
    linkedIn: 'https://www.linkedin.com/in/airforceschoolvsnnagpur/',
  },

  cta: {
    enquire: 'Enquire Now',
    brochure: 'Download Brochure',
    admissions: 'Admissions',
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
