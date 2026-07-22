import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { Box, Link as MuiLink, Stack, Typography } from '@mui/material'
import { useRemoteSiteData } from '../../context/RemoteSiteDataContext'

function MarqueeItems({ items }) {
  return items.map((item, index) => {
    const href = item.href

    return (
      <Stack
        key={`${item.text}-${index}`}
        direction="row"
        spacing={1}
        sx={{
          alignItems: 'center',
          flexShrink: 0,
          px: 2,
        }}
      >
        <CampaignRoundedIcon sx={{ color: 'primary.main', fontSize: 16, flexShrink: 0 }} />
        <MuiLink
          href={href || undefined}
          target={href ? '_blank' : undefined}
          rel={href ? 'noopener noreferrer' : undefined}
          underline="none"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            color: 'primary.main',
            fontSize: '0.86rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            pointerEvents: 'auto',
            '&:hover': {
              color: 'secondary.dark',
            },
          }}
        >
          <span>{item.text}</span>
          {href ? <OpenInNewRoundedIcon sx={{ fontSize: 15 }} /> : null}
        </MuiLink>
      </Stack>
    )
  })
}

export default function MarqueeStrip() {
  const { marqueeItems } = useRemoteSiteData()
  const items = marqueeItems.filter((item) => item.text)

  if (!items.length) {
    return null
  }

  return (
    <Box
      sx={{
        minHeight: 44,
        background: 'linear-gradient(90deg, #f4b13f 0%, #ffd88c 100%)',
        borderBottom: '1px solid rgba(17,26,36,0.08)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          minHeight: 44,
          animation: 'marqueeTicker 28s linear infinite',
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        <MarqueeItems items={items} />
        <MarqueeItems items={items} />
      </Box>
    </Box>
  )
}
