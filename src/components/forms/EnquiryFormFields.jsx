import IconButton from '@mui/material/IconButton'
import { useEffect, useMemo, useRef, useState } from 'react'
import { CheckCircle2, RefreshCw } from 'lucide-react'
import CheckboxField from '../ui/CheckboxField'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Button from '../ui/Button'
import { states, citiesForState, schoolsForCity } from '../../data/locations'
import { isValidEmail, isValidIndianMobile } from '../../utils/formValidation'

const standards = ['LKG', 'UKG', ...Array.from({ length: 9 }, (_, index) => `Class ${index + 1}`)]

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
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-accent" />
        <h4 className="text-lg font-bold uppercase text-primary-900 dark:text-white">Thank you, {form.firstName}.</h4>
        <p className="max-w-sm text-sm text-primary-500 dark:text-slate-300">
          Your {context.toLowerCase()} has been received. The school team will contact you on{' '}
          <span className="font-semibold text-primary-700 dark:text-white">{form.phone}</span>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2" noValidate>
      <Select id="state" label="State" required options={states} value={form.state} onChange={update('state')} disabled />
      <Select id="city" label="City" required options={cities} value={form.city} onChange={update('city')} disabled />
      <Select
        id="school"
        label="Campus"
        required
        options={schools}
        value={form.school}
        onChange={update('school')}
        className="sm:col-span-2"
        disabled
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
      <Input id="lastName" label="Child's Last Name" placeholder="e.g. Sharma" value={form.lastName} onChange={update('lastName')} />
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
        className="sm:col-span-2"
        error={errors.phone}
      />
      <Input
        id="captcha"
        label={`Quick check - what is ${challenge.a} + ${challenge.b}?`}
        required
        inputMode="numeric"
        value={form.captcha}
        onChange={update('captcha')}
        placeholder="Your answer"
        className="sm:col-span-2"
        error={errors.captcha}
        endAdornment={
          <IconButton
            edge="end"
            onClick={refreshChallenge}
            aria-label="Get a new question"
            sx={{ color: 'text.secondary' }}
          >
            <RefreshCw className="h-4 w-4" />
          </IconButton>
        }
      />

      <CheckboxField
        checked={form.agree}
        onChange={update('agree')}
        error={errors.agree}
        className="sm:col-span-2"
        label="By submitting, you agree to be contacted by Air Force School, VayuSena Nagar regarding this enquiry."
      />

      <Button type="submit" variant="dark" className="w-full sm:col-span-2">
        Send {context.includes('Details') ? 'Request' : 'Enquiry'}
      </Button>
    </form>
  )
}
