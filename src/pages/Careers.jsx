import {
  Box,
  Chip,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import siteConfig from '../data/siteConfig'
import appContent from '../data/appContent'
import { BRAND_NEUTRALS } from '../constants/brand'
import { buildMailtoUrl } from '../utils/contact'

const culturePoints = [
  {
    icon: GraduationCap,
    title: 'Purposeful teaching',
    description: 'Classrooms are built around discipline, care, strong fundamentals and age-appropriate curiosity.',
  },
  {
    icon: UsersRound,
    title: 'Supportive teams',
    description: 'Teachers, coordinators and office staff work closely together with shared expectations and mutual respect.',
  },
  {
    icon: HeartHandshake,
    title: 'Student-first culture',
    description: 'We value calm communication, consistent routines and a learning environment that feels safe and encouraging.',
  },
]

const openings = [
  {
    title: 'Primary School Teacher',
    type: 'Full-time',
    area: 'LKG to Primary',
    summary: 'Looking for warm, structured educators who can balance joyful teaching with strong classroom routines.',
    skills: ['Child-centric teaching', 'Classroom management', 'Parent communication'],
  },
  {
    title: 'TGT - Mathematics / Science',
    type: 'Full-time',
    area: 'Middle School',
    summary: 'Ideal for subject teachers who can explain concepts clearly and create practical, engaging learning experiences.',
    skills: ['CBSE alignment', 'Assessment planning', 'Activity-based learning'],
  },
  {
    title: 'School Administrator',
    type: 'Full-time',
    area: 'Office & Operations',
    summary: 'For organised professionals who can support admissions, records, communication and day-to-day coordination smoothly.',
    skills: ['Documentation', 'Front-desk communication', 'Operational support'],
  },
]

const processSteps = [
  'Share your resume and a short note about the role you are applying for.',
  'Our team reviews profiles based on role fit, communication and school values.',
  'Shortlisted candidates are contacted for interaction, demo or role discussion.',
  'Selected applicants receive next steps from the school office.',
]

export default function Careers() {
  const careerMailto = buildMailtoUrl({
    subject: 'Career Application for Air Force School',
    lines: [
      'Name:',
      'Phone:',
      'Role applying for:',
      'Years of experience:',
      '',
      'Brief note:',
    ],
  })

  return (
    <>
      <PageHero {...appContent.pageHeroes.careers} />

      <Section background="pale" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' }, gap: { xs: 3, md: 5 } }}>
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Why Work Here"
                title="A school environment that values clarity, care and consistency"
                subtitle="We believe great schools are built by adults who keep learning, communicate with empathy and show up reliably for students every day."
              />

              <Stack direction="row" useFlexGap spacing={1} sx={{ mt: 2.5, flexWrap: 'wrap' }}>
                {['Teacher development', 'Structured culture', 'Student wellbeing', 'Professional respect'].map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      borderRadius: '999px',
                      bgcolor: 'rgba(17,26,36,0.06)',
                      color: 'primary.main',
                      fontWeight: 700,
                    }}
                  />
                ))}
              </Stack>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              <Paper
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 1,
                  bgcolor: '#dfeef7',
                  border: '1px solid rgba(93,138,168,0.18)',
                  boxShadow: '0 24px 60px -38px rgba(17,26,36,0.2)',
                }}
              >
                <Typography sx={{ color: 'secondary.main', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  What We Look For
                </Typography>
                <Typography sx={{ mt: 1.2, color: 'primary.main', fontSize: { xs: '1.2rem', sm: '1.45rem' }, fontWeight: 700, lineHeight: 1.25 }}>
                  Calm professionals who combine subject strength with a child-first mindset.
                </Typography>
                <Typography sx={{ mt: 1.6, color: 'text.secondary', fontSize: '0.94rem', lineHeight: 1.8 }}>
                  Whether you teach, coordinate or support operations, we value people who can work with discipline, warmth and clarity in a school setting.
                </Typography>
                <Button
                  href={careerMailto}
                  variant="dark"
                  sx={{ mt: 3, width: { xs: '100%', sm: 'auto' } }}
                >
                  Apply by Email
                </Button>
              </Paper>
            </RevealOnScroll>
          </Box>
      </Section>

      <Section background="sky" sx={{ py: { xs: 6, md: 10 } }}>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Culture"
              title="What working here feels like"
              subtitle="A balanced mix of accountability, mentorship and shared responsibility across classrooms and the school office."
              align="center"
            />
          </RevealOnScroll>
          <Box sx={{ mt: 4.5, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2.5 }}>
            {culturePoints.map(({ icon: Icon, title, description }, index) => (
              <RevealOnScroll key={title} delay={index * 90}>
                <Paper sx={{ height: '100%', p: { xs: 2.5, sm: 3 }, borderRadius: 1, boxShadow: 2 }}>
                  <Box sx={{ display: 'inline-flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: 'rgba(240,147,75,0.14)', color: 'secondary.main' }}>
                    <Icon size={22} />
                  </Box>
                  <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1rem', fontWeight: 700 }}>
                    {title}
                  </Typography>
                  <Typography sx={{ mt: 1.2, color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.8 }}>
                    {description}
                  </Typography>
                </Paper>
              </RevealOnScroll>
            ))}
          </Box>
      </Section>

      <Section background="pale" sx={{ py: { xs: 6, md: 10 } }}>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Current Roles"
              title="Opportunities we usually hire for"
              subtitle="If your profile aligns with one of these areas, you can share your details even when a public vacancy is not actively listed."
            />
          </RevealOnScroll>
          <Box sx={{ mt: 4.5, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, minmax(0, 1fr))' }, gap: 2.5 }}>
            {openings.map((role, index) => (
              <RevealOnScroll key={role.title} delay={index * 80}>
                <Paper
                  sx={{
                    height: '100%',
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 1,
                    border: '1px solid rgba(17,26,36,0.08)',
                    boxShadow: '0 18px 42px -32px rgba(17,26,36,0.18)',
                  }}
                >
                  <Stack direction="row" spacing={1} useFlexGap sx={{ mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<BriefcaseBusiness size={14} />}
                      label={role.type}
                      sx={{ bgcolor: 'rgba(17,26,36,0.06)', color: 'primary.main', fontWeight: 700 }}
                    />
                    <Chip
                      icon={<Sparkles size={14} />}
                      label={role.area}
                      sx={{ bgcolor: 'rgba(240,147,75,0.12)', color: 'secondary.dark', fontWeight: 700 }}
                    />
                  </Stack>

                  <Typography sx={{ color: 'primary.main', fontSize: '1.08rem', fontWeight: 700, lineHeight: 1.3 }}>
                    {role.title}
                  </Typography>
                  <Typography sx={{ mt: 1.2, color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.8 }}>
                    {role.summary}
                  </Typography>

                  <Stack direction="row" useFlexGap spacing={0.9} sx={{ mt: 2, flexWrap: 'wrap' }}>
                    {role.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: '#dfeef7',
                          color: 'primary.light',
                          fontWeight: 700,
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </RevealOnScroll>
            ))}
          </Box>
      </Section>

      <Section background="sky" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr auto' }, gap: { xs: 3, md: 4 }, alignItems: 'start' }}>
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Hiring Process"
                title="Simple, clear and respectful"
                subtitle="We try to keep the process straightforward while ensuring the right fit for students, families and the school team."
              />
              <Stack spacing={1.35} sx={{ mt: 3 }}>
                {processSteps.map((step, index) => (
                  <Paper
                    key={step}
                    sx={{
                      display: 'flex',
                      gap: 1.4,
                      alignItems: 'flex-start',
                      p: { xs: 2, sm: 2.3 },
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        display: 'inline-flex',
                        width: 32,
                        height: 32,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: BRAND_NEUTRALS.white,
                        fontSize: '0.85rem',
                        fontWeight: 800,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.94rem', lineHeight: 1.75 }}>
                      {step}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              <Paper
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  minWidth: 0,
                  maxWidth: { lg: 360 },
                  borderRadius: 1,
                  background: 'linear-gradient(135deg, rgba(17,26,36,0.96), rgba(45,83,103,0.92))',
                  color: BRAND_NEUTRALS.white,
                  boxShadow: '0 28px 70px -36px rgba(17, 26, 36, 0.52)',
                }}
              >
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'secondary.main' }}>
                  Send Your Profile
                </Typography>
                <Typography sx={{ mt: 1.25, fontSize: { xs: '1.15rem', sm: '1.35rem' }, fontWeight: 700, lineHeight: 1.3 }}>
                  Share your resume directly with the school office.
                </Typography>
                <Typography sx={{ mt: 1.5, color: 'rgba(255,255,255,0.78)', fontSize: '0.92rem', lineHeight: 1.8 }}>
                  Mention the role area, your experience and a preferred contact number so the team can reach you quickly if there is a fit.
                </Typography>
                <Stack spacing={1.2} sx={{ mt: 2.5 }}>
                  <Button
                    href={careerMailto}
                    variant="light"
                    sx={{ width: '100%' }}
                  >
                    Email Your Resume
                  </Button>
                  <MuiLink
                    href={`tel:${siteConfig.contact.phone}`}
                    underline="none"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.6,
                      color: 'rgba(255,255,255,0.84)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                    }}
                  >
                    Call School Office <ArrowUpRight size={16} />
                  </MuiLink>
                </Stack>
              </Paper>
            </RevealOnScroll>
          </Box>
      </Section>
    </>
  )
}
