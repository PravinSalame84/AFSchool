import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { alpha } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import {
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  CalendarDays,
  Compass,
  DownloadCloud,
  FileText,
  Flag,
  Laptop,
  MapPin,
  Music4,
  Phone,
  ShieldCheck,
  Trophy,
} from 'lucide-react'
import Hero from '../components/sections/Hero'
import FAQSection from '../components/sections/FAQSection'
import Initiatives from '../components/sections/Initiatives'
import Achievements from '../components/sections/Achievements'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Carousel from '../components/ui/Carousel'
import Eyebrow from '../components/ui/Eyebrow'
import OptimizedImage from '../components/ui/OptimizedImage'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import useRuntimeContent from '../hooks/useRuntimeContent'
import { activityToneTokens, brandColors } from '../theme/colorTokens'

const facilityIcons = [Laptop, BookOpenCheck, Building2, Music4, ShieldCheck, Trophy]

const activityTones = activityToneTokens

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function glassCardSx(theme) {
  return {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 4,
    border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.2 : 0.08)}`,
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(14,20,24,0.94), rgba(29,33,60,0.86))'
        : 'linear-gradient(135deg, rgba(250,253,255,0.98), rgba(237,249,253,0.95))',
    boxShadow: '0 20px 48px -30px rgba(17, 26, 36, 0.2)',
    backdropFilter: 'blur(14px)',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 35%, transparent 60%)',
    },
  }
}

function mutedTextSx(theme) {
  return {
    color: theme.palette.mode === 'dark' ? alpha('#d7eff6', 0.82) : theme.palette.text.secondary,
  }
}

// Homepage sections intentionally alternate between sky-blue surfaces
// so adjacent content blocks stay visually distinct like the original design.
function sectionShell(theme, tone = 'soft') {
  const tones = {
    clear: {
      light: 'transparent',
      dark: 'transparent',
    },
    soft: {
      light: 'linear-gradient(180deg, rgba(244,251,254,0.86), rgba(228,246,251,0.96))',
      dark: 'linear-gradient(180deg, rgba(11,19,32,0.2), rgba(17,28,43,0.48))',
    },
    sky: {
      light: 'linear-gradient(180deg, rgba(215,239,246,0.92), rgba(186,226,238,0.78))',
      dark: 'linear-gradient(180deg, rgba(17,28,43,0.42), rgba(11,19,32,0.78))',
    },
  }

  return {
    background: theme.palette.mode === 'dark' ? tones[tone].dark : tones[tone].light,
  }
}

function horizontalScrollerSx(theme) {
  return {
    overflowX: 'auto',
    pb: 1.5,
    WebkitOverflowScrolling: 'touch',
    touchAction: 'pan-x',
    scrollbarWidth: 'thin',
    scrollbarColor: `${alpha(theme.palette.primary.main, 0.3)} transparent`,
    '&::-webkit-scrollbar': {
      height: 7,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: alpha(theme.palette.primary.main, 0.24),
      borderRadius: 999,
    },
  }
}

export default function Home() {
  const theme = useTheme()
  const { openEnquiry } = useEnquiryModal()
  const { content: runtimeContent, source } = useRuntimeContent()

  const liveMarquee = runtimeContent.marquee?.length ? runtimeContent.marquee : schoolContent.marquee
  const liveNotices = runtimeContent.notices?.length ? runtimeContent.notices : schoolContent.notices
  const liveDownloads = runtimeContent.downloads?.length ? runtimeContent.downloads : schoolContent.downloads

  return (
    <>
      <Seo
        title={schoolContent.meta.title}
        description={schoolContent.meta.description}
        path="/"
        image={schoolContent.hero.slides[2].image}
      />

      <Hero />

      <Box component="section" sx={{ ...sectionShell(theme, 'clear'), px: { xs: 2, sm: 3, lg: 4 } }}>
        <Container>
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: 4,
              border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.08)}`,
              px: 2,
              py: 1.5,
              background:
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(90deg, rgba(14,20,24,0.78), rgba(29,33,60,0.74), rgba(14,20,24,0.78))'
                  : 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(228,246,251,0.76), rgba(255,255,255,0.9))',
              boxShadow: '0 12px 28px rgba(17, 26, 36, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: 'max-content',
                gap: 1.5,
                alignItems: 'center',
                animation: 'homepage-marquee 28s linear infinite',
                '@keyframes homepage-marquee': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' },
                },
              }}
            >
              {[...liveMarquee, ...liveMarquee].map((item, index) => (
                <Chip
                  key={`${item}-${index}`}
                  label={item}
                  sx={{
                    borderRadius: 4,
                    bgcolor: theme.palette.mode === 'dark' ? alpha(brandColors.white, 0.08) : alpha(theme.palette.common.white, 0.75),
                    color: theme.palette.mode === 'dark' ? brandColors.white : 'text.primary',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    '& .MuiChip-label': { px: 1.25, py: 0.75 },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ ...sectionShell(theme, 'soft'), py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, lg: 4 } }}>
        <Container>
          <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', lg: 'flex-end' }} spacing={3} sx={{ mb: 5 }}>
            <Box>
              <Eyebrow>Quick Navigation</Eyebrow>
              <Typography variant="h2" sx={{ mt: 1.5, maxWidth: 720, fontWeight: 800, lineHeight: 0.95, fontSize: { xs: '2.4rem', sm: '3.25rem' } }}>
                Everything families usually need, faster.
              </Typography>
            </Box>
            <Typography sx={{ maxWidth: 520, ...mutedTextSx(theme), fontSize: '0.95rem', lineHeight: 1.8 }}>
              Structured access to admissions, notices, downloads, gallery, parent resources and official school information.
            </Typography>
          </Stack>

          <Grid container spacing={2.5}>
            {schoolContent.quickLinks.map((item, index) => (
              <Grid item xs={12} md={6} xl={4} key={item.label}>
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Button
                    to={item.to}
                    variant="outline"
                    icon={false}
                    sx={{
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: { xs: 'stretch', sm: 'flex-start' },
                      flexDirection: { xs: 'column', sm: 'row' },
                      borderRadius: 4,
                      px: 2.5,
                      py: 2.5,
                      textAlign: 'left',
                      borderColor: alpha('#f0934b', 0.3),
                      background:
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, rgba(240,147,75,0.18), rgba(14,20,24,0.94), rgba(29,33,60,0.84))'
                          : 'linear-gradient(135deg, rgba(240,147,75,0.12), rgba(255,255,255,0.96), rgba(228,246,251,0.8))',
                      '&:hover': {
                        borderColor: alpha('#f0934b', 0.5),
                        background:
                          theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(240,147,75,0.22), rgba(14,20,24,0.98), rgba(29,33,60,0.88))'
                            : 'linear-gradient(135deg, rgba(240,147,75,0.18), rgba(255,255,255,1), rgba(228,246,251,0.9))',
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ flex: 1, minWidth: 0, width: '100%' }}>
                      <Avatar sx={{ width: 48, height: 48, borderRadius: 4, bgcolor: 'primary.main', color: brandColors.white }}>
                        <item.icon size={20} />
                      </Avatar>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '1.05rem', color: 'text.primary' }}>
                          {item.label}
                        </Typography>
                        <Typography sx={{ mt: 1, textTransform: 'none', letterSpacing: 0, ...mutedTextSx(theme), fontSize: '0.92rem', lineHeight: 1.7 }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                    <Box sx={{ alignSelf: { xs: 'flex-end', sm: 'flex-start' }, mt: { xs: 1.5, sm: 0 } }}>
                      <ArrowUpRight size={20} />
                    </Box>
                  </Button>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ ...sectionShell(theme, 'sky'), py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, lg: 4 } }}>
        <Container>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' }, gap: 3 }}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0} variants={rise}>
              <Paper sx={(currentTheme) => ({ ...glassCardSx(currentTheme), p: { xs: 3, sm: 4 } })}>
                <Box sx={{ position: 'relative' }}>
                  <Eyebrow>About The School</Eyebrow>
                  <Typography variant="h2" sx={{ mt: 1.5, fontWeight: 800, lineHeight: 0.95, fontSize: { xs: '2.4rem', sm: '3.25rem' } }}>
                    Built on values. Designed for the next generation.
                  </Typography>
                  <Typography sx={{ mt: 3, fontSize: '1rem', lineHeight: 1.9, ...mutedTextSx(theme) }}>
                    {schoolContent.about.narrative}
                  </Typography>
                  <Typography sx={{ mt: 2, fontSize: '1rem', lineHeight: 1.9, ...mutedTextSx(theme) }}>
                    {schoolContent.about.extended}
                  </Typography>

                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {schoolContent.facts.map((fact, index) => (
                      <Grid item xs={6} md={3} key={fact.label}>
                        <motion.div custom={0.08 + index * 0.05} variants={rise}>
                          <Paper
                            sx={{
                              p: 2,
                              borderRadius: 4,
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                              bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.35) : alpha(brandColors.white, 0.82),
                              boxShadow: '0 12px 28px rgba(17, 26, 36, 0.08)',
                            }}
                          >
                            <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'text.secondary' }}>
                              {fact.label}
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: { xs: '1.45rem', sm: '1.65rem' }, fontWeight: 800, textTransform: 'uppercase', color: 'text.primary' }}>
                              {fact.value}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0.14} variants={rise}>
              <Stack spacing={3}>
                <Paper sx={(currentTheme) => ({ ...glassCardSx(currentTheme), p: 3 })}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main', color: brandColors.white }}>
                      <Compass size={20} />
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'text.secondary' }}>
                        Vision
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>
                        Confident Global Citizens
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography sx={{ mt: 2, fontSize: '0.95rem', lineHeight: 1.8, ...mutedTextSx(theme) }}>
                    {schoolContent.about.vision}
                  </Typography>
                </Paper>

                <Paper sx={(currentTheme) => ({ ...glassCardSx(currentTheme), p: 3 })}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: 'secondary.main', color: brandColors.white }}>
                      <Flag size={20} />
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'text.secondary' }}>
                        Mission
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>
                        Inclusive, Child-Centred Growth
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography sx={{ mt: 2, fontSize: '0.95rem', lineHeight: 1.8, ...mutedTextSx(theme) }}>
                    {schoolContent.about.mission}
                  </Typography>
                </Paper>

                <Paper
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    p: 3,
                    color: brandColors.white,
                    background: 'linear-gradient(135deg, #1d213c 0%, #202c36 55%, #344656 100%)',
                    boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
                  }}
                >
                  <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at top right, rgba(215,166,37,0.28), transparent 28%)' }} />
                  <Box sx={{ position: 'relative' }}>
                    <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: alpha(brandColors.white, 0.6) }}>
                      Parent Access
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1.25} sx={{ mt: 2 }}>
                      {schoolContent.resources.slice(0, 3).map((resource) => (
                        <Box
                          key={resource.label}
                          component={Link}
                          to={resource.to}
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            borderRadius: 4,
                            border: `1px solid ${alpha(brandColors.white, 0.16)}`,
                            px: 2,
                            py: 1,
                            color: brandColors.white,
                            textDecoration: 'none',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.16em',
                            transition: 'border-color 0.2s ease, transform 0.2s ease',
                            '&:hover': { borderColor: alpha(brandColors.white, 0.4), transform: 'translateY(-1px)' },
                          }}
                        >
                          {resource.label}
                          <ArrowUpRight size={14} />
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Paper>
              </Stack>
            </motion.div>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ ...sectionShell(theme, 'soft'), py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, lg: 4 } }}>
        <Container>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={rise}>
            <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', lg: 'flex-end' }} spacing={3} sx={{ mb: 5 }}>
              <Box>
                <Eyebrow>Infrastructure</Eyebrow>
                <Typography variant="h2" sx={{ mt: 1.5, maxWidth: 760, fontWeight: 800, lineHeight: 0.95, fontSize: { xs: '2.4rem', sm: '3.25rem' } }}>
                  A campus shaped for safety, curiosity and everyday excellence.
                </Typography>
              </Box>
              <Typography sx={{ maxWidth: 520, ...mutedTextSx(theme), fontSize: '0.95rem', lineHeight: 1.8 }}>
                From smart classrooms to activity rooms and wellness support, the school environment is built to balance focus, movement and creative growth.
              </Typography>
            </Stack>
          </motion.div>

          <Box sx={horizontalScrollerSx(theme)}>
            <Box sx={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: { xs: '90%', sm: '48%', lg: 'minmax(220px, 1fr)' }, gap: 2.5, minWidth: { lg: '100%' }, alignItems: 'stretch' }}>
              {schoolContent.facilities.map((facility, index) => {
                const Icon = facilityIcons[index]

                return (
                  <motion.div
                    key={facility}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Paper
                      sx={(currentTheme) => ({
                        ...glassCardSx(currentTheme),
                        p: 3,
                        minHeight: '100%',
                        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 28px 70px -34px rgba(12, 24, 41, 0.42)',
                          borderColor: alpha('#e7ab33', 0.34),
                        },
                      })}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <Avatar sx={{ width: 48, height: 48, borderRadius: 4, bgcolor: 'primary.main', color: brandColors.white }}>
                          <Icon size={20} />
                        </Avatar>
                        <Typography sx={{ mt: 2, fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.55, color: 'text.primary' }}>
                          {facility}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                )
              })}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ ...sectionShell(theme, 'sky'), py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, lg: 4 } }}>
        <Container>
          <Box sx={{ ...horizontalScrollerSx(theme), mb: 2 }}>
            <Box sx={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: { xs: '92%', sm: '58%', lg: 'minmax(260px, 1fr)' }, gap: 2.5, minWidth: { lg: '100%' }, alignItems: 'stretch' }}>
              {schoolContent.statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Paper sx={(currentTheme) => ({ ...glassCardSx(currentTheme), p: 1.5, minHeight: '100%' })}>
                    <Box sx={{ position: 'relative', display: 'grid', gap: 2, gridTemplateColumns: '92px 1fr', alignItems: 'center' }}>
                      <OptimizedImage
                        src={stat.image}
                        alt={stat.label}
                        wrapperSx={{ borderRadius: 4 }}
                        sx={{ height: 96, borderRadius: 4 }}
                      />
                      <Box sx={{ px: 1, py: 1 }}>
                        <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'text.secondary' }}>
                          {stat.label}
                        </Typography>
                        <Typography sx={{ mt: 1, fontSize: { xs: '1.6rem', sm: '1.9rem' }, fontWeight: 800, textTransform: 'uppercase', color: 'text.primary' }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ mt: 1, fontSize: '0.78rem', lineHeight: 1.7, ...mutedTextSx(theme) }}>
                          {stat.caption}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Carousel autoPlay interval={3200} ariaLabel="Student life highlights">
              {schoolContent.studentShowcase.map((item, index) => (
                <motion.div
                  key={item.title}
                  data-carousel-item
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  style={{ minHeight: 250, width: 'min(340px, 88vw)', flexShrink: 0 }}
                >
                  <Paper sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)' }}>
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      wrapperSx={{ position: 'absolute', inset: 0 }}
                      sx={{ height: 250, transition: 'transform 700ms ease', '&:hover': { transform: 'scale(1.05)' } }}
                    />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(29,33,60,0.08), rgba(32,44,54,0.46), rgba(29,33,60,0.95))' }} />
                    <Box sx={{ position: 'relative', display: 'flex', minHeight: 250, flexDirection: 'column', justifyContent: 'flex-end', p: 2.5, color: brandColors.white }}>
                      <Chip
                        label={item.badge}
                        sx={{
                          alignSelf: 'flex-start',
                          borderRadius: 4,
                          color: brandColors.white,
                          bgcolor: 'rgba(255,255,255,0.14)',
                          border: '1px solid rgba(255,255,255,0.16)',
                          backdropFilter: 'blur(10px)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.18em',
                          fontWeight: 800,
                        }}
                      />
                      <Typography variant="h5" sx={{ mt: 2, fontWeight: 800, textTransform: 'uppercase' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ mt: 1, fontSize: '0.92rem', lineHeight: 1.7, color: alpha(brandColors.white, 0.82) }}>
                        {item.caption}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </Carousel>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.96fr 1.04fr' }, gap: 3 }}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0} variants={rise}>
              <Paper sx={(currentTheme) => ({ ...glassCardSx(currentTheme), p: { xs: 3, sm: 4 } })}>
                <Box sx={{ position: 'relative' }}>
                  <Eyebrow>Campus Life</Eyebrow>
                  <Typography variant="h2" sx={{ mt: 1.5, fontWeight: 800, lineHeight: 0.95, fontSize: { xs: '2.3rem', sm: '3rem' } }}>
                    Learning that moves beyond the classroom.
                  </Typography>
                  <Typography sx={{ mt: 3, fontSize: '0.95rem', lineHeight: 1.8, ...mutedTextSx(theme) }}>
                    Air Force School encourages strong participation across academic, cultural and physical activity spaces so students build discipline, expression and confidence together.
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1.25} sx={{ mt: 3 }}>
                    {['Smart Learning', 'Student Participation', 'Holistic Growth'].map((item, index) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{
                          borderRadius: 4,
                          bgcolor:
                            index === 0
                              ? alpha('#ffd707', 0.18)
                              : index === 1
                                ? alpha('#00d4fa', 0.12)
                                : alpha('#ff671f', 0.14),
                          color: 'text.primary',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.16em',
                        }}
                      />
                    ))}
                  </Stack>

                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {schoolContent.activities.map((activity, index) => {
                      const tone = activityTones[index % activityTones.length]

                      return (
                        <Grid item xs={12} sm={6} key={activity.title}>
                          <Box
                            component={Link}
                            to={activity.to}
                            sx={{
                              display: 'block',
                              borderRadius: 4,
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                              p: 2,
                              textDecoration: 'none',
                              boxShadow: '0 12px 28px rgba(17, 26, 36, 0.08)',
                              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                              background: theme.palette.mode === 'dark' ? tone.surfaceDark : tone.surface,
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 18px 36px rgba(17, 26, 36, 0.12)',
                              },
                            }}
                          >
                            <Stack direction="row" spacing={2}>
                              <OptimizedImage
                                src={activity.image}
                                alt={activity.title}
                                wrapperSx={{ flexShrink: 0, width: 80, height: 80, borderRadius: 4 }}
                                sx={{ width: 80, height: 80, borderRadius: 4 }}
                              />
                              <Box sx={{ minWidth: 0, flex: 1 }}>
                                <Box
                                  sx={{
                                    display: 'inline-flex',
                                    borderRadius: 4,
                                    px: 1.25,
                                    py: 0.6,
                                    fontSize: '0.72rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.16em',
                                    color: tone.badgeColor,
                                    background: tone.badge,
                                  }}
                                >
                                  0{index + 1}
                                </Box>
                                <Stack direction="row" spacing={1} alignItems="flex-start" justifyContent="space-between" sx={{ mt: 1.5 }}>
                                  <Typography sx={{ fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.4, color: 'text.primary' }}>
                                    {activity.title}
                                  </Typography>
                                  <ArrowUpRight size={16} color={tone.icon} />
                                </Stack>
                                <Typography sx={{ mt: 1, fontSize: '0.88rem', lineHeight: 1.7, ...mutedTextSx(theme) }}>
                                  {activity.description}
                                </Typography>
                              </Box>
                            </Stack>
                          </Box>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Box>
              </Paper>
            </motion.div>

            <Stack spacing={3} sx={{ minWidth: 0 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', xl: '1.15fr 0.85fr' }, gap: 2, minWidth: 0 }}>
                <Paper sx={(currentTheme) => ({ ...glassCardSx(currentTheme), p: 1.5 })}>
                  <Box sx={{ position: 'relative' }}>
                    <OptimizedImage
                      src={siteAssets.images.campusActivities}
                      alt="School campus life highlights"
                      wrapperSx={{ borderRadius: 4, }}
                      sx={{ height: { xs: 260, sm: 288 }, borderRadius: 4, }}
                    />
                    <Box sx={{ px: 1, pb: 1, pt: 2 }}>
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#ff671f' }}>
                        Campus Moments
                      </Typography>
                      <Typography variant="h5" sx={{ mt: 1, fontWeight: 800, textTransform: 'uppercase' }}>
                        Visible energy across the school day.
                      </Typography>
                      <Typography sx={{ mt: 1, fontSize: '0.9rem', lineHeight: 1.7, ...mutedTextSx(theme) }}>
                        Assemblies, collaborative spaces and student events help the campus feel active, proud and welcoming.
                      </Typography>
                    </Box>
                  </Box>
                </Paper>

                <Stack spacing={2}>
                  {[
                    {
                      src: siteAssets.images.studentGroupStudy,
                      alt: 'Students studying together',
                      eyebrow: 'Shared Learning',
                      title: 'Students collaborate, revise and learn together.',
                      color: '#00d4fa',
                    },
                    {
                      src: siteAssets.images.studentYoga,
                      alt: 'Students in yoga activity',
                      eyebrow: 'Wellbeing & Balance',
                      title: 'Movement and mindfulness remain part of school life.',
                      color: '#ff671f',
                    },
                  ].map((item) => (
                    <Paper key={item.title} sx={(currentTheme) => ({ ...glassCardSx(currentTheme), p: 1.25, flex: 1 })}>
                      <OptimizedImage
                        src={item.src}
                        alt={item.alt}
                        wrapperSx={{ borderRadius: 4 }}
                        sx={{ height: 160, borderRadius: 4 }}
                      />
                      <Box sx={{ px: 1, pb: 0.5, pt: 1.75 }}>
                        <Typography sx={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: item.color }}>
                          {item.eyebrow}
                        </Typography>
                        <Typography sx={{ mt: 1, fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.6, color: 'text.primary' }}>
                          {item.title}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </Box>

              <Paper sx={(currentTheme) => ({ ...glassCardSx(currentTheme), p: { xs: 2, sm: 2.5 } })}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'flex-end' }} spacing={2} sx={{ mb: 3 }}>
                  <Box>
                    <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#00d4fa' }}>
                      Gallery Highlights
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1, fontWeight: 800, textTransform: 'uppercase' }}>
                      Real moments from classrooms, campus and student activities.
                    </Typography>
                  </Box>
                  <Box
                    component={Link}
                    to="/gallery"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'text.primary',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      '&:hover': { color: '#ff671f' },
                    }}
                  >
                    Open full gallery
                    <ArrowUpRight size={16} />
                  </Box>
                </Stack>

                <Carousel autoPlay interval={3600} ariaLabel="Campus gallery highlights">
                  {schoolContent.gallery.slice(0, 8).map((item, index) => (
                    <motion.div
                      key={item.title}
                      data-carousel-item
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      style={{ width: 'min(340px, calc(100vw - 2.5rem))', flexShrink: 0 }}
                    >
                      <Paper
                        sx={{
                          p: 1.5,
                          borderRadius: 4,
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                          bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.5) : alpha(brandColors.white, 0.9),
                          boxShadow: '0 12px 28px rgba(17, 26, 36, 0.08)',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                          '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 18px 36px rgba(17, 26, 36, 0.12)' },
                        }}
                      >
                        <OptimizedImage
                          src={item.image}
                          alt={item.title}
                          wrapperSx={{ borderRadius: 4 }}
                          sx={{ height: 208, borderRadius: 4 }}
                        />
                        <Box sx={{ px: 1, pb: 1, pt: 2 }}>
                          <Typography sx={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'text.primary' }}>
                            {item.title}
                          </Typography>
                          <Typography sx={{ mt: 1, fontSize: '0.9rem', lineHeight: 1.7, ...mutedTextSx(theme) }}>
                            {item.caption}
                          </Typography>
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </Carousel>
              </Paper>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ ...sectionShell(theme, 'soft'), py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, lg: 4 } }}>
        <Container>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', xl: '1.1fr 0.9fr' }, gap: 3 }}>
            <Paper
              sx={{
                ...glassCardSx(theme),
                p: { xs: 3, sm: 4 },
                background:
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(14,20,24,0.96), rgba(29,33,60,0.94), rgba(52,70,86,0.94))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(247,250,252,0.92), rgba(255,215,7,0.08))',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                <CalendarDays size={20} color="#ff671f" />
                <Eyebrow>Notice Board</Eyebrow>
                <Chip
                  label={source === 'live' ? 'Live Feed' : 'School Archive'}
                  sx={{
                    borderRadius: 4,
                    bgcolor: alpha('#ffd707', 0.18),
                    color: 'text.primary',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                  }}
                />
              </Stack>

              <Stack spacing={2}>
                {liveNotices.slice(0, 4).map((notice, index) => (
                  <motion.div
                    key={notice.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Box
                      component={Link}
                      to={notice.to}
                      sx={{
                        display: 'block',
                        borderRadius: 4,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                        bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.46) : alpha(brandColors.white, 0.88),
                        p: 2.5,
                        textDecoration: 'none',
                        boxShadow: '0 12px 28px rgba(17, 26, 36, 0.08)',
                        transition: 'transform 0.25s ease, border-color 0.25s ease',
                        '&:hover': { transform: 'translateY(-3px)', borderColor: alpha('#ff671f', 0.3) },
                      }}
                    >
                      <Stack direction="row" flexWrap="wrap" gap={1.25} alignItems="center">
                        <Chip
                          label={notice.category}
                          sx={{
                            borderRadius: 4,
                            color: brandColors.white,
                            background: 'linear-gradient(90deg, #ff671f 0%, #f0934b 100%)',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.18em',
                          }}
                        />
                        <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'text.secondary' }}>
                          {notice.date}
                        </Typography>
                      </Stack>
                      <Typography variant="h5" sx={{ mt: 2, fontWeight: 800, textTransform: 'uppercase', color: 'text.primary' }}>
                        {notice.title}
                      </Typography>
                      <Typography sx={{ mt: 1, fontSize: '0.92rem', lineHeight: 1.7, ...mutedTextSx(theme) }}>
                        {notice.excerpt}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Stack>

              <Box sx={{ mt: 3 }}>
                <Button to="/notice-board" variant="outline">
                  Explore All Notices
                </Button>
              </Box>
            </Paper>

            <Paper
              sx={{
                ...glassCardSx(theme),
                p: { xs: 3, sm: 4 },
                background:
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(14,20,24,0.96), rgba(29,33,60,0.94), rgba(0,212,250,0.08))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(247,250,252,0.92), rgba(0,212,250,0.08))',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                <DownloadCloud size={20} color="#00d4fa" />
                <Eyebrow>Downloads</Eyebrow>
              </Stack>

              <Stack spacing={2}>
                {liveDownloads.map((file, index) => (
                  <motion.div
                    key={file.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Box
                      component="a"
                      href={file.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        borderRadius: 4,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                        bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.46) : alpha(brandColors.white, 0.88),
                        px: 2.5,
                        py: 2,
                        textDecoration: 'none',
                        boxShadow: '0 12px 28px rgba(17, 26, 36, 0.08)',
                        transition: 'transform 0.25s ease, border-color 0.25s ease',
                        '&:hover': { transform: 'translateY(-3px)', borderColor: alpha('#00d4fa', 0.3) },
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'text.secondary' }}>
                          {file.category}
                        </Typography>
                        <Typography sx={{ mt: 0.75, fontSize: '0.95rem', fontWeight: 700, color: 'text.primary' }}>
                          {file.label}
                        </Typography>
                      </Box>
                      <ArrowUpRight size={16} color={theme.palette.mode === 'dark' ? '#ffd707' : theme.palette.primary.light} />
                    </Box>
                  </motion.div>
                ))}
              </Stack>

              <Box sx={{ mt: 3 }}>
                <Button to="/downloads" variant="outline">
                  Open Download Centre
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ ...sectionShell(theme, 'soft'), py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, lg: 4 } }}>
        <Container>
          <Paper
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 4,
              p: { xs: 3, sm: 4, md: 5 },
              color: brandColors.white,
              background: 'linear-gradient(135deg, #1d213c 0%, #202c36 55%, #344656 100%)',
              boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
            }}
          >
            <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at top right, rgba(215,166,37,0.35), transparent 28%), radial-gradient(circle at left, rgba(93,138,168,0.14), transparent 20%)' }} />
            <Box sx={{ position: 'relative', display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 0.9fr' }, gap: 4 }}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={rise}>
                <Eyebrow>Admissions</Eyebrow>
                <Typography variant="h2" sx={{ mt: 1.5, color: brandColors.white, fontWeight: 800, lineHeight: 0.95, fontSize: { xs: '2.3rem', sm: '3rem' } }}>
                  Start your school enquiry with clarity and confidence.
                </Typography>
                <Typography sx={{ mt: 3, maxWidth: 680, fontSize: '0.95rem', lineHeight: 1.8, color: alpha(brandColors.white, 0.74) }}>
                  {schoolContent.admissions.intro}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                  <Button size="lg" variant="light" onClick={() => openEnquiry('Admissions Enquiry')}>
                    Enquire For Admission
                  </Button>
                  <Button size="lg" variant="ghost" to={schoolContent.resources[0].to}>
                    View Public Disclosure
                  </Button>
                </Stack>
              </motion.div>

              <Stack spacing={2}>
                {schoolContent.admissions.steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Paper
                      sx={{
                        borderRadius: 4,
                        border: `1px solid ${alpha(brandColors.white, 0.1)}`,
                        bgcolor: alpha(brandColors.white, 0.08),
                        p: 2.5,
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Box
                          sx={{
                            borderRadius: 4,
                            bgcolor: alpha(brandColors.white, 0.12),
                            px: 1.5,
                            py: 0.6,
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.16em',
                            color: brandColors.white,
                          }}
                        >
                          0{index + 1}
                        </Box>
                        <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: alpha(brandColors.white, 0.82) }}>
                          {step}
                        </Typography>
                      </Stack>
                    </Paper>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, lg: 4 } }}>
        <Container>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', xl: '0.9fr 1.1fr' }, gap: 3 }}>
            <Paper
              sx={{
                ...glassCardSx(theme),
                p: { xs: 3, sm: 4 },
                background:
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(14,20,24,0.76), rgba(29,33,60,0.66))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(228,246,251,0.58))',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <FileText size={20} color="#f0934b" />
                <Eyebrow>Leadership Preview</Eyebrow>
              </Stack>
              <Typography variant="h2" sx={{ mt: 2, fontWeight: 800, lineHeight: 0.95, fontSize: { xs: '2.2rem', sm: '3rem' } }}>
                Transparent school governance and parent access.
              </Typography>
              <Typography sx={{ mt: 3, fontSize: '0.95rem', lineHeight: 1.8, ...mutedTextSx(theme) }}>
                {schoolContent.leadership.intro}
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 3 }}>
                {schoolContent.leadership.resources.slice(0, 3).map((resource) => (
                  <Box
                    key={resource.title}
                    component={Link}
                    to={resource.to}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 2,
                      borderRadius: 4,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                      bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.4) : alpha(brandColors.white, 0.78),
                      px: 2.5,
                      py: 2,
                      textDecoration: 'none',
                      boxShadow: '0 12px 28px rgba(17, 26, 36, 0.08)',
                      '&:hover': { borderColor: alpha(theme.palette.primary.light, 0.28) },
                    }}
                  >
                    <Typography sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'text.primary' }}>
                      {resource.title}
                    </Typography>
                    <ArrowUpRight size={16} color={theme.palette.primary.light} />
                  </Box>
                ))}
              </Stack>

              <Box sx={{ mt: 3 }}>
                <Button to="/leadership" variant="outline">
                  Explore Leadership
                </Button>
              </Box>
            </Paper>

            <Paper
              sx={{
                overflow: 'hidden',
                borderRadius: 4,
                border: `1px solid ${alpha(brandColors.white, theme.palette.mode === 'dark' ? 0.1 : 0.7)}`,
                p: 1.5,
                boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
                backdropFilter: 'blur(20px)',
                background:
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(14,20,24,0.84), rgba(29,33,60,0.7))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.84), rgba(228,246,251,0.68))',
              }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={2} sx={{ px: 1.5, py: 1.5 }}>
                <Box>
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: 'text.secondary' }}>
                    Campus Contact
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 800, textTransform: 'uppercase' }}>
                    Air Force School VayuSena Nagar
                  </Typography>
                </Box>
              </Stack>
              <Box
                component="iframe"
                title="Air Force School VayuSena Nagar map"
                src={schoolContent.contact.mapEmbed}
                loading="lazy"
                sx={{ width: '100%', height: 420, border: 0, borderRadius: 4, marginBottom: 4 }}
              />
              <Stack direction="row" flexWrap="wrap" gap={1}>
                <Box
                  component="a"
                  href={`tel:${schoolContent.contact.phone}`}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    borderRadius: 4,
                    bgcolor: 'primary.main',
                    px: 2,
                    py: 1,
                    color: brandColors.white,
                    textDecoration: 'none',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                  }}
                >
                  <Phone size={14} />
                  Call
                </Box>
                <Box
                  component="a"
                  href={schoolContent.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    borderRadius: 4,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                    px: 2,
                    py: 1,
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                  }}
                >
                  <MapPin size={14} />
                  Open Map
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Initiatives />
      <Achievements />

      <FAQSection />
    </>
  )
}
