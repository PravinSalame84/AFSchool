import { Box } from '@mui/material'
import TopBar from './TopBar'
import Navbar from './Navbar'

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar + 20,
      }}
    >
      <TopBar />
      <Navbar />
    </Box>
  )
}
