import Seo from '../components/ui/Seo'
import StatusScreen from '../components/ui/StatusScreen'
import siteConfig from '../data/siteConfig'
import { useLocale } from '../context/LocaleContext'

export default function Maintenance({ title, message, updatedAt }) {
  const { t } = useLocale()

  return (
    <>
      <Seo title="Maintenance" description="The school website is temporarily under maintenance." path="/maintenance" />
      <StatusScreen
        badge="Under Maintenance"
        code="503"
        title={title || t('The website is being updated right now.')}
        message={
          message ||
          t('We are refreshing content, notices or school information. Please check back shortly for the updated page.')
        }
        icon="maintenance"
        primaryAction={{ label: t('Open Maintenance Page'), to: '/maintenance', variant: 'dark' }}
        secondaryAction={{
          label: t('Email School Office'),
          href: `mailto:${siteConfig.contact.email}`,
          variant: 'outline',
        }}
        note={updatedAt ? `${t('Latest maintenance update:')} ${updatedAt}` : t('Live notices and downloads will reappear automatically after maintenance mode is switched off.')}
      />
    </>
  )
}
