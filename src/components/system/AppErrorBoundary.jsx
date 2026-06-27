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
          title="The page hit an unexpected issue."
          message="The website is safe, but this view could not be loaded right now. Please refresh once or return to the homepage."
          icon="error"
          primaryAction={{ label: 'Go To Homepage', to: '/', variant: 'dark' }}
          secondaryAction={{
            label: 'Refresh Page',
            onClick: () => window.location.reload(),
            variant: 'outline',
          }}
          note="If the issue continues, keep using the homepage or contact the school office while we restore the page."
        />
      )
    }

    return this.props.children
  }
}
