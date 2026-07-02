import {
  useMemo,
  useState } from 'react'
import Grid from '../components/ui/Grid'
import Stack from '../components/ui/Stack'
import { Calendar } from 'lucide-react'
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'

import PageHero from '../components/ui/PageHero'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import news from '../data/news'
import { useLocale } from '../context/LocaleContext'

export default function Blog() {
  const { localize, t } = useLocale()
  const localizedNews = localize(news)
  const categories = useMemo(
    () => [t('All'), ...new Set(localizedNews.map((n) => n.category))],
    [localizedNews, t],
  )

  const [active, setActive] = useState(t('All'))

  const filtered =
    active === t('All')
      ? localizedNews
      : localizedNews.filter((item) => item.category === active)

  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="Newsroom & Insights"
        title="Air Force School Blog"
        subtitle="Stories from our campuses, parenting advice and the latest in education research."
      />

      <Box component="section" py={{ xs: 6, md: 10 }}>
        <Container maxWidth="xl">
          <RevealOnScroll>
            <ToggleButtonGroup
              value={active}
              exclusive
              onChange={(_, value) => value && setActive(value)}
              sx={{
                flexWrap: 'wrap',
                gap: 1,
                '& .MuiToggleButton-root': {
                  borderRadius: 4,
                  px: 2.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: 'divider',
                },
              }}
            >
              {categories.map((category) => (
                <ToggleButton
                  key={category}
                  value={category}
                >
                  {category}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </RevealOnScroll>

          <Grid container spacing={4} mt={1}>
            {filtered.map((item, index) => (
              <Grid item key={item.id} xs={12} sm={6} lg={4}>
                <RevealOnScroll delay={(index % 6) * 70}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      border: 1,
                      borderColor: 'divider',
                      transition: 'all .3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: (theme) => theme.shadows[8],
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      <Chip
                        label={item.category}
                        color="primary"
                        size="small"
                        sx={{
                          alignSelf: 'flex-start',
                          fontWeight: 600,
                        }}
                      />

                      <Typography
                        variant="h6"
                        fontWeight={700}
                        mt={2}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        sx={{
                          mt: 2,
                          flexGrow: 1,
                          lineHeight: 1.8,
                        }}
                      >
                        {item.excerpt}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        mt={3}
                        color="text.secondary"
                      >
                        <Calendar size={16} />
                        <Typography variant="body2">
                          {item.date}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </RevealOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}
