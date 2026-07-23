import { Alert, Box, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import siteConfig from '../data/siteConfig'
import appContent from '../data/appContent'
import schoolContent from '../data/schoolContent'
import { BRAND_NEUTRALS } from '../constants/brand'
import { getContactEmailDisplay, getContactMailto, submitEmailForm } from '../utils/contact'

const infoCards = [
  { icon: MapPin, title: 'Head Office', value: siteConfig.contact.address },
  { icon: Phone, title: 'Call Us', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: Mail, title: 'Email Us', value: getContactEmailDisplay(), href: getContactMailto() },
  { icon: Clock, title: 'Office Hours', value: 'Mon – Sat, 9:00 AM – 5:30 PM' },
]

const departmentContacts = [
  {
    department: 'Accounts Department',
    name: 'Mr. Pradeep Dhuri',
    role: 'General Manager - Accounts',
    email: 'podaraccounts@podar.org',
    actionLabel: 'Write to Accounts Team',
  },
  {
    department: 'Business Opportunities',
    name: 'Mr. Sameer Upadhyay',
    role: 'Sr. Manager',
    email: 'sameer@podar.org',
    actionLabel: 'Discuss Business Opportunities',
  },
  {
    department: 'Career & HR Development',
    name: 'Mrs. Medha Paranjpe',
    role: 'Chief Human Resources Officer',
    email: 'medha.paranjpe@podar.org',
    actionLabel: 'Connect with HR',
  },
  {
    department: 'Air Force School Innovation Centre',
    name: 'Mrs. Renee Bijlani',
    role: 'Chief Academics Officer',
    email: 'pic.reneebijlani@podar.org',
    actionLabel: 'Contact Innovation Centre',
  },
  {
    department: 'Info & Communications Technology',
    name: 'Mr. Anand Chawla',
    role: 'Chief Information Officer',
    email: 'anand@podar.org',
    actionLabel: 'Contact ICT Team',
  },
  {
    department: 'Air Force School Prep',
    name: 'Mrs. Swati Popat Vats',
    role: 'Chief Academics Officer (Prep)',
    email: 'swatipopat@podar.org',
    actionLabel: 'Contact Prep Academics',
  },
  {
    department: 'Purchase Department',
    name: 'Mr. P. D. Patil',
    role: 'Chief Procurement Officer',
    email: 'p.patil@podar.org',
    actionLabel: 'Write to Procurement',
  },
  {
    department: 'Sales and Marketing',
    name: 'Mr. Vishal Shah',
    role: 'Chief Marketing Officer',
    email: 'vishal.shah@podar.org',
    actionLabel: 'Contact Marketing',
  },
  {
    department: 'Franchise Opportunities',
    name: 'Mr. Deepak R. Singh',
    role: 'General Manager - Business Development',
    email: 'deepak.singh@podar.org',
    actionLabel: 'Discuss Franchise Opportunities',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email'
    if (!form.message.trim()) next.message = 'Please enter a message'
    setErrors(next)
    setSubmitError('')
    if (Object.keys(next).length === 0) {
      setIsSubmitting(true)
      try {
        await submitEmailForm({
          subject: `Website Contact Enquiry from ${form.name.trim()}`,
          replyTo: form.email.trim(),
          formName: form.name.trim(),
          formUrl: window.location.href,
          fields: {
            fullName: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim() || 'Not provided',
            message: form.message.trim(),
          },
        })
        setSent(true)
      } catch (error) {
        setSubmitError(error.message || 'We could not send your message right now.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <>
      <PageHero {...appContent.pageHeroes.contact} />

      <Section sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {infoCards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 80}>
                <Paper sx={{ height: '100%', p: 3, boxShadow: 2 }}>
                  <Box sx={{ display: 'inline-flex', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: BRAND_NEUTRALS.sectionSky, color: 'primary.light' }}>
                    <card.icon size={20} />
                  </Box>
                  <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '0.9rem', fontWeight: 700 }}>{card.title}</Typography>
                  {card.href ? (
                    <Link href={card.href} underline="none" sx={{ mt: 0.75, display: 'block', color: 'text.secondary', fontSize: '0.9rem', '&:hover': { color: 'secondary.dark' } }}>
                      {card.value}
                    </Link>
                  ) : (
                    <Typography sx={{ mt: 0.75, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>{card.value}</Typography>
                  )}
                </Paper>
              </RevealOnScroll>
            ))}
          </Box>

          <Box sx={{ mt: 7, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: 5 }}>
            <RevealOnScroll>
              <SectionHeading {...appContent.sections.contact.message} />
              {sent ? (
                <Paper sx={{ mt: 4, p: 3.5, boxShadow: 2 }}>
                  <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <CheckCircle2 size={40} color={BRAND_NEUTRALS.accentStrong} />
                    <Typography sx={{ color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>
                      {appContent.sections.contact.successTitle}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>We'll get back to you at {form.email} shortly.</Typography>
                  </Stack>
                </Paper>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3.5 }}>
                  {submitError ? (
                    <Alert severity="warning" sx={{ mb: 2 }}>
                      {submitError}
                    </Alert>
                  ) : null}
                  <Input id="cname" label="Full Name" required value={form.name} onChange={update('name')} error={errors.name} />
                  <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
                    <Input id="cemail" type="email" label="Email" required value={form.email} onChange={update('email')} error={errors.email} />
                    <Input id="cphone" type="tel" label="Phone (optional)" value={form.phone} onChange={update('phone')} />
                  </Box>
                  <TextField
                    sx={{ mt: 2 }}
                    label="Message"
                    id="cmessage"
                    required
                    multiline
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="How can we help?"
                    error={Boolean(errors.message)}
                    helperText={errors.message || ' '}
                    fullWidth
                  />
                  <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              )}
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <SectionHeading {...appContent.sections.contact.location} />
              <Paper sx={{ mt: 3.5, overflow: 'hidden', boxShadow: 2 }}>
                <Box
                  component="iframe"
                  title="Airforce School head office map"
                  src={schoolContent.contact.mapEmbed}
                  loading="lazy"
                  sx={{ width: '100%', height: 360, border: 0 }}
                />
              </Paper>
            </RevealOnScroll>
          </Box>

          <Box sx={{ mt: 7 }}>
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Contact Us"
                title="Specialised departments and support contacts"
                subtitle="Reach the right Air Force School-related contact point faster for accounts, careers, innovation, technology, procurement and other enquiries."
              />
            </RevealOnScroll>

            <Box sx={{ mt: 3.5, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }, gap: 2.2 }}>
              {departmentContacts.map((item, index) => (
                <RevealOnScroll key={item.department} delay={(index % 3) * 80}>
                  <Paper
                    sx={{
                      height: '100%',
                      p: 2.6,
                      borderRadius: '1.6rem',
                      background: 'linear-gradient(180deg, #ffffff 0%, #f6fbff 100%)',
                      border: '1px solid rgba(17,26,36,0.08)',
                      boxShadow: '0 18px 36px -30px rgba(17,26,36,0.18)',
                    }}
                  >
                    <Typography sx={{ color: 'secondary.dark', fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      {item.department}
                    </Typography>
                    <Typography sx={{ mt: 1.2, color: 'primary.main', fontSize: '1.08rem', fontWeight: 800 }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ mt: 0.7, color: 'text.secondary', lineHeight: 1.7 }}>
                      {item.role}
                    </Typography>
                    <Link href={`mailto:${item.email}`} underline="none" sx={{ mt: 1.4, display: 'inline-block', color: 'secondary.dark', fontWeight: 700, wordBreak: 'break-word' }}>
                      {item.actionLabel}
                    </Link>
                  </Paper>
                </RevealOnScroll>
              ))}
            </Box>
          </Box>
      </Section>
    </>
  )
}
