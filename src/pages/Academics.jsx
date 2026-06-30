import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BookOpenCheck,
  ClipboardPenLine,
  Dumbbell,
  Sparkles,
} from 'lucide-react'

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import OptimizedImage from '../components/ui/OptimizedImage'

import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import { brandColors } from '../theme/colorTokens'

const icons = [
  BookOpenCheck,
  ClipboardPenLine,
  Dumbbell,
  Sparkles,
]

export default function Academics() {
  return (
    <>
      <Seo
        title="Academics"
        description="Explore curriculum, co-curricular activity, sports and school learning culture at Air Force School."
        path="/academics"
        image={siteAssets.images.smartClassroom}
      />

      <PageHero
        crumb="Academics"
        eyebrow="Learning Experience"
        title="Balanced academics with activity, discipline and creative growth."
        subtitle="Air Force School follows a broad, well-balanced and relevant approach to teaching, supported by co-curricular, sports and whole-child development."
        image={siteAssets.images.smartClassroom}
      />

      <Box py={{ xs: 7, md: 8 }}>
        <Container maxWidth="xl">

          <Grid container spacing={4}>

            {/* LEFT */}

            <Grid item xs={12} lg={5}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 4,
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, sm: 5 } }}>

                  <Typography
                    variant="overline"
                    color="secondary.main"
                    fontWeight={700}
                    letterSpacing={2}
                  >
                    Academic Philosophy
                  </Typography>

                  <Typography
                    variant="h3"
                    fontWeight={700}
                    mt={1}
                    sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
                  >
                    Broad, well-balanced and relevant learning.
                  </Typography>

                  <Typography
                    mt={3}
                    color="text.secondary"
                    lineHeight={1.8}
                  >
                    {schoolContent.academics.overview}
                  </Typography>

                  <Grid
                    container
                    spacing={2}
                    mt={3}
                  >
                    {schoolContent.statistics.map((stat, index) => (

                      <Grid item key={stat.label} xs={12} sm={6}>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * .08,
                          }}
                        >
                          <Card
                            variant="outlined"
                            sx={{
                              borderRadius: 4,
                              height: '100%',
                            }}
                          >
                            <CardContent>

                              <Grid
                                container
                                spacing={2}
                                alignItems="center"
                              >
                                <Grid item xs={12} sm={4}>
                                  <OptimizedImage
                                    src={stat.image}
                                    alt={stat.label}
                                    wrapperSx={{ borderRadius: 4 }}
                                    sx={{ height: 96, borderRadius: 4 }}
                                  />
                                </Grid>

                                <Grid item xs={12} sm={8}>

                                  <Typography
                                    variant="caption"
                                    color="primary"
                                    fontWeight={700}
                                  >
                                    {stat.label}
                                  </Typography>

                                  <Typography
                                    variant="h5"
                                    fontWeight={700}
                                    mt={1}
                                  >
                                    {stat.value}
                                  </Typography>

                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    mt={1}
                                  >
                                    {stat.caption}
                                  </Typography>

                                </Grid>
                              </Grid>

                            </CardContent>
                          </Card>
                        </motion.div>

                      </Grid>

                    ))}
                  </Grid>

                </CardContent>
              </Card>
            </Grid>

            {/* RIGHT */}

            <Grid item xs={12} lg={7}>

              <Grid container spacing={3}>

                {schoolContent.academics.programmes.map((item, index) => {

                  const Icon = icons[index]

                  return (

                    <Grid item key={item.title} xs={12} md={index === 0 ? 12 : 6}>

                      <Card
                        component={Link}
                        to={item.to}
                        elevation={2}
                        sx={{
                          textDecoration: 'none',
                          borderRadius: 4,
                          transition: '.3s',
                          height: '100%',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: 8,
                          },
                        }}
                      >
                        <CardContent>

                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={2}
                            alignItems="flex-start"
                          >
                            <Paper
                              elevation={0}
                              sx={{
                                width: 52,
                                height: 52,
                                borderRadius: 4,
                                bgcolor: 'primary.main',
                                color: brandColors.white,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon size={22} />
                            </Paper>

                            <ArrowUpRight size={20} />
                          </Stack>

                          <Typography
                            variant="h5"
                            fontWeight={700}
                            mt={3}
                            sx={{ fontSize: { xs: '1.15rem', sm: '1.5rem' } }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            mt={2}
                            color="text.secondary"
                          >
                            {item.description}
                          </Typography>

                        </CardContent>
                      </Card>

                    </Grid>

                  )
                })}

              </Grid>

            </Grid>

          </Grid>

          {/* Facilities */}

          <Grid
            container
            spacing={3}
            mt={4}
          >

            {schoolContent.facilities.map((facility) => (

              <Grid item key={facility} xs={12} md={6} xl={4}>

                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    height: '100%',
                  }}
                >
                  <CardContent>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      {facility}
                    </Typography>

                  </CardContent>
                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>
      </Box>
    </>
  )
}
