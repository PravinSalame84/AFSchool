import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { Avatar, Box, Chip, Paper, Stack, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Carousel from '../ui/Carousel'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import teachers from '../../data/teachers'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

const badges = [
  { icon: SchoolRoundedIcon, label: 'Experienced mentors' },
  { icon: WorkspacePremiumRoundedIcon, label: 'Holistic growth' },
  { icon: AutoAwesomeRoundedIcon, label: 'Child-first teaching' },
]

export default function MeetOurTeachers() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 11 },
        background:
          'radial-gradient(circle at top left, rgba(93,138,168,0.18), transparent 26%), linear-gradient(180deg, #f7fbfe 0%, #ecf4f8 100%)',
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', xl: '0.9fr 1.1fr' },
            gap: { xs: 4, lg: 5 },
            alignItems: 'start',
          }}
        >
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Meet Our Teachers"
              title="Guided by mentors who make learning feel disciplined, warm and deeply human"
              subtitle="Every classroom at Air Force School is shaped by teachers who combine structure, care and strong academic intent without losing the joy of learning."
            />

            <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1.25} sx={{ mt: 3 }}>
              {badges.map(({ icon: Icon, label }) => (
                <Chip
                  key={label}
                  icon={<Icon style={{ fontSize: 18 }} />}
                  label={label}
                  sx={{
                    px: 0.75,
                    py: 0.6,
                    height: 36,
                    borderRadius: '999px',
                    bgcolor: 'rgba(17,26,36,0.06)',
                    color: 'primary.main',
                    fontWeight: 700,
                  }}
                />
              ))}
            </Stack>

            <Paper
              sx={{
                mt: 3.5,
                p: { xs: 2.5, sm: 3 },
                borderRadius: 5,
                background:
                  'linear-gradient(135deg, rgba(17,26,36,0.96), rgba(45,83,103,0.92))',
                color: '#fff',
                boxShadow: '0 28px 70px -36px rgba(17, 26, 36, 0.55)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -30,
                  right: -20,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(240,147,75,0.34), rgba(240,147,75,0))',
                  pointerEvents: 'none',
                }}
              />
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>
                Teacher Culture
              </Typography>
              <Typography sx={{ mt: 1.2, fontSize: { xs: '1.15rem', sm: '1.4rem' }, fontWeight: 700, lineHeight: 1.25 }}>
                Workshops, mentoring and reflective practice help our faculty keep learning too.
              </Typography>
              <Typography sx={{ mt: 1.5, color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, fontSize: '0.92rem' }}>
                That means students benefit from classrooms that are more engaging, more responsive and better aligned with the needs of each age group.
              </Typography>
              <Box
                component="button"
                onClick={() => openEnquiry('Faculty & Classroom Enquiry')}
                sx={{
                  mt: 2.5,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  border: 0,
                  background: 'transparent',
                  color: '#fff',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  p: 0,
                }}
              >
                Explore the learning environment
                <ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />
              </Box>
            </Paper>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <Paper
              sx={{
                p: { xs: 2, sm: 2.5 },
                borderRadius: 5,
                backgroundColor: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(255,255,255,0.78)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 24px 60px -38px rgba(17,26,36,0.28)',
              }}
            >
            <Carousel ariaLabel="Meet our teachers" autoPlay interval={4600}>
              {teachers.map((teacher) => (
                <Box
                  key={teacher.id}
                  data-carousel-item
                  sx={{
                    width: { xs: 272, sm: 318, lg: 344 },
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                  }}
                >
                  <Paper
                    sx={{
                      height: '100%',
                      overflow: 'hidden',
                      borderRadius: 5,
                      boxShadow: '0 18px 42px -30px rgba(17, 26, 36, 0.22)',
                      backgroundColor: '#fff',
                      transition: 'transform 260ms ease, box-shadow 260ms ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 26px 56px -30px rgba(17,26,36,0.28)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        px: 2,
                        pt: 2,
                        pb: 0,
                        background:
                          'linear-gradient(180deg, rgba(215,239,246,0.95) 0%, rgba(236,244,248,0.92) 100%)',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 14,
                          right: 14,
                          px: 1.15,
                          py: 0.55,
                          borderRadius: '999px',
                          bgcolor: 'rgba(255,255,255,0.82)',
                          color: 'secondary.dark',
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          letterSpacing: '0.06em',
                          maxWidth: 150,
                        }}
                      >
                        {teacher.highlight}
                      </Box>
                      <Avatar
                        src={teacher.image}
                        alt={teacher.name}
                        variant="rounded"
                        sx={{
                          width: '100%',
                          height: { xs: 236, sm: 274 },
                          borderRadius: 3.5,
                          bgcolor: '#d7eff6',
                          '& .MuiAvatar-img': {
                            objectFit: 'cover',
                            objectPosition: 'center top',
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ p: 2.4 }}>
                      <Typography sx={{ color: 'secondary.dark', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                        {teacher.role}
                      </Typography>
                      <Typography sx={{ mt: 0.9, color: 'primary.main', fontSize: { xs: '1.05rem', sm: '1.2rem' }, fontWeight: 700, lineHeight: 1.15 }}>
                        {teacher.name}
                      </Typography>

                      <Stack direction="row" useFlexGap flexWrap="wrap" spacing={0.9} sx={{ mt: 1.6 }}>
                        {teacher.subjects.map((subject) => (
                          <Chip
                            key={subject}
                            label={subject}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(17,26,36,0.06)',
                              color: 'primary.light',
                              fontWeight: 700,
                              '& .MuiChip-label': {
                                px: 1,
                              },
                            }}
                          />
                        ))}
                      </Stack>

                      <Typography sx={{ mt: 1.8, color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.72 }}>
                        {teacher.bio}
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Carousel>
            </Paper>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              alignItems={{ xs: 'stretch', sm: 'center' }}
              justifyContent="space-between"
              sx={{ mt: 3.5 }}
            >
              <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Want to know how your child will be supported in class? Talk to our admissions team and we’ll walk you through the learning environment.
              </Typography>
              <Button
                variant="dark"
                onClick={() => openEnquiry('Faculty & Classroom Enquiry')}
                sx={{ alignSelf: { xs: 'stretch', sm: 'center' } }}
              >
                Talk to Our Team
              </Button>
            </Stack>
          </RevealOnScroll>
        </Box>
      </Container>
    </Box>
  )
}
