import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, BookOpenCheck, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react'
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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 4800)

    return () => window.clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20">
      <div className="contour-lines" />
      <div className="pointer-events-none absolute left-[8%] top-24 hidden h-64 w-64 rounded-full border border-primary-900/10 lg:block" />
      <div className="pointer-events-none absolute right-[10%] top-24 hidden h-80 w-80 rounded-full border border-primary-900/10 dark:border-white/10 lg:block animate-spinSlow" />
      <div className="pointer-events-none absolute left-[58%] top-24 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[92px_1.05fr_0.95fr] xl:items-center">
          <div className="hidden xl:flex xl:flex-col xl:items-center xl:gap-8">
            <div className="rounded-full border border-primary-900/10 bg-white/60 p-3 text-primary-700 shadow-soft dark:border-white/10 dark:bg-primary-950/70 dark:text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="hero-index flex gap-4 text-sm font-bold uppercase tracking-[0.55em] text-primary-400 dark:text-white/45">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`${index === activeSlide ? 'text-primary-900 dark:text-white' : ''}`}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
            <ArrowDown className="h-5 w-5 text-primary-500 dark:text-white/60" />
          </div>

          <div>
            <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary-700 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-primary-950/72 dark:text-white">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {schoolContent.hero.eyebrow}
              </span>
            </motion.div>

            <motion.div initial="hidden" animate="show" custom={0.08} variants={fadeUp}>
              <div className="mt-7 flex items-start gap-5">
                <div className="hidden pt-2 sm:block">
                  <div className="h-24 w-2 rounded-full bg-gradient-to-b from-[#00d4fa] via-[#5b44ff] to-[#ff671f]" />
                </div>
                <h1 className="max-w-3xl text-[3.15rem] font-bold uppercase leading-[0.88] text-primary-900 dark:text-white sm:text-[4.6rem]">
                  Modern
                  <span className="block text-primary-500 dark:text-sky-300">Schooling</span>
                  <span className="block text-[0.56em] font-medium uppercase tracking-[0.14em] text-primary-500 dark:text-white/70">
                    With Indian Air Force Spirit
                  </span>
                </h1>
              </div>
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
                  className="rounded-full border border-primary-900/10 bg-white/72 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-700 shadow-soft dark:border-white/10 dark:bg-primary-950/72 dark:text-white"
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
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="spiral-wire left-[8%] top-[10%] h-[72%] w-[72%]" />
            <div className="spiral-wire delay right-[4%] top-[4%] h-[86%] w-[86%]" />
            <div className="hero-glow absolute right-[16%] top-[10%] h-36 w-36 rounded-full animate-radarPulse" />
            <div className="student-mask relative overflow-hidden rounded-[2.8rem] border border-white/70 bg-white/40 p-4 shadow-card backdrop-blur-xl">
              <OptimizedImage
                src={currentSlide.image}
                alt={currentSlide.title}
                priority
                wrapperClassName="rounded-[2.2rem]"
                className="h-[420px] w-full rounded-[2.2rem] object-cover object-center"
              />
            </div>
            <div className="absolute -left-3 bottom-10 max-w-[240px] frost-card rounded-[1.75rem] p-4 shadow-card">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">{currentSlide.label}</p>
              <p className="mt-1 text-lg font-bold uppercase text-primary-900 dark:text-white">{currentSlide.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{currentSlide.description}</p>
            </div>
            <div className="absolute -right-2 top-12 rounded-full bg-primary-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card dark:bg-white dark:text-primary-950">
              {schoolContent.hero.motto}
            </div>
            <div className="absolute bottom-6 right-6 flex flex-wrap gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`focus-ring inline-flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] backdrop-blur-xl transition ${
                    index === activeSlide
                      ? 'bg-primary-900 text-white dark:bg-white dark:text-primary-950'
                      : 'bg-white/78 text-primary-700 hover:bg-white dark:bg-primary-950/82 dark:text-white'
                  }`}
                >
                  {slide.label}
                </button>
              ))}
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
