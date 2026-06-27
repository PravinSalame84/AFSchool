import schoolContent from './schoolContent'

const runtimeContentFallback = {
  siteStatus: {
    mode: 'active',
    title: 'School Website Available',
    message: 'The website is currently serving local school content.',
    updatedAt: '',
  },
  announcementBar: schoolContent.announcementBar,
  marquee: schoolContent.marquee,
  notices: schoolContent.notices,
  events: schoolContent.events,
  downloads: schoolContent.downloads,
}

export default runtimeContentFallback
