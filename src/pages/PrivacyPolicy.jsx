import { Box, Link, Paper, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import siteConfig from '../data/siteConfig'

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero crumb="Privacy Policy" title="Privacy Policy" />
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Paper sx={{ p: { xs: 3, sm: 4.5 }, borderRadius: 5, boxShadow: 2 }}>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              {siteConfig.brandName} {siteConfig.brandSuffix} respects the privacy of parents, students and visitors.
              This website may collect personal information that you choose to submit through enquiry, contact or
              admission-related forms.
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '1.2rem', fontWeight: 700 }}>Information We Collect</Typography>
            <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Information may include parent and student names, contact details, preferred campus, class enquiry
              details, and any message you voluntarily provide while contacting the school.
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '1.2rem', fontWeight: 700 }}>How We Use Your Information</Typography>
            <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Submitted information is used to respond to enquiries, support admissions communication, share relevant
              school information, and improve the quality of parent communication and website experience.
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '1.2rem', fontWeight: 700 }}>Information Sharing</Typography>
            <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              The school does not sell personal information. Data may be handled only by authorised school personnel
              or service providers supporting essential communication, administration or website operation.
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '1.2rem', fontWeight: 700 }}>Contact</Typography>
            <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Questions about this policy can be sent to{' '}
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
