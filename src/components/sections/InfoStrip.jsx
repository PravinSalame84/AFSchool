import { Box, Container, Grid, Paper, Typography, IconButton, useTheme, alpha } from '@mui/material'
import { useMemo } from 'react'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { Link as RouterLink } from 'react-router-dom'

import { ClipboardList, Wallet, MapPinned, MailQuestion } from 'lucide-react'

export default function InfoStrip() {
  const theme = useTheme()
  const { openEnquiry } = useEnquiryModal()

  const items = useMemo(
    () => [
      { icon: ClipboardList, label: 'Admission Process', to: '/admissions' },
      { icon: Wallet, label: 'Fee Structure', to: '/admissions#fees' },
      { icon: MapPinned, label: 'Locations', to: '/locations' },
      { icon: MailQuestion, label: 'Enquiry Form', action: true },
    ],
    []
  )

  return (
    <Box
      component="section"
      sx={{
        bgcolor: alpha(theme.palette.primary.main, 0.03),
        pb: 1,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            p: { xs: 2, sm: 3 },
            background: theme.palette.background.paper,
            boxShadow: theme.shadows[1],
          }}
        >
          <Grid container spacing={2}>
            {items.map(({ icon: Icon, label, to, action }) => {
              const iconBox = (
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '25%',
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    color: 'primary.main',
                    transition: 'all 0.2s ease',
                    '.MuiBox-root:hover &': {
                      bgcolor: 'primary.main',
                      color: '#fff',
                    },
                  }}
                >
                  <Icon size={18} />
                </Box>
              )

              const content = (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  {iconBox}
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              )

              return (
                <Grid item xs={6} sm={3} key={label}>
                  {action ? (
                    <Box
                      onClick={() => openEnquiry('General Enquiry')}
                      sx={{
                        cursor: 'pointer',
                        p: 1,
                        borderRadius: 4,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: alpha(theme.palette.primary.main, 0.05),
                        },
                      }}
                    >
                      {content}
                    </Box>
                  ) : (
                    <Box
                      component={RouterLink}
                      to={to}
                      sx={{
                        textDecoration: 'none',
                        display: 'block',
                        p: 1,
                        borderRadius: 4,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: alpha(theme.palette.primary.main, 0.05),
                        },
                      }}
                    >
                      {content}
                    </Box>
                  )}
                </Grid>
              )
            })}
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}