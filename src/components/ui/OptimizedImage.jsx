import { useState } from 'react'

/**
 * Shared image wrapper with a lightweight loading state so pages can reuse
 * consistent image behaviour without repeating skeleton and fade logic.
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  priority = false,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-slate-200/70 dark:bg-slate-800/70" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...rest}
      />
    </div>
  )
}
