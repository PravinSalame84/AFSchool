import { motion } from 'framer-motion'
import { Compass, Flag, ShieldCheck, Sparkles } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <>
      <Seo
        title="About School"
        description="Learn about the legacy, vision, mission and school story of Air Force School, VayuSena Nagar, Nagpur."
        path="/about"
        image={siteAssets.images.chief}
      />
      <PageHero
        crumb="About"
        eyebrow="School Story"
        title="A values-led school legacy in VayuSena Nagar, Nagpur."
        subtitle="Air Force School was established to provide quality education with discipline, care and a broad learning experience for every child."
        image={siteAssets.images.chief}
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="frost-card rounded-[2.2rem] p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Who We Are</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white sm:text-5xl">
                Education rooted in discipline, inclusion and growth.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.about.narrative}</p>
              <p className="mt-4 text-base leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.about.extended}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {schoolContent.facts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    custom={0.08 + index * 0.05}
                    variants={reveal}
                    className="rounded-[1.5rem] border border-primary-900/8 bg-white/80 p-4 shadow-soft dark:border-white/10 dark:bg-primary-950/70"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400">{fact.label}</p>
                    <p className="mt-2 text-2xl font-bold uppercase text-primary-900 dark:text-white">{fact.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0.1} variants={reveal} className="frost-card rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-900 p-3 text-white dark:bg-white dark:text-primary-950">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">Vision</p>
                    <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Confident & Self-Sustaining</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.about.vision}</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0.16} variants={reveal} className="frost-card rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-accent p-3 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">Mission</p>
                    <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Inclusive Child Development</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.about.mission}</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0.22} variants={reveal} className="relative overflow-hidden rounded-[2rem] bg-primary-900 p-6 text-white shadow-card">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,147,75,0.28),transparent_28%)]" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/60">Registered With</p>
                  </div>
                  <p className="mt-4 text-xl font-bold uppercase leading-tight">
                    Indian Air Force Educational and Cultural Society, New Delhi
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    Teaching is Learning
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
