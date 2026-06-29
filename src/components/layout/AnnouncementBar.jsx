import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useMemo } from 'react'
import { Box, Container, Stack, Button } from '@mui/material'

import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import useRuntimeContent from '../../hooks/useRuntimeContent'

export default function AnnouncementBar({ compact = false }) {
  const { content } = useRuntimeContent()

  const announcementBar = content.announcementBar ?? schoolContent.announcementBar
  const marqueeItems = content.marquee?.length
    ? content.marquee
    : schoolContent.marquee

  if (!siteConfig.features.announcementBar) return null

  /* ---------------- OPTIMIZED MARQUEE LIST ---------------- */
  const chips = useMemo(() => {
    return [
      announcementBar.message,
      ...marqueeItems,
      announcementBar.message,
    ]
  }, [announcementBar.message, marqueeItems])

  return (
    <Box
      sx={{
        maxHeight: compact ? 0 : 120,
        opacity: compact ? 0 : 1,
        transform: compact ? 'translateY(-14px)' : 'translateY(0)',
        pointerEvents: compact ? 'none' : 'auto',
        transition: 'max-height 320ms ease, opacity 240ms ease, transform 320ms ease',
        borderBottom: '1px solid',
        borderColor: 'rgba(255,255,255,0.2)',
        background: 'linear-gradient(90deg, #1e3a8a, #0f172a, #334155)',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 1.5 }}>

        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          alignItems="center"
          spacing={2}
        >

          {/* ---------------- MARQUEE ---------------- */}
          <Box
            sx={{
              flex: 1,
              overflow: 'hidden',
              whiteSpace: { xs: 'normal', md: 'nowrap' },
              position: 'relative',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                gap: 2,
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                animation: { xs: 'none', md: 'marquee 18s linear infinite' },
                '@keyframes marquee': {
                  '0%': { transform: 'translateX(0%)' },
                  '100%': { transform: 'translateX(-50%)' },
                },
              }}
            >
              {chips.map((item, index) => (
                <Box
                  key={`${item}-${index}`}
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 1.2,
                    whiteSpace: { xs: 'normal', md: 'nowrap' },
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ---------------- ACTION BUTTONS ---------------- */}
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
            sx={{ width: '100%' }}
          >
            {announcementBar.actions.map((action) => (
              <Button
                key={action.label}
                component={Link}
                to={action.to}
                endIcon={<ArrowUpRight fontSize="small" />}
                variant="outlined"
                size="small"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.25)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  borderRadius: 4,
                  px: 2,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245,158,11,0.15)',
                  },
                }}
              >
                {action.label}
              </Button>
            ))}
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}
