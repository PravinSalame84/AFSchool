import {
  Link as RouterLink } from 'react-router-dom'
import Grid from '../ui/Grid'
import Stack from '../ui/Stack'
import { Calendar } from 'lucide-react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  alpha,
} from '@mui/material'
import { brandColors } from '../../theme/colorTokens'

import news from '../../data/news'

export default function LatestNews() {
  const featured = news.slice(0, 3)

  return (
    <Box
      component="section"
      sx={(theme) => ({
        py: { xs: 8, md: 12 },
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.92)} 0%, ${alpha(theme.palette.background.paper, 0.98)} 100%)`
            : 'linear-gradient(180deg, #F5FAFF 0%, #EEF6FF 100%)',
      })}
    >
      <Container maxWidth="lg">
        
        {/* HEADER */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
          spacing={2}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}
            >
              Newsroom
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: 'text.primary', mt: 0.5 }}
            >
              Latest News
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            to="/notice-board"
            variant="outlined"
            sx={{
              borderRadius: 4,
              fontWeight: 700,
              borderColor: (theme) => alpha(theme.palette.primary.main, 0.3),
              color: 'text.primary',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: (theme) => alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.14 : 0.04),
              },
            }}
          >
            View All News
          </Button>
        </Stack>

        {/* GRID */}
        <Grid container spacing={3} sx={{ mt: 5 }}>
          {featured.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              
              <Card
                component={RouterLink}
                to={item.href}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  p: 2,
                  textDecoration: 'none',
                  background: (theme) => alpha(theme.palette.background.paper, theme.palette.mode === 'dark' ? 0.88 : 0.9),
                  backdropFilter: 'blur(12px)',
                  border: (theme) => `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.08)}`,
                  transition: '0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 18px 40px rgba(11, 31, 58, 0.12)',
                  },
                }}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  
                  {/* CATEGORY */}
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      width: 'fit-content',
                      fontWeight: 700,
                      backgroundColor: (theme) => alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.2 : 0.12),
                      color: 'secondary.main',
                    }}
                  />

                  {/* TITLE */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 800,
                      mt: 2,
                      color: 'text.primary',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* EXCERPT */}
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1.5,
                      color: 'text.secondary',
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.excerpt}
                  </Typography>

                  {/* DATE */}
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
                    <Box sx={{ display: 'inline-flex', color: 'text.secondary' }}>
                      <Calendar size={14} />
                    </Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {item.date}
                    </Typography>
                  </Stack>

                </CardContent>
              </Card>

            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
