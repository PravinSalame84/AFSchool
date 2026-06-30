import {
  useMemo } from 'react'
import Stack from '../ui/Stack'
import { Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  useTheme,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Award, ArrowUpRight } from 'lucide-react'
import Carousel from '../ui/Carousel'
import achievements from '../../data/achievements'
import { Link } from 'react-router-dom'

export default function Achievements() {
  const theme = useTheme()

  const styles = useMemo(
    () => ({
      section: {
        py: { xs: 6, md: 10 },
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, rgba(11,19,32,0.2), rgba(17,28,43,0.48))'
            : 'linear-gradient(180deg, rgba(244,251,254,0.86), rgba(228,246,251,0.96))',
      },
      headingWrap: {
        textAlign: 'center',
        mb: 4,
      },
      subtitle: {
        color: alpha(theme.palette.text.secondary, 0.8),
        maxWidth: 640,
        mx: 'auto',
        mt: 1.5,
      },
      card: {
        width: 'min(84vw, 320px)',
        flexShrink: 0,
        borderRadius: 4,
        border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.16 : 0.08)}`,
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(14,20,24,0.92), rgba(29,33,60,0.84))'
            : 'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(228,246,251,0.82))',
        boxShadow: '0 20px 48px -30px rgba(17, 26, 36, 0.2)',
        backdropFilter: 'blur(16px)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 28px 60px -34px rgba(17, 26, 36, 0.28)',
          borderColor: alpha(theme.palette.secondary.main, 0.3),
        },
      },
      iconWrap: {
        width: 48,
        height: 48,
        borderRadius: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${alpha('#f59e0b', 0.2)}, ${alpha('#fb923c', 0.15)})`,
        color: '#d97706',
      },
      year: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1.2,
        color: theme.palette.warning.main,
      },
      title: {
        mt: 1.25,
        fontWeight: 800,
        fontSize: 18,
        lineHeight: 1.3,
        color: theme.palette.text.primary,
      },
      org: {
        mt: 1,
        fontSize: 13,
        lineHeight: 1.7,
        color: theme.palette.text.secondary,
      },
    }),
    [theme]
  )

  return (
    <Box sx={styles.section}>
      <Container>
        <Box sx={styles.headingWrap}>
          <Typography variant="overline" color="warning.main" fontWeight={700}>
            School Highlights
          </Typography>

          <Typography variant="h4" fontWeight={900} sx={{ mt: 1 }}>
            The milestones that shape the Air Force School experience.
          </Typography>

          <Typography variant="body2" sx={styles.subtitle}>
            This section now reflects real school strengths and institutional milestones, so families see what matters most at a glance.
          </Typography>
        </Box>

        <Carousel ariaLabel="Awards and achievements">
          {achievements.map((item) => (
            <Card key={item.title} sx={styles.card} data-carousel-item>
              <CardContent>
                <Stack spacing={2.25}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1.5}>
                    <Box sx={styles.iconWrap}>
                      <Award size={20} />
                    </Box>
                    <Chip
                      label={item.year}
                      size="small"
                      sx={{
                        borderRadius: 4,
                        bgcolor: alpha(theme.palette.secondary.main, 0.12),
                        color: 'text.primary',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    />
                  </Stack>

                  <Typography sx={styles.year}>Why it matters</Typography>

                  <Typography sx={styles.title}>{item.title}</Typography>

                  <Typography sx={styles.org}>{item.org}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Carousel>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            component={Link}
            to="/about#awards"
            variant="outlined"
            size="large"
            sx={{
              borderRadius: 4,
              px: { xs: 2.5, sm: 4 },
              width: { xs: '100%', sm: 'auto' },
              fontWeight: 700,
              color: '#d97706',
              gap: 1,
            }}
          >
            Explore School Overview
            <ArrowUpRight size={16} />
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
