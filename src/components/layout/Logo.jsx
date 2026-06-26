import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'

export default function Logo({ tone = 'dark', className = '' }) {
  const textTone = tone === 'light' ? 'text-white' : 'text-primary-900'
  const subTone = tone === 'light' ? 'text-white/65' : 'text-primary-500'

  return (
    <Link to="/" className={`focus-ring flex items-center gap-3 ${className}`} aria-label="Air Force School home">
      <svg viewBox="0 0 72 72" className="h-11 w-11 flex-shrink-0">
        <defs>
          <linearGradient id="logoSky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4d88aa" />
            <stop offset="100%" stopColor="#111a24" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="34" fill="url(#logoSky)" />
        <path d="M36 15l16 10-16 10-16-10 16-10Z" fill="#ffd707" />
        <path d="M24 29v12c0 5 6 10 12 10s12-5 12-10V29l-12 6-12-6Z" fill="#eef6fb" />
        <path d="M15 40c4 1 8 1 12 0M45 40c4 1 8 1 12 0" stroke="#ff671f" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="leading-tight">
        <span className={`block font-display text-[1.35rem] font-bold uppercase leading-none ${textTone}`}>
          {siteConfig.brandName}
        </span>
        <span className={`block text-[11px] font-semibold uppercase tracking-wider ${subTone}`}>
          {siteConfig.brandSuffix}
        </span>
      </span>
    </Link>
  )
}
