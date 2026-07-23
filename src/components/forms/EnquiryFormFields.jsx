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
import { Alert } from '@mui/material'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Button from '../ui/Button'
import { states, citiesForState, schoolsForCity } from '../../data/locations'
import { submitEmailForm } from '../../utils/contact'

const standards = ['Playgroup', 'Nursery', 'Jr. KG', 'Sr. KG', ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)]
const defaultState = states.length === 1 ? states[0] : ''
const defaultCityOptions = citiesForState(defaultState)
const defaultCity = defaultCityOptions.length === 1 ? defaultCityOptions[0] : ''
const defaultSchoolOptions = schoolsForCity(defaultState, defaultCity)
const defaultSchool = defaultSchoolOptions.length === 1 ? defaultSchoolOptions[0] : ''

function randomMathChallenge() {
  const a = Math.ceil(Math.random() * 8) + 1
  const b = Math.ceil(Math.random() * 8) + 1
  return { a, b, answer: a + b }
}

const emptyForm = {
  state: defaultState,
  city: defaultCity,
  school: defaultSchool,
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
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const cities = useMemo(() => citiesForState(form.state), [form.state])
  const schools = useMemo(() => schoolsForCity(form.state, form.city), [form.state, form.city])

  const update = (field) => (e) => {
    const value = field === 'agree' ? e.target.checked : e.target.value
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'state') {
        const nextCities = citiesForState(value)
        next.city = nextCities.length === 1 ? nextCities[0] : ''
        const nextSchools = schoolsForCity(value, next.city)
        next.school = nextSchools.length === 1 ? nextSchools[0] : ''
      }
      if (field === 'city') {
        const nextSchools = schoolsForCity(prev.state, value)
        next.school = nextSchools.length === 1 ? nextSchools[0] : ''
      }
      return next
    })
  }

  const validate = () => {
    const next = {}
    if (!form.state) next.state = 'Please select your state'
    if (!form.city) next.city = 'Please select your city'
    if (!form.school) next.school = 'Please select a campus'
    if (!form.firstName.trim()) next.firstName = 'Please enter your first name'
    if (!form.lastName.trim()) next.lastName = 'Please enter your last name'
    if (!form.standard) next.standard = 'Please select a grade'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address'
    if (!/^[0-9]{10}$/.test(form.phone)) next.phone = 'Please enter a valid 10-digit mobile number'
    if (Number(form.captcha) !== challenge.answer) next.captcha = 'That answer doesn\u2019t look correct'
    if (!form.agree) next.agree = 'Please accept the terms to continue'
    return next
  }

  const refreshChallenge = () => {
    setChallenge(randomMathChallenge())
    setForm((prev) => ({ ...prev, captcha: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    setSubmitError('')

    if (Object.keys(next).length === 0) {
      setIsSubmitting(true)
      try {
        await submitEmailForm({
        subject: `${context} from ${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
          replyTo: form.email.trim(),
          formName: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
          fields: {
            enquiryType: context,
            state: form.state,
            city: form.city,
            preferredCampus: form.school,
            childName: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
            gradeApplyingFor: form.standard,
            parentEmail: form.email.trim(),
            parentMobile: form.phone.trim(),
          },
        })
        setSubmitted(true)
        onSuccess && setTimeout(onSuccess, 1800)
      } catch (error) {
        setSubmitError(error.message || 'We could not send your enquiry right now.')
      } finally {
        setIsSubmitting(false)
      }
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        padding: 1,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
        gap: { xs: 0.5, sm: 0.75 },
      }}
    >
      {submitError ? (
        <Alert severity="warning" sx={{ gridColumn: { sm: 'span 2' }, mb: 1 }}>
          {submitError}
        </Alert>
      ) : null}
      <Select
        id="state"
        label="State"
        required
        options={states}
        value={form.state}
        onChange={update('state')}
        error={errors.state}
        disabled={states.length === 1}
      />
      <Select
        id="city"
        label="City"
        required
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
        placeholder={schools.length > 1 ? 'Select a campus' : undefined}
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
        error={errors.lastName}
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
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={0.9} sx={{ alignItems: { xs: 'stretch', sm: 'flex-start' } }}>
          <TextField
            id="captcha"
            inputMode="numeric"
            value={form.captcha}
            onChange={update('captcha')}
            placeholder="Your answer"
            error={Boolean(errors.captcha)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255,255,255,0.58)',
                backdropFilter: 'blur(16px)',
                borderRadius: 1,
              },
            }}
          />
          <IconButton
            type="button"
            onClick={refreshChallenge}
            aria-label="Get a new question"
            sx={{
              border: '1px solid rgba(17,26,36,0.12)',
              borderRadius: 1,
              alignSelf: { xs: 'flex-end', sm: 'stretch' },
              minWidth: { xs: 44, sm: 'auto' },
            }}
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

      <Button type="submit" variant="primary" fullWidth disabled={isSubmitting} sx={{ gridColumn: { sm: 'span 2' } }}>
        {isSubmitting ? 'Sending...' : `Send ${context.includes('Brochure') ? 'and Get Brochure' : 'Enquiry'}`}
      </Button>
    </Box>
  )
}
