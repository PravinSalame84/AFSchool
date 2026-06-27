import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, DownloadCloud, FileText } from 'lucide-react'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import { findHubPageByPath } from '../data/contentHub'

export default function ContentHubPage() {
  const location = useLocation()
  const page = findHubPageByPath(location.pathname)

  if (!page) return null

  return (
    <>
      <Seo title={page.title} description={page.description} path={page.path} image={page.image} />
      <PageHero crumb={page.category} eyebrow={page.category} title={page.title} subtitle={page.description} image={page.image} />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="frost-card rounded-[2.2rem] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white dark:bg-white dark:text-primary-950">
                <FileText className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.28em] text-accent">{page.category}</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white">
                Local school content that no longer depends on an external portal.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-600 dark:text-slate-300">{page.description}</p>

              {page.highlights?.length ? (
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {page.highlights.map((item) => (
                    <div key={item} className="rounded-[1.4rem] border border-primary-900/8 bg-white/80 px-4 py-3 shadow-soft dark:border-white/10 dark:bg-primary-950/70">
                      <p className="text-sm font-semibold text-primary-900 dark:text-white">{item}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="grid gap-5">
              {page.sections.map((section) => (
                <article key={section.title} className="frost-card rounded-[1.9rem] p-6">
                  <h3 className="text-2xl font-bold uppercase leading-tight text-primary-900 dark:text-white">{section.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-slate-300">{section.body}</p>
                </article>
              ))}

              {page.attachments?.length ? (
                <div className="frost-card rounded-[1.9rem] p-6">
                  <div className="flex items-center gap-3">
                    <DownloadCloud className="h-5 w-5 text-accent" />
                    <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Downloads</h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {page.attachments.map((file) => (
                      <a
                        key={file.label}
                        href={file.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-[1.3rem] border border-primary-900/8 bg-white/80 px-4 py-4 text-sm font-semibold text-primary-800 transition hover:border-primary-200 dark:border-white/10 dark:bg-primary-950/70 dark:text-white"
                      >
                        {file.label}
                        <ArrowUpRight className="h-4 w-4 text-primary-300" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              <Link
                to="/contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-primary-800 dark:bg-white dark:text-primary-950"
              >
                Contact School Office
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
