import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'
import { states } from '../../data/locations'

export default function LocationsStrip() {
  return (
    <section className="bg-skyback py-10">
      <Container className="px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 text-sm font-bold text-primary-700">
              <MapPin className="h-4 w-4 text-accent" /> Campuses in:
            </span>
            {states.map((state) => (
              <Link
                key={state}
                to={`/locations?state=${encodeURIComponent(state)}`}
                className="focus-ring rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary-600 shadow-soft transition hover:bg-primary-900 hover:text-white"
              >
                {state}
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}
