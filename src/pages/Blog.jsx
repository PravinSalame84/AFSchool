import { useMemo, useState } from 'react'
import { Calendar } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import news from '../data/news'

export default function Blog() {
  const categories = useMemo(() => ['All', ...new Set(news.map((n) => n.category))], [])
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? news : news.filter((n) => n.category === active)

  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="Newsroom & Insights"
        title="Airforce School Blog"
        subtitle="Stories from our campuses, parenting advice and the latest in education research."
      />

      <section className="section-pad bg-skyback">
        <Container className="px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`focus-ring rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  active === cat ? 'bg-primary-900 text-white' : 'bg-white text-primary-700 hover:bg-skyback-soft'
                }`}
              >
                {cat}
              </button>
            ))}
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <RevealOnScroll key={item.id} delay={(i % 6) * 70}>
                <Card className="flex h-full flex-col p-6">
                  <Badge tone="accent">{item.category}</Badge>
                  <h3 className="mt-4 text-base font-bold leading-snug text-primary-900">{item.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-primary-500">{item.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-primary-400">
                    <Calendar className="h-3.5 w-3.5" /> {item.date}
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
