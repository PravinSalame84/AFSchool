import MuiContainer from '@mui/material/Container'

export default function Container({ children, className = '', maxWidth = 'xl' }) {
  return (
    <MuiContainer maxWidth={maxWidth} className={className}>
      {children}
    </MuiContainer>
  )
}
