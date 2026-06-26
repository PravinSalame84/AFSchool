import { Compass } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-skyback">
      <Container className="px-4 text-center sm:px-6 lg:px-8">
        <Compass className="mx-auto h-14 w-14 text-accent" />
        <h1 className="mt-6 text-4xl font-extrabold text-primary-900">404</h1>
        <p className="mt-3 text-lg text-primary-600">We couldn't find the page you were looking for.</p>
        <Button to="/" variant="primary" className="mt-7">
          Back to Home
        </Button>
      </Container>
    </section>
  )
}
