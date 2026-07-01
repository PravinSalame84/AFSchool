import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import StatusScreen from '../components/ui/StatusScreen'
import siteAssets from '../data/siteAssets'
import { useLocale } from '../context/LocaleContext'

export default function Careers() {
  useLocale()

  return (
    <>
      <Seo
        title="Careers"
        description="Career opportunities and future recruitment updates from Air Force School."
        path="/careers"
        image={siteAssets.images.teacherMeeting}
      />

      <PageHero
        crumb="Careers"
        eyebrow="Join The Team"
        title="Work with a school culture shaped by care, discipline and growth."
        subtitle="Recruitment notices and teaching or administrative openings will be published here."
        image={siteAssets.images.teacherMeeting}
      />

      <StatusScreen
        badge="Careers"
        code="Openings"
        title="Career opportunities will be published here"
        message="This page is now live for production use. When the school is hiring, role descriptions, qualification requirements, contact instructions and timelines can be updated here or through the runtime notice workflow."
        icon="maintenance"
        primaryAction={{ to: '/contact', label: 'Contact School Office', variant: 'dark' }}
        secondaryAction={{ to: '/notice-board', label: 'Check Latest Notices', variant: 'outline' }}
        note="You can also publish recruitment notices in the dynamic notice board so vacancies appear across the website without a full rebuild."
      />
    </>
  )
}
