import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import BackToTopButton from './BackToTopButton'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <Header />
      <main className="flex-1 text-[color:var(--ink)]">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <BackToTopButton />
    </div>
  )
}
