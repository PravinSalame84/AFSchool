import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import BlobIcon from '../components/ui/BlobIcon'
import Button from '../components/ui/Button'
import whyUsTabs from '../data/whyUsTabs'
import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function WhyUs() {
  const { hash } = useLocation()
  const [active, setActive] = useState(whyUsTabs[0].id)
  const { openEnquiry } = useEnquiryModal()

  useEffect(() => {
    const id = hash?.replace('#', '')
    if (id && whyUsTabs.some((t) => t.id === id)) setActive(id)
  }, [hash])

  const current = whyUsTabs.find((t) => t.id === active) || whyUsTabs[0]

  return (
    <>
      <PageHero
        crumb="Why Airforce School"
        eyebrow="The Airforce School Difference"
        title="Five reasons families choose Airforce School"
        subtitle="Curriculum, faculty, environment, approach and skills — designed together, not bolted on."
      />

      <section className="section-pad bg-skyback">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
            {/* Tab list */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {whyUsTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`focus-ring flex-shrink-0 rounded-xl px-5 py-3.5 text-left text-sm font-semibold transition lg:flex-shrink ${
                    active === tab.id
                      ? 'bg-primary-900 text-white shadow-soft'
                      : 'bg-white text-primary-700 hover:bg-skyback-soft'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <RevealOnScroll key={current.id} className="rounded-xl2 bg-white p-8 shadow-card sm:p-10">
              <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr]">
                <BlobIcon icon="Lightbulb" tone="accent" size={88} />
                <div>
                  <h2 className="text-2xl font-bold text-primary-900">{current.heading}</h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-primary-600">{current.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {current.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-primary-800">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" /> {point}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="mt-7" onClick={() => openEnquiry('Admissions Enquiry')}>
                    Talk to an Admissions Counsellor
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </>
  )
}
