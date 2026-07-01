import { createContext, useContext, useState, useCallback } from 'react'
import Modal from '../components/ui/Modal'
import EnquiryFormFields from '../components/forms/EnquiryFormFields'
import { useLocale } from './LocaleContext'

const EnquiryModalContext = createContext(null)

export function EnquiryModalProvider({ children }) {
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState('General Enquiry')

  const openEnquiry = useCallback((why = 'General Enquiry') => {
    setReason(why)
    setOpen(true)
  }, [])

  const closeEnquiry = useCallback(() => setOpen(false), [])

  return (
    <EnquiryModalContext.Provider value={{ openEnquiry, closeEnquiry }}>
      {children}
      <Modal open={open} onClose={closeEnquiry} title={t(reason)}>
        <EnquiryFormFields context={reason} onSuccess={closeEnquiry} />
      </Modal>
    </EnquiryModalContext.Provider>
  )
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext)
  if (!ctx) throw new Error('useEnquiryModal must be used within EnquiryModalProvider')
  return ctx
}
