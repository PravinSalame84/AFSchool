import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Newspaper } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import useRuntimeContent from '../hooks/useRuntimeContent'

const noticeTones = [
  {
    shell: 'border-airforce-gold/20 hover:border-airforce-gold/30 dark:border-airforce-gold/18 dark:hover:border-airforce-gold/28',
    chip: 'bg-gradient-to-r from-airforce-gold to-airforce-honey text-secondary',
    cta: 'text-airforce-brown dark:text-airforce-gold',
  },
  {
    shell: 'border-airforce-cyan/20 hover:border-airforce-cyan/30 dark:border-airforce-cyan/18 dark:hover:border-airforce-cyan/26',
    chip: 'bg-gradient-to-r from-airforce-cyan to-skyback-light text-secondary',
    cta: 'text-primary-700 dark:text-airforce-cyan',
  },
  {
    shell: 'border-airforce-saffron/20 hover:border-airforce-saffron/32 dark:border-airforce-saffron/18 dark:hover:border-airforce-saffron/30',
    chip: 'bg-gradient-to-r from-airforce-saffron to-accent text-white',
    cta: 'text-airforce-saffronDeep dark:text-airforce-gold',
  },
]

export default function NoticeBoard() {
  const { content: runtimeContent, source } = useRuntimeContent()
  const notices = runtimeContent.notices?.length ? runtimeContent.notices : schoolContent.notices
  const events = runtimeContent.events?.length ? runtimeContent.events : schoolContent.events

  return (
    <>
      <Seo
        title="Notice Board"
        description="Stay updated with school notices, calendar updates, publications and official announcements from Air Force School, VayuSena Nagar, Nagpur."
        path="/notice-board"
        image={siteAssets.images.studentCampusEvent}
      />
      <PageHero
        crumb="Notice Board"
        eyebrow="Announcements & Updates"
        title="Important school notices and official updates in one place."
        subtitle="Browse current notices, downloads and school publications directly within this website."
        image={siteAssets.images.studentCampusEvent}
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              {notices.map((notice, index) => {
                const tone = noticeTones[index % noticeTones.length]

                return (
                <Link
                  key={notice.title}
                  to={notice.to}
                  className={`frost-card panel-hover block rounded-[2rem] bg-white/90 p-6 transition dark:bg-primary-900/84 ${tone.shell}`}
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-400 dark:text-skyback-light/88">
                    <span className={`rounded-full px-3 py-1 ${tone.chip}`}>
                      {notice.category}
                    </span>
                    <span className="text-primary-500 dark:text-airforce-gold/88">{notice.date}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold uppercase leading-tight text-primary-900 dark:text-white">
                    {notice.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-primary-700 dark:text-skyback-light/82">{notice.excerpt}</p>
                  <span className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${tone.cta}`}>
                    Open Notice <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
                )
              })}
            </div>

            <div className="space-y-6">
              <div className="frost-card rounded-[2rem] bg-white/92 p-6 dark:bg-primary-900/88">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-airforce-gold" />
                  <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Event Highlights</h3>
                  <span className="rounded-full bg-gradient-to-r from-airforce-gold/18 to-airforce-honey/18 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-airforce-brown dark:bg-gradient-to-r dark:from-airforce-gold/18 dark:to-airforce-saffron/12 dark:text-airforce-gold">
                    {source === 'live' ? 'Live' : 'Local'}
                  </span>
                </div>
                <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-airforce-cyan/18">
                  <img
                    src={siteAssets.images.studentConference}
                    alt="Students during a school event"
                    className="h-44 w-full object-cover"
                  />
                </div>
                <div className="mt-5 space-y-4">
                  {events.map((event, index) => (
                    <Link
                      key={event.title}
                      to={event.to}
                      className={`block rounded-[1.4rem] border px-4 py-4 transition ${
                        index % 2 === 0
                          ? 'border-airforce-cyan/16 bg-white/86 hover:border-airforce-cyan/30 hover:bg-airforce-cyan/5 dark:border-airforce-cyan/18 dark:bg-primary-950/40 dark:hover:border-airforce-cyan/30 dark:hover:bg-primary-950/55'
                          : 'border-airforce-saffron/16 bg-white/86 hover:border-airforce-saffron/30 hover:bg-airforce-gold/5 dark:border-airforce-saffron/16 dark:bg-primary-950/40 dark:hover:border-airforce-saffron/30 dark:hover:bg-primary-950/55'
                      }`}
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-500 dark:text-airforce-gold/86">{event.date}</p>
                      <p className="mt-2 text-sm font-semibold text-primary-800 dark:text-white">{event.title}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="frost-card rounded-[2rem] bg-white/92 p-6 dark:bg-primary-900/88">
                <div className="flex items-center gap-3">
                  <Newspaper className="h-5 w-5 text-airforce-saffron" />
                  <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Quick Access</h3>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <img
                    src={siteAssets.images.schoolGate}
                    alt="School entrance"
                    className="h-28 w-full rounded-[1.2rem] object-cover"
                  />
                  <img
                    src={siteAssets.images.studentLibrary}
                    alt="Students in library"
                    className="h-28 w-full rounded-[1.2rem] object-cover"
                  />
                </div>
                <div className="mt-5 space-y-3">
                  {schoolContent.resources.slice(0, 4).map((resource, index) => (
                    <Link
                      key={resource.label}
                      to={resource.to}
                      className={`flex items-center justify-between rounded-[1.2rem] border px-4 py-3 text-sm font-semibold transition ${
                        index % 2 === 0
                          ? 'border-airforce-gold/16 bg-white/84 text-primary-700 hover:border-airforce-gold/30 hover:bg-airforce-gold/5 dark:border-airforce-gold/16 dark:bg-primary-950/40 dark:text-white dark:hover:border-airforce-gold/28 dark:hover:bg-primary-950/55'
                          : 'border-airforce-cyan/16 bg-white/84 text-primary-700 hover:border-airforce-cyan/30 hover:bg-airforce-cyan/5 dark:border-airforce-cyan/16 dark:bg-primary-950/40 dark:text-white dark:hover:border-airforce-cyan/28 dark:hover:bg-primary-950/55'
                      }`}
                    >
                      {resource.label}
                      <ArrowUpRight className="h-4 w-4 text-primary-300 dark:text-airforce-gold" />
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
