import { useMemo } from 'react'
import { Box, Container, Typography, Card, CardContent, Button, Stack, Avatar, useTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Award } from 'lucide-react'
import Carousel from '../ui/Carousel'
import achievements from '../../data/achievements'
import { Link } from 'react-router-dom'

export default function Achievements() {
  const theme = useTheme()

  const styles = useMemo(
    () => ({
      section: {
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default',
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
        width: 'min(84vw, 300px)',
        flexShrink: 0,
        borderRadius: 4,
        bgcolor: 'background.paper',
        boxShadow: theme.shadows[2],
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[6],
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
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 1,
        color: theme.palette.warning.dark,
      },
      title: {
        mt: 1,
        fontWeight: 800,
        fontSize: 15,
        lineHeight: 1.3,
        color: theme.palette.text.primary,
      },
      org: {
        mt: 1,
        fontSize: 12,
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
            Recognition
          </Typography>

          <Typography variant="h4" fontWeight={900} sx={{ mt: 1 }}>
            Our Achievements
          </Typography>

          <Typography variant="body2" sx={styles.subtitle}>
            We're honoured to be recognised for our commitment to quality, year after year.
          </Typography>
        </Box>

        <Carousel ariaLabel="Awards and achievements">
          {achievements.map((item) => (
            <Card key={item.title} sx={styles.card} data-carousel-item>
              <CardContent>
                <Stack spacing={2}>
                  <Box sx={styles.iconWrap}>
                    <Award size={20} />
                  </Box>

                  <Typography sx={styles.year}>{item.year}</Typography>

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
            }}
          >
            View All Achievements
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
