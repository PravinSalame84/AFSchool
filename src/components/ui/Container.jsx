import { Container as MuiContainer } from '@mui/material'

export default function Container({ children, sx, maxWidth = 'xl', className = '', ...rest }) {
  return (
    <MuiContainer maxWidth={maxWidth} sx={sx} className={className} {...rest}>
      {children}
    </MuiContainer>
  )
}
