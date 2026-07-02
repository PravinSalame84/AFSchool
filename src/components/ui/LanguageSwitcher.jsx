import { alpha } from '@mui/material/styles'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { useLocale } from '../../context/LocaleContext'

export default function LanguageSwitcher({ compact = false, align = 'flex-start', fullWidth = false }) {
  const { locale, locales, setLocale, t } = useLocale()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: compact ? align : 'stretch',
        width: fullWidth ? '100%' : 'auto',
        minWidth: compact ? { xs: 98, lg: 108 } : '100%',
      }}
    >
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
          width: fullWidth ? '100%' : compact ? { xs: 98, lg: 108 } : '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            fontWeight: 800,
            bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha(theme.palette.common.white, 0.92),
            minHeight: compact ? 40 : 44,
          },
          '& .MuiSelect-select': {
            pr: '2rem',
            display: 'flex',
            alignItems: 'center',
          },
        })}
      >
        {locales.map((option) => (
          <MenuItem key={option.code} value={option.code} sx={{ fontWeight: 700 }}>
            {compact ? option.code.toUpperCase() : option.nativeLabel}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}
