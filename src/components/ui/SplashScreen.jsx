import { AnimatePresence, motion } from 'framer-motion'
import siteConfig from '../../data/siteConfig'

export default function SplashScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
          className="fixed inset-0 z-[200] overflow-hidden"
          aria-label="Loading Air Force School"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary-900 to-primary-700 dark:from-primary-950 dark:via-primary-900 dark:to-secondary" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,147,75,0.24),transparent_24%),radial-gradient(circle_at_left,rgba(0,212,250,0.2),transparent_20%)]" />
          <div className="contour-lines opacity-35" />

          <div className="relative flex min-h-screen items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex w-full max-w-md flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0.9, rotate: -8 }}
                animate={{ scale: [0.94, 1.03, 1], rotate: [0, 2, 0] }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="splash-mark relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/16 bg-gradient-to-br from-white/16 via-skyback-light/12 to-white/8 shadow-card backdrop-blur-xl"
              >
                <div className="absolute inset-2 rounded-[1.55rem] border border-white/12" />
                <img
                  src="/favicon.png"
                  alt={`${siteConfig.brandName} logo`}
                  className="relative h-[78px] w-[78px] rounded-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-skyback-light/88">
                  Welcome To
                </p>
                <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.9] text-white sm:text-5xl">
                  {siteConfig.brandName}
                </h1>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-skyback-light/74">
                  {siteConfig.brandSuffix}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0.75 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
                className="mt-8 w-full max-w-[240px]"
              >
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 1.3, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-info via-skyback-light to-accent"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
