import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  Compass,
  Flag,
  Laptop,
  MapPinned,
  Music4,
  ShieldCheck,
  Sparkles,
  Trophy,
} from 'lucide-react'
import Hero from '../components/sections/Hero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import schoolContent from '../data/schoolContent'
import { useEnquiryModal } from '../context/EnquiryModalContext'

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

  return (
    <>
      <Hero />

      <section className="px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="marquee-shell rounded-full border border-primary-900/8 bg-white/70 px-3 py-3 shadow-soft backdrop-blur-xl">
            <div className="marquee-track">
              {[...schoolContent.marquee, ...schoolContent.marquee].map((item, index) => (
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
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 sm:text-5xl">
                Built on values. Designed for the next generation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-600">{schoolContent.about.narrative}</p>
              <p className="mt-4 text-base leading-relaxed text-primary-600">{schoolContent.about.extended}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {schoolContent.facts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    custom={0.08 + index * 0.05}
                    variants={rise}
                    className="rounded-[1.6rem] border border-primary-900/8 bg-white/82 p-4 shadow-soft"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400">{fact.label}</p>
                    <p className="mt-2 text-2xl font-bold uppercase text-primary-900">{fact.value}</p>
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
                  <div className="rounded-full bg-primary-900 p-3 text-white">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">Vision</p>
                    <h3 className="text-2xl font-bold uppercase text-primary-900">Confident Global Citizens</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-600">{schoolContent.about.vision}</p>
              </div>

              <div className="frost-card rounded-[2.2rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-accent p-3 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">Mission</p>
                    <h3 className="text-2xl font-bold uppercase text-primary-900">Inclusive, Child-Centred Growth</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-600">{schoolContent.about.mission}</p>
              </div>

              <div className="relative overflow-hidden rounded-[2.2rem] bg-primary-900 p-6 text-white shadow-card">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,147,75,0.3),transparent_28%)]" />
                <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                  Parent Access
                </p>
                <div className="relative mt-4 flex flex-wrap gap-3">
                  {schoolContent.resources.slice(0, 3).map((resource) => (
                    <a
                      key={resource.label}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-white/40"
                    >
                      {resource.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
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
                <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 sm:text-5xl">
                  A campus shaped for safety, curiosity and everyday excellence.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-primary-600">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-lg font-bold uppercase leading-tight text-primary-900">{facility}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
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
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900">
                Learning that moves beyond the classroom.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-primary-600">
                Air Force School encourages strong participation across academic, cultural and physical activity
                spaces so students build discipline, expression and confidence together.
              </p>

              <div className="mt-8 space-y-4">
                {schoolContent.activities.map((activity, index) => (
                  <div key={activity.title} className="rounded-[1.6rem] border border-primary-900/8 bg-white/80 p-4 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary-900 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold uppercase text-primary-900">{activity.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-primary-600">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {schoolContent.gallery.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="frost-card panel-hover overflow-hidden rounded-[2rem] p-4"
                >
                  <img src={item.image} alt={item.title} className="h-56 w-full rounded-[1.5rem] object-cover" />
                  <div className="px-2 pb-2 pt-4">
                    <h3 className="text-xl font-bold uppercase text-primary-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-600">{item.caption}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-900 p-8 text-white shadow-card sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,147,75,0.35),transparent_28%),radial-gradient(circle_at_left,rgba(0,212,250,0.12),transparent_20%)]" />
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
                  <Button size="lg" variant="ghost" href={schoolContent.resources[0].href}>
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

      <section className="section-pad px-4 pb-20 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={rise}
              className="frost-card rounded-[2.2rem] p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Visit The Campus</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900">Find Air Force School, Nagpur</h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-primary-600">
                <p>{schoolContent.contact.address}</p>
                <p>Phone: {schoolContent.contact.phone}</p>
                <p>Email: {schoolContent.contact.email}</p>
                <p>{schoolContent.contact.affiliation}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" variant="dark" to="/contact">
                  Contact The School
                </Button>
                <Button size="lg" variant="outline" href={schoolContent.contact.mapLink}>
                  Open Google Map
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/65 p-4 shadow-card backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-900 p-2.5 text-white">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">Campus Map</p>
                    <p className="text-lg font-bold uppercase text-primary-900">Air Force School VayuSena Nagar</p>
                  </div>
                </div>
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <iframe
                title="Air Force School VayuSena Nagar map"
                src={schoolContent.contact.mapEmbed}
                className="h-[420px] w-full rounded-[1.7rem] border-0"
                loading="lazy"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
