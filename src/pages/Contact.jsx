import { Box, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import siteConfig from '../data/siteConfig'

const infoCards = [
  { icon: MapPin, title: 'Head Office', value: siteConfig.contact.address },
  { icon: Phone, title: 'Call Us', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: Mail, title: 'Email Us', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Clock, title: 'Office Hours', value: 'Mon – Sat, 9:00 AM – 5:30 PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email'
    if (!form.message.trim()) next.message = 'Please enter a message'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <>
      <PageHero
        crumb="Contact Us"
        eyebrow="We're Here to Help"
        title="Get in Touch with Airforce School"
        subtitle="Questions about admissions, campuses or anything else — our team typically replies within one business day."
      />

      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {infoCards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 80}>
                <Paper sx={{ height: '100%', p: 3, boxShadow: 2 }}>
                  <Box sx={{ display: 'inline-flex', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: '#d7eff6', color: 'primary.light' }}>
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
              <SectionHeading eyebrow="Send a Message" title="Drop us a line" />
              {sent ? (
                <Paper sx={{ mt: 4, p: 3.5, boxShadow: 2 }}>
                  <Stack spacing={1.5} alignItems="flex-start">
                    <CheckCircle2 size={40} color="#f0934b" />
                    <Typography sx={{ color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>Message sent - thank you!</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>We'll get back to you at {form.email} shortly.</Typography>
                  </Stack>
                </Paper>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3.5 }}>
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
                  <Button type="submit" variant="primary" fullWidth>
                    Send Message
                  </Button>
                </Box>
              )}
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <SectionHeading eyebrow="Find Us" title="Head Office Location" />
              <Paper sx={{ mt: 3.5, overflow: 'hidden', boxShadow: 2 }}>
                <Box
                  component="iframe"
                  title="Airforce School head office map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.83%2C19.10%2C72.89%2C19.14&layer=mapnik"
                  loading="lazy"
                  sx={{ width: '100%', height: 360, border: 0 }}
                />
              </Paper>
            </RevealOnScroll>
          </Box>
        </Container>
      </Box>
    </>
  )
}
