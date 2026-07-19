import { Box } from '@mui/material'
import useOnScreen from '../../hooks/useOnScreen'

export default function RevealOnScroll({ children, delay = 0, className, as: Tag = 'div', sx, ...rest }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.08 })

  return (
    <Box
      component={Tag}
      ref={ref}
      className={className}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 18px, 0)',
        transition: 'opacity 420ms cubic-bezier(0.22, 1, 0.36, 1), transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
        '@media (prefers-reduced-motion: reduce)': {
          opacity: 1,
          transform: 'none',
          transition: 'none',
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}
