import { GraduationCap, Lightbulb, BookOpen, FlaskConical } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import siteConfig from '../../data/siteConfig'

const pillars = [
  { icon: GraduationCap, label: 'Teacher Training' },
  { icon: Lightbulb, label: 'Innovation Lab' },
  { icon: BookOpen, label: 'Teaching Methodology' },
  { icon: FlaskConical, label: 'Curriculum R&D' },
]

export default function InnovationCentre() {
  return (
    <section className="section-pad bg-skyback-soft">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow={`${siteConfig.shortName} Innovation Centre`}
              title="Where our curriculum is built, tested and refined"
              subtitle="A team of academicians, technologists and subject experts work year-round so every classroom benefits from the latest in pedagogy and educational research."
            />
            <Button to="/why-us#curriculum" variant="dark" className="mt-7">
              Explore the Innovation Centre
            </Button>
          </RevealOnScroll>

          <div className="grid grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.label} delay={i * 90}>
                <div className="flex flex-col items-center gap-3 rounded-xl2 bg-white p-7 text-center shadow-soft">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-900 text-accent">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold text-primary-800">{p.label}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
