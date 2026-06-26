import { motion } from 'framer-motion'
import { BookOpenCheck, Building2, HeartHandshake, ShieldCheck, Trophy } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import schoolContent from '../data/schoolContent'

const icons = [BookOpenCheck, HeartHandshake, ShieldCheck, Building2, Trophy]

export default function WhyUs() {
  return (
    <>
      <PageHero
        crumb="Campus Life"
        eyebrow="Why Families Choose Us"
        title="A disciplined and vibrant school experience for growing minds."
        subtitle="Air Force School combines values, structure and warm student support with strong academic and co-curricular opportunity."
        image="https://www.airforce.skoolmate.in/wp-content/uploads/2020/03/UNITY-RUN-COLLAGE-2.png"
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schoolContent.pillars.map((pillar, index) => {
              const Icon = icons[index]
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`frost-card panel-hover rounded-[2rem] p-6 ${index === 0 ? 'xl:col-span-2' : ''}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold uppercase leading-tight text-primary-900">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-primary-600">{pillar.description}</p>
                </motion.article>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
