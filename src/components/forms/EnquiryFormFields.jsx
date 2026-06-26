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
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-accent" />
        <h4 className="text-lg font-bold text-primary-900">Thank you, {form.firstName}!</h4>
        <p className="max-w-sm text-sm text-primary-500">
          Your {context.toLowerCase()} has been received. Our admissions team will reach out to you on{' '}
          <span className="font-semibold text-primary-700">{form.phone}</span> within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2" noValidate>
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
        className="sm:col-span-2"
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
        className="sm:col-span-2"
        error={errors.phone}
      />

      <div className="sm:col-span-2">
        <label htmlFor="captcha" className="mb-1.5 block text-sm font-semibold text-primary-800">
          Quick check — what is {challenge.a} + {challenge.b}? <span className="text-accent">*</span>
        </label>
        <div className="flex gap-2">
          <input
            id="captcha"
            inputMode="numeric"
            value={form.captcha}
            onChange={update('captcha')}
            className={`focus-ring w-full rounded-lg border px-4 py-2.5 text-[15px] text-primary-900 transition ${
              errors.captcha ? 'border-red-400 bg-red-50' : 'border-primary-100 bg-white focus:border-accent'
            }`}
            placeholder="Your answer"
          />
          <button
            type="button"
            onClick={refreshChallenge}
            aria-label="Get a new question"
            className="focus-ring flex-shrink-0 rounded-lg border border-primary-100 px-3 text-primary-500 transition hover:bg-skyback-soft"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
        {errors.captcha && <p className="mt-1 text-xs font-medium text-red-500">{errors.captcha}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-2.5 text-sm text-primary-600">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={update('agree')}
            className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-primary-300 text-accent focus:ring-accent"
          />
          <span>
            By submitting, you agree to be contacted by Airforce School Educational & Cultural Society regarding this {context.toLowerCase()}.
          </span>
        </label>
        {errors.agree && <p className="mt-1 text-xs font-medium text-red-500">{errors.agree}</p>}
      </div>

      <Button type="submit" variant="primary" className="sm:col-span-2 w-full">
        Send {context.includes('Brochure') ? 'and Get Brochure' : 'Enquiry'}
      </Button>
    </form>
  )
}
