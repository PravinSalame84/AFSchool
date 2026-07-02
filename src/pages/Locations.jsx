import {
  useMemo,
  useState } from 'react'
import Grid from '../components/ui/Grid'
import Stack from '../components/ui/Stack'
import { useSearchParams } from 'react-router-dom'

import {
  Box,
  Container,
  Card,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Button,
  alpha,
} from '@mui/material'

import MapPinIcon from '@mui/icons-material/LocationOn'
import SearchIcon from '@mui/icons-material/Search'

import PageHero from '../components/ui/PageHero'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import locations, { states } from '../data/locations'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import { useLocale } from '../context/LocaleContext'

/* ---------------- PAGE ---------------- */
export default function Locations() {
  const { t } = useLocale()
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const { openEnquiry } = useEnquiryModal()

  const activeState = params.get('state') || 'All'

  const filteredStates =
    activeState === 'All' ? states : [activeState]

  /* ---------------- FILTERED DATA ---------------- */
  const campuses = useMemo(() => {
    const list = []

    filteredStates.forEach((state) => {
      Object.entries(locations[state] || {}).forEach(([city, schools]) => {
        schools.forEach((school) =>
          list.push({ state, city, school })
        )
      })
    })

    if (!query.trim()) return list

    const q = query.toLowerCase()

    return list.filter(
      (c) =>
        c.school.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q)
    )
  }, [filteredStates, query])

  /* ---------------- UI ---------------- */
  return (
    <>
      {/* HERO */}
      <PageHero
        crumb="Locations"
        eyebrow="Find a Campus"
        title="Airforce School Campuses Near You"
        subtitle="Multiple campuses across states — find yours easily"
      />

      <Box
        sx={(theme) => ({
          py: 6,
          background:
            theme.palette.mode === 'dark'
              ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.92)} 0%, ${alpha(theme.palette.background.paper, 0.98)} 100%)`
              : 'linear-gradient(180deg, #f5f7fb 0%, #eef6ff 100%)',
        })}
      >
        <Container maxWidth="lg">

          {/* ---------------- FILTER BAR ---------------- */}
          <RevealOnScroll>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              justifyContent="space-between"
              alignItems={{ md: 'center' }}
              mb={4}
            >
              {/* SEARCH */}
              <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('Search campus, city or state')}
                size="small"
                sx={{ width: { xs: '100%', sm: 350 } }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  width: { xs: '100%', sm: 350 },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                  },
                }}
              />

              {/* STATE FILTERS */}
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
              >
                <Chip
                  label={t('All States')}
                  clickable
                  color={
                    activeState === 'All' ? 'primary' : 'default'
                  }
                  onClick={() => setParams({})}
                />

                {states.map((state) => (
                  <Chip
                    key={state}
                    label={state}
                    clickable
                    color={
                      activeState === state
                        ? 'primary'
                        : 'default'
                    }
                    onClick={() => setParams({ state })}
                  />
                ))}
              </Stack>
            </Stack>
          </RevealOnScroll>

          {/* ---------------- GRID ---------------- */}
          <Grid container spacing={3}>
            {campuses.map((c, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <RevealOnScroll delay={(i % 6) * 70}>
                  <Card
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 4,
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    {/* ICON */}
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '25%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.2 : 0.12),
                        color: 'primary.main',
                      }}
                    >
                      <MapPinIcon fontSize="small" />
                    </Box>

                    {/* SCHOOL */}
                    <Typography
                      fontWeight={700}
                      mt={2}
                    >
                      {c.school}
                    </Typography>

                    {/* LOCATION */}
                    <Typography
                      variant="caption"
                      sx={{
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                      }}
                    >
                      {c.city}, {c.state}
                    </Typography>

                    {/* ACTION */}
                    <Typography
                      onClick={() =>
                        openEnquiry('Campus Enquiry')
                      }
                      sx={{
                        mt: 2,
                        fontWeight: 700,
                        color: 'primary.main',
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {t('Enquire about this campus')} →
                    </Typography>
                  </Card>
                </RevealOnScroll>
              </Grid>
            ))}

            {/* EMPTY STATE */}
            {campuses.length === 0 && (
              <Grid item xs={12}>
                <Typography
                  align="center"
                  color="text.secondary"
                  py={6}
                >
                  {t('No campuses match your search.')}
                </Typography>
              </Grid>
            )}
          </Grid>

          {/* ---------------- CTA ---------------- */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() =>
                openEnquiry('General Enquiry')
              }
            >
              {t("Can't find a campus near you? Ask us")}
            </Button>
          </Box>

        </Container>
      </Box>
    </>
  )
}
