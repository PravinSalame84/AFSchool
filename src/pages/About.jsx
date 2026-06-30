import { motion } from 'framer-motion'
import { alpha } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { Compass, Flag, HeartHandshake, Leaf, Quote, ShieldCheck, Sparkles, Users2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import Initiatives from '../components/sections/Initiatives'
import Achievements from '../components/sections/Achievements'
import FAQSection from '../components/sections/FAQSection'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import siteConfig from '../data/siteConfig'
import { brandColors } from '../theme/colorTokens'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const outreachPrograms = [
  {
    icon: Leaf,
    title: 'Green Campus Initiative',
    description: 'Student-led cleanliness, recycling and campus care habits encourage responsibility beyond the classroom.',
  },
  {
    icon: HeartHandshake,
    title: 'Parent & Community Partnership',
    description: 'School events, PTMs and guided participation help families stay connected to student growth.',
  },
  {
    icon: Users2,
    title: 'Learning Beyond School Walls',
    description: 'Trips, competitions and guided exposure activities support confidence, expression and teamwork.',
  },
]

function panelSx(theme, tone = 'light') {
  if (tone === 'dark') {
    return {
      borderRadius: 4,
      color: brandColors.white,
      background: 'linear-gradient(135deg, #1d213c 0%, #24364a 55%, #344656 100%)',
      boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
    }
  }

  return {
    borderRadius: 4,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(14,20,24,0.94), rgba(29,33,60,0.84))'
        : 'linear-gradient(135deg, rgba(250,253,255,0.98), rgba(237,249,253,0.94))',
    boxShadow: '0 20px 48px -30px rgba(17, 26, 36, 0.2)',
  }
}

export default function About() {
  const theme = useTheme()

  return (
    <>
      <Seo
        title="About School"
        description="Learn about the Air Force School story, vision, mission, initiatives and school life."
        path="/about"
        image={siteAssets.images.chief}
      />

      <PageHero
        crumb="About Us"
        eyebrow="Our Story"
        title={`About ${siteConfig.brandName} ${siteConfig.brandSuffix}`}
        subtitle="Established to provide quality education with discipline, care and inclusive development for the wards of Air Force personnel and the wider school community."
        image={siteAssets.images.chief}
      />

      <Box sx={{ py: { xs: 7, md: 10 }, background: theme.palette.mode === 'dark' ? 'transparent' : 'linear-gradient(180deg, rgba(215,239,246,0.62), rgba(186,226,238,0.34))' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3.5}>
            <Grid item xs={12} lg={7}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
                <Paper sx={{ ...panelSx(theme), p: { xs: 3, sm: 4 } }}>
                  <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.2em' }}>
                    Who We Are
                  </Typography>
                  <Typography variant="h2" sx={{ mt: 1.5, fontWeight: 800, lineHeight: 0.96, fontSize: { xs: '2.2rem', sm: '3rem' } }}>
                    A values-led school built on structure, warmth and steady growth.
                  </Typography>
                  <Typography sx={{ mt: 3, color: 'text.secondary', lineHeight: 1.9 }}>
                    Established in {siteConfig.yearFounded}, Air Force School VayuSena Nagar functions under the Indian Air Force Educational and Cultural Society, New Delhi, and serves students from LKG to IX.
                  </Typography>
                  <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.9 }}>
                    {schoolContent.about.narrative}
                  </Typography>
                  <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.9 }}>
                    {schoolContent.about.extended}
                  </Typography>

                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {schoolContent.facts.map((fact, index) => (
                      <Grid item xs={6} md={3} key={fact.label}>
                        <motion.div custom={0.08 + index * 0.05} initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
                          <Paper
                            elevation={0}
                            sx={{
                              p: 2,
                              borderRadius: '1.4rem',
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                              bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.58) : alpha(brandColors.white, 0.82),
                            }}
                          >
                            <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'text.secondary' }}>
                              {fact.label}
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: { xs: '1.3rem', sm: '1.55rem' }, fontWeight: 800, color: 'text.primary' }}>
                              {fact.value}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Stack spacing={3}>
                {[
                  {
                    label: 'Vision',
                    title: 'Confident and self-sustaining individuals',
                    body: schoolContent.about.vision,
                    icon: Compass,
                    color: 'primary.main',
                  },
                  {
                    label: 'Mission',
                    title: 'Inclusive education for every child',
                    body: schoolContent.about.mission,
                    icon: Flag,
                    color: 'secondary.main',
                  },
                ].map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.label}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      custom={0.12 + index * 0.06}
                      variants={reveal}
                    >
                      <Paper sx={{ ...panelSx(theme), p: 3 }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                          <Avatar sx={{ bgcolor: item.color, color: brandColors.white, width: 48, height: 48 }}>
                            <Icon size={20} />
                          </Avatar>
                          <Box>
                            <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'text.secondary' }}>
                              {item.label}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                              {item.title}
                            </Typography>
                          </Box>
                        </Stack>
                        <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                          {item.body}
                        </Typography>
                      </Paper>
                    </motion.div>
                  )
                })}

                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.24} variants={reveal}>
                  <Paper sx={{ ...panelSx(theme, 'dark'), p: 3.5 }}>
                    <Typography variant="caption" sx={{ opacity: 0.72, textTransform: 'uppercase', letterSpacing: '0.18em' }}>
                      Registered With
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 800, lineHeight: 1.4 }}>
                      Indian Air Force Educational and Cultural Society, New Delhi
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 3 }}>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 1.5, py: 0.9, borderRadius: 4, bgcolor: alpha(brandColors.white, 0.12) }}>
                        <Sparkles size={14} />
                        <Typography sx={{ fontSize: '0.76rem', fontWeight: 700 }}>Teaching is Learning</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 1.5, py: 0.9, borderRadius: 4, bgcolor: alpha(brandColors.white, 0.12) }}>
                        <ShieldCheck size={14} />
                        <Typography sx={{ fontSize: '0.76rem', fontWeight: 700 }}>Legacy Since 1968</Typography>
                      </Stack>
                    </Stack>
                  </Paper>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 9 }, background: theme.palette.mode === 'dark' ? 'transparent' : 'linear-gradient(180deg, rgba(228,246,251,0.7), rgba(244,251,254,0.9))' }}>
        <Container maxWidth="md">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <Paper sx={{ ...panelSx(theme), p: { xs: 3, sm: 4.5 }, textAlign: 'center' }}>
              <Quote size={38} color={theme.palette.secondary.main} />
              <Typography sx={{ mt: 2.5, fontSize: { xs: '1.12rem', sm: '1.45rem' }, fontWeight: 700, lineHeight: 1.8, color: 'text.primary', fontStyle: 'italic' }}>
                "Education is not about filling a vessel, it is about lighting a fire. Every decision we make starts with the question: will this help a child think, grow and stand confidently on their own?"
              </Typography>
              <Typography sx={{ mt: 3, fontWeight: 800, color: 'primary.main' }}>
                School Leadership Message
              </Typography>
              <Typography sx={{ mt: 0.6, fontSize: '0.84rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'text.secondary' }}>
                {siteConfig.brandName} {siteConfig.brandSuffix}
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      <div id="initiatives">
        <Initiatives />
      </div>

      <div id="awards">
        <Achievements />
      </div>

      <Box id="outreach" sx={{ py: { xs: 7, md: 10 }, background: theme.palette.mode === 'dark' ? 'transparent' : 'linear-gradient(180deg, rgba(228,246,251,0.88), rgba(215,239,246,0.94))' }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <Box sx={{ maxWidth: 700, mx: 'auto', textAlign: 'center' }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.2em' }}>
                Giving Back
              </Typography>
              <Typography variant="h2" sx={{ mt: 1.5, fontWeight: 800, lineHeight: 0.98, fontSize: { xs: '2rem', sm: '2.8rem' } }}>
                School life works best when it reaches beyond the classroom.
              </Typography>
              <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                The school experience is strengthened through care for the campus, parent partnership and activity-led exposure for students.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={2.5} sx={{ mt: 3 }}>
            {outreachPrograms.map((item, index) => {
              const Icon = item.icon

              return (
                <Grid item xs={12} md={4} key={item.title}>
                  <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.08 + index * 0.05} variants={reveal}>
                    <Paper sx={{ ...panelSx(theme), p: 3, height: '100%' }}>
                      <Avatar sx={{ width: 54, height: 54, bgcolor: alpha(theme.palette.secondary.main, 0.14), color: 'secondary.main' }}>
                        <Icon size={22} />
                      </Avatar>
                      <Typography variant="h6" sx={{ mt: 2, fontWeight: 800 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ mt: 1.25, color: 'text.secondary', lineHeight: 1.8 }}>
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>

      <FAQSection />
    </>
  )
}
