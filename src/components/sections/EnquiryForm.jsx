import { Box, Paper } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'
import EnquiryFormFields from '../forms/EnquiryFormFields'
import OptimizedImage from '../ui/OptimizedImage'
import { sharedImages } from '../../assets/images'
import { BRAND_ALPHA, BRAND_NEUTRALS, SECTION_BACKGROUNDS } from '../../constants/brand'

export default function EnquiryForm() {
  return (
    <Box component="section" id="enquiry" sx={{ py: { xs: 6, md: 10 }, bgcolor: SECTION_BACKGROUNDS.soft }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 3fr' }, gap: 6 }}>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Ask your query — we'll get in touch with you soon"
              subtitle="Fill in the form and our admissions team will reach out with campus details, fee structure and seat availability for the grade you're enquiring about."
            />
            <OptimizedImage src={sharedImages.teacherImageOne} alt="About Snapshot" sx={{ width: '100%', borderRadius: 1, boxShadow: 5, mb: 0 }} />
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <Paper sx={{ p: { xs: 3, sm: 4 }, boxShadow: 5 }}>
              <EnquiryFormFields context="General Enquiry" />
            </Paper>
          </RevealOnScroll>
        </Box>
      </Container>
    </Box>
  )
}
