import { ArrowUpRight, BookOpenCheck, ClipboardPenLine, Dumbbell, Sparkles } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'

const icons = [BookOpenCheck, ClipboardPenLine, Dumbbell, Sparkles]

export default function Academics() {
  return (
    <>
      <Seo
        title="Academics"
        description="Explore curriculum, co-curricular activity, sports and school learning culture at Air Force School, VayuSena Nagar, Nagpur."
        path="/academics"
        image="https://www.airforce.skoolmate.in/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-28-at-2.42.11-PM.jpeg"
      />
      <PageHero
        crumb="Academics"
        eyebrow="Learning Experience"
        title="Balanced academics with activity, discipline and creative growth."
        subtitle="Air Force School follows a broad, well-balanced and relevant approach to teaching, supported by co-curricular, sports and whole-child development."
        image="https://www.airforce.skoolmate.in/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-28-at-2.42.11-PM.jpeg"
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="frost-card rounded-[2.2rem] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Academic Philosophy</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white">
                Broad, well-balanced and relevant learning.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.academics.overview}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {schoolContent.statistics.map((stat) => (
                  <div key={stat.label} className="rounded-[1.4rem] border border-primary-900/8 bg-white/75 p-4 shadow-soft dark:border-white/10 dark:bg-primary-950/65">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400">{stat.label}</p>
                    <p className="mt-2 text-xl font-bold uppercase text-primary-900 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {schoolContent.academics.programmes.map((item, index) => {
                const Icon = icons[index]
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`frost-card panel-hover rounded-[1.9rem] p-6 ${index === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white dark:bg-white dark:text-primary-950">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-5 text-2xl font-bold uppercase leading-tight text-primary-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{item.description}</p>
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 text-primary-300" />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schoolContent.facilities.map((facility) => (
              <div key={facility} className="frost-card rounded-[1.8rem] p-6">
                <p className="text-lg font-bold uppercase leading-tight text-primary-900 dark:text-white">{facility}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
