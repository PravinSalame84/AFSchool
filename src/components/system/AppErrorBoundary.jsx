import React from 'react'
import StatusScreen from '../ui/StatusScreen'

export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    // Keep the error available in the console for debugging while showing a
    // branded fallback screen to website visitors.
    console.error('Application runtime error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <StatusScreen
          badge="Application Error"
          code="500"
          title={t("The page hit an unexpected issue.")}
          message={t("The website is safe, but this view could not be loaded right now. Please refresh once or return to the homepage.")}
          icon="error"
          primaryAction={{ label: t('Go To Homepage'), to: '/', variant: 'dark' }}
          secondaryAction={{
            label: t('Refresh Page'),
            onClick: () => window.location.reload(),
            variant: 'outline',
          }}
          note={t("If the issue continues, keep using the homepage or contact the school office while we restore the page.")}
        />
      )
    }

    return this.props.children
  }
}
