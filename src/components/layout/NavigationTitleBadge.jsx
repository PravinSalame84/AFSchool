import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'

export default function NavigationTitleBadge({ className = '' }) {
  return (
    <Link
      to="/"
      className={`focus-ring nav-title-badge relative hidden xl:flex xl:w-[278px] xl:items-center xl:gap-3.5 xl:px-4 xl:py-3 ${className}`}
      aria-label="Air Force School home"
    >
      <span className="nav-title-glow" aria-hidden="true" />

      <div className="nav-title-orb flex h-[62px] w-[62px] flex-shrink-0 items-center justify-center rounded-full">
        <img
          src="/favicon.png"
          alt={`${siteConfig.brandName} logo`}
          className="h-[46px] w-[46px] flex-shrink-0 rounded-full object-cover"
        />
      </div>

      <div className="min-w-0">
        <div className="nav-title-stack leading-[0.86]">
          <span className="block text-[1.02rem] font-black uppercase tracking-[0.018em] text-[#283648]">
            AIR FORCE
          </span>
          <span className="block text-[1.02rem] font-black uppercase tracking-[0.018em] text-[#1b2532]">
            SCHOOL
          </span>
        </div>
        <span className="mt-1.5 block text-[0.78rem] font-bold uppercase tracking-[0.06em] text-[#5e7690]">
          {siteConfig.brandSuffix}
        </span>
      </div>
    </Link>
  )
}
