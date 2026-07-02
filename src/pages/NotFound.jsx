import Seo from '../components/ui/Seo'
import StatusScreen from '../components/ui/StatusScreen'
import { useLocale } from '../context/LocaleContext'

export default function NotFound() {
  const { t } = useLocale()

  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <StatusScreen
        badge={t('Page Not Found')}
        code="404"
        title={t('This page is not on the current flight path.')}
        message={t('The link may have changed, the page may have moved, or the information is not published yet.')}
        icon="notFound"
        primaryAction={{ label: t('Back To Home'), to: '/', variant: 'dark' }}
        secondaryAction={{ label: t('Open Notice Board'), to: '/notice-board', variant: 'outline' }}
        note={t('If you expected a notice, result, timetable or PDF here, please check the latest updates section or contact the school office.')}
      />
    </>
  )
}
