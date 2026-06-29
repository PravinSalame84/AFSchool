import { Box, Container, Grid, Paper, Typography, useTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import EnquiryFormFields from '../forms/EnquiryFormFields'

export default function EnquiryForm() {
  const theme = useTheme()

  return (
    <Box
      id="enquiry"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: alpha(theme.palette.primary.main, 0.03),
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT: Heading */}
          <Grid item xs={12} md={5}>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Get in Touch
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mt: 1.5,
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: theme.palette.text.primary,
                }}
              >
                Start a confident school enquiry with the right details
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: alpha(theme.palette.text.secondary, 0.85),
                  lineHeight: 1.7,
                }}
              >
                Share your interest once and the school team can respond with campus details, admissions guidance,
                fee support and grade availability in a clear, parent-friendly flow.
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT: Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2.5, sm: 4 },
                borderRadius: 4,
                background: theme.palette.background.paper,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              <EnquiryFormFields context="General Enquiry" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
