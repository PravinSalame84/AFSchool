import {
  Alert,
  Box,
  Container,
  Divider,
  Link,
  Paper,
  Typography,
} from '@mui/material'
import Stack from '../components/ui/Stack'

import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import siteConfig from '../data/siteConfig'
import { useLocale } from '../context/LocaleContext'

export default function PrivacyPolicy() {
  const { localize, t } = useLocale()
  const localizedSiteConfig = localize(siteConfig)

  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`Privacy policy information for ${localizedSiteConfig.brandName}, ${localizedSiteConfig.brandSuffix}.`}
        path="/privacy-policy"
      />

      <PageHero
        crumb="Privacy Policy"
        title="Privacy Policy"
        subtitle="Learn how we collect, use and protect your personal information."
      />

      <Box
        component="section"
        py={{ xs: 6, md: 10 }}
        bgcolor="background.default"
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              border: 1,
              borderColor: 'divider',
              backdropFilter: 'blur(16px)',
            }}
          >
            <Stack spacing={4}>
              <Alert severity="info" variant="outlined">
                {t("This page currently contains placeholder content. Replace it with your organization's legally approved Privacy Policy before publishing the website.")}
              </Alert>

              <Box>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  {t('Privacy Policy')}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  {t('This Privacy Policy explains how')} {localizedSiteConfig.brandName}{' '}
                  {localizedSiteConfig.brandSuffix} {t('collects, uses, stores and protects information submitted through this website.')}
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {t('Information We Collect')}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  {t('We may collect personal information such as your name, email address, phone number and enquiry details when you submit forms on this website.')}
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {t('How We Use Your Information')}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  {t('Information provided through this website is used only for responding to enquiries, admissions, school communication and improving our services.')}
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {t('Data Security')}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  {t('We take reasonable measures to protect personal information from unauthorized access, disclosure or misuse.')}
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {t('Contact Us')}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  {t('If you have any questions regarding this Privacy Policy, please contact us at')}{' '}
                  <Link
                    href={`mailto:${localizedSiteConfig.contact.email}`}
                    underline="hover"
                    fontWeight={600}
                  >
                    {localizedSiteConfig.contact.email}
                  </Link>
                  .
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
