import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  alpha,
} from '@mui/material'

import { ShieldCheck, HeartHandshake } from 'lucide-react'
import siteConfig from '../../data/siteConfig'

const pillars = [
  {
    icon: ShieldCheck,
    title: "We Don’t Take Interviews",
    description:
      'Admission decisions are never based on pressuring a child into an "interview." We admit on a transparent, first-come-first-served basis.',
  },
  {
    icon: HeartHandshake,
    title: "We Don’t Take Donations",
    description:
      'No capitation fees or donations for admission. Only transparent, published fee structures across all campuses.',
  },
]

export default function Philosophy() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0B1F3A', // Air Force deep navy
        color: '#fff',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">

        {/* MAIN MESSAGE */}
        <Typography
          align="center"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.6rem', md: '2.2rem' },
            lineHeight: 1.3,
            maxWidth: 720,
            mx: 'auto',
          }}
        >
          Because we believe your child is{' '}
          <Box component="span" sx={{ color: '#F57C00' }}>
            our responsibility
          </Box>{' '}
          — we groom, we nurture.
        </Typography>

        {/* CARDS */}
        <Grid container spacing={3} sx={{ mt: 6, maxWidth: 800, mx: 'auto' }}>
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <Grid item xs={12} sm={6} key={p.title}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    background: alpha('#ffffff', 0.06),
                    border: `1px solid ${alpha('#ffffff', 0.12)}`,
                    backdropFilter: 'blur(12px)',
                    transition: '0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      background: alpha('#ffffff', 0.1),
                    },
                  }}
                >
                  <CardContent>
                    <Stack spacing={2}>
                      
                      {/* ICON */}
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: '25%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: alpha('#F57C00', 0.15),
                          color: '#F57C00',
                        }}
                      >
                        <Icon size={22} />
                      </Box>

                      {/* TITLE */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: '#fff',
                          lineHeight: 1.3,
                        }}
                      >
                        {p.title}
                      </Typography>

                      {/* DESCRIPTION */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha('#ffffff', 0.75),
                          lineHeight: 1.7,
                        }}
                      >
                        {p.description}
                      </Typography>

                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {/* FOOTER SIGNATURE */}
        <Typography
          align="center"
          sx={{
            mt: 6,
            fontSize: '0.85rem',
            color: alpha('#ffffff', 0.6),
            letterSpacing: 1,
          }}
        >
          — {siteConfig.brandName} {siteConfig.brandSuffix}
        </Typography>

      </Container>
    </Box>
  )
}