import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'

export default function Logo({ tone = 'dark', className = '' }) {
  const textTone = tone === 'light' ? 'text-white' : 'text-primary-900'
  const subTone = tone === 'light' ? 'text-skyback-light' : 'text-primary-400'

  return (
    <Link to="/" className={`focus-ring flex items-center gap-2.5 ${className}`} aria-label="Airforce School home">
      <svg viewBox="0 0 64 64" className="h-10 w-10 flex-shrink-0">
        <rect width="64" height="64" rx="14" fill="#161E25" />
        <path d="M32 14 L52 24 L32 34 L12 24 Z" fill="#F0934B" />
        <path d="M20 28 V40 C20 44 26 48 32 48 C38 48 44 44 44 40 V28 L32 34 Z" fill="#BAE2EE" />
      </svg>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-bold ${textTone}`}>{siteConfig.brandName}</span>
        <span className={`block text-[11px] font-semibold uppercase tracking-wider ${subTone}`}>
          {siteConfig.brandSuffix}
        </span>
      </span>
    </Link>
  )
}
