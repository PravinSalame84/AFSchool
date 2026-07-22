import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useMemo, useState } from 'react'
import { CheckCircle2, RefreshCw } from 'lucide-react'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Button from '../ui/Button'
import { states, citiesForState, schoolsForCity } from '../../data/locations'

const standards = ['Playgroup', 'Nursery', 'Jr. KG', 'Sr. KG', ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)]

function randomMathChallenge() {
  const a = Math.ceil(Math.random() * 8) + 1
  const b = Math.ceil(Math.random() * 8) + 1
  return { a, b, answer: a + b }
}

const emptyForm = {
  state: '',
  city: '',
  school: '',
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

  const cities = useMemo(() => citiesForState(form.state), [form.state])
  const schools = useMemo(() => schoolsForCity(form.state, form.city), [form.state, form.city])

  const update = (field) => (e) => {
    const value = field === 'agree' ? e.target.checked : e.target.value
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'state') {
        next.city = ''
        next.school = ''
      }
      if (field === 'city') {
        next.school = ''
      }
      return next
    })
  }

  const validate = () => {
    const next = {}
    if (!form.state) next.state = 'Please select your state'
    if (!form.city) next.city = 'Please select your city'
    if (!form.school) next.school = 'Please select a campus'
    if (!form.firstName.trim()) next.firstName = 'Please enter your name'
    if (!form.standard) next.standard = 'Please select a grade'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address'
    if (!/^[0-9]{10}$/.test(form.phone)) next.phone = 'Please enter a valid 10-digit mobile number'
    if (Number(form.captcha) !== challenge.answer) next.captcha = 'That answer doesn\u2019t look right'
    if (!form.agree) next.agree = 'Please accept the terms to continue'
    return next
  }

  const refreshChallenge = () => {
    setChallenge(randomMathChallenge())
    setForm((prev) => ({ ...prev, captcha: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      onSuccess && setTimeout(onSuccess, 1800)
    }
  }

  if (submitted) {
    return (
      <Stack spacing={1.5} sx={{ py: 4, textAlign: 'center', alignItems: 'center' }}>
        <CheckCircle2 size={56} color="#f0934b" />
        <Typography sx={{ color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>
          Thank you, {form.firstName}!
        </Typography>
        <Typography sx={{ maxWidth: 380, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>
          Your {context.toLowerCase()} has been received. Our admissions team will reach out to you on{' '}
          <Box component="span" sx={{ color: 'primary.light', fontWeight: 700 }}>{form.phone}</Box> within 24 hours.
        </Typography>
      </Stack>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
      <Select
        id="state"
        label="State"
        required
        placeholder="Select your state"
        options={states}
        value={form.state}
        onChange={update('state')}
        error={errors.state}
      />
      <Select
        id="city"
        label="City"
        required
        placeholder={form.state ? 'Select your city' : 'Select a state first'}
        options={cities}
        value={form.city}
        onChange={update('city')}
        disabled={!form.state}
        error={errors.city}
      />
      <Select
        id="school"
        label="Preferred Campus"
        required
        placeholder={form.city ? 'Select a campus' : 'Select a city first'}
        options={schools}
        value={form.school}
        onChange={update('school')}
        disabled={!form.city}
        sx={{ gridColumn: { sm: 'span 2' } }}
        error={errors.school}
      />
      <Input
        id="firstName"
        label="Child's First Name"
        required
        placeholder="e.g. Aarav"
        value={form.firstName}
        onChange={update('firstName')}
        error={errors.firstName}
      />
      <Input
        id="lastName"
        label="Child's Last Name"
        placeholder="e.g. Sharma"
        value={form.lastName}
        onChange={update('lastName')}
      />
      <Select
        id="standard"
        label="Grade Applying For"
        required
        placeholder="Select grade"
        options={standards}
        value={form.standard}
        onChange={update('standard')}
        error={errors.standard}
      />
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
      <Input
        id="phone"
        type="tel"
        label="Parent's Mobile Number"
        required
        placeholder="10-digit number"
        value={form.phone}
        onChange={update('phone')}
        sx={{ gridColumn: { sm: 'span 2' } }}
        error={errors.phone}
      />

      <Box sx={{ gridColumn: { sm: 'span 2' } }}>
        <Typography component="label" htmlFor="captcha" sx={{ mb: 1, display: 'block', color: 'primary.main', fontSize: '0.92rem', fontWeight: 600 }}>
          Quick check - what is {challenge.a} + {challenge.b}? <Box component="span" sx={{ color: 'secondary.main' }}>*</Box>
        </Typography>
        <Stack direction="row" spacing={1}>
          <TextField
            id="captcha"
            inputMode="numeric"
            value={form.captcha}
            onChange={update('captcha')}
            placeholder="Your answer"
            error={Boolean(errors.captcha)}
            fullWidth
          />
          <IconButton
            type="button"
            onClick={refreshChallenge}
            aria-label="Get a new question"
            sx={{ border: '1px solid rgba(17,26,36,0.12)', borderRadius: 1 }}
          >
            <RefreshCw size={16} />
          </IconButton>
        </Stack>
        {errors.captcha ? (
          <Typography sx={{ mt: 0.75, color: 'error.main', fontSize: '0.75rem', fontWeight: 500 }}>
            {errors.captcha}
          </Typography>
        ) : null}
      </Box>

      <Box sx={{ gridColumn: { sm: 'span 2' } }}>
        <FormControlLabel
          control={<Checkbox checked={form.agree} onChange={update('agree')} />}
          label={
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7 }}>
            By submitting, you agree to be contacted by Airforce School Educational & Cultural Society regarding this {context.toLowerCase()}.
            </Typography>
          }
          sx={{ alignItems: 'flex-start', m: 0 }}
        />
        {errors.agree ? (
          <Typography sx={{ mt: 0.75, color: 'error.main', fontSize: '0.75rem', fontWeight: 500 }}>
            {errors.agree}
          </Typography>
        ) : null}
      </Box>

      <Button type="submit" variant="primary" fullWidth sx={{ gridColumn: { sm: 'span 2' } }}>
        Send {context.includes('Brochure') ? 'and Get Brochure' : 'Enquiry'}
      </Button>
    </Box>
  )
}
