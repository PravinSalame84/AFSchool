import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { EnquiryModalProvider } from './context/EnquiryModalContext'

import Home from './pages/Home'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <EnquiryModalProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/locations" element={<Navigate to="/contact" replace />} />
          <Route path="/blog" element={<Navigate to="/about" replace />} />
          <Route path="/alumni" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </EnquiryModalProvider>
  )
}
