import { Box, Link, Paper, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import siteConfig from '../data/siteConfig'

export default function Terms() {
  return (
    <>
      <PageHero crumb="Terms & Conditions" title="Terms & Conditions" />
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Paper sx={{ p: { xs: 3, sm: 4.5 }, borderRadius: 5, boxShadow: 2 }}>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              By accessing this website, you agree to use it for lawful and informational purposes only. Content is
              provided to help families understand the school, facilities, admissions communication and contact
              channels.
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '1.2rem', fontWeight: 700 }}>Use of This Website</Typography>
            <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Users should not misuse the website, attempt unauthorised access, or submit false or misleading
              information through forms. The school may update website content, structure or availability at any time.
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '1.2rem', fontWeight: 700 }}>Admissions Information</Typography>
            <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Admissions details shared on this website are intended as general guidance. Final eligibility,
              availability, documentation and fee requirements are subject to direct confirmation from the school
              office.
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '1.2rem', fontWeight: 700 }}>Intellectual Property</Typography>
            <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Website design, branding, images and published content remain the property of the school or their
              respective owners unless otherwise stated, and should not be reproduced without permission.
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '1.2rem', fontWeight: 700 }}>Contact</Typography>
            <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Questions about these terms can be sent to{' '}
              <Link href={`mailto:${siteConfig.contact.email}`} underline="hover" sx={{ fontWeight: 700, color: 'secondary.dark' }}>
                {siteConfig.contact.email}
              </Link>.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
