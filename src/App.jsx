import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { EnquiryModalProvider } from './context/EnquiryModalContext'
import SplashScreen from './components/ui/SplashScreen'

import Home from './pages/Home'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Admissions from './pages/Admissions'
import Locations from './pages/Locations'
import Blog from './pages/Blog'
import Alumni from './pages/Alumni'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeout = window.setTimeout(() => setShowSplash(false), reducedMotion ? 120 : 820)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <EnquiryModalProvider>
      <SplashScreen visible={showSplash} />
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
    </EnquiryModalProvider>
  )
}
