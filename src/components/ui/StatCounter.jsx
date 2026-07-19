import { Box, Typography } from '@mui/material'
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
  const textTone = tone === 'light' ? '#ffffff' : '#111a24'
  const labelTone = tone === 'light' ? 'rgba(215,239,246,0.85)' : '#587084'

  return (
    <Box ref={ref} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
      <Typography sx={{ color: textTone, fontSize: { xs: '2.25rem', sm: '3rem' }, fontWeight: 800, lineHeight: 1 }}>
        {formatValue(animated, format)}
        <Box component="span" sx={{ color: 'secondary.main' }}>
          {suffix}
        </Box>
      </Typography>
      <Typography sx={{ mt: 1, color: labelTone, fontSize: { xs: '0.9rem', sm: '0.95rem' }, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </Typography>
    </Box>
  )
}
