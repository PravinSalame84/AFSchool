import {
  Alert,
  Box,
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import siteConfig from '../data/siteConfig'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`Privacy policy information for ${siteConfig.brandName}, ${siteConfig.brandSuffix}.`}
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
                This page currently contains placeholder content. Replace it
                with your organization's legally approved Privacy Policy before
                publishing the website.
              </Alert>

              <Box>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Privacy Policy
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  This Privacy Policy explains how {siteConfig.brandName}{' '}
                  {siteConfig.brandSuffix} collects, uses, stores and protects
                  information submitted through this website.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Information We Collect
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  We may collect personal information such as your name, email
                  address, phone number and enquiry details when you submit
                  forms on this website.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  How We Use Your Information
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  Information provided through this website is used only for
                  responding to enquiries, admissions, school communication and
                  improving our services.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Data Security
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  We take reasonable measures to protect personal information
                  from unauthorized access, disclosure or misuse.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Contact Us
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  If you have any questions regarding this Privacy Policy,
                  please contact us at{' '}
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    underline="hover"
                    fontWeight={600}
                  >
                    {siteConfig.contact.email}
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