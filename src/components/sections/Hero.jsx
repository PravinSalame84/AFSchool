import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BookOpenCheck, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import OptimizedImage from '../ui/OptimizedImage'

const featureIcons = [BookOpenCheck, GraduationCap, ShieldCheck]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { openEnquiry } = useEnquiryModal()
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = schoolContent.hero.slides
  const currentSlide = slides[activeSlide]
  const supportingImage = schoolContent.gallery[1].image

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 4800)

    return () => window.clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20">
      <div className="contour-lines" />
      <div className="hero-orb sky left-[4%] top-20 h-44 w-44" />
      <div className="hero-orb sun right-[10%] top-24 h-52 w-52" />
      <div className="pointer-events-none absolute left-[8%] top-28 hidden h-64 w-64 rounded-full border border-primary-900/8 lg:block" />
      <div className="pointer-events-none absolute right-[8%] top-20 hidden h-80 w-80 rounded-full border border-primary-900/8 dark:border-white/10 lg:block animate-spinSlow" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[86px_1.02fr_0.98fr] xl:items-center">
          <div className="hidden xl:flex xl:flex-col xl:items-center xl:gap-8">
            <div className="eyebrow-pill rounded-full p-3 text-primary-700 dark:text-white">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <div className="hero-index flex gap-4 text-sm font-bold uppercase tracking-[0.5em] text-primary-300 dark:text-white/40">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`transition ${index === activeSlide ? 'text-primary-900 dark:text-white' : 'hover:text-primary-600 dark:hover:text-white/75'}`}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-primary-900/25 via-primary-400/40 to-transparent dark:from-white/20 dark:via-white/12" />
          </div>

          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
              <span className="eyebrow-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary-700 dark:text-white">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {schoolContent.hero.eyebrow}
              </span>
            </motion.div>

            <motion.div initial="hidden" animate="show" custom={0.08} variants={fadeUp}>
              <h1 className="mt-7 max-w-4xl text-[3rem] font-bold uppercase leading-[0.88] text-primary-900 dark:text-white sm:text-[4.6rem]">
                Premium Schooling
                <span className="block bg-gradient-to-r from-[#2d5f8d] via-[#5d8aa8] to-[#7aaec9] bg-clip-text text-transparent dark:from-sky-200 dark:via-sky-300 dark:to-cyan-200">
                  With Air Force Character
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.16}
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-600 dark:text-slate-300"
            >
              {schoolContent.hero.title} {schoolContent.hero.subtitle}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.22}
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              {schoolContent.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="eyebrow-pill rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-700 dark:text-white"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button size="lg" variant="dark" onClick={() => openEnquiry('Admissions Enquiry')}>
                {siteConfig.cta.admissions}
              </Button>
              <Button size="lg" variant="outline" to="/about" icon={false}>
                Explore School Story
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.38}
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {[
                { label: 'Academic Discipline', value: 'Modern classrooms and structured learning' },
                { label: 'Student Wellbeing', value: 'Safe campus and caring teacher guidance' },
                { label: 'Holistic Growth', value: 'Sports, activities and parent-friendly access' },
              ].map((point) => (
                <div key={point.label} className="frost-card rounded-[1.6rem] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400">{point.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-primary-800 dark:text-slate-200">{point.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="spiral-wire left-[4%] top-[12%] h-[72%] w-[72%]" />
            <div className="spiral-wire delay right-[2%] top-[4%] h-[88%] w-[88%]" />
            <div className="hero-glow absolute right-[18%] top-[12%] h-36 w-36 rounded-full animate-radarPulse" />

            <div className="hero-stage p-4 sm:p-5">
              <div className="relative">
                <div className="hero-cutout p-3">
                  <OptimizedImage
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    priority
                    wrapperClassName="rounded-[2rem]"
                    className="h-[500px] w-full rounded-[2rem] object-cover object-center"
                  />
                </div>

                <div className="absolute right-4 top-4 hidden max-w-[220px] sm:block">
                  <div className="glass-plate rounded-[1.6rem] p-3">
                    <div className="hero-cutout p-2">
                      <OptimizedImage
                        src={supportingImage}
                        alt="Student moments"
                        wrapperClassName="rounded-[1.4rem]"
                        className="h-[155px] w-full rounded-[1.4rem] object-cover object-center"
                      />
                    </div>
                    <div className="mt-3 rounded-[1.35rem] bg-gradient-to-r from-secondary to-primary-700 px-4 py-3 text-white dark:from-white dark:to-slate-100 dark:text-primary-950">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 dark:text-primary-700">
                        School Motto
                      </p>
                      <p className="mt-2 text-sm font-bold uppercase">{schoolContent.hero.motto}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`focus-ring hero-slide-card p-4 text-left ${index === activeSlide ? 'active' : ''}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-400">{slide.label}</p>
                          <p className="mt-2 text-sm font-bold uppercase text-primary-900 dark:text-white">{slide.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{slide.description}</p>
                        </div>
                        <ArrowUpRight
                          className={`mt-0.5 h-4 w-4 flex-shrink-0 transition ${
                            index === activeSlide
                              ? 'text-primary-700 dark:text-sky-200'
                              : 'text-primary-300 dark:text-slate-400'
                          }`}
                        />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3 sm:hidden">
                  <div className="glass-plate flex-1 rounded-[1.35rem] px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-400">School Motto</p>
                    <p className="mt-2 text-sm font-bold uppercase text-primary-900 dark:text-white">{schoolContent.hero.motto}</p>
                  </div>
                  <div className="hero-cutout w-[108px] p-2">
                    <OptimizedImage
                      src={supportingImage}
                      alt="Student moments"
                      wrapperClassName="rounded-[1rem]"
                      className="h-[90px] w-full rounded-[1rem] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 bottom-36 hidden max-w-[260px] rounded-[1.8rem] bg-white/92 px-4 py-4 shadow-card backdrop-blur-xl sm:block dark:bg-primary-950/92">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-400">Why Parents Choose Us</p>
              <p className="mt-2 text-lg font-bold uppercase text-primary-900 dark:text-white">{currentSlide.title}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-slate-200">
                Explore academics
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {schoolContent.quickStats.map((card, index) => {
            const Icon = featureIcons[index]
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="slant-card frost-card panel-hover rounded-[2rem] p-4"
              >
                <div className={`relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${card.accent} p-5 text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">{card.title}</p>
                      <h3 className="mt-4 max-w-[12rem] text-3xl font-bold uppercase leading-none">{card.value}</h3>
                    </div>
                    <div className="rounded-full bg-white/18 p-3">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <OptimizedImage
                    src={card.image}
                    alt={card.title}
                    wrapperClassName="mt-5 rounded-[1.2rem]"
                    className="h-44 w-full rounded-[1.2rem] object-cover shadow-card"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 px-2 pb-2 pt-4">
                  <p className="text-sm leading-relaxed text-primary-600 dark:text-slate-300">{card.description}</p>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-300" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
