import { Box } from '@mui/material'
import iconMap from './iconMap'
import { blobToneTokens } from '../../theme/colorTokens'

const blobPaths = [
  'M82.7,-23.7C94.7,9.6,90.4,52.1,67.3,73.9C44.2,95.7,2.4,96.8,-31.9,82.6C-66.2,68.4,-93.5,38.9,-94.7,7.7C-95.9,-23.5,-71,-56.5,-38.5,-67.6C-6.1,-78.6,33.8,-67.7,82.7,-23.7Z',
  'M77.7,-12.1C92.5,15.5,90.7,53.4,68.4,73.4C46.2,93.4,3.5,95.5,-30.9,79.9C-65.3,64.4,-91.5,31.1,-90.3,-1.6C-89.1,-34.3,-60.5,-65.5,-26.7,-77.1C7.1,-88.6,76.6,-66.7,77.7,-12.1Z',
  'M44.5,-58.3C57.4,-49.3,67.2,-33.6,72.3,-15.7C77.4,2.2,77.8,22.3,68.9,37.6C60,52.9,41.8,63.4,22.1,69.1C2.4,74.8,-18.8,75.7,-37.4,67.7C-56,59.7,-72,42.8,-77.5,22.8C-83,2.8,-78,-20.3,-65.5,-37.4C-53,-54.5,-33,-65.6,-12.1,-68.8C8.8,-72,29.5,-67.3,44.5,-58.3Z',
]

export default function BlobIcon({
  icon,
  tone = 'primary',
  size = 96,
  blobIndex = 0,
}) {
  const Icon = iconMap[icon] || iconMap.Sparkles
  const palette = blobToneTokens[tone] || blobToneTokens.primary
  const path = blobPaths[blobIndex % blobPaths.length]

  const gradId = `blobGrad-${tone}-${blobIndex}`

  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* SVG background blob */}
      <Box component="svg" viewBox="-100 -100 200 200" sx={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.blobFrom} />
            <stop offset="100%" stopColor={palette.blobTo} />
          </linearGradient>
        </defs>
        <path d={path} fill={`url(#${gradId})`} />
      </Box>

      {/* Icon */}
      <Box
        component={Icon}
        sx={{
          color: palette.iconColor,
          position: 'relative',
          zIndex: 1,
          width: size * 0.38,
          height: size * 0.38,
          strokeWidth: 1.75,
        }}
        aria-hidden="true"
      />

      {/* Accent dot */}
      <Box
        sx={{
          position: 'absolute',
          top: -4,
          right: -4,
          width: 10,
          height: 10,
          borderRadius: '25%',
          bgcolor: palette.ringColor,
          zIndex: 2,
        }}
        aria-hidden="true"
      />
    </Box>
  )
}
