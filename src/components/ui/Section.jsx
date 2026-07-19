import { Box } from '@mui/material'
import { SECTION_BACKGROUNDS } from '../../constants/brand'
import Container from './Container'

export default function Section({
  children,
  id,
  background = 'base',
  disableContainer = false,
  containerMaxWidth = 'xl',
  containerSx,
  sx,
  ...rest
}) {
  const resolvedBackground = SECTION_BACKGROUNDS[background] || background

  const content = disableContainer ? (
    children
  ) : (
    <Container maxWidth={containerMaxWidth} sx={{ px: { xs: 2, sm: 3, lg: 4 }, ...containerSx }}>
      {children}
    </Container>
  )

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: resolvedBackground,
        ...sx,
      }}
      {...rest}
    >
      {content}
    </Box>
  )
}
