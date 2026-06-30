import MuiGrid from '@mui/material/Grid'

function normalizeSx(baseSx, sx) {
  if (Array.isArray(sx)) return [baseSx, ...sx]
  return sx ? [baseSx, sx] : [baseSx]
}

export default function Grid({
  item,
  alignItems,
  justifyContent,
  flexWrap,
  gap,
  rowGap,
  columnGap,
  sx,
  ...rest
}) {
  const layoutSx = {
    ...(alignItems !== undefined && { alignItems }),
    ...(justifyContent !== undefined && { justifyContent }),
    ...(flexWrap !== undefined && { flexWrap }),
    ...(gap !== undefined && { gap }),
    ...(rowGap !== undefined && { rowGap }),
    ...(columnGap !== undefined && { columnGap }),
  }

  return <MuiGrid sx={normalizeSx(layoutSx, sx)} {...rest} />
}
