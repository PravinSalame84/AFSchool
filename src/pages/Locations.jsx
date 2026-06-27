import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Search } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import locations, { states } from '../data/locations'
import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function Locations() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const activeState = params.get('state') || 'All'
  const { openEnquiry } = useEnquiryModal()

  const filteredStates = activeState === 'All' ? states : [activeState]

  const campuses = useMemo(() => {
    const list = []
    filteredStates.forEach((state) => {
      Object.entries(locations[state] || {}).forEach(([city, schools]) => {
        schools.forEach((school) => list.push({ state, city, school }))
      })
    })
    if (!query.trim()) return list
    const q = query.toLowerCase()
    return list.filter(
      (c) => c.school.toLowerCase().includes(q) || c.city.toLowerCase().includes(q) || c.state.toLowerCase().includes(q),
    )
  }, [filteredStates, query])

  return (
    <>
      <PageHero
        crumb="Locations"
        eyebrow="Find a Campus"
        title="Airforce School Campuses Near You"
        subtitle="142 campuses across 8 states and counting — find the one closest to you."
      />

      <section className="section-pad bg-skyback">
        <Container className="px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by campus, city or state"
              className="w-full max-w-sm"
              startAdornment={<Search className="h-4 w-4 text-primary-300" />}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '999px',
                },
              }}
            />

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setParams({})}
                className={`focus-ring rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  activeState === 'All' ? 'bg-primary-900 text-white' : 'bg-white text-primary-700 hover:bg-skyback-soft'
                }`}
              >
                All States
              </button>
              {states.map((state) => (
                <button
                  key={state}
                  type="button"
                  onClick={() => setParams({ state })}
                  className={`focus-ring rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                    activeState === state ? 'bg-primary-900 text-white' : 'bg-white text-primary-700 hover:bg-skyback-soft'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {campuses.map((c, i) => (
              <RevealOnScroll key={`${c.school}-${i}`} delay={(i % 6) * 70}>
                <div className="flex h-full flex-col rounded-xl2 bg-white p-6 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skyback-soft text-primary-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold leading-snug text-primary-900">{c.school}</h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-primary-400">
                    {c.city}, {c.state}
                  </p>
                  <button
                    type="button"
                    onClick={() => openEnquiry('Campus Enquiry')}
                    className="focus-ring mt-4 text-left text-sm font-bold text-accent-dark hover:underline"
                  >
                    Enquire about this campus &rarr;
                  </button>
                </div>
              </RevealOnScroll>
            ))}

            {campuses.length === 0 && (
              <p className="col-span-full py-10 text-center text-sm text-primary-400">
                No campuses match your search. Try a different city or state.
              </p>
            )}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="primary" onClick={() => openEnquiry('General Enquiry')}>
              Can't find a campus near you? Ask us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
