import { Box, Container, Paper, Stack, Typography, useTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import Accordion from '../ui/Accordion'
import faqs from '../../data/faqs'

export default function FAQSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="faqs"
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 0 },
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(180deg, rgba(11,19,32,0.7), rgba(17,28,43,0.9))'
          : 'linear-gradient(180deg, rgba(228,246,251,0.8), rgba(215,239,246,0.95))',
      }}
    >
      {/* Decorative background blobs (replaces hero-orb safely in MUI) */}
      <Box
        sx={{
          position: 'absolute',
          left: '6%',
          top: 64,
          width: 180,
          height: 180,
          borderRadius: '25%',
          background: alpha(theme.palette.info.main, 0.15),
          filter: 'blur(40px)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          right: '10%',
          top: 96,
          width: 220,
          height: 220,
          borderRadius: '25%',
          background: alpha(theme.palette.warning.main, 0.15),
          filter: 'blur(50px)',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative' }}>
        {/* Header Card */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            p: { xs: 3, sm: 5 },
            textAlign: 'center',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
            background: isDark
              ? `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.primary.dark, 0.85)})`
              : 'linear-gradient(135deg, rgba(250,253,255,0.98), rgba(244,251,254,0.94))',
            boxShadow: '0 18px 40px rgba(17, 26, 36, 0.08)',
          }}
        >
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
            {['Admissions', 'Facilities', 'Documents'].map((item) => (
              <Typography
                key={item}
                component="span"
                sx={{
                  px: 1.4,
                  py: 0.55,
                  borderRadius: 4,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'text.primary',
                  bgcolor: alpha(theme.palette.secondary.main, 0.12),
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            Have Questions?
          </Typography>

          <Typography variant="h4" sx={{ mt: 1.5, fontWeight: 900 }}>
            Frequently Asked Questions
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: alpha(theme.palette.text.secondary, 0.85),
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Admissions, facilities, documents and school access points are answered here for parents and guardians.
          </Typography>
        </Paper>

        {/* Accordion Section */}
        <Box sx={{ mt: 4 }}>
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  )
}
