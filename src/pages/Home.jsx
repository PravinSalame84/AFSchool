import Hero from '../components/sections/Hero'
import InfoStrip from '../components/sections/InfoStrip'
import AboutSnapshot from '../components/sections/AboutSnapshot'
import EnquiryForm from '../components/sections/EnquiryForm'
import StudentJourney from '../components/sections/StudentJourney'
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
      <Hero />
      <InfoStrip />
      <AboutSnapshot />
      <EnquiryForm />
      <StudentJourney />
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
