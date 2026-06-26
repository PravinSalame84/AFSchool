import { ClipboardList, Wallet, MapPinned, MailQuestion } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { Link } from 'react-router-dom'

const items = [
  { icon: ClipboardList, label: 'Admission Process', to: '/admissions' },
  { icon: Wallet, label: 'Fee Structure', to: '/admissions#fees' },
  { icon: MapPinned, label: 'Locations', to: '/locations' },
  { icon: MailQuestion, label: 'Enquiry Form', action: 'enquiry' },
]

export default function InfoStrip() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <section className="bg-skyback-soft pb-2">
      <Container className="px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-4 rounded-xl2 bg-white p-4 shadow-soft sm:grid-cols-4 sm:p-6">
            {items.map(({ icon: Icon, label, to, action }) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-skyback-soft text-primary-700 transition group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-primary-800">{label}</span>
                </>
              )
              return action ? (
                <button
                  key={label}
                  type="button"
                  onClick={() => openEnquiry('General Enquiry')}
                  className="focus-ring group flex items-center gap-3 rounded-xl p-2 text-left transition hover:bg-skyback-soft"
                >
                  {inner}
                </button>
              ) : (
                <Link
                  key={label}
                  to={to}
                  className="focus-ring group flex items-center gap-3 rounded-xl p-2 transition hover:bg-skyback-soft"
                >
                  {inner}
                </Link>
              )
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}
