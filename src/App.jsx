import { Suspense, lazy, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AppErrorBoundary from './components/system/AppErrorBoundary'
import PageLoader from './components/ui/PageLoader'
import SplashScreen from './components/ui/SplashScreen'
import { EnquiryModalProvider } from './context/EnquiryModalContext'
import { RuntimeContentProvider } from './context/RuntimeContentContext'
import { hubIndex } from './data/contentHub'
import Maintenance from './pages/Maintenance'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Leadership = lazy(() => import('./pages/Leadership'))
const Academics = lazy(() => import('./pages/Academics'))
const WhyUs = lazy(() => import('./pages/WhyUs'))
const Admissions = lazy(() => import('./pages/Admissions'))
const NoticeBoard = lazy(() => import('./pages/NoticeBoard'))
const Downloads = lazy(() => import('./pages/Downloads'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const ContentHubPage = lazy(() => import('./pages/ContentHubPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false)
    }, 1900)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AppErrorBoundary>
      <RuntimeContentProvider>
        <EnquiryModalProvider>
          <SplashScreen visible={showSplash} />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/notice-board" element={<NoticeBoard />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/gallery" element={<Gallery />} />
                {hubIndex.map((item) => (
                  <Route key={item.path} path={item.path} element={<ContentHubPage />} />
                ))}
                <Route path="/locations" element={<Navigate to="/contact" replace />} />
                <Route path="/blog" element={<Navigate to="/notice-board" replace />} />
                <Route path="/alumni" element={<Navigate to="/leadership" replace />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </EnquiryModalProvider>
      </RuntimeContentProvider>
    </AppErrorBoundary>
  )
}
