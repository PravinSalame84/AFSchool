import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import useRuntimeContent from '../../hooks/useRuntimeContent'

export default function AnnouncementBar() {
  const { content } = useRuntimeContent()
  const announcementBar = content.announcementBar ?? schoolContent.announcementBar
  const marqueeItems = content.marquee?.length ? content.marquee : schoolContent.marquee

  if (!siteConfig.features.announcementBar) return null

  return (
    <div className="border-b border-white/30 bg-gradient-to-r from-secondary via-primary-900 to-primary-700 text-white dark:border-white/10 dark:bg-gradient-to-r dark:from-primary-950 dark:via-primary-900 dark:to-secondary">
      <div className="container mx-auto flex flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="marquee-shell flex-1">
          <div className="marquee-track">
            {[announcementBar.message, ...marqueeItems, announcementBar.message].map(
              (item, index) => (
                <span key={`${item}-${index}`} className="marquee-chip bg-gradient-to-r from-white/14 to-white/8 text-white">
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {announcementBar.actions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/14 bg-gradient-to-r from-white/14 via-white/10 to-skyback-light/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:border-accent/40 hover:from-accent/24 hover:via-white/10 hover:to-info/16"
            >
              {action.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
