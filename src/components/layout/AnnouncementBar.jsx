import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useMemo } from 'react'
import { Box, Container, Stack, Button } from '@mui/material'
import { alpha } from '@mui/material/styles'

import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import useRuntimeContent from '../../hooks/useRuntimeContent'
import { brandColors, gradientTokens } from '../../theme/colorTokens'

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
      className="announcement-shell"
      sx={{
        maxHeight: compact ? 0 : { xs: 260, md: 140 },
        opacity: compact ? 0 : 1,
        transform: compact ? 'translateY(-14px)' : 'translateY(0)',
        pointerEvents: compact ? 'none' : 'auto',
        transition: 'max-height 320ms ease, opacity 240ms ease, transform 320ms ease',
        borderBottom: '1px solid',
        borderColor: alpha(brandColors.white, 0.2),
        background: gradientTokens.announcementBar,
        color: brandColors.white,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 1.25, md: 1.5 } }}>

        <Stack className="announcement-content" direction={{ xs: 'column', lg: 'row' }} alignItems="center" spacing={2}>

          {/* ---------------- MARQUEE ---------------- */}
          <Box className="announcement-marquee">
            <Box
              className="announcement-marquee-track"
              sx={{
                flexWrap: { xs: 'wrap', md: 'nowrap' },
              }}
            >
              {chips.map((item, index) => (
                <Box
                  className="announcement-chip"
                  key={`${item}-${index}`}
                  sx={{ whiteSpace: { xs: 'normal', md: 'nowrap' } }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ---------------- ACTION BUTTONS ---------------- */}
          <Stack
            className="announcement-actions"
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
            sx={{
              width: { xs: '100%', lg: 'auto' },
              flexShrink: 0,
            }}
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
                  color: brandColors.white,
                  borderColor: alpha(brandColors.white, 0.25),
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  borderRadius: 4,
                  px: 2,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    borderColor: brandColors.goldDeep,
                    backgroundColor: alpha(brandColors.goldDeep, 0.15),
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
