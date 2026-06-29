import Box from '@mui/material/Box'
import useOnScreen from '../../hooks/useOnScreen'

export default function RevealOnScroll({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.15 })

  return (
    <Box
      component={Tag}
      ref={ref}
      className={`reveal ${isVisible ? 'in-view' : ''} ${className}`}
      sx={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Box>
  )
}
