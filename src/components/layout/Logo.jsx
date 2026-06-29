import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'

export default function Logo({ tone = 'dark', variant = 'default', className = '' }) {
  const isFooter = variant === 'footer'
  const titleTone = tone === 'light' ? 'text-white' : 'brand-highlight'
  const subTone = tone === 'light' ? 'text-white/68' : 'text-primary-500 dark:text-sky-200/78'
  const chipTone =
    tone === 'light'
      ? 'border-white/14 bg-white/8 text-white/78'
      : 'brand-chip text-primary-600 dark:text-sky-200/82'

  return (
    <Link
      to="/"
      className={`focus-ring logo-plaque ${tone === 'light' ? 'logo-plaque-light' : ''} flex items-center ${isFooter ? 'gap-3.5 rounded-[1.8rem] px-4 py-3 sm:gap-4 sm:px-5' : 'gap-3 px-3 py-0 sm:gap-4 sm:px-4'} ${className}`}
      aria-label="Air Force School home"
    >
      <div className={`logo-core ${tone === 'light' ? 'logo-core-light' : ''} flex ${isFooter ? 'h-16 w-16 rounded-[1.4rem]' : 'h-14 w-14'} flex-shrink-0 items-center justify-center border ${chipTone}`}>
        <img
          src="/favicon.png"
          alt={`${siteConfig.brandName} logo`}
          className={`${isFooter ? 'h-[52px] w-[52px]' : 'h-[46px] w-[46px]'} flex-shrink-0 rounded-full object-cover`}
        />
      </div>

      <span className="min-w-0 leading-none">
        <span className={`block font-display ${isFooter ? 'text-[1.62rem] sm:text-[1.78rem]' : 'text-[1.56rem]'} font-bold uppercase leading-[0.92] ${titleTone}`}>
          <span className={tone === 'light' ? '' : 'drop-shadow-[0_8px_18px_rgba(24,58,88,0.14)]'}>
            {siteConfig.brandName}
          </span>
        </span>
        <span className={`mt-1.5 block ${isFooter ? 'text-[10px] sm:text-[11px] tracking-[0.22em]' : 'text-[11px] tracking-[0.18em]'} font-semibold uppercase ${subTone}`}>
          {siteConfig.brandSuffix}
        </span>
      </span>
    </Link>
  )
}
