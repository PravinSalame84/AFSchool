import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { EnquiryModalProvider } from './context/EnquiryModalContext'
import SplashScreen from './components/ui/SplashScreen'
import RouteLoader from './components/ui/RouteLoader'

import Home from './pages/Home'

const loadAbout = () => import('./pages/About')
const loadWhyUs = () => import('./pages/WhyUs')
const loadAdmissions = () => import('./pages/Admissions')
const loadLocations = () => import('./pages/Locations')
const loadBlog = () => import('./pages/Blog')
const loadAlumni = () => import('./pages/Alumni')
const loadCareers = () => import('./pages/Careers')
const loadContact = () => import('./pages/Contact')
const loadPrivacyPolicy = () => import('./pages/PrivacyPolicy')
const loadTerms = () => import('./pages/Terms')
const loadNotFound = () => import('./pages/NotFound')

const About = lazy(loadAbout)
const WhyUs = lazy(loadWhyUs)
const Admissions = lazy(loadAdmissions)
const Locations = lazy(loadLocations)
const Blog = lazy(loadBlog)
const Alumni = lazy(loadAlumni)
const Careers = lazy(loadCareers)
const Contact = lazy(loadContact)
const PrivacyPolicy = lazy(loadPrivacyPolicy)
const Terms = lazy(loadTerms)
const NotFound = lazy(loadNotFound)

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeout = window.setTimeout(() => setShowSplash(false), reducedMotion ? 120 : 820)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (showSplash) return

    const preloadRoutes = () => {
      ;[
        loadAbout,
        loadWhyUs,
        loadAdmissions,
        loadLocations,
        loadBlog,
        loadAlumni,
        loadCareers,
        loadContact,
      ].forEach((loader) => {
        loader()
      })
    }

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(preloadRoutes, { timeout: 1200 })
      return () => window.cancelIdleCallback(id)
    }

    const timeout = window.setTimeout(preloadRoutes, 400)
    return () => window.clearTimeout(timeout)
  }, [showSplash])

  return (
    <EnquiryModalProvider>
      <SplashScreen visible={showSplash} />
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </EnquiryModalProvider>
  )
}
