import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import RevealOnScroll from '../ui/RevealOnScroll'
import faqs from '../../data/faqs'

export default function FAQSection() {
  return (
    <section id="faqs" className="section-pad bg-skyback-soft">
      <Container className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Have Questions?"
            title="Frequently Asked Questions"
            align="center"
            className="mx-auto"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={100} className="mt-10">
          <Accordion items={faqs} />
        </RevealOnScroll>
      </Container>
    </section>
  )
}
