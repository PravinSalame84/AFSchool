import { Box } from '@mui/material'
import TopBar from './TopBar'
import Navbar from './Navbar'

export default function Header() {
  return (
    <Box component="header" sx={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <TopBar />
      <Navbar />
    </Box>
  )
}
