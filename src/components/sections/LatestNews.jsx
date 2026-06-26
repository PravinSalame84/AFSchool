import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import news from '../../data/news'

export default function LatestNews() {
  const featured = news.slice(0, 3)

  return (
    <section className="section-pad bg-skyback">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Newsroom" title="Latest News" />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Button to="/blog" variant="outline" size="sm">
              View All News
            </Button>
          </RevealOnScroll>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 90}>
              <Card as={Link} to="/blog" className="flex h-full flex-col p-6">
                <Badge tone="accent">{item.category}</Badge>
                <h3 className="mt-4 line-clamp-2 text-base font-bold leading-snug text-primary-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-primary-500">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-primary-400">
                  <Calendar className="h-3.5 w-3.5" /> {item.date}
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
