import { useState } from 'react'
import { Camera, X } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import OptimizedImage from '../components/ui/OptimizedImage'
import schoolContent from '../data/schoolContent'

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <>
      <Seo
        title="Gallery"
        description="View school activity, campus life and achievement highlights from Air Force School, VayuSena Nagar, Nagpur."
        path="/gallery"
        image={schoolContent.gallery[0].image}
      />
      <PageHero
        crumb="Gallery"
        eyebrow="School Highlights"
        title="A visual glimpse into school life, events and achievements."
        subtitle="Browse published school moments that reflect student participation, campus activity and institutional pride."
        image={schoolContent.gallery[0].image}
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white dark:bg-white dark:text-primary-950">
              <Camera className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Interactive Gallery</p>
              <h2 className="text-3xl font-bold uppercase text-primary-900 dark:text-white">Campus, events and achievement moments.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {schoolContent.gallery.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveImage(item)}
                className={`frost-card panel-hover overflow-hidden rounded-[2rem] p-4 text-left ${index === 0 ? 'xl:col-span-2' : ''}`}
              >
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  wrapperClassName="rounded-[1.5rem]"
                  className={`w-full rounded-[1.5rem] object-cover ${index === 0 ? 'h-[24rem]' : 'h-64'}`}
                />
                <div className="px-2 pb-2 pt-4">
                  <h3 className="text-xl font-bold uppercase text-primary-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{item.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {activeImage ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-primary-950/78 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-5xl rounded-[2rem] border border-white/10 bg-primary-950/88 p-4 shadow-card">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
              className="focus-ring absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <OptimizedImage
              src={activeImage.image}
              alt={activeImage.title}
              priority
              wrapperClassName="rounded-[1.5rem]"
              className="max-h-[78vh] w-full rounded-[1.5rem] object-contain"
            />
            <div className="px-2 pb-2 pt-4 text-white">
              <h3 className="text-2xl font-bold uppercase">{activeImage.title}</h3>
              <p className="mt-2 text-sm text-white/72">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
