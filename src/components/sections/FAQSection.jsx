import { Box } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import RevealOnScroll from '../ui/RevealOnScroll'
import faqs from '../../data/faqs'

export default function FAQSection() {
  return (
    <Box component="section" id="faqs" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#e8f1f6' }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Have Questions?"
            title="Frequently Asked Questions"
            align="center"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={100} sx={{ mt: 5 }}>
          <Accordion items={faqs} />
        </RevealOnScroll>
      </Container>
    </Box>
  )
}
