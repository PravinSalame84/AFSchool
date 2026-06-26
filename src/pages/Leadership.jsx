import { ArrowUpRight, FileText, ShieldCheck, Users2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'

export default function Leadership() {
  return (
    <>
      <Seo
        title="Leadership & Governance"
        description="Explore management committee, school information, staff details, annual report and governance resources for Air Force School, VayuSena Nagar, Nagpur."
        path="/leadership"
        image="https://www.airforce.skoolmate.in/wp-content/uploads/2021/11/CHIEF.jpg"
      />
      <PageHero
        crumb="Leadership"
        eyebrow="Leadership & Governance"
        title="Institutional transparency, governance and school leadership access."
        subtitle="Families can view official governance, staff and institutional resources through the school’s published information channels."
        image="https://www.airforce.skoolmate.in/wp-content/uploads/2021/11/CHIEF.jpg"
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="frost-card rounded-[2.2rem] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white dark:bg-white dark:text-primary-950">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.28em] text-accent">Governance Overview</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white">
                School leadership information organised for parents and stakeholders.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-600 dark:text-slate-300">{schoolContent.leadership.intro}</p>
              <div className="mt-8 rounded-[1.8rem] bg-primary-900 p-5 text-white dark:bg-primary-950/90">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">Published Through Official Resources</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>School Management Committee details</li>
                  <li>School Information and institutional profile</li>
                  <li>Staff details and annual report links</li>
                  <li>Transfer certificate resource reference</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {schoolContent.leadership.resources.map((resource, index) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`frost-card panel-hover rounded-[1.9rem] p-6 ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-400">Official Resource</p>
                      <h3 className="mt-3 text-2xl font-bold uppercase leading-tight text-primary-900 dark:text-white">
                        {resource.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{resource.description}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 text-primary-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="frost-card rounded-[2rem] p-6">
              <div className="flex items-center gap-3">
                <Users2 className="h-5 w-5 text-accent" />
                <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Administrative Contacts</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-slate-300">
                Admin support number published by the school: <span className="font-semibold text-primary-800 dark:text-white">{schoolContent.contact.adminPhone}</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-primary-600 dark:text-slate-300">
                {schoolContent.contact.adminRoles.map((role) => (
                  <li key={role} className="rounded-[1rem] border border-primary-900/8 bg-white/75 px-4 py-3 dark:border-white/10 dark:bg-primary-950/70">
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="frost-card rounded-[2rem] p-6">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-accent" />
                <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Compliance & Reporting</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-slate-300">
                Mandatory public disclosure, annual reporting and institutional documents are maintained through the official school portal for easy stakeholder access.
              </p>
              <a
                href="https://www.airforce.skoolmate.in/important-documents/"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-primary-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-primary-800 dark:bg-white dark:text-primary-950"
              >
                Open Mandatory Disclosure
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
