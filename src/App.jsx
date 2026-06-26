import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { EnquiryModalProvider } from './context/EnquiryModalContext'

import Home from './pages/Home'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Admissions from './pages/Admissions'
import Locations from './pages/Locations'
import Blog from './pages/Blog'
import Alumni from './pages/Alumni'
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
          <Route path="/locations" element={<Locations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </EnquiryModalProvider>
  )
}
