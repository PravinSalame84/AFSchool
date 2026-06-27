import { useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Seo from '../components/ui/Seo'
import siteConfig from '../data/siteConfig'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import { isValidEmail } from '../utils/formValidation'

const infoCards = [
  { icon: MapPin, title: 'Campus Address', value: schoolContent.contact.address },
  { icon: Phone, title: 'Call Us', value: schoolContent.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: Mail, title: 'Email Us', value: schoolContent.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Clock, title: 'Office Support', value: 'Please contact the school office during working hours.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!isValidEmail(form.email)) next.email = 'Please enter a valid email'
    if (!form.message.trim()) next.message = 'Please enter a message'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Air Force School, VayuSena Nagar, Nagpur for admissions, school information, directions and parent support."
        path="/contact"
        image={siteAssets.images.chief}
      />
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Reach the school office, find the campus and start a conversation."
        subtitle="Questions about admissions, facilities or school details can be shared through the form below or by contacting the school directly."
        image={siteAssets.images.chief}
      />

      <section className="section-pad px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, index) => (
              <div key={card.title} className="frost-card rounded-[1.8rem] p-6" style={{ animationDelay: `${index * 90}ms` }}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-900 text-white dark:bg-white dark:text-primary-950">
                  <card.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-400">{card.title}</h3>
                {card.href ? (
                  <a href={card.href} className="focus-ring mt-2 block text-sm leading-relaxed text-primary-700 hover:text-accent-dark dark:text-slate-300 dark:hover:text-accent">
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-primary-700 dark:text-slate-300">{card.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="frost-card rounded-[2.2rem] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Send A Message</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white">We’ll help you quickly.</h2>

              {sent ? (
                <div className="mt-8 flex flex-col items-start gap-3 rounded-[1.8rem] bg-white p-7 shadow-soft dark:bg-primary-950/80">
                  <CheckCircle2 className="h-10 w-10 text-accent" />
                  <h3 className="text-lg font-bold uppercase text-primary-900 dark:text-white">Message sent successfully.</h3>
                  <p className="text-sm text-primary-500 dark:text-slate-300">The school team will get back to you at {form.email}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-4" noValidate>
                  <Input id="cname" label="Full Name" required value={form.name} onChange={update('name')} error={errors.name} />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input id="cemail" type="email" label="Email" required value={form.email} onChange={update('email')} error={errors.email} />
                    <Input id="cphone" type="tel" label="Phone (optional)" value={form.phone} onChange={update('phone')} />
                  </div>
                  <Input
                    id="cmessage"
                    label="Message"
                    required
                    multiline
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    error={errors.message}
                    placeholder="How can we help?"
                  />
                  <Button type="submit" variant="dark" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/70 p-4 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-primary-950/72">
              <div className="mb-4 flex items-center justify-between px-2">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-400">Campus Location</p>
                  <h2 className="text-2xl font-bold uppercase text-primary-900 dark:text-white">Air Force School VayuSena Nagar</h2>
                </div>
                <a
                  href={schoolContent.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-full bg-primary-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white dark:bg-white dark:text-primary-950"
                >
                  Open Map
                </a>
              </div>
              <iframe
                title="Air Force School VayuSena Nagar map"
                src={schoolContent.contact.mapEmbed}
                className="h-[480px] w-full rounded-[1.8rem] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
