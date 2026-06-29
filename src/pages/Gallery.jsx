import { useState } from 'react'
import { Camera, X } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Carousel from '../components/ui/Carousel'
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
        title="The complete school photo gallery from campus and student life."
        subtitle={`Browse all ${schoolContent.gallery.length} published images from the media archive, covering student participation, campus activity and school achievements.`}
        image={schoolContent.gallery[0].image}
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="mb-8 flex items-start gap-3 sm:items-center">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary via-primary-800 to-primary-600 text-white dark:from-skyback-light dark:via-white dark:to-accent dark:text-primary-950">
              <Camera className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Interactive Gallery</p>
              <h2 className="text-2xl font-bold uppercase text-primary-900 dark:text-white sm:text-3xl">Campus, events and achievement moments.</h2>
              <p className="mt-2 text-sm leading-relaxed text-primary-600 dark:text-skyback-light/78">
                Every available photo from the current `media/school` and `media/students` archive is included below.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <Carousel autoPlay interval={3000} ariaLabel="Featured gallery carousel">
              {schoolContent.gallery.slice(0, 5).map((item) => (
                <button
                  key={`featured-${item.title}`}
                  type="button"
                  data-carousel-item
                  onClick={() => setActiveImage(item)}
                  className="group relative min-h-[260px] w-[300px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/50 text-left shadow-card sm:w-[420px]"
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    wrapperClassName="absolute inset-0"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-primary-900/54 to-transparent" />
                  <div className="relative flex min-h-[260px] flex-col justify-end p-5 text-white">
                    <span className="inline-flex w-fit rounded-full border border-white/16 bg-gradient-to-r from-white/14 to-skyback-light/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/92 backdrop-blur-sm">
                      Featured
                    </span>
                    <h3 className="mt-3 text-xl font-bold uppercase">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{item.caption}</p>
                  </div>
                </button>
              ))}
            </Carousel>
          </div>

          {/*
            Intentionally disabled to avoid repeating the same student showcase
            cards above the main gallery grid.
          */}
          {/* <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {schoolContent.studentShowcase.slice(0, 3).map((item) => (
              <article key={item.title} className="relative overflow-hidden rounded-[1.8rem] border border-white/50 shadow-card">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  wrapperClassName="absolute inset-0"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-primary-900/60 to-accent/10" />
                <div className="relative flex min-h-[220px] flex-col justify-end p-5 text-white">
                  <span className="inline-flex w-fit rounded-full border border-white/16 bg-white/16 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm">
                    {item.badge}
                  </span>
                  <h3 className="mt-3 text-lg font-bold uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/86">{item.caption}</p>
                </div>
              </article>
            ))}
          </div> */}

          <div className="grid items-start grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {schoolContent.gallery.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveImage(item)}
                className={`frost-card panel-hover self-start overflow-hidden rounded-[2rem] p-4 text-left ${index === 0 ? 'xl:col-span-2' : ''}`}
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
