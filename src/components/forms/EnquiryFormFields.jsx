import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  BadgeCheck,
  CheckCircle2,
  Mail,
  Phone,
  RefreshCw,
  Sparkles,
  UserRound,
} from 'lucide-react'
import CheckboxField from '../ui/CheckboxField'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Button from '../ui/Button'
import Grid from '../ui/Grid'
import Stack from '../ui/Stack'
import {
  isValidEmail,
  isValidIndianMobile,
  isValidPersonName,
  normalizePhone,
  normalizeWhitespace,
} from '../../utils/formValidation'
import { brandColors } from '../../theme/colorTokens'
import { getVisitorMetrics, METRICS_EVENT, submitVisitorFeedback } from '../../utils/visitorFeedback'
import { useLocale } from '../../context/LocaleContext'

const standards = ['LKG', 'UKG', ...Array.from({ length: 9 }, (_, index) => `Class ${index + 1}`)]

const fieldOrder = ['firstName', 'lastName', 'standard', 'email', 'phone', 'captcha', 'agree']

function randomMathChallenge() {
  const a = Math.ceil(Math.random() * 8) + 1
  const b = Math.ceil(Math.random() * 8) + 1
  return { a, b, answer: a + b }
}

const emptyForm = {
  state: 'Maharashtra',
  city: 'Nagpur',
  school: 'Air Force School, VayuSena Nagar',
  firstName: '',
  lastName: '',
  standard: '',
  email: '',
  phone: '',
  rating: 0,
  review: '',
  captcha: '',
  agree: false,
}

function getFieldError(field, form, challenge, t) {
  switch (field) {
    case 'firstName':
      if (!normalizeWhitespace(form.firstName)) return t("Please enter your child's first name")
      if (!isValidPersonName(form.firstName)) return t('Use at least 2 letters and avoid numbers')
      return ''
    case 'lastName':
      if (!normalizeWhitespace(form.lastName)) return ''
      if (!isValidPersonName(form.lastName)) return t('Please enter a valid last name')
      return ''
    case 'standard':
      return form.standard ? '' : t('Please select the applying class')
    case 'email':
      if (!normalizeWhitespace(form.email)) return t('Please enter the parent email address')
      return isValidEmail(form.email) ? '' : t('Please enter a valid email address')
    case 'phone':
      if (!form.phone) return t('Please enter the parent mobile number')
      return isValidIndianMobile(form.phone) ? '' : t('Enter a valid 10-digit Indian mobile number')
    case 'captcha':
      if (!form.captcha) return t('Please solve the quick verification question')
      return Number(form.captcha) === challenge.answer ? '' : t('That answer does not look right')
    case 'agree':
      return form.agree ? '' : t('Please accept the terms to continue')
    default:
      return ''
  }
}

function buildErrors(form, challenge, t) {
  return fieldOrder.reduce((acc, field) => {
    const error = getFieldError(field, form, challenge, t)
    if (error) acc[field] = error
    return acc
  }, {})
}

function SuccessState({ firstName, phone, context }) {
  const theme = useTheme()
  const { t } = useLocale()
  const localizedContext = t(context)

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 4,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
          width: 82,
          height: 82,
          borderRadius: '28%',
          color: 'secondary.main',
          background:
            theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${alpha(brandColors.amber, 0.26)}, ${alpha(brandColors.navyPaper, 0.88)})`
              : `linear-gradient(135deg, ${alpha(brandColors.amberSoft, 0.92)}, ${alpha(brandColors.amber, 0.16)})`,
          boxShadow: '0 20px 40px rgba(17, 26, 36, 0.14)',
        }}
      >
        <CheckCircle2 size={38} />
      </Box>

      <Chip
        icon={<BadgeCheck size={16} />}
        label={t('Enquiry Received')}
        color="secondary"
        variant="outlined"
        sx={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}
      />

      <Typography component="h4" variant="h6" sx={{ fontWeight: 800, textTransform: 'uppercase', color: 'text.primary' }}>
        {t('Thank you')}, {firstName}.
      </Typography>

      <Typography sx={{ maxWidth: 420, fontSize: '0.97rem', color: 'text.secondary', lineHeight: 1.8 }}>
        {t('Your enquiry confirmation').replace('{context}', localizedContext.toLowerCase())}{' '}
        <Box component="span" sx={{ fontWeight: 800, color: 'text.primary' }}>
          {phone}
        </Box>{' '}
        {t('with the next steps and details shortly.')}
      </Typography>
    </Box>
  )
}

function IntroPanel({ context }) {
  const theme = useTheme()
  const { t } = useLocale()

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      sx={{
        mb: 2,
        borderRadius: 4,
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.18)}`,
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(135deg, ${alpha(brandColors.amber, 0.12)}, ${alpha(brandColors.navyPaper, 0.92)}, ${alpha(brandColors.navy, 0.82)})`
            : `linear-gradient(135deg, ${alpha(brandColors.amberSoft, 0.28)}, ${alpha(brandColors.white, 0.96)}, ${alpha(brandColors.skySoft, 0.72)})`,
        p: { xs: 1.5, sm: 1.8 },
        boxShadow: '0 14px 30px rgba(17, 26, 36, 0.06)',
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', sm: 'center' }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: '30%',
            display: 'grid',
            placeItems: 'center',
            color: 'secondary.main',
            backgroundColor: alpha(theme.palette.secondary.main, 0.14),
            flexShrink: 0,
          }}
        >
          <Sparkles size={20} />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'secondary.main' }}>
            {t('Parent-Friendly Enquiry')}
          </Typography>
          <Typography variant="h6" sx={{ mt: 0.25, fontWeight: 800, lineHeight: 1.2, fontSize: { xs: '1.02rem', sm: '1.1rem' } }}>
            {t(context)}
          </Typography>
          <Typography sx={{ mt: 0.45, color: 'text.secondary', lineHeight: 1.6, fontSize: '0.88rem' }}>
            {t('Share the essentials and the school team can guide you with the right next step.')}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

function CampusSummary({ school, city, state }) {
  const theme = useTheme()
  const { t } = useLocale()

  return (
    <Box
      sx={{
        mb: 2,
        px: 1.5,
        py: 1.25,
        borderRadius: 4,
        border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
        bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.34) : alpha(brandColors.white, 0.74),
      }}
    >
      <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'text.secondary' }}>
        {t('Selected Campus')}
      </Typography>
      <Typography sx={{ mt: 0.45, fontWeight: 800, color: 'text.primary' }}>
        {school}
      </Typography>
      <Typography sx={{ mt: 0.2, fontSize: '0.88rem', color: 'text.secondary' }}>
        {city}, {state}
      </Typography>
    </Box>
  )
}

export default function EnquiryFormFields({ context = 'General Enquiry', onSuccess }) {
  const theme = useTheme()
  const { t, locale } = useLocale()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [challenge, setChallenge] = useState(randomMathChallenge)
  const [visitorMetrics, setVisitorMetrics] = useState({ visitorCount: 0, ratingCount: 0, averageRating: 0, reviews: [] })
  const closeTimerRef = useRef(null)

  useEffect(
    () => () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    },
    [],
  )

  useEffect(() => {
    setVisitorMetrics(getVisitorMetrics())

    const syncMetrics = () => setVisitorMetrics(getVisitorMetrics())
    window.addEventListener(METRICS_EVENT, syncMetrics)
    window.addEventListener('storage', syncMetrics)

    return () => {
      window.removeEventListener(METRICS_EVENT, syncMetrics)
      window.removeEventListener('storage', syncMetrics)
    }
  }, [])

  const setFieldError = (field, nextForm) => {
    const error = getFieldError(field, nextForm, challenge, t)
    setErrors((prev) => {
      const next = { ...prev }
      if (error) next[field] = error
      else delete next[field]
      return next
    })
  }

  const update = (field) => (event) => {
    const rawValue = field === 'agree' ? event.target.checked : event.target.value
    const value =
      field === 'phone'
        ? normalizePhone(rawValue)
        : field === 'firstName' || field === 'lastName'
          ? rawValue.replace(/\s{2,}/g, ' ')
          : rawValue

    setForm((prev) => {
      const nextForm = { ...prev, [field]: value }
      if (touched[field]) {
        window.requestAnimationFrame(() => setFieldError(field, nextForm))
      }
      return nextForm
    })
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const nextForm = {
      ...form,
      firstName: field === 'firstName' ? normalizeWhitespace(form.firstName) : form.firstName,
      lastName: field === 'lastName' ? normalizeWhitespace(form.lastName) : form.lastName,
      email: field === 'email' ? normalizeWhitespace(form.email) : form.email,
    }
    if (nextForm !== form) setForm(nextForm)
    setFieldError(field, nextForm)
  }

  const refreshChallenge = () => {
    const nextChallenge = randomMathChallenge()
    setChallenge(nextChallenge)
    setForm((prev) => ({ ...prev, captcha: '' }))
    setTouched((prev) => ({ ...prev, captcha: false }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next.captcha
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const normalizedForm = {
      ...form,
      firstName: normalizeWhitespace(form.firstName),
      lastName: normalizeWhitespace(form.lastName),
      email: normalizeWhitespace(form.email),
      phone: normalizePhone(form.phone),
    }

    const nextErrors = buildErrors(normalizedForm, challenge, t)
    setForm(normalizedForm)
    setErrors(nextErrors)
    setTouched(fieldOrder.reduce((acc, field) => ({ ...acc, [field]: true }), {}))

    if (Object.keys(nextErrors).length === 0) {
      if (normalizedForm.rating > 0 || normalizeWhitespace(normalizedForm.review)) {
        setVisitorMetrics(
          submitVisitorFeedback({
            rating: normalizedForm.rating,
            review: normalizeWhitespace(normalizedForm.review),
            name: [normalizedForm.firstName, normalizedForm.lastName].filter(Boolean).join(' '),
          }),
        )
      }
      setSubmitted(true)
      if (onSuccess) {
        closeTimerRef.current = window.setTimeout(onSuccess, 1800)
      }
    }
  }

  if (submitted) {
    return <SuccessState firstName={form.firstName} phone={form.phone} context={context} />
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <IntroPanel context={context} />

      <CampusSummary school={form.school} city={form.city} state={form.state} />

      <Box
        sx={{
          mb: 2.25,
          px: 1.5,
          py: 1.25,
          borderRadius: 4,
          border: `1px solid ${alpha(theme.palette.secondary.main, 0.16)}`,
          bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.34) : alpha(brandColors.white, 0.8),
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }}>
          <Box>
            <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'text.secondary' }}>
              {t('Visitor Snapshot')}
            </Typography>
            <Typography sx={{ mt: 0.4, fontWeight: 800, color: 'text.primary' }}>
              {visitorMetrics.visitorCount.toLocaleString(locale === 'mr' ? 'mr-IN' : locale === 'hi' ? 'hi-IN' : 'en-IN')} {t('visitors checked this page')}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            <Chip label={`${visitorMetrics.ratingCount} ${t('ratings')}`} size="small" variant="outlined" />
            <Chip
              label={visitorMetrics.ratingCount > 0 ? `${visitorMetrics.averageRating.toFixed(1)}/5 ${t('average')}` : t('No ratings yet')}
              size="small"
              color="secondary"
              variant={visitorMetrics.ratingCount > 0 ? 'filled' : 'outlined'}
            />
          </Stack>
        </Stack>

        <Box sx={{ mt: 1.25 }}>
          <Typography sx={{ mb: 0.75, fontSize: '0.75rem', fontWeight: 800, color: 'text.secondary' }}>
            {t('Recent Reviews')}
          </Typography>
          {visitorMetrics.reviews.length > 0 ? (
            <Stack spacing={0.85}>
              {visitorMetrics.reviews.slice(0, 2).map((item, index) => (
                <Box
                  key={`${item.name}-${item.createdAt}-${index}`}
                  sx={{
                    p: 1.1,
                    borderRadius: 3,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                    bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.26) : alpha(brandColors.white, 0.66),
                  }}
                >
                  <Typography sx={{ fontSize: '0.82rem', fontWeight: 800, color: 'text.primary' }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ mt: 0.2, fontSize: '0.82rem', color: 'text.secondary', lineHeight: 1.6 }}>
                    {item.rating ? `${item.rating}/5 • ` : ''}{item.review}
                  </Typography>
                </Box>
              ))}
            </Stack>
          ) : (
            <Typography sx={{ fontSize: '0.84rem', color: 'text.secondary', lineHeight: 1.6 }}>
              {t('No reviews yet. Add a rating and short review below.')}
            </Typography>
          )}
        </Box>
      </Box>

      <Grid container spacing={2.25}>

        <Grid item xs={12} sm={6}>
          <Input
            id="firstName"
            label={t("Child's First Name")}
            required
            placeholder={t('e.g. Aarav')}
            value={form.firstName}
            onChange={update('firstName')}
            onBlur={handleBlur('firstName')}
            error={touched.firstName ? errors.firstName : ''}
            helperText={t("Student's given name")}
            startAdornment={<UserRound size={16} />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input
            id="lastName"
            label={t("Child's Last Name")}
            placeholder={t('e.g. Sharma')}
            value={form.lastName}
            onChange={update('lastName')}
            onBlur={handleBlur('lastName')}
            error={touched.lastName ? errors.lastName : ''}
            helperText={t('Optional')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select
            id="standard"
            label={t('Class Applying For')}
            required
            placeholder={t('Select class')}
            options={standards.map((item) => ({ value: item, label: t(item) }))}
            value={form.standard}
            onChange={update('standard')}
            onBlur={handleBlur('standard')}
            error={touched.standard ? errors.standard : ''}
            helperText={t('Choose the applying class')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input
            id="email"
            type="email"
            label={t("Parent's Email")}
            required
            placeholder={t('you@email.com')}
            value={form.email}
            onChange={update('email')}
            onBlur={handleBlur('email')}
            error={touched.email ? errors.email : ''}
            helperText={t('For school updates and follow-up')}
            startAdornment={<Mail size={16} />}
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            id="phone"
            type="tel"
            label={t("Parent's Mobile Number")}
            required
            placeholder={t('10-digit number')}
            value={form.phone}
            onChange={update('phone')}
            onBlur={handleBlur('phone')}
            error={touched.phone ? errors.phone : ''}
            helperText={t('Active 10-digit mobile number')}
            startAdornment={<Phone size={16} />}
          />
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              borderRadius: 4,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
              bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.34) : alpha(brandColors.white, 0.72),
              p: 1.5,
            }}
          >
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'text.secondary' }}>
              {t('Visitor Rating')}
            </Typography>
            <Typography sx={{ mt: 0.4, mb: 1.1, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.65 }}>
              {t('Rate your website visit while sending your enquiry.')}
            </Typography>
            <Rating
              name="visitor-rating"
              precision={1}
              value={form.rating}
              onChange={(_, value) => {
                setForm((prev) => ({ ...prev, rating: value || 0 }))
              }}
            />
            <Typography sx={{ mt: 0.8, color: 'text.secondary', fontSize: '0.82rem' }}>
              {form.rating > 0 ? `${t('You selected')} ${form.rating} ${t('out of 5 stars.')}` : t('Optional, but helpful for future visitors.')}
            </Typography>

            <TextField
              label={t('Short Review')}
              value={form.review}
              onChange={update('review')}
              multiline
              minRows={3}
              fullWidth
              placeholder={t('Tell future visitors about your experience.')}
              sx={{
                mt: 1.25,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ mb: 0.8, fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'text.secondary' }}>
            {t('Quick Verification')}
          </Typography>
          <TextField
            label={`${t('What is')} ${challenge.a} + ${challenge.b}?`}
            value={form.captcha}
            onChange={update('captcha')}
            onBlur={handleBlur('captcha')}
            error={Boolean(touched.captcha && errors.captcha)}
            helperText={touched.captcha && errors.captcha ? errors.captcha : t('Quick verification to prevent spam')}
            fullWidth
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={refreshChallenge} edge="end" aria-label={t('Refresh verification challenge')}>
                      <RefreshCw size={16} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 4,
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              borderRadius: 4,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
              bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.34) : alpha(brandColors.white, 0.72),
              p: 1.25,
            }}
          >
            <CheckboxField
              checked={form.agree}
              onChange={update('agree')}
              onBlur={handleBlur('agree')}
              error={touched.agree ? errors.agree : ''}
              helperText={t('Used only for this school enquiry.')}
              label={t('By submitting, you agree to be contacted by Air Force School, VayuSena Nagar regarding this enquiry.')}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="dark" fullWidth size="lg">
            {t('Send')} {context.includes('Details') ? t('Request') : t('Enquiry')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
