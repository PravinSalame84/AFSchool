import useOnScreen from '../../hooks/useOnScreen'
import useCountUp from '../../hooks/useCountUp'

function formatValue(value, format) {
  if (format === 'compact') {
    return new Intl.NumberFormat('en-IN', { notation: 'compact', maximumFractionDigits: 1 }).format(value)
  }
  return new Intl.NumberFormat('en-IN').format(value)
}

export default function StatCounter({ value, suffix = '', label, format, tone = 'light' }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.4 })
  const animated = useCountUp(value, isVisible)
  const textTone = tone === 'light' ? 'text-white' : 'text-primary-900'
  const labelTone = tone === 'light' ? 'text-skyback-light/85' : 'text-primary-500'

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className={`font-display text-4xl font-extrabold sm:text-5xl ${textTone}`}>
        {formatValue(animated, format)}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className={`mt-2 text-sm font-medium uppercase tracking-wide sm:text-[15px] ${labelTone}`}>{label}</p>
    </div>
  )
}
