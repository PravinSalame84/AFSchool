import { Link } from 'react-router-dom'
import { Star, Rocket, MapPin, ExternalLink } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'

const links = [
  { icon: Star, label: 'About Us', to: '/about' },
  { icon: Rocket, label: 'Airforce School Initiatives', to: '/about#initiatives' },
  { icon: MapPin, label: 'Locations', to: '/locations' },
  { icon: ExternalLink, label: 'Careers', to: 'https://careers.example.com', external: true },
]

export default function QuickLinksStrip() {
  return (
    <section className="border-y border-primary-100/40 bg-skyback-soft py-8">
      <Container className="px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {links.map(({ icon: Icon, label, to, external }) =>
              external ? (
                <a
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-accent-dark"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={to}
                  className="focus-ring flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-accent-dark"
                >
                  <Icon className="h-4 w-4" /> {label}
                </Link>
              ),
            )}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}
