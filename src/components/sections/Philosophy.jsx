import { ShieldCheck, HeartHandshake } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'
import siteConfig from '../../data/siteConfig'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'We Don\u2019t Take Interviews',
    description: 'Admission decisions are never based on pressuring a four-year-old into an "interview." We admit on a first-come, first-served basis.',
  },
  {
    icon: HeartHandshake,
    title: 'We Don\u2019t Take Donations',
    description: 'No capitation fees, no "donations" for a seat. Just transparent, published fee structures across every campus.',
  },
]

export default function Philosophy() {
  return (
    <section className="section-pad bg-primary-900">
      <Container className="px-4 text-center sm:px-6 lg:px-8">
        <RevealOnScroll>
          <p className="mx-auto max-w-2xl text-2xl font-bold leading-snug text-white sm:text-3xl">
            Because we believe your child is{' '}
            <span className="text-accent">our responsibility</span> — we groom, we nurture.
          </p>
        </RevealOnScroll>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 120}>
              <div className="rounded-xl2 bg-white/5 p-7 text-left ring-1 ring-white/10">
                <p.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-skyback-light/75">{p.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-sm text-skyback-light/60">
          — {siteConfig.brandName} {siteConfig.brandSuffix}
        </p>
      </Container>
    </section>
  )
}
