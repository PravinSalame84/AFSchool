import { GraduationCap, Sparkles, Users } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import BlobIcon from '../ui/BlobIcon'
import siteConfig from '../../data/siteConfig'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

export default function Hero() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-skyback via-skyback to-skyback-soft">
      {/* decorative background shapes */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative grid grid-cols-1 items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-700 shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> {siteConfig.yearsOfExperience}+ Years of Excellence
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-primary-900 sm:text-5xl lg:text-[3.4rem]">
            {siteConfig.yearsOfExperience}+ Years of Nurturing{' '}
            <span className="text-accent-dark">Creative Thinkers</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-600">
            {siteConfig.tagline} — through a curriculum that balances academic rigour with real-world skills,
            across {siteConfig.shortName} campuses nationwide.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" variant="primary" onClick={() => openEnquiry('Admissions Enquiry')}>
              {siteConfig.cta.admissions}
            </Button>
            <Button size="lg" variant="outline" to="/why-us" icon={false}>
              Explore Why Airforce School
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary-500" />
              <span className="text-sm font-semibold text-primary-700">210,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary-500" />
              <span className="text-sm font-semibold text-primary-700">142 Campuses</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center sm:h-[440px]">
          <div className="absolute inset-0 rounded-[3rem] bg-white/50 shadow-card backdrop-blur" />
          <div className="relative grid grid-cols-2 gap-6 p-8">
            <div className="animate-floatY" style={{ animationDelay: '0s' }}>
              <BlobIcon icon="GraduationCap" tone="dark" size={120} blobIndex={0} />
            </div>
            <div className="animate-floatY" style={{ animationDelay: '0.6s' }}>
              <BlobIcon icon="FlaskConical" tone="accent" size={100} blobIndex={1} />
            </div>
            <div className="animate-floatY" style={{ animationDelay: '1.2s' }}>
              <BlobIcon icon="Globe2" tone="sky" size={100} blobIndex={2} />
            </div>
            <div className="animate-floatY" style={{ animationDelay: '0.3s' }}>
              <BlobIcon icon="BookOpen" tone="primary" size={120} blobIndex={0} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
