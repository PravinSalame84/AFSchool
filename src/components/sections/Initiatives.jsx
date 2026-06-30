import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  alpha,
} from '@mui/material'
import Stack from '../ui/Stack'
import { Link } from 'react-router-dom'

import Carousel from '../ui/Carousel'
import RevealOnScroll from '../ui/RevealOnScroll'
import initiatives from '../../data/initiatives'

import {
  Building2,
  Handshake,
  School,
  Baby,
  GraduationCap,
  Lightbulb,
  Plane,
  Sparkles,
} from 'lucide-react'

const iconMap = {
  campus: Building2,
  partnership: Handshake,
  preschool: School,
  toddler: Baby,
  college: GraduationCap,
  training: Lightbulb,
  tours: Plane,
}

const toneColors = [
  '#0d47a1', // navy
  '#f59e0b', // accent gold
  '#2e7d32', // green
  '#6d4c41', // earth
  '#546e7a', // slate
  '#1e293b', // dark
]

export default function Initiatives() {
  const theme = useTheme()

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: alpha(theme.palette.primary.main, 0.03),
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <RevealOnScroll>
          <Box sx={{ mb: 6 }}>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Beyond the Classroom
            </Typography>

            <Typography variant="h4" fontWeight={900} sx={{ mt: 1 }}>
              Airforce School Initiatives
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 2,
                maxWidth: 650,
                color: alpha(theme.palette.text.secondary, 0.85),
              }}
            >
              A family of ventures, each built to support a different stage of the learning journey.
            </Typography>
          </Box>
        </RevealOnScroll>

        {/* Carousel */}
        <Carousel ariaLabel="Airforce School initiatives">
          {initiatives.map((item, index) => {
            const Icon = iconMap[item.image] || Sparkles
            const tone = toneColors[index % toneColors.length]

            return (
              <Box
                key={item.title}
                data-carousel-item
                sx={{
                  width: { xs: 'min(84vw, 290px)', sm: 320 },
                  flexShrink: 0,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    boxShadow: 2,
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Stack spacing={2.5}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 4,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: alpha(tone, 0.12),
                          color: tone,
                        }}
                      >
                        <Icon size={24} />
                      </Box>

                      {/* Title */}
                      <Typography variant="h6" fontWeight={800}>
                        {item.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          flex: 1,
                          color: alpha(theme.palette.text.secondary, 0.9),
                          lineHeight: 1.7,
                        }}
                      >
                        {item.description}
                      </Typography>

                      {/* Link */}
                      <Button
                        component={Link}
                        to={item.href}
                        size="small"
                        sx={{
                          alignSelf: 'flex-start',
                          fontWeight: 700,
                          textTransform: 'none',
                        }}
                      >
                        Read More →
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            )
          })}
        </Carousel>
      </Container>
    </Box>
  )
}
