import { Mail, MapPinned, Phone, ShieldCheck } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import Container from '../ui/Container'
import ActionPill from '../ui/ActionPill'

export default function TopBar() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <div className="hidden border-b border-white/40 bg-gradient-to-r from-white/80 via-skyback-soft/70 to-white/80 backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-r dark:from-primary-950/82 dark:via-primary-900/72 dark:to-primary-950/82 lg:block mt-2">
      <Container className="flex items-center justify-between px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-700 dark:text-slate-200 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <ActionPill href={`tel:${siteConfig.contact.phone}`} icon={Phone} variant="topbarText" className="text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-700 dark:text-slate-200">
            {siteConfig.contact.phone}
          </ActionPill>
          <ActionPill href={`mailto:${siteConfig.contact.email}`} icon={Mail} variant="topbarText" className="text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-700 dark:text-slate-200">
            {siteConfig.contact.email}
          </ActionPill>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" /> {schoolContent.contact.affiliation}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ActionPill href={schoolContent.contact.mapLink} icon={MapPinned} variant="topbarText" className="text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-700 dark:text-slate-200">
            Visit Campus
          </ActionPill>
          <ActionPill onClick={() => openEnquiry('School Details Request')} variant="topbarSolid">
            {siteConfig.cta.brochure}
          </ActionPill>
        </div>
      </Container>
    </div>
  )
}
