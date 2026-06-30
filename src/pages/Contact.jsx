import {
  useState } from 'react'
import Grid from '../components/ui/Grid'
import Stack from '../components/ui/Stack'
import { alpha } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Button,
  Container,
  Link as MuiLink,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { AccessTime, CheckCircle, Email, LocationOn, Phone } from '@mui/icons-material'
import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import siteConfig from '../data/siteConfig'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import { isValidEmail } from '../utils/formValidation'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import { brandColors } from '../theme/colorTokens'
brandColors

const infoCards = [
  { icon: LocationOn, title: 'Campus Address', value: schoolContent.contact.address },
  { icon: Phone, title: 'Call Us', value: schoolContent.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: Email, title: 'Email Us', value: schoolContent.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: AccessTime, title: 'Office Hours', value: 'Mon - Sat, 9:00 AM - 5:30 PM' },
]

function cardSx(theme, tone = 'light') {
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

export default function Contact() {
  const theme = useTheme()
  const { openEnquiry } = useEnquiryModal()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = {}

    if (!form.name.trim()) next.name = 'Name is required'
    if (!isValidEmail(form.email)) next.email = 'Valid email required'
    if (!form.message.trim()) next.message = 'Message is required'

    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Air Force School VayuSena Nagar, Nagpur for admissions, campus support and general enquiries."
        path="/contact"
        image={siteAssets.images.chief}
      />

      <PageHero
        crumb="Contact Us"
        eyebrow="We Are Here To Help"
        title="Get in touch with the school office."
        subtitle="Questions about admissions, facilities, campus access or general school support can all start here."
        image={siteAssets.images.chief}
      />

      <Box sx={{ py: { xs: 7, md: 10 }, background: theme.palette.mode === 'dark' ? 'transparent' : 'linear-gradient(180deg, rgba(215,239,246,0.65), rgba(244,251,254,0.94))' }}>
        <Container maxWidth="xl">
          <Grid container spacing={2.5}>
            {infoCards.map((card) => (
              <Grid item xs={12} sm={6} xl={3} key={card.title}>
                <Paper sx={{ ...cardSx(theme), p: 3, height: '100%' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 46, height: 46 }}>
                    <card.icon fontSize="small" />
                  </Avatar>

                  <Typography sx={{ display: 'block', mt: 2, fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'text.secondary' }}>
                    {card.title}
                  </Typography>

                  {card.href ? (
                    <MuiLink href={card.href} underline="hover" sx={{ display: 'block', mt: 1, color: 'text.primary', fontWeight: 700 }}>
                      {card.value}
                    </MuiLink>
                  ) : (
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.8 }}>
                      {card.value}
                    </Typography>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} lg={5}>
              <Stack spacing={3} sx={{ height: '100%' }}>
                <Paper sx={{ ...cardSx(theme), p: { xs: 2.5, sm: 3.5 } }}>
                  <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: '0.2em' }}>
                    Send A Message
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1, fontWeight: 800 }}>
                    We will help you quickly
                  </Typography>

                  {sent ? (
                    <Stack spacing={2} sx={{ mt: 4 }}>
                      <CheckCircle color="success" sx={{ fontSize: 52 }} />
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        Message sent successfully
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We will contact you at {form.email}
                      </Typography>
                    </Stack>
                  ) : (
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                      <Stack spacing={2}>
                        <TextField label="Full Name" value={form.name} onChange={update('name')} error={!!errors.name} helperText={errors.name} fullWidth />
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField label="Email" value={form.email} onChange={update('email')} error={!!errors.email} helperText={errors.email} fullWidth />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField label="Phone (optional)" value={form.phone} onChange={update('phone')} fullWidth />
                          </Grid>
                        </Grid>
                        <TextField
                          label="Message"
                          value={form.message}
                          onChange={update('message')}
                          error={!!errors.message}
                          helperText={errors.message}
                          multiline
                          rows={5}
                          fullWidth
                        />
                        <Button type="submit" variant="contained" size="large" fullWidth>
                          Send Message
                        </Button>
                      </Stack>
                    </Box>
                  )}
                </Paper>

                <Paper sx={{ ...cardSx(theme, 'dark'), p: 3.25 }}>
                  <Typography variant="overline" sx={{ color: alpha(brandColors.white, 0.72), fontWeight: 800, letterSpacing: '0.18em' }}>
                    Quick Support
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1.25, fontWeight: 800 }}>
                    Need faster help for admissions or school details?
                  </Typography>
                  <Typography sx={{ mt: 1.5, color: alpha(brandColors.white, 0.8), lineHeight: 1.8 }}>
                    Use the enquiry flow for admission-related questions or request school details directly from the school office.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
                    <Button variant="contained" color="secondary" onClick={() => openEnquiry('General Enquiry')} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                      Start General Enquiry
                    </Button>
                    <Button variant="outlined" sx={{ color: brandColors.white, borderColor: alpha(brandColors.white, 0.24), width: { xs: '100%', sm: 'auto' } }} onClick={() => openEnquiry('School Details Request')}>
                      Request School Details
                    </Button>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>

            <Grid item xs={12} lg={7}>
              <Paper sx={{ ...cardSx(theme), p: { xs: 2, sm: 2.5 }, overflow: 'hidden', height: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2} sx={{ mb: 2 }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                      Campus Location
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 800 }}>
                      Air Force School VayuSena Nagar
                    </Typography>
                    <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.8 }}>
                      {siteConfig.contact.address}
                    </Typography>
                  </Box>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} flexWrap="wrap">
                    <Button component="a" href={schoolContent.contact.mapLink} target="_blank" rel="noopener noreferrer" variant="outlined" sx={{ width: { xs: '100%', sm: 'auto' } }}>
                      Open Map
                    </Button>
                    <Button component="a" href={`tel:${schoolContent.contact.phone}`} variant="contained" sx={{ width: { xs: '100%', sm: 'auto' } }}>
                      Call Office
                    </Button>
                  </Stack>
                </Stack>

                <Box
                  component="iframe"
                  title="Campus Map"
                  src={schoolContent.contact.mapEmbed}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: { xs: 340, md: 520 },
                    border: 0,
                    borderRadius: 4,
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
