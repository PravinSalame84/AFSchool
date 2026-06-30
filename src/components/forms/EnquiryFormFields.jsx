import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
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
  captcha: '',
  agree: false,
}

function getFieldError(field, form, challenge) {
  switch (field) {
    case 'firstName':
      if (!normalizeWhitespace(form.firstName)) return "Please enter your child's first name"
      if (!isValidPersonName(form.firstName)) return 'Use at least 2 letters and avoid numbers'
      return ''
    case 'lastName':
      if (!normalizeWhitespace(form.lastName)) return ''
      if (!isValidPersonName(form.lastName)) return 'Please enter a valid last name'
      return ''
    case 'standard':
      return form.standard ? '' : 'Please select the applying class'
    case 'email':
      if (!normalizeWhitespace(form.email)) return 'Please enter the parent email address'
      return isValidEmail(form.email) ? '' : 'Please enter a valid email address'
    case 'phone':
      if (!form.phone) return 'Please enter the parent mobile number'
      return isValidIndianMobile(form.phone) ? '' : 'Enter a valid 10-digit Indian mobile number'
    case 'captcha':
      if (!form.captcha) return 'Please solve the quick verification question'
      return Number(form.captcha) === challenge.answer ? '' : 'That answer does not look right'
    case 'agree':
      return form.agree ? '' : 'Please accept the terms to continue'
    default:
      return ''
  }
}

function buildErrors(form, challenge) {
  return fieldOrder.reduce((acc, field) => {
    const error = getFieldError(field, form, challenge)
    if (error) acc[field] = error
    return acc
  }, {})
}

function SuccessState({ firstName, phone, context }) {
  const theme = useTheme()

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
        label="Enquiry Received"
        color="secondary"
        variant="outlined"
        sx={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}
      />

      <Typography component="h4" variant="h6" sx={{ fontWeight: 800, textTransform: 'uppercase', color: 'text.primary' }}>
        Thank you, {firstName}.
      </Typography>

      <Typography sx={{ maxWidth: 420, fontSize: '0.97rem', color: 'text.secondary', lineHeight: 1.8 }}>
        Your {context.toLowerCase()} has been received. The school team will connect with you on{' '}
        <Box component="span" sx={{ fontWeight: 800, color: 'text.primary' }}>
          {phone}
        </Box>{' '}
        with the next steps and details shortly.
      </Typography>
    </Box>
  )
}

function IntroPanel({ context }) {
  const theme = useTheme()

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
            Parent-Friendly Enquiry
          </Typography>
          <Typography variant="h6" sx={{ mt: 0.25, fontWeight: 800, lineHeight: 1.2, fontSize: { xs: '1.02rem', sm: '1.1rem' } }}>
            {context}
          </Typography>
          <Typography sx={{ mt: 0.45, color: 'text.secondary', lineHeight: 1.6, fontSize: '0.88rem' }}>
            Share the essentials and the school team can guide you with the right next step.
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

function CampusSummary({ school, city, state }) {
  const theme = useTheme()

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
        Selected Campus
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
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [challenge, setChallenge] = useState(randomMathChallenge)
  const closeTimerRef = useRef(null)

  useEffect(
    () => () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    },
    [],
  )

  const setFieldError = (field, nextForm) => {
    const error = getFieldError(field, nextForm, challenge)
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

    const nextErrors = buildErrors(normalizedForm, challenge)
    setForm(normalizedForm)
    setErrors(nextErrors)
    setTouched(fieldOrder.reduce((acc, field) => ({ ...acc, [field]: true }), {}))

    if (Object.keys(nextErrors).length === 0) {
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

      <Grid container spacing={2.25}>

        <Grid item xs={12} sm={6}>
          <Input
            id="firstName"
            label="Child's First Name"
            required
            placeholder="e.g. Aarav"
            value={form.firstName}
            onChange={update('firstName')}
            onBlur={handleBlur('firstName')}
            error={touched.firstName ? errors.firstName : ''}
            helperText="Student's given name"
            startAdornment={<UserRound size={16} />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input
            id="lastName"
            label="Child's Last Name"
            placeholder="e.g. Sharma"
            value={form.lastName}
            onChange={update('lastName')}
            onBlur={handleBlur('lastName')}
            error={touched.lastName ? errors.lastName : ''}
            helperText="Optional"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select
            id="standard"
            label="Class Applying For"
            required
            placeholder="Select class"
            options={standards}
            value={form.standard}
            onChange={update('standard')}
            onBlur={handleBlur('standard')}
            error={touched.standard ? errors.standard : ''}
            helperText="Choose the applying class"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input
            id="email"
            type="email"
            label="Parent's Email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={update('email')}
            onBlur={handleBlur('email')}
            error={touched.email ? errors.email : ''}
            helperText="For school updates and follow-up"
            startAdornment={<Mail size={16} />}
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            id="phone"
            type="tel"
            label="Parent's Mobile Number"
            required
            placeholder="10-digit number"
            value={form.phone}
            onChange={update('phone')}
            onBlur={handleBlur('phone')}
            error={touched.phone ? errors.phone : ''}
            helperText="Active 10-digit mobile number"
            startAdornment={<Phone size={16} />}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ mb: 0.8, fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'text.secondary' }}>
            Quick Verification
          </Typography>
          <TextField
            label={`What is ${challenge.a} + ${challenge.b}?`}
            value={form.captcha}
            onChange={update('captcha')}
            onBlur={handleBlur('captcha')}
            error={Boolean(touched.captcha && errors.captcha)}
            helperText={touched.captcha && errors.captcha ? errors.captcha : 'Quick verification to prevent spam'}
            fullWidth
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={refreshChallenge} edge="end" aria-label="Refresh verification challenge">
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
              helperText="Used only for this school enquiry."
              label="By submitting, you agree to be contacted by Air Force School, VayuSena Nagar regarding this enquiry."
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="dark" fullWidth size="lg">
            Send {context.includes('Details') ? 'Request' : 'Enquiry'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
