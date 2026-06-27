import IconButton from '@mui/material/IconButton'
import { alpha } from '@mui/material/styles'
import { MoonStar, SunMedium } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <IconButton
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={className}
      sx={(theme) => ({
        height: 44,
        width: 44,
        border: `1px solid ${
          theme.palette.mode === 'dark' ? alpha('#ffffff', 0.1) : alpha('#ffffff', 0.6)
        }`,
        borderRadius: '999px',
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#1d213c',
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(14,20,24,0.9), rgba(29,33,60,0.8))'
            : 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(228,246,251,0.8))',
        boxShadow: '0 10px 28px rgba(17, 35, 56, 0.1)',
        backdropFilter: 'blur(16px)',
        transition: 'transform 0.2s ease, background 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          background:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(18,28,42,0.95), rgba(41,57,70,0.86))'
              : 'linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,1))',
        },
      })}
    >
      {isDark ? <SunMedium className="h-4.5 w-4.5" /> : <MoonStar className="h-4.5 w-4.5" />}
    </IconButton>
  )
}
