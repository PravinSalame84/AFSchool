import Seo from '../components/ui/Seo'
import StatusScreen from '../components/ui/StatusScreen'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <StatusScreen
        badge="Page Not Found"
        code="404"
        title="This page is not on the current flight path."
        message="The link may have changed, the page may have moved, or the information is not published yet."
        icon="notFound"
        primaryAction={{ label: 'Back To Home', to: '/', variant: 'dark' }}
        secondaryAction={{ label: 'Open Notice Board', to: '/notice-board', variant: 'outline' }}
        note="If you expected a notice, result, timetable or PDF here, please check the latest updates section or contact the school office."
      />
    </>
  )
}
