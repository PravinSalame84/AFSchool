import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  alpha,
  Box,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { ExternalLink, Search, X } from 'lucide-react'
import schoolContent from '../../data/schoolContent'

function scoreItem(item, query) {
  const q = query.toLowerCase()
  let score = 0

  if (item.label.toLowerCase().startsWith(q)) score += 5
  if (item.label.toLowerCase().includes(q)) score += 3
  if (item.group?.toLowerCase().includes(q)) score += 2
  if (item.description?.toLowerCase().includes(q)) score += 1

  return score
}

export default function SiteSearch({ compact = false }) {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const items = schoolContent.directory

    if (!query.trim()) return items.slice(0, 8)

    return [...items]
      .map((item) => ({ ...item, score: scoreItem(item, query) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
  }, [query])

  useEffect(() => {
    const handler = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((current) => !current)
      }

      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: compact ? 'center' : 'space-between',
          gap: 1,
          minWidth: compact ? 44 : { xs: 132, sm: 156 },
          width: compact ? '100%' : 'auto',
          px: compact ? 1.2 : 1.75,
          py: compact ? 1.2 : 1.1,
          borderRadius: 4,
          cursor: 'pointer',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
          bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha('#fff', 0.92),
          color: 'text.primary',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            borderColor: alpha(theme.palette.secondary.main, 0.28),
          },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Search size={16} />
          {!compact ? (
            <Typography sx={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Search
            </Typography>
          ) : null}
        </Stack>

        {!compact ? (
          <Chip
            label="Ctrl K"
            size="small"
            sx={{
              height: 22,
              fontSize: '0.62rem',
              fontWeight: 800,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              '& .MuiChip-label': { px: 1 },
            }}
          />
        ) : null}
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 4,
            color: 'text.primary',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
            background:
              theme.palette.mode === 'dark'
                ? 'linear-gradient(180deg, rgba(13,22,32,0.98), rgba(32,50,71,0.94))'
                : 'linear-gradient(180deg, rgba(255,255,255,0.99), rgba(239,244,248,0.96))',
            boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
          },
        }}
      >
        <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2, minWidth: 0 }}>
            <TextField
              fullWidth
              autoFocus
              placeholder="Search admissions, notices, downloads, careers..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={18} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 4,
                  bgcolor: theme.palette.mode === 'dark' ? alpha('#fff', 0.06) : alpha('#fff', 0.86),
                },
              }}
            />

            <IconButton onClick={() => setOpen(false)} aria-label="Close search">
              <X size={18} />
            </IconButton>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1.5} sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
              {query.trim() ? `${results.length} matching results` : 'Popular pages and quick-access resources'}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {['Admissions', 'Downloads', 'Notice Board', 'Careers'].map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  onClick={() => setQuery(item)}
                  sx={{
                    cursor: 'pointer',
                    bgcolor: alpha(theme.palette.secondary.main, 0.1),
                    color: 'text.primary',
                  }}
                />
              ))}
            </Stack>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              maxHeight: '60vh',
              overflowY: 'auto',
              border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
              bgcolor: theme.palette.mode === 'dark' ? alpha('#fff', 0.04) : alpha('#fff', 0.72),
            }}
          >
            {results.length ? (
              <List sx={{ py: 1 }}>
                {results.map((item) => (
                  <ListItemButton
                  key={`${item.group}-${item.label}`}
                    component={item.external ? 'a' : Link}
                    to={!item.external ? item.to : undefined}
                    href={item.external ? item.to : undefined}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setOpen(false)}
                    sx={{
                      mx: 1,
                      mb: 0.75,
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: { xs: 'wrap', sm: 'nowrap' },
                      gap: 2,
                      borderRadius: 4,
                      px: 2,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: alpha(theme.palette.secondary.main, 0.08),
                      },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'text.secondary' }}>
                        {item.group}
                      </Typography>
                      <Typography sx={{ mt: 0.5, fontWeight: 800, color: 'text.primary' }}>
                        {item.label}
                      </Typography>
                      {item.description ? (
                        <Typography sx={{ mt: 0.5, fontSize: '0.86rem', lineHeight: 1.6, color: 'text.secondary' }}>
                          {item.description}
                        </Typography>
                      ) : null}
                    </Box>
                    {item.external ? <ExternalLink size={16} /> : null}
                  </ListItemButton>
                ))}
              </List>
            ) : (
              <Box sx={{ px: 3, py: 5, textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 700 }}>No matching pages found</Typography>
                <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: '0.9rem' }}>
                  Try terms like admissions, leadership, calendar or careers.
                </Typography>
              </Box>
            )}
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  )
}
