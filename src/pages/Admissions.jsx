import { motion } from 'framer-motion'
import { ClipboardList, FileCheck2, PhoneCall, School } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import schoolContent from '../data/schoolContent'
import { useEnquiryModal } from '../context/EnquiryModalContext'

const stepIcons = [PhoneCall, School, FileCheck2, ClipboardList]

export default function Admissions() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <>
      <PageHero
        crumb="Admissions"
        eyebrow="Admission Journey"
        title="Begin your admission enquiry with the school office."
        subtitle="Families can connect with Air Force School for availability, process guidance and documentation support for classes from LKG to IX."
        image="https://www.airforce.skoolmate.in/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-28-at-2.42.11-PM.jpeg"
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="grid gap-5">
              {schoolContent.admissions.steps.map((step, index) => {
                const Icon = stepIcons[index]
                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="frost-card rounded-[1.9rem] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-400">Step 0{index + 1}</p>
                        <p className="mt-2 text-base leading-relaxed text-primary-700">{step}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="frost-card rounded-[2.2rem] p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Required Documents</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900">Keep these ready.</h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-primary-600">
                {schoolContent.admissions.documents.map((document) => (
                  <li key={document} className="rounded-[1.4rem] border border-primary-900/8 bg-white/80 px-4 py-3 shadow-soft">
                    {document}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="dark" onClick={() => openEnquiry('Admissions Enquiry')}>
                  Start Enquiry
                </Button>
                <Button variant="outline" href={schoolContent.resources[0].href}>
                  View Documents
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
