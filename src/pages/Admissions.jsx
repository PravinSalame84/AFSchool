import { Award, ArrowRightLeft, Wallet } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Card from '../components/ui/Card'
import EnquiryFormFields from '../components/forms/EnquiryFormFields'
import admissionSteps, { feeStructureNote } from '../data/admissionSteps'
import siteConfig from '../data/siteConfig'

export default function Admissions() {
  return (
    <>
      <PageHero
        crumb="Admissions"
        eyebrow="Join Airforce School"
        title="Admissions Open for AY 2026–27"
        subtitle="A simple, transparent process — from your first enquiry to your child's first day."
      />

      <section className="section-pad bg-skyback">
        <Container className="px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading eyebrow="How It Works" title="The Admissions Process" align="center" className="mx-auto" />
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {admissionSteps.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 80}>
                <Card className="h-full p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold text-primary-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-500">{s.description}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section id="fees" className="section-pad bg-skyback-soft">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <RevealOnScroll>
              <Card className="h-full p-7">
                <Wallet className="h-8 w-8 text-accent-dark" />
                <h3 className="mt-4 text-lg font-bold text-primary-900">Fee Structure</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-500">{feeStructureNote}</p>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll delay={90}>
              <Card id="transfer" className="h-full p-7">
                <ArrowRightLeft className="h-8 w-8 text-accent-dark" />
                <h3 className="mt-4 text-lg font-bold text-primary-900">Inter-Network Transfer</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-500">
                  Relocating cities? Transfer your child to any {siteConfig.brandName} campus with minimal
                  paperwork and continuity of curriculum.
                </p>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll delay={180}>
              <Card id="scholarship" className="h-full p-7">
                <Award className="h-8 w-8 text-accent-dark" />
                <h3 className="mt-4 text-lg font-bold text-primary-900">Scholarship Programme</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-500">
                  Merit and need-based scholarships are available at select campuses for defence personnel's
                  children and outstanding achievers.
                </p>
              </Card>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-skyback">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <RevealOnScroll className="lg:col-span-2">
              <SectionHeading
                eyebrow="Start Today"
                title="Begin your child's application"
                subtitle="Tell us a little about your child and preferred campus — we'll take it from there."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={100} className="lg:col-span-3">
              <div className="rounded-xl2 bg-white p-6 shadow-card sm:p-8">
                <EnquiryFormFields context="Admissions Enquiry" />
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </>
  )
}
