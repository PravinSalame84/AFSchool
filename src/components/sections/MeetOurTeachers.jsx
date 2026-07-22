import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import { Avatar, Box, Chip, Paper, Stack, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Carousel from '../ui/Carousel'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import teachers from '../../data/teachers'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { BRAND_NEUTRALS } from '../../constants/brand'

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
        py: { xs: 3, md: 5 },
        overflowX: 'clip',
        background:
          'radial-gradient(circle at top left, rgba(93,138,168,0.14), transparent 26%), linear-gradient(180deg, #c8e6fb 0%, #edf3f8 100%)',
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 }, minWidth: 0, overflowX: 'clip' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: { xs: 3, lg: 4 },
            alignItems: 'start',
            minWidth: 0,
            overflowX: 'clip',
          }}
        >
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Meet Our Teachers"
              title="Guided by mentors who make learning feel disciplined, warm and deeply human"
              subtitle="Every classroom at Air Force School is shaped by teachers who combine structure, care and strong academic intent without losing the joy of learning."
            />

            <Stack direction="row" useFlexGap spacing={1} sx={{ mt: 2.5, flexWrap: 'wrap' }}>
              {badges.map(({ icon: Icon, label }) => (
                <Chip
                  key={label}
                  icon={<Icon style={{ fontSize: 18 }} />}
                  label={label}
                  sx={{
                    px: 0.4,
                    py: 0.35,
                    height: { xs: 32, sm: 36 },
                    borderRadius: '999px',
                    bgcolor: 'rgba(17,26,36,0.06)',
                    color: 'primary.main',
                    fontWeight: 700,
                    maxWidth: '100%',
                    '& .MuiChip-label': {
                      px: { xs: 1.1, sm: 1.35 },
                      whiteSpace: 'normal',
                    },
                  }}
                />
              ))}
            </Stack>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <Paper
              sx={{
                width: '100%',
                maxWidth: '100%',
                minWidth: 0,
                boxSizing: 'border-box',
                p: { xs: 2, sm: 2.5 },
                borderRadius: 1,
                backgroundColor: 'rgba(255,255,255,0.78)',
                border: '1px solid rgba(255,255,255,0.8)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 24px 60px -38px rgba(17,26,36,0.28)',
                overflow: 'hidden',
              }}
            >
              <Carousel ariaLabel="Meet our teachers" autoPlay interval={3800}>
                {teachers.map((teacher) => (
                  <Box
                    key={teacher.id}
                    data-carousel-item
                    sx={{
                      width: {
                        xs: '100%',
                        sm: 'calc((100% - 24px) / 2)',
                        lg: 'calc((100% - 48px) / 3)',
                      },
                      maxWidth: {
                        xs: '100%',
                        sm: 'calc((100% - 24px) / 2)',
                        lg: 'calc((100% - 48px) / 3)',
                      },
                      flexBasis: {
                        xs: '100%',
                        sm: 'calc((100% - 24px) / 2)',
                        lg: 'calc((100% - 48px) / 3)',
                      },
                      minWidth: 0,
                      flexShrink: 0,
                      scrollSnapAlign: 'start',
                      boxSizing: 'border-box',
                    }}
                  >
                    <Paper
                      sx={{
                        height: '100%',
                        overflow: 'hidden',
                        borderRadius: 1,
                        boxShadow: '0 18px 42px -30px rgba(17, 26, 36, 0.22)',
                        backgroundColor: BRAND_NEUTRALS.white,
                        transition: 'transform .28s ease, box-shadow .28s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 28px 54px -28px rgba(17,26,36,.22)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          px: 2,
                          pt: 2,
                          pb: 0,
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: 220,
                            height: 220,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(93,138,168,.3), transparent)',
                            top: -40,
                            right: -30,
                          },
                          background:
                            'linear-gradient(180deg, rgba(215,239,246,0.95) 0%, rgba(236,244,248,0.92) 100%)',
                        }}
                      >
                        <Avatar
                          src={teacher.image}
                          alt={teacher.name}
                          variant="rounded"
                          sx={{
                            width: '100%',
                            height: { xs: 224, sm: 256, lg: 272 },
                            borderRadius: 1,
                            bgcolor: '#d7eff6',
                            overflow: 'hidden',
                            '& .MuiAvatar-img': {
                              objectFit: 'cover',
                              objectPosition: 'center top',
                              transition: 'transform .4s ease',
                            },
                            '&:hover .MuiAvatar-img': {
                              transform: 'scale(1.04)',
                            },
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 14,
                            right: 14,
                            px: 1.1,
                            py: 0.55,
                            borderRadius: 1,
                            bgcolor: 'rgba(255,255,255,0.84)',
                            color: 'secondary.dark',
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            letterSpacing: '0.04em',
                            maxWidth: 148,
                            whiteSpace: 'normal',
                            textAlign: 'center',
                          }}
                        >
                          {teacher.highlight}
                        </Box>

                        <Stack direction="row" useFlexGap spacing={1} sx={{ mt: 1.1, pb: 1.2, flexWrap: 'wrap' }}>
                          <Chip label="Experienced Faculty" size="small" color="warning" />
                          <Chip label="CBSE" size="small" color="primary" />
                        </Stack>
                      </Box>

                      <Box sx={{ p: 2.5 }}>
                        <Typography
                          sx={{
                            color: 'secondary.dark',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {teacher.role}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 0.9,
                            color: 'primary.main',
                            fontSize: { xs: '1.05rem', sm: '1.2rem' },
                            fontWeight: 700,
                            lineHeight: 1.18,
                          }}
                        >
                          {teacher.name}
                        </Typography>

                        <Stack direction="row" useFlexGap spacing={0.9} sx={{ mt: 1.6, flexWrap: 'wrap' }}>
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

                        <Typography
                          sx={{
                            mt: 1.8,
                            color: 'text.secondary',
                            fontSize: '0.88rem',
                            lineHeight: 1.72,
                            wordBreak: 'break-word',
                          }}
                        >
                          {teacher.bio}
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                ))}
              </Carousel>
            </Paper>

            <RevealOnScroll delay={40}>
              <Paper
                sx={{
                  p: { xs: 2.5, sm: 3.25 },
                  mt: 2,
                  borderRadius: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(17,26,36,0.97), rgba(45,83,103,0.93))',
                  color: BRAND_NEUTRALS.white,
                  boxShadow: '0 28px 70px -36px rgba(17, 26, 36, 0.55)',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -40,
                    right: -30,
                    width: 220,
                    height: 220,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(240,147,75,0.34), rgba(240,147,75,0))',
                    pointerEvents: 'none',
                  }}
                />
                <Typography
                  sx={{
                    position: 'relative',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.64)',
                  }}
                >
                  Teacher Culture
                </Typography>
                <Typography
                  sx={{
                    position: 'relative',
                    mt: 1.25,
                    fontSize: { xs: '1.15rem', sm: '1.45rem' },
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  Workshops, mentoring and reflective practice help our faculty keep learning too.
                </Typography>
                <Typography
                  sx={{
                    position: 'relative',
                    mt: 1.5,
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.75,
                    fontSize: '0.92rem',
                  }}
                >
                  That means students benefit from classrooms that are more engaging, more responsive and better aligned with the needs of each age group.
                </Typography>
                <Box
                  component="button"
                  onClick={() => openEnquiry('Faculty & Classroom Enquiry')}
                  sx={{
                    position: 'relative',
                    mt: 2.5,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    border: 0,
                    background: 'transparent',
                    color: BRAND_NEUTRALS.white,
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

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ mt: 5, width: '100%', alignItems: { xs: 'stretch', sm: 'center' }, justifyContent: 'space-between' }}
            >
              <Typography sx={{ pt: 1.5, color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Want to know how your child will be supported in class? Talk to our admissions team and we’ll walk you through the learning environment.
              </Typography>
              <Button
                variant="contained"
                onClick={() => openEnquiry('Faculty & Classroom Enquiry')}
                sx={{ alignSelf: { xs: 'stretch', sm: 'center' }, color: 'white', backgroundColor: 'secondary.main', '&:hover': { backgroundColor: 'secondary.light' } }}
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
