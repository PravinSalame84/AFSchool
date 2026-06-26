import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'
import EnquiryFormFields from '../forms/EnquiryFormFields'

export default function EnquiryForm() {
  return (
    <section id="enquiry" className="section-pad bg-skyback-soft">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-2">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Ask your query — we'll get in touch with you soon"
              subtitle="Fill in the form and our admissions team will reach out with campus details, fee structure and seat availability for the grade you're enquiring about."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="lg:col-span-3">
            <div className="rounded-xl2 bg-white p-6 shadow-card sm:p-8">
              <EnquiryFormFields context="General Enquiry" />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}
