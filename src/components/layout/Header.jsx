import AnnouncementBar from './AnnouncementBar'
import TopBar from './TopBar'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <TopBar />
      <Navbar />
    </header>
  )
}
