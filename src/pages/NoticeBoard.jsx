import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Newspaper } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'

export default function NoticeBoard() {
  return (
    <>
      <Seo
        title="Notice Board"
        description="Stay updated with school notices, calendar updates, publications and official announcements from Air Force School, VayuSena Nagar, Nagpur."
        path="/notice-board"
        image={siteAssets.images.bestAward}
      />
      <PageHero
        crumb="Notice Board"
        eyebrow="Announcements & Updates"
        title="Important school notices and official updates in one place."
        subtitle="Browse current notices, downloads and school publications directly within this website."
        image={siteAssets.images.bestAward}
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              {schoolContent.notices.map((notice) => (
                <Link key={notice.title} to={notice.to} className="frost-card panel-hover block rounded-[2rem] p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-400">
                    <span className="rounded-full bg-primary-900 px-3 py-1 text-white dark:bg-white dark:text-primary-950">
                      {notice.category}
                    </span>
                    <span>{notice.date}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold uppercase leading-tight text-primary-900 dark:text-white">
                    {notice.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{notice.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-dark dark:text-accent">
                    Open Notice <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              <div className="frost-card rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-accent" />
                  <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Event Highlights</h3>
                </div>
                <div className="mt-5 space-y-4">
                  {schoolContent.events.map((event) => (
                    <Link
                      key={event.title}
                      to={event.to}
                      className="block rounded-[1.4rem] border border-primary-900/8 bg-white/80 px-4 py-4 transition hover:border-primary-200 dark:border-white/10 dark:bg-primary-950/70"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-400">{event.date}</p>
                      <p className="mt-2 text-sm font-semibold text-primary-800 dark:text-white">{event.title}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="frost-card rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <Newspaper className="h-5 w-5 text-accent" />
                  <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Quick Access</h3>
                </div>
                <div className="mt-5 space-y-3">
                  {schoolContent.resources.slice(0, 4).map((resource) => (
                    <Link
                      key={resource.label}
                      to={resource.to}
                      className="flex items-center justify-between rounded-[1.2rem] border border-primary-900/8 bg-white/80 px-4 py-3 text-sm font-semibold text-primary-700 transition hover:border-primary-200 dark:border-white/10 dark:bg-primary-950/70 dark:text-white"
                    >
                      {resource.label}
                      <ArrowUpRight className="h-4 w-4 text-primary-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
