import { PUBLIC_SHEET_ID } from '../data/downloadCenterConfig'

function normalizeCell(cell) {
  if (!cell) return ''
  if (cell.f) return cell.f
  if (cell.v == null) return ''

  if (typeof cell.v === 'string' && cell.v.startsWith('Date(')) {
    const parts = cell.v.slice(5, -1).split(',').map((item) => Number.parseInt(item.trim(), 10))
    const [year, month = 0, day = 1] = parts
    return new Date(year, month, day).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  if (typeof cell.v === 'boolean') return cell.v

  return cell.v
}

function parseGoogleVisualizationResponse(text) {
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')

  if (start === -1 || end === -1) {
    throw new Error('Unable to parse Google Sheet response.')
  }

  const payload = JSON.parse(text.slice(start, end + 1))
  const columns = payload.table?.cols?.map((col, index) => ({
    key: col.label?.trim() || col.id || `column_${index + 1}`,
    type: col.type,
  })) || []

  const rows = (payload.table?.rows || []).map((row) => {
    const result = {}

    columns.forEach((column, index) => {
      result[column.key] = normalizeCell(row.c?.[index])
    })

    return result
  })

  return { columns, rows }
}

export async function fetchPublicSheetByGid(gid) {
  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/${PUBLIC_SHEET_ID}/gviz/tq?gid=${gid}&tqx=out:json&cacheBust=${Date.now()}`,
    {
      cache: 'no-store',
    },
  )

  if (!response.ok) {
    throw new Error(`Failed to load sheet tab ${gid}.`)
  }

  const text = await response.text()
  return parseGoogleVisualizationResponse(text)
}
