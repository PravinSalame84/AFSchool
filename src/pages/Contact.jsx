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

      <section className="section-pad bg-skyback">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 80}>
                <div className="h-full rounded-xl2 bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-skyback-soft text-primary-700">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-primary-900">{card.title}</h3>
                  {card.href ? (
                    <a href={card.href} className="focus-ring mt-1 block text-sm text-primary-500 hover:text-accent-dark">
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-primary-500">{card.value}</p>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <RevealOnScroll>
              <SectionHeading eyebrow="Send a Message" title="Drop us a line" />
              {sent ? (
                <div className="mt-8 flex flex-col items-start gap-3 rounded-xl2 bg-white p-7 shadow-soft">
                  <CheckCircle2 className="h-10 w-10 text-accent" />
                  <h3 className="text-lg font-bold text-primary-900">Message sent — thank you!</h3>
                  <p className="text-sm text-primary-500">We'll get back to you at {form.email} shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-4" noValidate>
                  <Input id="cname" label="Full Name" required value={form.name} onChange={update('name')} error={errors.name} />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input id="cemail" type="email" label="Email" required value={form.email} onChange={update('email')} error={errors.email} />
                    <Input id="cphone" type="tel" label="Phone (optional)" value={form.phone} onChange={update('phone')} />
                  </div>
                  <div>
                    <label htmlFor="cmessage" className="mb-1.5 block text-sm font-semibold text-primary-800">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="cmessage"
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      className={`focus-ring w-full rounded-lg border px-4 py-2.5 text-[15px] text-primary-900 transition ${
                        errors.message ? 'border-red-400 bg-red-50' : 'border-primary-100 bg-white focus:border-accent'
                      }`}
                      placeholder="How can we help?"
                    />
                    {errors.message && <p className="mt-1 text-xs font-medium text-red-500">{errors.message}</p>}
                  </div>
                  <Button type="submit" variant="primary" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <SectionHeading eyebrow="Find Us" title="Head Office Location" />
              <div className="mt-7 overflow-hidden rounded-xl2 shadow-soft">
                <iframe
                  title="Airforce School head office map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.83%2C19.10%2C72.89%2C19.14&layer=mapnik"
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </>
  )
}
