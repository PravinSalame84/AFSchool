import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import RevealOnScroll from '../ui/RevealOnScroll'
import faqs from '../../data/faqs'

export default function FAQSection() {
  return (
    <section id="faqs" className="section-pad relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="hero-orb sky left-[6%] top-16 h-44 w-44" />
      <div className="hero-orb sun right-[10%] top-24 h-52 w-52" />
      <Container className="relative max-w-5xl">
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl rounded-[2.25rem] border border-primary-900/8 bg-gradient-to-br from-white/88 via-white/82 to-skyback-soft/70 p-8 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-primary-950/88 dark:via-primary-950/80 dark:to-primary-900/72 sm:p-10">
            <SectionHeading
              eyebrow="Have Questions?"
              title="Frequently Asked Questions"
              subtitle="Admissions, facilities, documents and school access points are answered here for parents and guardians."
              align="center"
              className="mx-auto"
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100} className="mt-8">
          <Accordion items={faqs} />
        </RevealOnScroll>
      </Container>
    </section>
  )
}
