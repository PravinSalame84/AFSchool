import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Container from './Container'

export default function PageLoader() {
  return (
    <Box sx={{ minHeight: '50vh', px: { xs: 2, sm: 3, lg: 4 }, py: 12 }}>
      <Container>
        <Stack spacing={3}>
          <Skeleton variant="rounded" width={160} height={20} sx={{ borderRadius: 999 }} />
          <Skeleton variant="rounded" width="100%" height={80} sx={{ maxWidth: '48rem', borderRadius: '2rem' }} />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
            }}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} variant="rounded" height={256} sx={{ borderRadius: '2rem' }} />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
