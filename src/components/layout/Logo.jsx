import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'

export default function Logo({ tone = 'dark', variant = 'default', className = '' }) {
  const isFooter = variant === 'footer'
  const titleTone = tone === 'light' ? 'text-white' : 'brand-highlight'
  const subTone = tone === 'light' ? 'text-skyback-light/82' : 'text-primary-500 dark:text-skyback-light/82'
  const chipTone =
    tone === 'light'
      ? 'border-white/14 bg-white/8 text-white/78'
      : 'brand-chip text-primary-600 dark:text-sky-200/82'

  return (
    <Link
      to="/"
      className={`focus-ring logo-plaque ${tone === 'light' ? 'logo-plaque-light' : ''} flex items-center ${isFooter ? 'gap-3 rounded-[1.7rem] px-4 py-3 sm:gap-4 sm:px-5' : 'gap-3 rounded-[1.5rem] px-2.5 py-2 sm:gap-4 sm:px-4'} ${className}`}
      aria-label="Air Force School home"
    >
      <div className={`logo-core ${tone === 'light' ? 'logo-core-light' : ''} flex ${isFooter ? 'h-[3.75rem] w-[3.75rem] rounded-[1.3rem] sm:h-16 sm:w-16' : 'h-[3.25rem] w-[3.25rem] sm:h-14 sm:w-14'} flex-shrink-0 items-center justify-center border ${chipTone}`}>
        <img
          src="/favicon.png"
          alt={`${siteConfig.brandName} logo`}
          className={`${isFooter ? 'h-[48px] w-[48px] sm:h-[52px] sm:w-[52px]' : 'h-[42px] w-[42px] sm:h-[46px] sm:w-[46px]'} flex-shrink-0 rounded-full object-cover`}
        />
      </div>

      <span className="min-w-0 leading-none">
        <span className={`block font-display ${isFooter ? 'text-[1.34rem] sm:text-[1.62rem]' : 'text-[1.12rem] sm:text-[1.34rem]'} font-bold uppercase leading-[0.92] ${titleTone}`}>
          <span className={tone === 'light' ? '' : 'drop-shadow-[0_8px_18px_rgba(24,58,88,0.14)]'}>
            {siteConfig.brandName}
          </span>
        </span>
        <span className={`mt-1.5 block ${isFooter ? 'text-[9px] sm:text-[10px] tracking-[0.2em]' : 'text-[9px] sm:text-[10px] tracking-[0.16em]'} font-semibold uppercase ${subTone}`}>
          {siteConfig.brandSuffix}
        </span>
      </span>
    </Link>
  )
}
