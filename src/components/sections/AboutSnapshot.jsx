import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import StatCounter from '../ui/StatCounter'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import stats from '../../data/stats'
import siteConfig from '../../data/siteConfig'

export default function AboutSnapshot() {
  return (
    <section id="about-snapshot" className="bg-primary-900 section-pad">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow={`${siteConfig.brandName} ${siteConfig.brandSuffix}`}
              title="More than grades — we build well-rounded human beings"
              tone="light"
            />
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-skyback-light/80">
              Since {siteConfig.yearFounded}, {siteConfig.brandName} {siteConfig.brandSuffix} has grown into one
              of the country's most trusted school networks. Our aim has never been just to impart knowledge — it
              is to foster responsible, well-rounded, lifelong learners who go on to contribute positively to
              society.
            </p>
            <Button to="/about" variant="light" className="mt-7">
              Read Our Story
            </Button>
          </RevealOnScroll>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12">
            {stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i * 90}>
                <StatCounter {...stat} tone="light" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
