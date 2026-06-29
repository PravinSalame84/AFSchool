import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  alpha,
} from '@mui/material'

import studentJourney from '../../data/studentJourney'

const colors = ['#F57C00', '#2E7D32', '#1565C0', '#455A64', '#0B1F3A', '#8E24AA']

export default function StudentJourney() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#F5FAFF',
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Typography
          align="center"
          variant="overline"
          sx={{ color: '#F57C00', fontWeight: 800, letterSpacing: 2 }}
        >
          A Glimpse Into Campus Life
        </Typography>

        <Typography
          align="center"
          variant="h4"
          sx={{
            fontWeight: 800,
            mt: 1,
            maxWidth: 800,
            mx: 'auto',
            color: '#0B1F3A',
            lineHeight: 1.2,
            fontSize: { xs: '1.8rem', sm: '2.125rem' },
          }}
        >
          An Air Force School education adapts to become whatever your child needs
        </Typography>

        {/* GRID */}
        <Grid container spacing={3} sx={{ mt: 6 }}>
          {studentJourney.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  p: 1,
                  background: '#ffffff',
                  border: `1px solid ${alpha('#0B1F3A', 0.08)}`,
                  transition: '0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(11, 31, 58, 0.12)',
                  },
                }}
              >
                <CardContent>

                  {/* ICON PLACEHOLDER (BlobIcon replacement style) */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '25%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: alpha(colors[i % colors.length], 0.12),
                      color: colors[i % colors.length],
                      mb: 2,
                      fontSize: 22,
                      fontWeight: 700,
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* TITLE */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: '#0B1F3A',
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1.5,
                      color: alpha('#0B1F3A', 0.7),
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>

                </CardContent>
              </Card>

            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Stack alignItems="center" sx={{ mt: 6 }}>
          <Button
            variant="contained"
            href="/why-us"
            sx={{
              px: { xs: 2.5, sm: 4 },
              py: 1.3,
              fontWeight: 700,
              borderRadius: 4,
              width: { xs: '100%', sm: 'auto' },
              background: 'linear-gradient(135deg, #0B1F3A, #123A63)',
              '&:hover': {
                background: 'linear-gradient(135deg, #123A63, #0B1F3A)',
              },
            }}
          >
            Enter the Student Journey
          </Button>
        </Stack>

      </Container>
    </Box>
  )
}
