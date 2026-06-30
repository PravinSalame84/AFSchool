import {
  Box,
  Container,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'
import Grid from '../ui/Grid'
import { alpha } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { BadgeCheck, MessageSquareHeart, Sparkles } from 'lucide-react'
import EnquiryFormFields from '../forms/EnquiryFormFields'

export default function EnquiryForm() {
  const theme = useTheme()

  return (
    <Box
      id="enquiry"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: alpha(theme.palette.primary.main, 0.03),
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT: Heading */}
          <Grid item xs={12} md={5}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Get in Touch
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mt: 1.5,
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: theme.palette.text.primary,
                }}
              >
                Start a confident school enquiry with the right details
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: alpha(theme.palette.text.secondary, 0.85),
                  lineHeight: 1.7,
                }}
              >
                Share your interest once and the school team can respond with campus details, admissions guidance,
                fee support and grade availability in a clear, parent-friendly flow.
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: 4,
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.18)}`,
                  background:
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(240,147,75,0.12), rgba(17,28,43,0.9), rgba(29,33,60,0.82))'
                      : 'linear-gradient(135deg, rgba(255,249,240,0.94), rgba(255,255,255,0.94), rgba(228,246,251,0.72))',
                  boxShadow: '0 18px 38px rgba(17, 26, 36, 0.08)',
                }}
              >
                <Grid container spacing={2}>
                  {[
                    { icon: Sparkles, title: 'Fast Response', text: 'The enquiry reaches the school team in a clean, readable format.' },
                    { icon: MessageSquareHeart, title: 'Parent-Friendly Flow', text: 'Clear labels, instant feedback and simple form guidance.' },
                    { icon: BadgeCheck, title: 'Verified Submission', text: 'Built-in checks help reduce mistakes before the form is sent.' },
                  ].map(({ icon: Icon, title, text }) => (
                    <Grid item xs={12} key={title}>
                      <Box sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '30%',
                            display: 'grid',
                            placeItems: 'center',
                            color: 'secondary.main',
                            backgroundColor: alpha(theme.palette.secondary.main, 0.14),
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={18} />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 800, color: 'text.primary' }}>{title}</Typography>
                          <Typography sx={{ mt: 0.35, color: alpha(theme.palette.text.secondary, 0.92), fontSize: '0.9rem', lineHeight: 1.65 }}>
                            {text}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT: Form */}
          <Grid item xs={12} md={7}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              elevation={3}
              sx={{
                p: { xs: 2.5, sm: 4 },
                borderRadius: 4,
                background:
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(180deg, rgba(13,22,32,0.96), rgba(26,38,55,0.92))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(244,248,252,0.94))',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                boxShadow: '0 26px 60px -34px rgba(17, 26, 36, 0.22)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 34px 72px -34px rgba(17, 26, 36, 0.28)',
                },
              }}
            >
              <EnquiryFormFields context="General Enquiry" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
