import {
  Link as RouterLink } from 'react-router-dom'
import Grid from '../components/ui/Grid'
import Stack from '../components/ui/Stack'

import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Chip,
} from '@mui/material'

import {
  Shield,
  ArrowUpward,
  Groups,
  Description,
} from '@mui/icons-material'

import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import { useLocale } from '../context/LocaleContext'

/* ---------------- PAGE ---------------- */
export default function Leadership() {
  const { localize, t } = useLocale()
  const localizedSchoolContent = localize(schoolContent)

  return (
    <>
      {/* SEO */}
      <Seo
        title="Leadership & Governance"
        description="School governance and leadership information."
        path="/leadership"
        image={siteAssets.images.chief}
      />

      {/* HERO */}
      <PageHero
        crumb="Leadership"
        eyebrow="Leadership & Governance"
        title="Institutional transparency and governance access"
        subtitle="Official leadership and governance resources for stakeholders"
        image={siteAssets.images.chief}
      />

      {/* ---------------- MAIN ---------------- */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">

          <Grid container spacing={4}>

            {/* LEFT PANEL */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={2}
                sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 4, height: '100%' }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main',
                    color: 'white',
                  }}
                >
                  <Shield />
                </Box>

                {/* TAG */}
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{ mt: 3, display: 'block' }}
                >
                  {t('Governance Overview')}
                </Typography>

                {/* TITLE */}
                <Typography variant="h4" fontWeight={800} sx={{ mt: 2, fontSize: { xs: '1.7rem', sm: '2.125rem' } }}>
                  {t('Leadership information for parents & stakeholders')}
                </Typography>

                {/* INTRO */}
                <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
                  {localizedSchoolContent.leadership.intro}
                </Typography>

                {/* INFO BOX */}
                <Paper
                  elevation={0}
                  sx={{
                    mt: 4,
                    p: 3,
                    borderRadius: 4,
                    bgcolor: 'primary.main',
                    color: 'white',
                  }}
                >
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    {t('Published Resources')}
                  </Typography>

                  <Stack spacing={1.5} mt={2}>
                    {[
                      'School Management Committee details',
                      'Institutional profile & information',
                      'Staff details & annual reports',
                      'Transfer certificate references',
                    ].map((item) => (
                      <Typography key={item} variant="body2">
                        • {t(item)}
                      </Typography>
                    ))}
                  </Stack>
                </Paper>
              </Paper>
            </Grid>

            {/* RIGHT PANEL */}
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                {localizedSchoolContent.leadership.resources.map((resource, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={index === 0 ? 12 : 6}
                    key={resource.title}
                  >
                    <Paper
                      component={RouterLink}
                      to={resource.to}
                      elevation={2}
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'block',
                        transition: '0.3s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-between"
                        spacing={2}
                        alignItems={{ xs: 'flex-start', sm: 'flex-start' }}
                      >
                        <Box>
                          <Chip
                            label={t('Official Resource')}
                            size="small"
                            sx={{ mb: 1 }}
                          />

                          <Typography variant="h6" fontWeight={800}>
                            {resource.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{ mt: 1, color: 'text.secondary' }}
                          >
                            {resource.description}
                          </Typography>
                        </Box>

                        <ArrowUpward color="action" />
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {/* ---------------- BOTTOM SECTION ---------------- */}
          <Grid container spacing={3} sx={{ mt: 5 }}>

            {/* ADMIN CONTACTS */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                  <Groups color="primary" />
                  <Typography variant="h6" fontWeight={800}>
                    {t('Administrative Contacts')}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  {t('Admin Phone:')}{' '}
                  <strong>{localizedSchoolContent.contact.adminPhone}</strong>
                </Typography>

                <Stack spacing={1.5} mt={2}>
                  {localizedSchoolContent.contact.adminRoles.map((role) => (
                    <Paper
                      key={role}
                      variant="outlined"
                      sx={{ p: 2, borderRadius: 3 }}
                    >
                      <Typography variant="body2">{role}</Typography>
                    </Paper>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            {/* COMPLIANCE */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                  <Description color="primary" />
                  <Typography variant="h6" fontWeight={800}>
                    {t('Compliance & Reporting')}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                  {t('Mandatory disclosures and institutional reports are available for public access.')}
                </Typography>

                <Button
                  component={RouterLink}
                  to="/mandatory-disclosure"
                  variant="contained"
                  endIcon={<ArrowUpward />}
                  sx={{
                    mt: 3,
                    borderRadius: 4,
                    fontWeight: 700,
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  Open Mandatory Disclosure
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
