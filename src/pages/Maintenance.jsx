import Seo from '../components/ui/Seo'
import StatusScreen from '../components/ui/StatusScreen'
import siteConfig from '../data/siteConfig'

export default function Maintenance({ title, message, updatedAt }) {
  return (
    <>
      <Seo title="Maintenance" description="The school website is temporarily under maintenance." path="/maintenance" />
      <StatusScreen
        badge="Under Maintenance"
        code="503"
        title={title || 'The website is being updated right now.'}
        message={
          message ||
          'We are refreshing content, notices or school information. Please check back shortly for the updated page.'
        }
        icon="maintenance"
        primaryAction={{ label: 'Open Maintenance Page', to: '/maintenance', variant: 'dark' }}
        secondaryAction={{
          label: 'Email School Office',
          href: `mailto:${siteConfig.contact.email}`,
          variant: 'outline',
        }}
        note={updatedAt ? `Latest maintenance update: ${updatedAt}` : 'Live notices and downloads will reappear automatically after maintenance mode is switched off.'}
      />
    </>
  )
}
