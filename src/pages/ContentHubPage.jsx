import {
  useLocation,
  Link as RouterLink } from 'react-router-dom'
import Grid from '../components/ui/Grid'
import Stack from '../components/ui/Stack'

import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Link,
  Divider,
} from '@mui/material'

import {
  ArrowOutward,
  Download,
  Description,
} from '@mui/icons-material'

import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import { findHubPageByPath } from '../data/contentHub'
import { useLocale } from '../context/LocaleContext'

/* ---------------- PAGE ---------------- */
export default function ContentHubPage() {
  const location = useLocation()
  const { localize, t } = useLocale()
  const page = findHubPageByPath(location.pathname)
  const localizedPage = page ? localize(page) : null

  if (!localizedPage) return null

  return (
    <>
      {/* SEO */}
      <Seo
        title={page.title}
        description={localizedPage.description}
        path={localizedPage.path}
        image={localizedPage.image}
      />

      {/* HERO */}
      <PageHero
        crumb={localizedPage.category}
        eyebrow={localizedPage.category}
        title={localizedPage.title}
        subtitle={localizedPage.description}
        image={localizedPage.image}
      />

      {/* ---------------- MAIN ---------------- */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">

          <Grid container spacing={4}>

            {/* LEFT PANEL */}
            <Grid item xs={12} md={5}>

              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2.5, sm: 4 },
                  borderRadius: 4,
                  height: '100%',
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    bgcolor: 'primary.main',
                    color: 'white',
                  }}
                >
                  <Description />
                </Box>

                {/* CATEGORY */}
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    mt: 3,
                    fontWeight: 700,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    color: 'primary.main',
                  }}
                >
                  {localizedPage.category}
                </Typography>

                {/* TITLE */}
                <Typography
                  variant="h4"
                  fontWeight={800}
                  sx={{ mt: 2, lineHeight: 1.1, fontSize: { xs: '1.7rem', sm: '2.125rem' } }}
                >
                  {t('Local school content without external dependency')}
                </Typography>

                {/* DESCRIPTION */}
                <Typography variant="body1" sx={{ mt: 3, color: 'text.secondary' }}>
                  {localizedPage.description}
                </Typography>

                {/* HIGHLIGHTS */}
                {localizedPage.highlights?.length ? (
                  <Grid container spacing={2} sx={{ mt: 3 }}>
                    {localizedPage.highlights.map((item) => (
                      <Grid item xs={12} sm={6} key={item}>
                        <Paper
                          variant="outlined"
                          sx={{
                            p: 2,
                            borderRadius: 4,
                          }}
                        >
                          <Typography variant="body2" fontWeight={600}>
                            {item}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                ) : null}
              </Paper>
            </Grid>

            {/* RIGHT PANEL */}
            <Grid item xs={12} md={7}>

              <Stack spacing={3}>

                {/* SECTIONS */}
                {localizedPage.sections.map((section) => (
                  <Paper
                    key={section.title}
                    elevation={1}
                    sx={{ p: 3, borderRadius: 4 }}
                  >
                    <Typography variant="h6" fontWeight={700}>
                      {section.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.7 }}
                    >
                      {section.body}
                    </Typography>
                  </Paper>
                ))}

                {/* DOWNLOADS */}
                {localizedPage.attachments?.length ? (
                  <Paper sx={{ p: 3, borderRadius: 4 }}>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Download color="primary" />
                      <Typography variant="h6" fontWeight={700}>
                        {t('Downloads')}
                      </Typography>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={1}>
                      {localizedPage.attachments.map((file) => (
                        <Button
                          key={file.label}
                          component="a"
                          href={file.href}
                          target="_blank"
                          endIcon={<ArrowOutward />}
                          variant="outlined"
                          sx={{
                            justifyContent: 'space-between',
                            textTransform: 'none',
                            width: '100%',
                          }}
                        >
                          {file.label}
                        </Button>
                      ))}
                    </Stack>

                  </Paper>
                ) : null}

                {/* CTA */}
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowOutward />}
                  sx={{
                    borderRadius: 4,
                    fontWeight: 700,
                    letterSpacing: 1,
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  {t('Contact School Office')}
                </Button>

              </Stack>

            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
