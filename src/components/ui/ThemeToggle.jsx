import IconButton from '@mui/material/IconButton'
import { alpha, useTheme } from '@mui/material/styles'
import { MoonStar, SunMedium } from 'lucide-react'
import { useAppTheme } from '../../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useAppTheme()
  const theme = useTheme()

  return (
    <IconButton
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={className}
      sx={{
        height: 46,
        width: 46,
        borderRadius: '999px',
        color: isDark ? '#EAF2FF' : theme.palette.primary.main,

        background:
          isDark
            ? `linear-gradient(135deg, ${alpha('#0B1B2B', 0.95)}, ${alpha('#1E3A5F', 0.75)})`
            : `linear-gradient(135deg, #FFFFFF, ${alpha('#4FA3D1', 0.12)})`,

        border: `1px solid ${
          isDark ? alpha('#ffffff', 0.08) : alpha(theme.palette.primary.main, 0.15)
        }`,

        boxShadow: isDark
          ? '0 10px 30px rgba(0,0,0,0.35)'
          : '0 10px 25px rgba(30,58,95,0.12)',

        backdropFilter: 'blur(14px)',
        transition: 'all 0.25s ease',

        '&:hover': {
          transform: 'translateY(-2px) scale(1.03)',
          boxShadow: isDark
            ? '0 14px 40px rgba(0,0,0,0.45)'
            : '0 14px 35px rgba(30,58,95,0.18)',
        },
      }}
    >
      {isDark ? (
        <SunMedium size={18} />
      ) : (
        <MoonStar size={18} />
      )}
    </IconButton>
  )
}
