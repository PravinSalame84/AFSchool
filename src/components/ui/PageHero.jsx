import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Container from './Container'
import OptimizedImage from './OptimizedImage'

export default function PageHero({ eyebrow, title, subtitle, crumb, image }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary-900 to-[#214f79] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgrgba(176,141,76,0.25),transparent_28%),radial-gradient(circle_at_left,rgba(88,102,61,0.28),transparent_24%)]" />
      <div className="contour-lines opacity-30" />
      <Container className="relative px-4 sm:px-6 lg:px-8">
        <nav className="mb-4 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-skyback-light/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-skyback-light/90">{crumb}</span>
        </nav>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.7fr]">
          <div>
            {eyebrow && <span className="text-sm font-bold uppercase tracking-[0.28em] text-accent">{eyebrow}</span>}
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[0.95] text-white sm:text-5xl">{title}</h1>
            {subtitle && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-skyback-light/75">{subtitle}</p>}
          </div>
          {image ? (
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-2xl" />
              <OptimizedImage
                src={image}
                alt={title}
                wrapperClassName="student-mask relative"
                className="h-[280px] w-full rounded-[2rem] object-cover shadow-card sm:h-[320px]"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
