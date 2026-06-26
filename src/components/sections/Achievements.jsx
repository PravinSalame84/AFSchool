import { Award } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Carousel from '../ui/Carousel'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import achievements from '../../data/achievements'

export default function Achievements() {
  return (
    <section className="section-pad bg-skyback">
      <Container className="px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Recognition"
            title="Our Achievements"
            subtitle="We're honoured to be recognised for our commitment to quality, year after year."
            align="center"
            className="mx-auto"
          />
        </RevealOnScroll>

        <div className="mt-10">
          <Carousel ariaLabel="Awards and achievements">
            {achievements.map((item) => (
              <div
                key={item.title}
                data-carousel-item
                className="w-[260px] flex-shrink-0 snap-start rounded-xl2 bg-white p-6 shadow-soft sm:w-[300px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                  <Award className="h-6 w-6" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-accent-dark">{item.year}</p>
                <h3 className="mt-1.5 text-[15px] font-bold leading-snug text-primary-900">{item.title}</h3>
                <p className="mt-2 text-xs text-primary-400">{item.org}</p>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="mt-8 flex justify-center">
          <Button to="/about#awards" variant="outline">
            View All Achievements
          </Button>
        </div>
      </Container>
    </section>
  )
}
