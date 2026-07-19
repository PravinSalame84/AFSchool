import { Box, Chip, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Search } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Button from '../components/ui/Button'
import locations, { states } from '../data/locations'
import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function Locations() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const activeState = params.get('state') || 'All'
  const { openEnquiry } = useEnquiryModal()

  const filteredStates = activeState === 'All' ? states : [activeState]

  const campuses = useMemo(() => {
    const list = []
    filteredStates.forEach((state) => {
      Object.entries(locations[state] || {}).forEach(([city, schools]) => {
        schools.forEach((school) => list.push({ state, city, school }))
      })
    })
    if (!query.trim()) return list
    const q = query.toLowerCase()
    return list.filter(
      (c) => c.school.toLowerCase().includes(q) || c.city.toLowerCase().includes(q) || c.state.toLowerCase().includes(q),
    )
  }, [filteredStates, query])

  return (
    <>
      <PageHero
        crumb="Locations"
        eyebrow="Find a Campus"
        title="Airforce School Campuses Near You"
        subtitle="142 campuses across 8 states and counting — find the one closest to you."
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <RevealOnScroll>
            <Stack spacing={2.5}>
              <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by campus, city or state"
                sx={{ maxWidth: 380, '& .MuiOutlinedInput-root': { borderRadius: '999px', bgcolor: '#fff' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search size={16} />
                    </InputAdornment>
                  ),
                }}
              />

              <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1}>
                <Chip
                  label="All States"
                  clickable
                  onClick={() => setParams({})}
                  sx={{
                    bgcolor: activeState === 'All' ? 'primary.main' : '#fff',
                    color: activeState === 'All' ? '#fff' : 'primary.light',
                    fontWeight: 700,
                  }}
                />
                {states.map((state) => (
                  <Chip
                    key={state}
                    label={state}
                    clickable
                    onClick={() => setParams({ state })}
                    sx={{
                      bgcolor: activeState === state ? 'primary.main' : '#fff',
                      color: activeState === state ? '#fff' : 'primary.light',
                      fontWeight: 700,
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </RevealOnScroll>

          <Box sx={{ mt: 5, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {campuses.map((c, i) => (
              <RevealOnScroll key={`${c.school}-${i}`} delay={(i % 6) * 70}>
                <Paper sx={{ display: 'flex', height: '100%', flexDirection: 'column', p: 3, borderRadius: 4, boxShadow: 2 }}>
                  <Box sx={{ display: 'inline-flex', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: '#d7eff6', color: 'primary.light' }}>
                    <MapPin size={20} />
                  </Box>
                  <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.4 }}>
                    {c.school}
                  </Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {c.city}, {c.state}
                  </Typography>
                  <Box
                    component="button"
                    onClick={() => openEnquiry('Campus Enquiry')}
                    sx={{ mt: 2, border: 0, background: 'transparent', p: 0, textAlign: 'left', color: 'secondary.dark', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer' }}
                  >
                    Enquire about this campus →
                  </Box>
                </Paper>
              </RevealOnScroll>
            ))}

            {campuses.length === 0 && (
              <Typography sx={{ gridColumn: '1 / -1', py: 8, textAlign: 'center', color: 'text.secondary', fontSize: '0.9rem' }}>
                No campuses match your search. Try a different city or state.
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" onClick={() => openEnquiry('General Enquiry')}>
              Can't find a campus near you? Ask us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
