import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Container from './Container'

export default function PageHero({ eyebrow, title, subtitle, visionTitle, vision, missionTitle, mission, photo, crumb }) {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary-100/10 blur-3xl" />
      <Container className="relative px-4 sm:px-6 lg:px-8">
        <nav className="mb-4 flex items-center gap-1.5 text-xs font-medium text-skyback-light/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-skyback-light/90">{crumb}</span>
        </nav>
        {eyebrow && (
          <span className="text-xl font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</span>
        )}
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-2xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-skyback-light/75">{subtitle}</p>}
         <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-2xl">{visionTitle}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-skyback-light/75">{vision}</p>}
         <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-2xl">{missionTitle}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-skyback-light/75">{mission}</p>}
      </Container>
    </section>
  )
}
