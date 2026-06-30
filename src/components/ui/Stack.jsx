import MuiStack from '@mui/material/Stack'

function normalizeSx(baseSx, sx) {
  if (Array.isArray(sx)) return [baseSx, ...sx]
  return sx ? [baseSx, sx] : [baseSx]
}

export default function Stack({
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

  return <MuiStack sx={normalizeSx(layoutSx, sx)} {...rest} />
}
