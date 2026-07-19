import { Box, Paper, Typography } from '@mui/material'
import { Compass } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { BRAND_ALPHA, BRAND_NEUTRALS } from '../constants/brand'

export default function NotFound() {
  return (
    <Box component="section" sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', bgcolor: BRAND_NEUTRALS.page, py: 7 }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Paper sx={{ maxWidth: 640, mx: 'auto', p: { xs: 4, sm: 5 }, textAlign: 'center', borderRadius: 1, boxShadow: 2 }}>
          <Box sx={{ display: 'inline-flex', width: 72, height: 72, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: BRAND_ALPHA.accent14, color: 'secondary.main' }}>
            <Compass size={30} />
          </Box>
          <Typography sx={{ mt: 3, color: 'primary.main', fontSize: { xs: '2.4rem', sm: '3rem' }, fontWeight: 800 }}>404</Typography>
          <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
            We couldn't find the page you were looking for.
          </Typography>
          <Button to="/" variant="primary" sx={{ mt: 3.5 }}>
            Back to Home
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}
