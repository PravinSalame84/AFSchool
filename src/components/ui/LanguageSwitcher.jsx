import { alpha } from '@mui/material/styles'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { useLocale } from '../../context/LocaleContext'

export default function LanguageSwitcher({ compact = false, align = 'flex-start' }) {
  const { locale, locales, setLocale, t } = useLocale()

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: align }}>
      {!compact ? (
        <Typography sx={{ mb: 1, fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'text.secondary' }}>
          {t('Language')}
        </Typography>
      ) : null}

      <TextField
        select
        size="small"
        value={locale}
        onChange={(event) => setLocale(event.target.value)}
        aria-label={t('Language')}
        sx={(theme) => ({
          minWidth: compact ? 92 : 160,
          width: compact ? '100%' : 'auto',
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            fontWeight: 800,
            bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha(theme.palette.common.white, 0.92),
          },
        })}
      >
        {locales.map((option) => (
          <MenuItem key={option.code} value={option.code}>
            {option.nativeLabel}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}
