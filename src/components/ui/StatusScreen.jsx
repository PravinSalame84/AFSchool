import { motion } from 'framer-motion'
import { AlertTriangle, Home, RefreshCcw, Wrench } from 'lucide-react'
import Container from './Container'
import Button from './Button'

const iconMap = {
  error: AlertTriangle,
  maintenance: Wrench,
  notFound: Home,
}

export default function StatusScreen({
  badge,
  code,
  title,
  message,
  icon = 'error',
  primaryAction,
  secondaryAction,
  note,
}) {
  const Icon = iconMap[icon] ?? AlertTriangle

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="contour-lines" />
      <div className="hero-orb sky left-[8%] top-12 h-52 w-52" />
      <div className="hero-orb sun right-[12%] top-10 h-60 w-60" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="hero-stage p-5 sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-secondary via-primary-900 to-[#214f79] p-8 text-white shadow-card dark:border-white/10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_26%)]" />
                <div className="relative flex h-full min-h-[260px] flex-col justify-between">
                  <div>
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/84">
                      {badge}
                    </span>
                    <div className="mt-6 inline-flex rounded-[1.7rem] bg-white/10 p-4 backdrop-blur-md">
                      <Icon className="h-12 w-12" />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">Status</p>
                    <p className="mt-2 text-5xl font-bold uppercase leading-none">{code}</p>
                  </div>
                </div>
              </div>

              <div className="px-2 sm:px-4">
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-accent">Status Update</p>
                <h1 className="mt-4 text-4xl font-bold uppercase leading-[0.92] text-primary-900 dark:text-white sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-600 dark:text-slate-300">{message}</p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {primaryAction ? (
                    <Button
                      to={primaryAction.to}
                      href={primaryAction.href}
                      onClick={primaryAction.onClick}
                      size="lg"
                      variant={primaryAction.variant ?? 'dark'}
                    >
                      {primaryAction.label}
                    </Button>
                  ) : null}

                  {secondaryAction ? (
                    <Button
                      to={secondaryAction.to}
                      href={secondaryAction.href}
                      onClick={secondaryAction.onClick}
                      size="lg"
                      variant={secondaryAction.variant ?? 'outline'}
                      icon={secondaryAction.icon ?? true}
                    >
                      {secondaryAction.label}
                    </Button>
                  ) : null}
                </div>

                {note ? (
                  <div className="mt-8 frost-card rounded-[1.5rem] p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary-900/8 p-2 text-primary-700 dark:bg-white/10 dark:text-white">
                        <RefreshCcw className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-primary-700 dark:text-slate-200">{note}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
