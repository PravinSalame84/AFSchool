import { useEffect, useMemo, useState } from 'react'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import LinkRoundedIcon from '@mui/icons-material/LinkRounded'
import SyncRoundedIcon from '@mui/icons-material/SyncRounded'
import { Alert, Box, Chip, CircularProgress, Divider, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { downloadCenterTabs, PUBLIC_SHEET_ID } from '../data/downloadCenterConfig'
import { fetchPublicSheetByGid } from '../utils/googleSheets'
import { BRAND_ALPHA, BRAND_NEUTRALS } from '../constants/brand'
import { sharedImages } from '../assets/images'

function isTrue(value) {
  return value === true || String(value).toLowerCase() === 'true'
}

function formatKey(key) {
  return key
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (value) => value.toUpperCase())
}

function RowCard({ row }) {
  const entries = Object.entries(row).filter(([, value]) => value !== '')
  const title = row.title || row.label || row.text || row.Description || row.Particular || 'Public record'
  const excerpt = row.message || row.excerpt || row.Details || row.Formula || row.to || row.href || ''
  const link = row.href || row.to || row['School Website']
  const category = row.category || row.mode || row['Quotation No. '] || row.Cell
  const meta = entries.filter(([key]) => !['title', 'label', 'text', 'message', 'excerpt', 'Details', 'to', 'href', 'School Website'].includes(key))

  return (
    <Paper
      sx={{
        p: 2.4,
        borderRadius: '1.4rem',
        border: '1px solid rgba(17,26,36,0.08)',
        boxShadow: '0 20px 42px -34px rgba(17,26,36,0.22)',
      }}
    >
      <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ alignItems: 'center' }}>
        {category ? <Chip size="small" label={category} color="warning" /> : null}
        {row.updatedAt || row.date ? <Chip size="small" label={row.updatedAt || row.date} variant="outlined" /> : null}
      </Stack>

      <Typography sx={{ mt: 1.4, color: 'primary.main', fontSize: '1.05rem', fontWeight: 700 }}>
        {title}
      </Typography>

      {excerpt ? (
        <Typography sx={{ mt: 1.1, color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.72 }}>
          {excerpt}
        </Typography>
      ) : null}

      {meta.length ? (
        <Box sx={{ mt: 1.4, display: 'grid', gap: 0.7 }}>
          {meta.slice(0, 4).map(([key, value]) => (
            <Typography key={key} sx={{ color: 'text.secondary', fontSize: '0.82rem', lineHeight: 1.6 }}>
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                {formatKey(key)}:
              </Box>{' '}
              {String(value)}
            </Typography>
          ))}
        </Box>
      ) : null}

      {link ? (
        <Button href={String(link)} variant="outline" size="sm" sx={{ mt: 2 }} icon={false}>
          Open Link
        </Button>
      ) : null}
    </Paper>
  )
}

export default function Downloads() {
  const [activeTab, setActiveTab] = useState(downloadCenterTabs[0].key)
  const [datasets, setDatasets] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadTabs() {
      try {
        setLoading(true)
        setError('')
        const results = await Promise.all(
          downloadCenterTabs.map(async (tab) => {
            const data = await fetchPublicSheetByGid(tab.gid)
            return [tab.key, data]
          }),
        )

        if (!ignore) {
          setDatasets(Object.fromEntries(results))
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message || 'Unable to load the public spreadsheet right now.')
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadTabs()

    return () => {
      ignore = true
    }
  }, [])

  const currentTab = downloadCenterTabs.find((tab) => tab.key === activeTab) || downloadCenterTabs[0]
  const currentData = datasets[currentTab.key]
  const visibleRows = useMemo(() => {
    const rows = currentData?.rows || []

    if (rows.some((row) => Object.prototype.hasOwnProperty.call(row, 'isPublished'))) {
      return rows.filter((row) => isTrue(row.isPublished))
    }

    return rows
  }, [currentData])

  return (
    <>
      <PageHero
        eyebrow="Download Centre"
        crumb="Downloads"
        title="Notices, events, results and important downloads in one convenient place"
        subtitle="Parents and students can use this section to view school updates, public notices, event information and available downloads."
        image={sharedImages.teacherImageFour}
      />

      <Section background="soft">
        <RevealOnScroll>
          <Paper
            sx={{
              p: { xs: 2.4, md: 3.2 },
              borderRadius: '1.8rem',
              background: 'linear-gradient(135deg, #10324d 0%, #1d5579 100%)',
              color: BRAND_NEUTRALS.white,
            }}
          >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'space-between' }}>
              <Box>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a8daf8' }}>
                  School Updates
                </Typography>
                <Typography sx={{ mt: 1, fontSize: { xs: '1.4rem', sm: '1.8rem' }, fontWeight: 800 }}>
                  Results, notices and downloadable information are updated here for easy access
                </Typography>
                <Typography sx={{ mt: 1.1, maxWidth: 800, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
                  Families can quickly access school notices, event details, announcements and downloadable resources from this regularly updated section.
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
                <Button
                  href={`https://docs.google.com/spreadsheets/d/${PUBLIC_SHEET_ID}/edit?gid=0#gid=0`}
                  variant="light"
                  icon={false}
                  sx={{height: 60}}
                >
                  Open Update Sheet
                </Button>
                <Button
                  href={`https://docs.google.com/spreadsheets/d/${PUBLIC_SHEET_ID}/export?format=xlsx`}
                  variant="ghost"
                  icon={false}
                  sx={{height: 60}}
                >
                  Download Excel File
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </RevealOnScroll>

        <RevealOnScroll delay={90}>
          <Paper sx={{ mt: 4, borderRadius: '1.8rem', overflow: 'hidden' }}>
            <Tabs
              value={activeTab}
              onChange={(_, value) => setActiveTab(value)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                px: { xs: 1, sm: 2 },
                bgcolor: BRAND_ALPHA.white72,
                '& .MuiTabs-indicator': {
                  height: 4,
                  borderRadius: 999,
                },
              }}
            >
              {downloadCenterTabs.map((tab) => (
                <Tab key={tab.key} value={tab.key} label={tab.label} />
              ))}
            </Tabs>

            <Box sx={{ p: { xs: 2.2, sm: 3 } }}>
              <Typography sx={{ color: 'primary.main', fontSize: '1.25rem', fontWeight: 700 }}>
                {currentTab.label}
              </Typography>
              <Typography sx={{ mt: 0.8, color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.72 }}>
                {currentTab.description}
              </Typography>

              {loading ? (
                <Stack direction="row" spacing={1.2} sx={{ mt: 3, alignItems: 'center', color: 'primary.main' }}>
                  <CircularProgress size={22} />
                  <Typography>Loading the latest school information...</Typography>
                </Stack>
              ) : null}

              {error ? (
                <Alert severity="warning" sx={{ mt: 3 }}>
                  {error}
                </Alert>
              ) : null}

              {!loading && !error ? (
                <>
                  <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mt: 2.5 }}>
                    <Chip icon={<SyncRoundedIcon />} label={`${visibleRows.length} current entries`} color="primary" />
                    <Chip icon={<DownloadRoundedIcon />} label={`${currentData?.columns?.length || 0} information fields`} variant="outlined" />
                    <Chip icon={<LinkRoundedIcon />} label="Accessible for all visitors" variant="outlined" />
                  </Stack>

                  <Divider sx={{ my: 2.5 }} />

                  {visibleRows.length ? (
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: 2 }}>
                      {visibleRows.map((row, index) => (
                        <RowCard key={`${currentTab.key}-${index}`} row={row} />
                      ))}
                    </Box>
                  ) : (
                    <Typography sx={{ color: 'text.secondary' }}>
                      No information is available in this section at the moment.
                    </Typography>
                  )}
                </>
              ) : null}
            </Box>
          </Paper>
        </RevealOnScroll>
      </Section>
    </>
  )
}
