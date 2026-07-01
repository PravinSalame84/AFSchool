const VISITOR_COUNT_KEY = 'afs-visitor-count-v1'
const RATING_TOTAL_KEY = 'afs-rating-total-v1'
const RATING_COUNT_KEY = 'afs-rating-count-v1'
const REVIEWS_KEY = 'afs-visitor-reviews-v1'
const SESSION_VISITOR_KEY = 'afs-visitor-session-recorded-v1'
const METRICS_EVENT = 'afs-visitor-metrics-updated'

function canUseStorage() {
  return typeof window !== 'undefined' && window.localStorage && window.sessionStorage
}

function readNumber(key) {
  if (!canUseStorage()) return 0
  const value = Number(window.localStorage.getItem(key))
  return Number.isFinite(value) && value > 0 ? value : 0
}

function readReviews() {
  if (!canUseStorage()) return []

  try {
    const parsed = JSON.parse(window.localStorage.getItem(REVIEWS_KEY) || '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function emitMetricsUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(METRICS_EVENT))
  }
}

export function getVisitorMetrics() {
  const visitorCount = readNumber(VISITOR_COUNT_KEY)
  const ratingTotal = readNumber(RATING_TOTAL_KEY)
  const ratingCount = readNumber(RATING_COUNT_KEY)
  const reviews = readReviews()

  return {
    visitorCount,
    ratingCount,
    averageRating: ratingCount > 0 ? ratingTotal / ratingCount : 0,
    reviews,
  }
}

export function initializeVisitorSession() {
  if (!canUseStorage()) return getVisitorMetrics()
  if (!window.sessionStorage.getItem(SESSION_VISITOR_KEY)) {
    const nextVisitorCount = readNumber(VISITOR_COUNT_KEY) + 1
    window.localStorage.setItem(VISITOR_COUNT_KEY, String(nextVisitorCount))
    window.sessionStorage.setItem(SESSION_VISITOR_KEY, 'true')
    emitMetricsUpdate()
  }

  return getVisitorMetrics()
}

export function submitVisitorFeedback({ rating = 0, review = '', name = 'Visitor' }) {
  if (!canUseStorage()) return getVisitorMetrics()
  const safeRating = Number(rating)
  const safeReview = String(review).trim()
  const safeName = String(name).trim() || 'Visitor'

  if ((!Number.isFinite(safeRating) || safeRating <= 0) && !safeReview) {
    return getVisitorMetrics()
  }

  if (Number.isFinite(safeRating) && safeRating > 0) {
    const nextRatingTotal = readNumber(RATING_TOTAL_KEY) + safeRating
    const nextRatingCount = readNumber(RATING_COUNT_KEY) + 1

    window.localStorage.setItem(RATING_TOTAL_KEY, String(nextRatingTotal))
    window.localStorage.setItem(RATING_COUNT_KEY, String(nextRatingCount))
  }

  if (safeReview) {
    const nextReviews = [
      {
        name: safeName,
        rating: Number.isFinite(safeRating) && safeRating > 0 ? safeRating : null,
        review: safeReview,
        createdAt: new Date().toISOString(),
      },
      ...readReviews(),
    ].slice(0, 10)

    window.localStorage.setItem(REVIEWS_KEY, JSON.stringify(nextReviews))
  }

  emitMetricsUpdate()

  return getVisitorMetrics()
}

export { METRICS_EVENT }
