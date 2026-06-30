import {
  motion } from 'framer-motion'
import Grid from '../components/ui/Grid'
import Stack from '../components/ui/Stack'
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material'
import {
  BookOpenCheck,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Trophy,
} from 'lucide-react'

import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import StudentJourney from '../components/sections/StudentJourney'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'

const icons = [
  BookOpenCheck,
  HeartHandshake,
  ShieldCheck,
  Building2,
  Trophy,
]

const MotionCard = motion.create(Card)

export default function WhyUs() {
  return (
    <>
      <Seo
        title="Campus Life"
        description="Explore the learning environment, student support, infrastructure and holistic development pillars at Air Force School, VayuSena Nagar, Nagpur."
        path="/why-us"
        image={siteAssets.images.unityRun}
      />

      <PageHero
        crumb="Campus Life"
        eyebrow="Why Families Choose Us"
        title="A disciplined and vibrant school experience for growing minds."
        subtitle="Air Force School combines values, structure and warm student support with strong academic and co-curricular opportunity."
        image={siteAssets.images.unityRun}
      />

      <Box component="section" py={{ xs: 6, md: 10 }}>
        <Container maxWidth="xl">
          <Stack spacing={2} sx={{ mb: 5, maxWidth: 760 }}>
            <Typography variant="overline" color="secondary.main" fontWeight={800} sx={{ letterSpacing: '0.2em' }}>
              Campus Life Overview
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 0.98 }}>
              Learning, wellbeing and participation move together here.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Campus life at Air Force School is shaped by academic focus, co-curricular participation, structured routines and a supportive environment that helps children grow with confidence.
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {schoolContent.pillars.map((pillar, index) => {
              const Icon = icons[index] ?? Trophy

              return (
                <Grid item key={pillar.title} xs={12} md={6} xl={index === 0 ? 8 : 4}>
                  <MotionCard
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    elevation={0}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      border: 1,
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      backdropFilter: 'blur(14px)',
                      transition: 'all .3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: (theme) => theme.shadows[8],
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={3}>
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: 4,
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon size={28} />
                        </Box>

                        <Typography
                          variant="h5"
                          fontWeight={700}
                        >
                          {pillar.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.8,
                          }}
                        >
                          {pillar.description}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </MotionCard>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>

      <StudentJourney />
    </>
  )
}
