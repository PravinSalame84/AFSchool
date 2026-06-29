import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useEffect, useMemo, useRef, useState } from 'react'
import { CheckCircle2, RefreshCw } from 'lucide-react'
import CheckboxField from '../ui/CheckboxField'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Button from '../ui/Button'
import { states, citiesForState, schoolsForCity } from '../../data/locations'
import { isValidEmail, isValidIndianMobile } from '../../utils/formValidation'

const standards = ['LKG', 'UKG', ...Array.from({ length: 9 }, (_, index) => `Class ${index + 1}`)]

function SuccessState({ firstName, phone, context }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 4, textAlign: 'center' }}>
      <Box
        sx={(theme) => ({
          display: 'grid',
          placeItems: 'center',
          width: 72,
          height: 72,
          borderRadius: '25%',
          color: 'secondary.main',
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(240, 147, 75, 0.14)' : 'rgba(240, 147, 75, 0.12)',
        })}
      >
        <CheckCircle2 size={34} />
      </Box>

      <Typography component="h4" variant="h6" sx={{ fontWeight: 800, textTransform: 'uppercase', color: 'text.primary' }}>
        Thank you, {firstName}.
      </Typography>

      <Typography sx={{ maxWidth: 360, fontSize: '0.95rem', color: 'text.secondary' }}>
        Your {context.toLowerCase()} has been received. The school team will contact you on{' '}
        <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
          {phone}
        </Box>
        .
      </Typography>
    </Box>
  )
}

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

export default function EnquiryFormFields({ context = 'General Enquiry', onSuccess }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [challenge, setChallenge] = useState(randomMathChallenge)
  const closeTimerRef = useRef(null)

  const cities = useMemo(() => citiesForState(form.state), [form.state])
  const schools = useMemo(() => schoolsForCity(form.state, form.city), [form.state, form.city])

  useEffect(
    () => () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
      }
    },
    [],
  )

  const update = (field) => (event) => {
    const value = field === 'agree' ? event.target.checked : event.target.value
    setForm((prev) => ({ ...prev, [field]: value }))

    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Please enter your child\'s name'
    if (!form.standard) next.standard = 'Please select the applying class'
    if (!isValidEmail(form.email)) next.email = 'Please enter a valid email address'
    if (!isValidIndianMobile(form.phone)) next.phone = 'Please enter a valid 10-digit mobile number'
    if (Number(form.captcha) !== challenge.answer) next.captcha = 'That answer does not look right'
    if (!form.agree) next.agree = 'Please accept the terms to continue'
    return next
  }

  const refreshChallenge = () => {
    setChallenge(randomMathChallenge())
    setForm((prev) => ({ ...prev, captcha: '' }))
    setErrors((prev) => {
      if (!prev.captcha) return prev
      const next = { ...prev }
      delete next.captcha
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      if (onSuccess) {
        closeTimerRef.current = window.setTimeout(onSuccess, 1800)
      }
    }
  }

  if (submitted) {
    return (
      <SuccessState
        firstName={form.firstName}
        phone={form.phone}
        context={context}
      />
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Select id="state" label="State" required options={states} value={form.state} onChange={update('state')} disabled />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Select id="city" label="City" required options={cities} value={form.city} onChange={update('city')} disabled />
      </Grid>

      <Grid item xs={12}>
        <Select
          id="school"
          label="Campus"
          required
          options={schools}
          value={form.school}
          onChange={update('school')}
          disabled
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Input
          id="firstName"
          label="Child's First Name"
          required
          placeholder="e.g. Aarav"
          value={form.firstName}
          onChange={update('firstName')}
          error={errors.firstName}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Input id="lastName" label="Child's Last Name" placeholder="e.g. Sharma" value={form.lastName} onChange={update('lastName')} />
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
          error={errors.standard}
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
          error={errors.email}
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
          error={errors.phone}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label={`What is ${challenge.a} + ${challenge.b}?`}
          value={form.captcha}
          onChange={update('captcha')}
          error={!!errors.captcha}
          helperText={errors.captcha}
          fullWidth
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={refreshChallenge} edge="end" aria-label="Refresh verification challenge">
                  <RefreshCw size={16} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <CheckboxField
          checked={form.agree}
          onChange={update('agree')}
          error={errors.agree}
          label="By submitting, you agree to be contacted by Air Force School, VayuSena Nagar regarding this enquiry."
        />
      </Grid>

      <Grid item xs={12}>
        <Button type="submit" variant="dark" fullWidth>
          Send {context.includes('Details') ? 'Request' : 'Enquiry'}
        </Button>
      </Grid>
    </Grid>
  )
}
