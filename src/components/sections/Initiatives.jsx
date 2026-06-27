import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import BlobIcon from '../ui/BlobIcon'
import Carousel from '../ui/Carousel'
import RevealOnScroll from '../ui/RevealOnScroll'
import initiatives from '../../data/initiatives'

const iconForImage = {
  campus: 'Building2',
  partnership: 'Handshake',
  preschool: 'School',
  toddler: 'Baby',
  college: 'GraduationCap',
  training: 'Lightbulb',
  tours: 'Plane',
}

const iconTones = ['primary', 'accent', 'success', 'earth', 'slate', 'dark']

export default function Initiatives() {
  return (
    <section className="section-pad bg-skyback-soft">
      <Container className="px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Beyond the Classroom"
            title="Airforce School Initiatives"
            subtitle="A family of ventures, each built to support a different stage of the learning journey."
          />
        </RevealOnScroll>

        <div className="mt-10">
          <Carousel ariaLabel="Airforce School initiatives">
            {initiatives.map((item, index) => (
              <div key={item.title} data-carousel-item className="w-[280px] flex-shrink-0 snap-start sm:w-[320px]">
                <Card className="flex h-full flex-col p-7">
                  <BlobIcon
                    icon={iconForImage[item.image] || 'Sparkles'}
                    tone={iconTones[index % iconTones.length]}
                    size={72}
                  />
                  <h3 className="mt-5 text-base font-bold text-primary-900">{item.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-primary-500">{item.description}</p>
                  <a href={item.href} className="focus-ring mt-4 text-sm font-bold text-accent-dark hover:underline">
                    Read More &rarr;
                  </a>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  )
}
