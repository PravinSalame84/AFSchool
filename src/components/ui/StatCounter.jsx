import Typography from '@mui/material/Typography'
import useOnScreen from '../../hooks/useOnScreen'
import useCountUp from '../../hooks/useCountUp'

function formatValue(value, format) {
  if (format === 'compact') {
    return new Intl.NumberFormat('en-IN', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value)
  }

  return new Intl.NumberFormat('en-IN').format(value)
}

export default function StatCounter({
  value,
  suffix = '',
  label,
  format,
  tone = 'light',
}) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.4 })
  const animated = useCountUp(value, isVisible)

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <Typography
        sx={(theme) => ({
          fontWeight: 800,
          fontSize: { xs: '2.25rem', sm: '3rem' },
          color: tone === 'light' ? '#fff' : theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily,
        })}
      >
        {formatValue(animated, format)}
        <Typography
          component="span"
          sx={{
            color: 'primary.main',
            ml: 0.5,
          }}
        >
          {suffix}
        </Typography>
      </Typography>

      <Typography
        sx={(theme) => ({
          mt: 1,
          fontSize: { xs: '0.75rem', sm: '0.95rem' },
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color:
            tone === 'light'
              ? 'rgba(255,255,255,0.85)'
              : theme.palette.text.secondary,
        })}
      >
        {label}
      </Typography>
    </div>
  )
}