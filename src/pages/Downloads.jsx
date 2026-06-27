import { Link } from 'react-router-dom'
import { ArrowUpRight, DownloadCloud, FileBadge2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import useRuntimeContent from '../hooks/useRuntimeContent'

export default function Downloads() {
  const { content: runtimeContent, source } = useRuntimeContent()
  const downloads = runtimeContent.downloads?.length ? runtimeContent.downloads : schoolContent.downloads

  return (
    <>
      <Seo
        title="Downloads"
        description="Access school calendars, book lists, holiday homework and official downloadable documents from Air Force School, VayuSena Nagar, Nagpur."
        path="/downloads"
        image={siteAssets.images.smartClassroom}
      />
      <PageHero
        crumb="Downloads"
        eyebrow="Download Centre"
        title="Official school files, homework sheets and academic resources."
        subtitle="Important downloadable documents published by the school are organised here for faster parent and student access."
        image={siteAssets.images.smartClassroom}
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {downloads.map((file) => (
              <a
                key={file.label}
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                className="frost-card panel-hover rounded-[2rem] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white dark:bg-white dark:text-primary-950">
                    <DownloadCloud className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-dark dark:text-accent">
                    {file.category}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-bold uppercase leading-tight text-primary-900 dark:text-white">{file.label}</h2>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-white">
                  Download File
                  <ArrowUpRight className="h-4 w-4 text-primary-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="frost-card rounded-[2rem] p-6">
              <div className="flex items-center gap-3">
                <FileBadge2 className="h-5 w-5 text-accent" />
                <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">More Official Resources</h3>
                <span className="rounded-full bg-primary-900/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-700 dark:bg-white/10 dark:text-slate-200">
                  {source === 'live' ? 'Live' : 'Local'}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-slate-300">
                Parent access points and formal documentation are also published through the internal school resource links below.
              </p>
            </div>

            <div className="grid gap-3">
              {schoolContent.resources.map((resource) => (
                <Link
                  key={resource.label}
                  to={resource.to}
                  className="frost-card flex items-center justify-between rounded-[1.5rem] px-5 py-4 text-sm font-semibold text-primary-700 dark:text-white"
                >
                  {resource.label}
                  <ArrowUpRight className="h-4 w-4 text-primary-300" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
