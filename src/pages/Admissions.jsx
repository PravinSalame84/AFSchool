import { motion } from 'framer-motion'
import { alpha } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { Award, ArrowRightLeft, ClipboardList, FileCheck2, PhoneCall, School, Wallet } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import admissionSteps, { feeStructureNote } from '../data/admissionSteps'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import { brandColors } from '../theme/colorTokens'

const stepIcons = [PhoneCall, School, FileCheck2, ClipboardList]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

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

export default function Admissions() {
  const theme = useTheme()
  const { openEnquiry } = useEnquiryModal()

  return (
    <>
      <Seo
        title="Admissions"
        description="Admission process, required documents and enquiry support for Air Force School VayuSena Nagar, Nagpur."
        path="/admissions"
        image={siteAssets.images.smartClassroom}
      />

      <PageHero
        crumb="Admissions"
        eyebrow="Join Air Force School"
        title="Admissions Open for AY 2026-27"
        subtitle="A simple and transparent process from your first enquiry to your child's first day in school."
        image={siteAssets.images.smartClassroom}
      />

      <Box sx={{ py: { xs: 7, md: 10 }, background: theme.palette.mode === 'dark' ? 'transparent' : 'linear-gradient(180deg, rgba(215,239,246,0.65), rgba(244,251,254,0.92))' }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 760, mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.2em' }}>
              Admission Journey
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5, fontWeight: 800, lineHeight: 0.96, fontSize: { xs: '2.2rem', sm: '3rem' } }}>
              Start with the school office and move ahead with clarity.
            </Typography>
            <Typography sx={{ mt: 2.5, color: 'text.secondary', lineHeight: 1.85 }}>
              {schoolContent.admissions.intro}
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            <Grid item xs={12} lg={7}>
              <Stack spacing={2.5}>
                {admissionSteps.map((step, index) => {
                  const Icon = stepIcons[index] ?? ClipboardList

                  return (
                    <motion.div
                      key={step.step}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={index * 0.05}
                      variants={reveal}
                    >
                      <Paper sx={{ ...panelSx(theme), p: 2.75 }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.25} alignItems="flex-start">
                          <Avatar sx={{ width: 54, height: 54, borderRadius: 4, bgcolor: 'primary.main', color: brandColors.white }}>
                            <Icon size={22} />
                          </Avatar>
                          <Box>
                            <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'secondary.main' }}>
                              Step 0{step.step}
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 0.8, fontWeight: 800 }}>
                              {step.title}
                            </Typography>
                            <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.8 }}>
                              {step.description}
                            </Typography>
                          </Box>
                        </Stack>
                      </Paper>
                    </motion.div>
                  )
                })}
              </Stack>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Stack spacing={3}>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.12} variants={reveal}>
                  <Paper sx={{ ...panelSx(theme), p: { xs: 3, sm: 4 } }}>
                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.2em' }}>
                      Required Documents
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 1, mb: 3, fontWeight: 800 }}>
                      Keep these ready.
                    </Typography>

                    <Stack spacing={1.5}>
                      {schoolContent.admissions.documents.map((doc) => (
                        <Box
                          key={doc}
                          sx={{
                            px: 2,
                            py: 1.5,
                            borderRadius: 4,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                            bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.46) : alpha(brandColors.white, 0.82),
                          }}
                        >
                          <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
                            {doc}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
                      <Button variant="contained" size="large" fullWidth onClick={() => openEnquiry('Admissions Enquiry')}>
                        Start Enquiry
                      </Button>
                      <Button variant="outlined" size="large" fullWidth href={schoolContent.resources[0].to}>
                        View Documents
                      </Button>
                    </Stack>
                  </Paper>
                </motion.div>

                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.18} variants={reveal}>
                  <Paper sx={{ ...panelSx(theme, 'dark'), p: 3.5 }}>
                    <Typography variant="overline" sx={{ color: alpha(brandColors.white, 0.72), fontWeight: 800, letterSpacing: '0.18em' }}>
                      Admission Support
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1.25, fontWeight: 800 }}>
                      Need help choosing the right next step?
                    </Typography>
                    <Typography sx={{ mt: 1.5, color: alpha(brandColors.white, 0.8), lineHeight: 1.8 }}>
                      Call the school office or request a guided admission response for process, class availability and required records.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
                      <Button variant="contained" color="secondary" onClick={() => openEnquiry('Admissions Enquiry')} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                        Enquire For Admission
                      </Button>
                      <Button variant="outlined" sx={{ color: brandColors.white, borderColor: alpha(brandColors.white, 0.22), width: { xs: '100%', sm: 'auto' } }} href={`tel:${schoolContent.contact.phone}`}>
                        Call Office
                      </Button>
                    </Stack>
                  </Paper>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="fees" sx={{ py: { xs: 7, md: 9 }, background: theme.palette.mode === 'dark' ? 'transparent' : 'linear-gradient(180deg, rgba(228,246,251,0.82), rgba(215,239,246,0.92))' }}>
        <Container maxWidth="xl">
          <Grid container spacing={2.5}>
            {[
              {
                icon: Wallet,
                title: 'Fee Structure',
                description: feeStructureNote,
              },
              {
                icon: ArrowRightLeft,
                title: 'Inter-School Transfer',
                description: 'If the family is relocating, the school office can guide parents on record continuity and transfer readiness.',
              },
              {
                icon: Award,
                title: 'Merit & Support Guidance',
                description: 'Parents can contact the school office directly for updated information on merit-based or need-based support.',
              },
            ].map((item, index) => {
              const Icon = item.icon

              return (
                <Grid item xs={12} md={4} key={item.title}>
                  <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.06} variants={reveal}>
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
    </>
  )
}
