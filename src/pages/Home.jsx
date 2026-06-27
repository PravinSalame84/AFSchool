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
import OptimizedImage from '../components/ui/OptimizedImage'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import useRuntimeContent from '../hooks/useRuntimeContent'

const facilityIcons = [Laptop, BookOpenCheck, Building2, Music4, ShieldCheck, Trophy]

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
              >
                <Button
                  to={item.to}
                  variant="outline"
                  icon={false}
                  className="group flex w-full items-start justify-between rounded-[2rem] px-6 py-6 text-left"
                >
                  <div>
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

              <div className="relative overflow-hidden rounded-[2.2rem] bg-primary-900 p-6 text-white shadow-card">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgrgba(176,141,76,0.3),transparent_28%)]" />
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
                className="frost-card rounded-[1.8rem] p-5"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400">{stat.label}</p>
                <p className="mt-3 text-3xl font-bold uppercase text-primary-900 dark:text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={rise}
              className="frost-card rounded-[2.2rem] p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Campus Life</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white">
                Learning that moves beyond the classroom.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-primary-600 dark:text-slate-300">
                Air Force School encourages strong participation across academic, cultural and physical activity
                spaces so students build discipline, expression and confidence together.
              </p>

              <div className="mt-8 space-y-4">
                {schoolContent.activities.map((activity, index) => (
                  <Link
                    key={activity.title}
                    to={activity.to}
                    className="block rounded-[1.6rem] border border-primary-900/8 bg-white/80 p-4 shadow-soft transition hover:border-primary-200 dark:border-white/10 dark:bg-primary-950/70"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary-900 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold uppercase text-primary-900 dark:text-white">{activity.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{activity.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {schoolContent.gallery.slice(0, 4).map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="frost-card panel-hover overflow-hidden rounded-[2rem] p-4"
                >
                  <OptimizedImage src={item.image} alt={item.title} wrapperClassName="rounded-[1.5rem]" className="h-56 w-full rounded-[1.5rem] object-cover" />
                  <div className="px-2 pb-2 pt-4">
                    <h3 className="text-xl font-bold uppercase text-primary-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{item.caption}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="frost-card rounded-[2.4rem] bg-gradient-to-br from-white/80 to-skyback-soft/58 p-8 dark:bg-gradient-to-br dark:from-primary-950/76 dark:to-primary-900/66">
              <div className="mb-6 flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-accent" />
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Notice Board</p>
                <span className="rounded-full bg-primary-900/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-700 dark:bg-white/10 dark:text-slate-200">
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
                      className="block rounded-[1.6rem] border border-primary-900/8 bg-white/78 p-5 shadow-soft transition hover:border-primary-200 dark:border-white/10 dark:bg-primary-950/70"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary-900 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white dark:bg-white dark:text-primary-950">
                          {notice.category}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-400">{notice.date}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-bold uppercase text-primary-900 dark:text-white">{notice.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{notice.excerpt}</p>
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

            <div className="frost-card rounded-[2.4rem] bg-gradient-to-br from-white/80 to-skyback-soft/58 p-8 dark:bg-gradient-to-br dark:from-primary-950/76 dark:to-primary-900/66">
              <div className="mb-6 flex items-center gap-3">
                <DownloadCloud className="h-5 w-5 text-accent" />
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Downloads</p>
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
                    className="flex items-center justify-between rounded-[1.6rem] border border-primary-900/8 bg-white/78 px-5 py-4 shadow-soft transition hover:border-primary-200 dark:border-white/10 dark:bg-primary-950/70"
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-400">{file.category}</p>
                      <p className="mt-1 text-sm font-semibold text-primary-900 dark:text-white">{file.label}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-primary-300" />
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
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-secondary via-primary-900 to-[#214f79] p-8 text-white shadow-card sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgrgba(176,141,76,0.35),transparent_28%),radial-gradient(circle_at_left,rgba(107,124,70,0.12),transparent_20%)]" />
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
