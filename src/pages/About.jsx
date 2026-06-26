import { Quote, Leaf, HeartHandshake, Users2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import StatCounter from '../components/ui/StatCounter'
import Initiatives from '../components/sections/Initiatives'
import Achievements from '../components/sections/Achievements'
import FAQSection from '../components/sections/FAQSection'
import stats from '../data/stats'
import siteConfig from '../data/siteConfig'

const outreachPrograms = [
  { icon: Leaf, title: 'Green Campus Initiative', description: 'Student-led recycling, composting and tree-planting drives across every campus.' },
  { icon: HeartHandshake, title: 'Scholarship & Access Fund', description: 'Need-based scholarships that have supported over 4,000 students since inception.' },
  { icon: Users2, title: 'Community Learning Days', description: 'Free weekend workshops opening our labs and libraries to neighbourhood children.' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Our Story"
        title={`About ${siteConfig.brandName} ${siteConfig.brandSuffix}`}
        photo={""}
        subtitle={`Established in ${siteConfig.yearFounded}, ${siteConfig.brandName} is registered with Indian Air Force Educational and Cultural Society New Delhi. It was established with an aim to provide quality education to the wards of Air Force personnel posted in the area.It has classes from LKG to IX with a current strength of 530 students. Classes are provided with Smartboards, child-safe and user-friendly furniture and fire-safety equipments. The school has state-of-the-art infrastructure with outdoor stage, play area, Synthetic court, Laboratory, Library, separate Music, Art-Craft, Sports, Counselling rooms, provision of safe drinking water and clean hygienic washrooms for staff and students. Regular co-curricular activities, educational trips, inter-school competitions are conducted for the holistic development of students. The school believes in the motto ‘Teaching is Learning’ as various staff orientation programmes and workshops are conducted for the upgradation of staff. The school strives to become an institution of excellence preparing children to become responsible citizens of the global community..`}
        visionTitle="AIR FORCE SCHOOL VISION"
        vision={"Our vision at Air Force School Vayusena Nagar is to inculcate the core values of life i.e. love, respect, tolerance and cooperation and to empower students to acquire, comprehend, apply and value knowledge and skills that will make them confident and self-sustaining individuals to serve the global community and attain their highest goals."}
        missionTitle="AIR FORCE SCHOOL MISSION"
        mission={"The mission of Air Force School Vayusena Nagar is to provide inclusive education and recognize each child as an individual with his or her potential and talent. The school respects the individual needs of children, provides a safe, caring and creative environment and emphasizes the social, emotional, physical and intellectual development of each child. The school gives emphasis to the overall development of a child's personality, inculcating in him/her values to become a worthy citizen."}
      />

      <section className="section-pad bg-skyback">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Who We Are"
                title="A network built one classroom at a time"
              />
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-primary-600">
                <p>
                  What began as a single campus in {siteConfig.yearFounded} has grown into a nationwide network
                  spanning {stats[1].value} owned campuses and {stats[2].value}+ partner schools, educating more
                  than two hundred thousand students every year.
                </p>
                <p>
                  Our mission has stayed constant even as we've grown: to foster responsible, well-rounded,
                  lifelong learners — not just strong exam results. That means equal investment in academics,
                  arts, sport, emotional wellbeing and real-world skills.
                </p>
                <p>
                  Every campus operates under shared academic standards and curriculum support from our central
                  Innovation Centre, while staying rooted in its own local community.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="grid grid-cols-2 gap-6 rounded-xl2 bg-primary-900 p-8">
                {stats.map((stat) => (
                  <StatCounter key={stat.label} {...stat} tone="light" />
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section id="message" className="section-pad bg-skyback-soft">
        <Container className="max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <RevealOnScroll>
            <Quote className="mx-auto h-10 w-10 text-accent" />
            <p className="mt-5 text-xl font-medium italic leading-relaxed text-primary-800 sm:text-2xl">
              "Education is not about filling a vessel — it's about lighting a fire. Every decision we make, from
              curriculum design to classroom layout, starts with the question: will this help a child think for
              themselves?"
            </p>
            <p className="mt-6 text-sm font-bold text-primary-900">Dr. Meera Kapoor</p>
            <p className="text-xs text-primary-400">Chairperson, {siteConfig.brandName} {siteConfig.brandSuffix}</p>
          </RevealOnScroll>
        </Container>
      </section>

      <div id="initiatives">
        <Initiatives />
      </div>

      <div id="awards">
        <Achievements />
      </div>

      <section id="outreach" className="section-pad bg-skyback-soft">
        <Container className="px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Giving Back"
              title="Social Outreach"
              subtitle="Education works best when it reaches beyond our own gates."
              align="center"
              className="mx-auto"
            />
          </RevealOnScroll>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {outreachPrograms.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <div className="h-full rounded-xl2 bg-white p-7 shadow-soft">
                  <p.icon className="h-8 w-8 text-accent-dark" />
                  <h3 className="mt-4 text-base font-bold text-primary-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-500">{p.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection />
    </>
  )
}
