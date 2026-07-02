/**
 * DYNAMIC CONTENTS
 * ----------------
 * Paste this file into a Google Apps Script project connected to a Google
 * Sheet. Deploy it as a Web App to publish JSON for:
 * - announcement bar
 * - marquee text
 * - notices
 * - events
 * - downloads / PDFs
 * - maintenance mode
 *
 * Expected tabs inside the sheet:
 * 1. site_status
 * 2. announcement_actions
 * 3. marquee
 * 4. notices
 * 5. events
 * 6. downloads
 *
 * Sheet columns are documented in RUNTIME_CONTENT_GUIDE.md.
 */

function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const siteStatus = readSiteStatus(ss)

  const payload = {
    siteStatus,
    announcementBar: {
      message: siteStatus.announcementMessage || 'Latest school updates are published here.',
      actions: readRows(ss, 'announcement_actions'),
    },
    marquee: readSimpleList(ss, 'marquee', 'text'),
    notices: readRows(ss, 'notices'),
    events: readRows(ss, 'events'),
    downloads: readRows(ss, 'downloads'),
  }

  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON)
}

function readSiteStatus(ss) {
  const rows = readRows(ss, 'site_status')
  const current = rows[0] || {}

  return {
    mode: current.mode || 'active',
    title: current.title || 'School Website Available',
    message: current.message || 'The website is currently serving published school content.',
    updatedAt: current.updatedAt || '',
    announcementMessage: current.announcementMessage || '',
  }
}

function readSimpleList(ss, sheetName, columnName) {
  return readRows(ss, sheetName)
    .map((row) => row[columnName])
    .filter(Boolean)
}

function readRows(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName)
  if (!sheet) return []

  const values = sheet.getDataRange().getValues()
  if (!values.length || values.length === 1) return []

  const headers = values[0].map((header) => String(header).trim())

  return values
    .slice(1)
    .map((row) => {
      return headers.reduce((acc, header, index) => {
        acc[header] = normalizeCell(row[index], header)
        return acc
      }, {})
    })
    .filter((row) => {
      if ('isPublished' in row) return String(row.isPublished).toLowerCase() === 'true'
      return true
    })
}

function normalizeCell(value, header) {
  if (value === null || value === undefined) return ''
  if (value instanceof Date) return Utilities.formatDate(value, Session.getScriptTimeZone(), 'dd MMM yyyy')

  const normalized = String(value).trim()

  if (header === 'href') {
    return normalizeDriveUrl(normalized)
  }

  return normalized
}

function normalizeDriveUrl(url) {
  if (!url) return ''

  const directMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (directMatch) {
    return 'https://drive.google.com/uc?export=download&id=' + directMatch[1]
  }

  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (fileMatch) {
    return 'https://drive.google.com/uc?export=download&id=' + fileMatch[1]
  }

  const openMatch = url.match(/\/open\?id=([a-zA-Z0-9_-]+)/)
  if (openMatch) {
    return 'https://drive.google.com/uc?export=download&id=' + openMatch[1]
  }

  return url
}
