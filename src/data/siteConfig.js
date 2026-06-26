// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — the single source of truth for branding & contact details.
// Change the values here to re-skin the entire site (name, logo text,
// contact info, socials, CTAs) without touching any component code.
// ─────────────────────────────────────────────────────────────────────────

const siteConfig = {
  brandName: 'Air Force School, Nagpur',
  brandSuffix: 'Indian Air Force Educational & Cultural Society',
  shortName: 'AFS',
  tagline: 'Nurturing Confident, Future-Ready Learners',
  yearsOfExperience: 58,
  yearFounded: 1968,

  contact: {
    address: 'Airforce School House, Air Force School VayuSena Nagar, Nagpur - 440007, Maharashtra, India',
    email: 'airforceschoolvsn@gmail.com',
    phone: ' 0712 - 2511407',
    whatsapp: '9146071487', // digits only, with country code
  },

  social: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },

  cta: {
    enquire: 'Enquire Now',
    brochure: 'Download Brochure',
    admissions: 'Admissions Open — AY 2026‑27',
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
