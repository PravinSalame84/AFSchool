import { Quote } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Button from '../components/ui/Button'
import testimonials from '../data/testimonials'
import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function Alumni() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <>
      <PageHero
        crumb="Alumni"
        eyebrow="Stay Connected"
        title="The Airforce School Alumni Community"
        subtitle="Thousands of graduates, one shared foundation. Hear what life after Airforce School looks like."
      />

      <section className="section-pad bg-skyback">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 90}>
                <div className="h-full rounded-xl2 bg-white p-7 shadow-soft">
                  <Quote className="h-7 w-7 text-accent" />
                  <p className="mt-4 text-[15px] leading-relaxed text-primary-700">"{t.quote}"</p>
                  <p className="mt-5 text-sm font-bold text-primary-900">{t.name}</p>
                  <p className="text-xs text-primary-400">{t.batch}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={200}>
            <div className="mt-14 rounded-xl2 bg-primary-900 p-10 text-center">
              <SectionHeading
                title="Are you a Airforce School graduate?"
                subtitle="Join the alumni network to stay in touch with classmates, mentor current students, and hear about reunions first."
                align="center"
                tone="light"
                className="mx-auto"
              />
              <Button variant="primary" className="mt-7" onClick={() => openEnquiry('Alumni Sign-up')}>
                Join the Alumni Network
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  )
}
