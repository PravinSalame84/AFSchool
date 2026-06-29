import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  CalendarDays,
  Compass,
  DownloadCloud,
  FileText,
  Flag,
  Laptop,
  MapPin,
  Music4,
  Phone,
  ShieldCheck,
  Trophy,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import FAQSection from '../components/sections/FAQSection'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Carousel from '../components/ui/Carousel'
import OptimizedImage from '../components/ui/OptimizedImage'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import useRuntimeContent from '../hooks/useRuntimeContent'

const facilityIcons = [Laptop, BookOpenCheck, Building2, Music4, ShieldCheck, Trophy]
const activityTones = [
  {
    card: 'border-airforce-gold/18 bg-gradient-to-br from-white/88 via-airforce-gold/8 to-skyback-soft/68 dark:border-airforce-gold/16 dark:bg-gradient-to-br dark:from-primary-950/88 dark:via-airforce-gold/10 dark:to-secondary',
    badge: 'bg-gradient-to-r from-airforce-gold to-airforce-honey text-secondary',
    icon: 'text-airforce-brown dark:text-airforce-gold',
  },
  {
    card: 'border-airforce-cyan/18 bg-gradient-to-br from-white/88 via-skyback-soft/72 to-airforce-cyan/8 dark:border-airforce-cyan/16 dark:bg-gradient-to-br dark:from-primary-950/88 dark:via-secondary dark:to-airforce-cyan/10',
    badge: 'bg-gradient-to-r from-airforce-cyan to-skyback-light text-secondary',
    icon: 'text-primary-700 dark:text-airforce-cyan',
  },
  {
    card: 'border-airforce-saffron/18 bg-gradient-to-br from-white/88 via-airforce-gold/6 to-airforce-saffron/8 dark:border-airforce-saffron/16 dark:bg-gradient-to-br dark:from-primary-950/88 dark:via-secondary dark:to-airforce-saffron/10',
    badge: 'bg-gradient-to-r from-airforce-saffron to-accent text-white',
    icon: 'text-airforce-saffronDeep dark:text-airforce-gold',
  },
]

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Home() {
  const { openEnquiry } = useEnquiryModal()
  const { content: runtimeContent, source } = useRuntimeContent()
  const liveMarquee = runtimeContent.marquee?.length ? runtimeContent.marquee : schoolContent.marquee
  const liveNotices = runtimeContent.notices?.length ? runtimeContent.notices : schoolContent.notices
  const liveDownloads = runtimeContent.downloads?.length ? runtimeContent.downloads : schoolContent.downloads

  return (
    <>
      <Seo
        title={schoolContent.meta.title}
        description={schoolContent.meta.description}
        path="/"
        image={schoolContent.hero.slides[2].image}
      />
      <Hero />

      <section className="px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="marquee-shell rounded-full border border-primary-900/8 bg-gradient-to-r from-white/86 via-skyback-soft/76 to-white/86 px-3 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-r dark:from-primary-950/78 dark:via-primary-900/74 dark:to-primary-950/78">
            <div className="marquee-track">
              {[...liveMarquee, ...liveMarquee].map((item, index) => (
                <span key={`${item}-${index}`} className="marquee-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Quick Navigation</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white sm:text-5xl">
                Everything families usually need, faster.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-primary-600 dark:text-slate-300">
              Structured access to admissions, notices, downloads, gallery, parent resources and official school information.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {schoolContent.quickLinks.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}
              >
                <Button
                  to={item.to}
                  variant="outline"
                  icon={false}
                  className="group flex w-full items-start justify-between rounded-[2rem] border-accent/30 bg-gradient-to-br from-accent/12 via-white/95 to-skyback-soft/80 px-6 py-6 text-left hover:border-accent/50 hover:bg-gradient-to-br hover:from-accent/18 hover:via-white hover:to-skyback-soft dark:from-accent/18 dark:via-primary-950/94 dark:to-primary-900/84"
                >
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-900 text-white shadow-soft dark:bg-white dark:text-primary-950">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold uppercase">{item.label}</p>
                    <p className="mt-2 text-sm normal-case tracking-normal text-primary-600 dark:text-slate-300">{item.description}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={rise}
              className="frost-card rounded-[2.2rem] p-8 sm:p-10"
            >
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">About The School</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white sm:text-5xl">
                Built on values. Designed for the next generation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.about.narrative}</p>
              <p className="mt-4 text-base leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.about.extended}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {schoolContent.facts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    custom={0.08 + index * 0.05}
                    variants={rise}
                    className="rounded-[1.6rem] border border-primary-900/8 bg-white/82 p-4 shadow-soft dark:border-white/10 dark:bg-primary-950/70"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400">{fact.label}</p>
                    <p className="mt-2 text-2xl font-bold uppercase text-primary-900 dark:text-white">{fact.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.14}
              variants={rise}
              className="grid gap-6"
            >
              <div className="frost-card rounded-[2.2rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-900 p-3 text-white dark:bg-white dark:text-primary-950">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">Vision</p>
                    <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Confident Global Citizens</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.about.vision}</p>
              </div>

              <div className="frost-card rounded-[2.2rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-accent p-3 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">Mission</p>
                    <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Inclusive, Child-Centred Growth</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.about.mission}</p>
              </div>

              <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-secondary via-primary-900 to-primary-700 p-6 text-white shadow-card">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,166,37,0.28),transparent_28%)]" />
                <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">Parent Access</p>
                <div className="relative mt-4 flex flex-wrap gap-3">
                  {schoolContent.resources.slice(0, 3).map((resource) => (
                    <Link
                      key={resource.label}
                      to={resource.to}
                      className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-white/40"
                    >
                      {resource.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={rise}>
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Infrastructure</p>
                <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white sm:text-5xl">
                  A campus shaped for safety, curiosity and everyday excellence.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-primary-600 dark:text-slate-300">
                From smart classrooms to activity rooms and wellness support, the school environment is built to
                balance focus, movement and creative growth.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schoolContent.facilities.map((facility, index) => {
              const Icon = facilityIcons[index]
              return (
                <motion.div
                  key={facility}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="frost-card panel-hover rounded-[1.9rem] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white dark:bg-white dark:text-primary-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-lg font-bold uppercase leading-tight text-primary-900 dark:text-white">{facility}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {schoolContent.statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="frost-card overflow-hidden rounded-[1.8rem] p-3"
              >
                <div className="grid gap-4 sm:grid-cols-[92px_1fr] sm:items-center">
                  <OptimizedImage
                    src={stat.image}
                    alt={stat.label}
                    wrapperClassName="rounded-[1.2rem]"
                    className="h-24 w-full rounded-[1.2rem] object-cover"
                  />
                  <div className="px-2 py-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400">{stat.label}</p>
                    <p className="mt-2 text-3xl font-bold uppercase text-primary-900 dark:text-white">{stat.value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-primary-600 dark:text-slate-300">{stat.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-6">
            <Carousel autoPlay interval={3200} ariaLabel="Student life highlights">
              {schoolContent.studentShowcase.map((item, index) => (
                <motion.article
                  key={item.title}
                  data-carousel-item
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative min-h-[250px] w-[290px] flex-shrink-0 overflow-hidden rounded-[1.9rem] border border-white/50 shadow-card sm:w-[340px]"
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    wrapperClassName="absolute inset-0"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-primary-900/46 to-info/8" />
                  <div className="relative flex min-h-[250px] flex-col justify-end p-5 text-white">
                    <span className="inline-flex w-fit rounded-full border border-white/16 bg-gradient-to-r from-white/14 to-skyback-light/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/92 backdrop-blur-sm">
                      {item.badge}
                    </span>
                    <h3 className="mt-3 text-xl font-bold uppercase">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{item.caption}</p>
                  </div>
                </motion.article>
              ))}
            </Carousel>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={rise}
              className="frost-card rounded-[2.2rem] p-6 sm:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-airforce-saffron">Campus Life</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white">
                Learning that moves beyond the classroom.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-primary-700 dark:text-skyback-light/82">
                Air Force School encourages strong participation across academic, cultural and physical activity
                spaces so students build discipline, expression and confidence together.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-gradient-to-r from-airforce-gold/18 to-airforce-honey/18 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-airforce-brown dark:text-airforce-gold">
                  Smart Learning
                </span>
                <span className="rounded-full bg-gradient-to-r from-airforce-cyan/14 to-skyback-light px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-800 dark:text-airforce-cyan">
                  Student Participation
                </span>
                <span className="rounded-full bg-gradient-to-r from-airforce-saffron/16 to-airforce-honey/18 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-airforce-brown dark:text-airforce-gold">
                  Holistic Growth
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {schoolContent.activities.map((activity, index) => {
                  const tone = activityTones[index % activityTones.length]

                  return (
                    <Link
                      key={activity.title}
                      to={activity.to}
                      className={`block rounded-[1.6rem] border p-4 shadow-soft transition hover:-translate-y-1 ${tone.card}`}
                    >
                      <div className="flex gap-4">
                        <OptimizedImage
                          src={activity.image}
                          alt={activity.title}
                          wrapperClassName="h-20 w-20 flex-shrink-0 rounded-[1.1rem]"
                          className="h-20 w-20 rounded-[1.1rem] object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] ${tone.badge}`}>
                            0{index + 1}
                          </div>
                          <div className="mt-3 flex items-start justify-between gap-3">
                            <h3 className="text-base font-bold uppercase leading-tight text-primary-900 dark:text-white">
                              {activity.title}
                            </h3>
                            <ArrowUpRight className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tone.icon}`} />
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-primary-700 dark:text-skyback-light/80">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </motion.div>

            <div className="grid items-start gap-6">
              <div className="grid items-start grid-cols-1 gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                <article className="frost-card overflow-hidden rounded-[2rem] p-4">
                  <OptimizedImage
                    src={siteAssets.images.campusActivities}
                    alt="School campus life highlights"
                    wrapperClassName="rounded-[1.5rem]"
                    className="h-64 w-full rounded-[1.5rem] object-cover sm:h-72"
                  />
                  <div className="px-2 pb-2 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-airforce-saffron dark:text-airforce-gold">
                      Campus Moments
                    </p>
                    <h3 className="mt-2 text-xl font-bold uppercase text-primary-900 dark:text-white">Visible energy across the school day.</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-700 dark:text-skyback-light/80">
                      Assemblies, collaborative spaces and student events help the campus feel active, proud and welcoming.
                    </p>
                  </div>
                </article>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  <article className="frost-card overflow-hidden rounded-[1.8rem] p-3">
                    <OptimizedImage
                      src={siteAssets.images.studentGroupStudy}
                      alt="Students studying together"
                      wrapperClassName="rounded-[1.2rem]"
                      className="h-40 w-full rounded-[1.2rem] object-cover"
                    />
                    <div className="px-2 pb-1 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-airforce-cyan">Shared Learning</p>
                      <p className="mt-2 text-sm font-semibold text-primary-900 dark:text-white">Students collaborate, revise and learn together.</p>
                    </div>
                  </article>
                  <article className="frost-card overflow-hidden rounded-[1.8rem] p-3">
                    <OptimizedImage
                      src={siteAssets.images.studentYoga}
                      alt="Students in yoga activity"
                      wrapperClassName="rounded-[1.2rem]"
                      className="h-40 w-full rounded-[1.2rem] object-cover"
                    />
                    <div className="px-2 pb-1 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-airforce-saffron dark:text-airforce-gold">Wellbeing & Balance</p>
                      <p className="mt-2 text-sm font-semibold text-primary-900 dark:text-white">Movement and mindfulness remain part of school life.</p>
                    </div>
                  </article>
                </div>
              </div>

              <div className="frost-card rounded-[2rem] p-4 sm:p-5">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-airforce-cyan">Gallery Highlights</p>
                    <h3 className="mt-2 text-2xl font-bold uppercase text-primary-900 dark:text-white">
                      Real moments from classrooms, campus and student activities.
                    </h3>
                  </div>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-airforce-saffron dark:text-skyback-light dark:hover:text-airforce-gold"
                  >
                    Open full gallery
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

              <Carousel autoPlay interval={3600} ariaLabel="Campus gallery highlights">
                {schoolContent.gallery.slice(0, 8).map((item, index) => (
                  <motion.article
                    key={item.title}
                    data-carousel-item
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="panel-hover self-start w-[290px] flex-shrink-0 overflow-hidden rounded-[1.8rem] border border-primary-900/8 bg-white/90 p-3 shadow-soft dark:border-white/10 dark:bg-primary-900/84 sm:w-[340px]"
                  >
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      wrapperClassName="rounded-[1.35rem]"
                      className="h-52 w-full rounded-[1.35rem] object-cover"
                    />
                    <div className="px-2 pb-2 pt-4">
                      <h3 className="text-lg font-bold uppercase text-primary-900 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-700 dark:text-skyback-light/80">{item.caption}</p>
                    </div>
                  </motion.article>
                ))}
              </Carousel>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="frost-card rounded-[2.4rem] bg-gradient-to-br from-white/92 via-surface-soft to-airforce-gold/8 p-8 dark:bg-gradient-to-br dark:from-primary-950/96 dark:via-secondary dark:to-primary-900/94">
              <div className="mb-6 flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-airforce-saffron" />
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-airforce-saffron">Notice Board</p>
                <span className="rounded-full bg-gradient-to-r from-airforce-gold/18 to-airforce-honey/18 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-airforce-brown dark:bg-gradient-to-r dark:from-airforce-gold/18 dark:to-airforce-saffron/12 dark:text-airforce-gold">
                  {source === 'live' ? 'Live Feed' : 'School Archive'}
                </span>
              </div>
              <div className="space-y-4">
                {liveNotices.slice(0, 4).map((notice, index) => (
                  <motion.div
                    key={notice.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={notice.to}
                      className="block rounded-[1.6rem] border border-primary-900/8 bg-white/88 p-5 shadow-soft transition hover:border-airforce-saffron/30 hover:bg-airforce-gold/5 dark:border-white/10 dark:bg-primary-900/84 dark:hover:border-airforce-gold/30 dark:hover:bg-primary-900"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-gradient-to-r from-airforce-saffron to-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                          {notice.category}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-500 dark:text-airforce-gold/88">{notice.date}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-bold uppercase text-primary-900 dark:text-white">{notice.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-600 dark:text-skyback-light/82">{notice.excerpt}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <Button to="/notice-board" variant="outline">
                  Explore All Notices
                </Button>
              </div>
            </div>

            <div className="frost-card rounded-[2.4rem] bg-gradient-to-br from-white/92 via-surface-soft to-airforce-cyan/8 p-8 dark:bg-gradient-to-br dark:from-primary-950/96 dark:via-secondary dark:to-primary-900/94">
              <div className="mb-6 flex items-center gap-3">
                <DownloadCloud className="h-5 w-5 text-airforce-cyan" />
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-airforce-cyan">Downloads</p>
              </div>
              <div className="space-y-4">
                {liveDownloads.map((file, index) => (
                  <motion.a
                    key={file.label}
                    href={file.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between rounded-[1.6rem] border border-primary-900/8 bg-white/88 px-5 py-4 shadow-soft transition hover:border-airforce-cyan/30 hover:bg-airforce-cyan/5 dark:border-white/10 dark:bg-primary-900/84 dark:hover:border-airforce-gold/24 dark:hover:bg-primary-900"
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-500 dark:text-airforce-gold/88">{file.category}</p>
                      <p className="mt-1 text-sm font-semibold text-primary-900 dark:text-white">{file.label}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-primary-300 dark:text-airforce-gold" />
                  </motion.a>
                ))}
              </div>
              <div className="mt-6">
                <Button to="/downloads" variant="outline">
                  Open Download Centre
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-secondary via-primary-900 to-primary-700 p-8 text-white shadow-card sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,166,37,0.35),transparent_28%),radial-gradient(circle_at_left,rgba(93,138,168,0.14),transparent_20%)]" />
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr]">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={rise}>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Admissions</p>
                <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-white sm:text-5xl">
                  Start your school enquiry with clarity and confidence.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/72">{schoolContent.admissions.intro}</p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" variant="light" onClick={() => openEnquiry('Admissions Enquiry')}>
                    Enquire For Admission
                  </Button>
                  <Button size="lg" variant="ghost" to={schoolContent.resources[0].to}>
                    View Public Disclosure
                  </Button>
                </div>
              </motion.div>

              <div className="grid gap-4">
                {schoolContent.admissions.steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[1.7rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-white/12 px-3 py-1 text-sm font-bold uppercase tracking-[0.16em] text-white">
                        0{index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-white/80">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="frost-card rounded-[2.3rem] bg-gradient-to-br from-white/80 to-skyback-soft/58 p-8 dark:bg-gradient-to-br dark:from-primary-950/76 dark:to-primary-900/66">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-accent" />
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Leadership Preview</p>
              </div>
              <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white">
                Transparent school governance and parent access.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.leadership.intro}</p>
              <div className="mt-6 space-y-3">
                  {schoolContent.leadership.resources.slice(0, 3).map((resource) => (
                  <Link
                    key={resource.title}
                    to={resource.to}
                    className="flex items-center justify-between rounded-[1.4rem] border border-primary-900/8 bg-white/78 px-5 py-4 shadow-soft transition hover:border-primary-200 dark:border-white/10 dark:bg-primary-950/70"
                  >
                    <span className="text-sm font-semibold text-primary-900 dark:text-white">{resource.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-primary-300" />
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Button to="/leadership" variant="outline">
                  Explore Leadership
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.3rem] border border-white/70 bg-gradient-to-br from-white/84 to-skyback-soft/68 p-4 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-primary-950/84 dark:to-primary-900/70">
              <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-400">Campus Contact</p>
                  <h2 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Air Force School VayuSena Nagar</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`tel:${schoolContent.contact.phone}`}
                    className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white dark:bg-white dark:text-primary-950"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Call
                  </a>
                  <a
                    href={schoolContent.contact.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary-900/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-800 dark:border-white/10 dark:text-white"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    Open Map
                  </a>
                </div>
              </div>
              <iframe
                title="Air Force School VayuSena Nagar map"
                src={schoolContent.contact.mapEmbed}
                className="h-[420px] w-full rounded-[1.8rem] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      <FAQSection />
    </>
  )
}
