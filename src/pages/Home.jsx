import Hero from '../components/sections/Hero'
import MarqueeStrip from '../components/dynamic/MarqueeStrip'
import InfoStrip from '../components/sections/InfoStrip'
import AboutSnapshot from '../components/sections/AboutSnapshot'
import EnquiryForm from '../components/sections/EnquiryForm'
import MeetOurTeachers from '../components/sections/MeetOurTeachers'
import StudentGalleryCarousel from '../components/sections/StudentGalleryCarousel'
import StudentJourney from '../components/sections/StudentJourney'
import SchoolGalleryShowcase from '../components/sections/SchoolGalleryShowcase'
import Initiatives from '../components/sections/Initiatives'
import Achievements from '../components/sections/Achievements'
import Philosophy from '../components/sections/Philosophy'
import InnovationCentre from '../components/sections/InnovationCentre'
import LatestNews from '../components/sections/LatestNews'
import QuickLinksStrip from '../components/sections/QuickLinksStrip'
import FAQSection from '../components/sections/FAQSection'
import LocationsStrip from '../components/sections/LocationsStrip'

export default function Home() {
  return (
    <>
      <MarqueeStrip />
      <Hero />
      <InfoStrip />
      <AboutSnapshot />
      <MeetOurTeachers />
      <StudentGalleryCarousel />
      <EnquiryForm />
      <StudentJourney />
      <SchoolGalleryShowcase />
      <Initiatives />
      <Achievements />
      <Philosophy />
      <InnovationCentre />
      <LatestNews />
      <QuickLinksStrip />
      <FAQSection />
      <LocationsStrip />
    </>
  )
}
