import { Link } from 'react-router-dom'
import { ArrowUpRight, DownloadCloud, FileBadge2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import useRuntimeContent from '../hooks/useRuntimeContent'

const downloadTones = [
  {
    shell: 'border-airforce-gold/18 hover:border-airforce-gold/34 dark:border-airforce-gold/18 dark:hover:border-airforce-gold/30',
    icon: 'bg-gradient-to-br from-airforce-gold to-airforce-honey text-secondary dark:text-secondary',
    chip: 'bg-gradient-to-r from-airforce-gold/18 to-airforce-honey/18 text-airforce-brown dark:text-airforce-gold',
    arrow: 'text-airforce-brown dark:text-airforce-gold',
  },
  {
    shell: 'border-airforce-cyan/18 hover:border-airforce-cyan/34 dark:border-airforce-cyan/18 dark:hover:border-airforce-cyan/30',
    icon: 'bg-gradient-to-br from-airforce-cyan to-skyback-light text-secondary dark:text-secondary',
    chip: 'bg-gradient-to-r from-airforce-cyan/16 to-skyback-light text-primary-800 dark:text-airforce-cyan',
    arrow: 'text-primary-700 dark:text-airforce-cyan',
  },
  {
    shell: 'border-airforce-saffron/18 hover:border-airforce-saffron/34 dark:border-airforce-saffron/18 dark:hover:border-airforce-saffron/30',
    icon: 'bg-gradient-to-br from-airforce-saffron to-accent text-white',
    chip: 'bg-gradient-to-r from-airforce-saffron/16 to-airforce-honey/16 text-airforce-brown dark:text-airforce-gold',
    arrow: 'text-airforce-saffronDeep dark:text-airforce-gold',
  },
]

export default function Downloads() {
  const { content: runtimeContent, source } = useRuntimeContent()
  const downloads = runtimeContent.downloads?.length ? runtimeContent.downloads : schoolContent.downloads

  return (
    <>
      <Seo
        title="Downloads"
        description="Access school calendars, book lists, holiday homework and official downloadable documents from Air Force School, VayuSena Nagar, Nagpur."
        path="/downloads"
        image={siteAssets.images.studentClassPhoto}
      />
      <PageHero
        crumb="Downloads"
        eyebrow="Download Centre"
        title="Official school files, homework sheets and academic resources."
        subtitle="Important downloadable documents published by the school are organised here for faster parent and student access."
        image={siteAssets.images.studentClassPhoto}
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {downloads.map((file, index) => {
              const tone = downloadTones[index % downloadTones.length]

              return (
              <a
                key={file.label}
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`frost-card panel-hover rounded-[2rem] bg-white/90 p-6 dark:bg-primary-900/84 ${tone.shell}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone.icon}`}>
                    <DownloadCloud className="h-5 w-5" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${tone.chip}`}>
                    {file.category}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-bold uppercase leading-tight text-primary-900 dark:text-white">{file.label}</h2>
                <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${tone.arrow}`}>
                  Download File
                  <ArrowUpRight className={`h-4 w-4 ${tone.arrow}`} />
                </div>
              </a>
              )
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="frost-card rounded-[2rem] bg-white/92 p-6 dark:bg-primary-900/88">
              <div className="flex items-center gap-3">
                <FileBadge2 className="h-5 w-5 text-airforce-gold" />
                <h3 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">More Official Resources</h3>
                <span className="rounded-full bg-gradient-to-r from-airforce-gold/18 to-airforce-honey/16 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-airforce-brown dark:bg-gradient-to-r dark:from-airforce-gold/18 dark:to-airforce-saffron/12 dark:text-airforce-gold">
                  {source === 'live' ? 'Live' : 'Local'}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <img
                  src={siteAssets.images.studentDigitalLearning}
                  alt="Students using digital learning resources"
                  className="h-28 w-full rounded-[1.3rem] object-cover"
                />
                <img
                  src={siteAssets.images.teacherMeeting}
                  alt="School academic planning"
                  className="h-28 w-full rounded-[1.3rem] object-cover"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-primary-700 dark:text-skyback-light/82">
                Parent access points and formal documentation are also published through the internal school resource links below.
              </p>
            </div>

            <div className="grid gap-3">
              {schoolContent.resources.map((resource, index) => (
                <Link
                  key={resource.label}
                  to={resource.to}
                  className={`frost-card flex items-center justify-between rounded-[1.5rem] bg-white/88 px-5 py-4 text-sm font-semibold transition dark:bg-primary-950/42 ${
                    index % 3 === 0
                      ? 'text-primary-700 hover:border-airforce-gold/30 hover:bg-airforce-gold/5 dark:text-white dark:hover:border-airforce-gold/30 dark:hover:bg-primary-950/58'
                      : index % 3 === 1
                        ? 'text-primary-700 hover:border-airforce-cyan/30 hover:bg-airforce-cyan/5 dark:text-white dark:hover:border-airforce-cyan/30 dark:hover:bg-primary-950/58'
                        : 'text-primary-700 hover:border-airforce-saffron/30 hover:bg-airforce-saffron/5 dark:text-white dark:hover:border-airforce-saffron/30 dark:hover:bg-primary-950/58'
                  }`}
                >
                  {resource.label}
                  <ArrowUpRight className="h-4 w-4 text-primary-300 dark:text-airforce-gold" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
