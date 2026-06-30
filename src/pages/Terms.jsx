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

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description={`Terms and website usage information for ${siteConfig.brandName}, ${siteConfig.brandSuffix}.`}
        path="/terms"
      />

      <PageHero
        crumb="Terms & Conditions"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using this website."
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
              <Alert severity="warning" variant="outlined">
                This page currently contains placeholder Terms & Conditions.
                Replace this content with your organization's legally approved
                terms before publishing the website.
              </Alert>

              <Box>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Terms & Conditions
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  By accessing or using the {siteConfig.brandName}{' '}
                  {siteConfig.brandSuffix} website, you agree to comply with
                  these Terms & Conditions. If you do not agree, please refrain
                  from using this website.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Use of This Website
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  The content provided on this website is intended for general
                  information about the school, admissions, academic programs,
                  and related services. Unauthorized copying, distribution or
                  misuse of any content is prohibited.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Admissions & Fees
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  Admission decisions, fee structures and school policies are
                  governed by the official regulations published by the school.
                  Information available on this website should be read together
                  with official admission notifications and circulars.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Intellectual Property
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  All website content, including text, images, graphics, logos,
                  and downloadable materials, remains the property of the school
                  unless otherwise stated. Reproduction without permission is
                  prohibited.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Limitation of Liability
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  While reasonable efforts are made to keep information accurate
                  and up to date, the school does not guarantee that all
                  information is free from errors or omissions and reserves the
                  right to update website content at any time.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Contact Us
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9}>
                  If you have any questions regarding these Terms & Conditions,
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