import siteConfig from '../data/siteConfig'

export function getContactEmailRecipients() {
  return siteConfig.contact.emailRecipients || [siteConfig.contact.email].filter(Boolean)
}

export function getContactEmailDisplay() {
  return siteConfig.contact.emailDisplay || getContactEmailRecipients().join(', ')
}

export function getContactMailto() {
  return siteConfig.contact.mailto || `mailto:${getContactEmailRecipients().join(',')}`
}

export function buildMailtoUrl({ subject = '', lines = [] } = {}) {
  const recipients = getContactEmailRecipients()
  const params = new URLSearchParams()

  if (subject) params.set('subject', subject)

  const body = lines.filter(Boolean).join('\n')
  if (body) params.set('body', body)

  const query = params.toString()
  return `mailto:${recipients.join(',')}${query ? `?${query}` : ''}`
}

export async function submitEmailForm({ subject = '', replyTo = '', fields = {}, formName = '' } = {}) {
  const recipients = getContactEmailRecipients()
  const [primaryRecipient, ...ccRecipients] = recipients

  if (!primaryRecipient) {
    throw new Error('No recipient email is configured.')
  }

  const payload = {
    _subject: subject,
    _cc: ccRecipients.join(','),
    _template: 'table',
    ...(replyTo ? { _replyto: replyTo, email: replyTo } : {}),
    ...(formName ? { name: formName } : {}),
    ...fields,
  }

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(primaryRecipient)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Unable to send your message right now.')
  }

  return result
}
