import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'

export default function AnnouncementBar() {
  if (!siteConfig.features.announcementBar) return null

  return (
    <div className="border-b border-white/40 bg-primary-950 text-white dark:border-white/10 dark:bg-primary-950/90">
      <div className="container mx-auto flex flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="marquee-shell flex-1">
          <div className="marquee-track">
            {[schoolContent.announcementBar.message, ...schoolContent.marquee, schoolContent.announcementBar.message].map(
              (item, index) => (
                <span key={`${item}-${index}`} className="marquee-chip bg-white/10 text-white">
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {schoolContent.announcementBar.actions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/16"
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
