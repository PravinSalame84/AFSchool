import schoolContent from './schoolContent'
import siteConfig from './siteConfig'
import { sharedImages, teacherImages } from '../assets/images'

export const brochureOverview = {
  title: `${siteConfig.brandName} Brochure`,
  subtitle:
    'A quick, interactive prospectus for families exploring campus life, teaching quality, facilities and admissions at Air Force School, Vayusena Nagar, Nagpur.',
  downloadFileName: 'air-force-school-brochure-2026-27',
}

const brochurePages = [
  {
    id: 'cover',
    eyebrow: 'Prospectus 2026-27',
    title: siteConfig.brandName,
    subtitle: siteConfig.brandSuffix,
    narrative:
      'A disciplined, caring and future-ready campus where strong academics, student wellbeing and holistic growth move together every day. Air Force School is registered with the Indian Air Force Educational and Cultural Society, New Delhi. The school was established to provide quality education with a broad, well-balanced and relevant curriculum. Students benefit from Smartboards, child-safe classrooms, fire-safety equipment and a campus designed to support both strong academics and joyful exploration.',
    image: sharedImages.heroImage,
    highlights: [
      'Established in 1968',
      schoolContent.contact.affiliation,
      'Learning range from LKG to Class IX',
    ],
    accent: 'linear-gradient(145deg, rgba(17,26,36,0.98), rgba(45,83,103,0.92))',
    dark: true,
  },
  {
    id: 'foundation',
    eyebrow: 'Who We Are',
    title: 'A school shaped by values, structure and human warmth',
    // supporting: schoolContent.about.narrative,
    narrative: schoolContent.about.extended,
    image: sharedImages.teacherImageOne,
    highlights: [
      schoolContent.about.vision,
      schoolContent.about.mission,
    ],
    stats: schoolContent.facts.slice(0, 4),
    accent: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(232,241,246,0.96))',
  },
  {
    id: 'learning',
    eyebrow: 'Learning Environment',
    title: 'Modern spaces designed for safe, joyful and focused learning',
    narrative:
      'From digital classrooms to supervised play and activity spaces, the campus supports each child academically, socially and physically.',
    supporting:
      'Every part of the environment is planned to balance discipline with comfort, so students can stay engaged without feeling overwhelmed.',
    image: sharedImages.teacherImageTwo,
    highlights: schoolContent.facilities,
    accent: 'linear-gradient(180deg, rgba(215,239,246,0.96), rgba(244,249,252,0.98))',
  },
  {
    id: 'teachers',
    eyebrow: 'Meet Our Teachers',
    title: 'Mentors who combine care, consistency and classroom excellence',
    narrative:
      'Our faculty combine subject strength with reflective practice, strong student relationships and a deep sense of responsibility towards each learner.',
    supporting:
      'Workshops, mentoring and orientation programmes help teachers keep learning too, creating classrooms that stay fresh, responsive and age-appropriate.',
    image: teacherImages.meeraSharma,
    highlights: [
      'Experienced mentors with child-first teaching practices',
      'Holistic growth through academic, emotional and social support',
      'Faculty development through workshops and reflective practice',
    ],
    people: [
      'Meera Sharma - Academic Coordination',
      'Anand Verma - Science & Inquiry Learning',
      'Rucha Gorile - Primary Mentorship',
      'Vishakha Korde - Language & Communication',
    ],
    accent: 'linear-gradient(180deg, rgba(255,248,238,0.98), rgba(255,255,255,0.96))',
  },
  {
    id: 'student-life',
    eyebrow: 'Beyond The Classroom',
    title: 'Activities that build confidence, teamwork and self-expression',
    narrative:
      'Student life at Air Force School is shaped by assemblies, competitions, sports, trips and co-curricular experiences that help children grow with confidence.',
    supporting:
      'The aim is not just participation, but character-building through responsibility, creativity, resilience and community spirit.',
    image: teacherImages.nainaDeshmukh,
    highlights: schoolContent.activities.map((item) => `${item.title} - ${item.description}`),
    quote: 'Teaching is Learning',
    accent: 'linear-gradient(180deg, rgba(223,238,247,0.98), rgba(255,255,255,0.96))',
  },
  {
    id: 'admissions',
    eyebrow: 'Admissions & Contact',
    title: 'A simple next step for families exploring the school',
    narrative: schoolContent.admissions.intro,
    supporting:
      'Our team can guide you through class availability, required documents and the admissions process with clarity and personal support.',
    image: sharedImages.teacherImageFour,
    highlights: schoolContent.admissions.steps,
    contact: [
      schoolContent.contact.address,
      schoolContent.contact.phone,
      schoolContent.contact.email,
    ],
    accent: 'linear-gradient(180deg, rgba(232,241,246,0.98), rgba(215,239,246,0.95))',
  },
]

export default brochurePages
