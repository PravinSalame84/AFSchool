import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import BlobIcon from '../ui/BlobIcon'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import studentJourney from '../../data/studentJourney'

export default function StudentJourney() {
  return (
    <section className="section-pad bg-skyback">
      <Container className="px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="A Glimpse Into Campus Life"
            title="A Airforce School education adapts to become whatever your child needs"
            align="center"
            className="mx-auto"
          />
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studentJourney.map((item, i) => (
            <RevealOnScroll key={item.title} delay={(i % 3) * 90}>
              <Card className="h-full p-7">
                <BlobIcon icon={item.icon} tone={i % 2 === 0 ? 'primary' : 'accent'} blobIndex={i} size={76} />
                <h3 className="mt-5 text-lg font-bold text-primary-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-primary-500">{item.description}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/why-us" variant="dark">
            Enter the Student Journey
          </Button>
        </div>
      </Container>
    </section>
  )
}
