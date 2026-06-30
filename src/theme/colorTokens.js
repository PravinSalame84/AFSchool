export const brandColors = {
  white: '#FFFFFF',
  black: '#000000',
  ink: '#161E25',
  inkStrong: '#202C36',
  inkSoft: '#111A24',
  navy: '#1D213C',
  navyAlt: '#0B1F3A',
  navyNight: '#0F172A',
  navyDeep: '#111426',
  navyPage: '#0B1320',
  navyPaper: '#111C2B',
  navyBlue: '#123A63',
  slate: '#344656',
  slateDeep: '#2A3946',
  slateMuted: '#455468',
  slateSoft: '#526F86',
  slateInfo: '#5D8AA8',
  skyBase: '#BAE2EE',
  sky: '#D7EFF6',
  skySoft: '#E4F6FB',
  skyPale: '#FAFDFF',
  skyMid: '#A8C5D7',
  skyBright: '#F7FBFF',
  skyText: '#BED1E2',
  skyMist: '#C8D4DE',
  cyan: '#00D4FA',
  cyanAlt: '#4DD0E1',
  cyanSoft: '#81D4FA',
  gold: '#FFD707',
  goldDeep: '#E7AB33',
  amber: '#F0934B',
  amberDeep: '#D97A2E',
  amberSoft: '#FBC998',
  saffron: '#F57C00',
  orange: '#FF671F',
  orangeSoft: '#FFB74D',
  success: '#046A38',
  successSoft: '#A9D1B2',
  green: '#2E7D32',
  blue: '#1565C0',
  purple: '#8E24AA',
  earth: '#8A6742',
  red: '#DC2626',
  whatsapp: '#25D366',
  whatsappDeep: '#1EBE5D',
}

export const socialColors = {
  facebook: '#1877F2',
  instagram: '#E1306C',
  x: '#111827',
  youtube: '#FF0000',
  linkedin: '#0A66C2',
}

export const gradientTokens = {
  goldBadge: `linear-gradient(90deg, ${brandColors.gold} 0%, ${brandColors.goldDeep} 100%)`,
  goldBadgeVertical: `linear-gradient(180deg, ${brandColors.gold} 0%, ${brandColors.goldDeep} 100%)`,
  navyButton: `linear-gradient(135deg, ${brandColors.navyAlt}, ${brandColors.navyBlue})`,
  navyButtonHover: `linear-gradient(135deg, ${brandColors.navyBlue}, ${brandColors.navyAlt})`,
  announcementBar: `linear-gradient(90deg, ${brandColors.navyBlue}, ${brandColors.navy}, ${brandColors.slate})`,
  downloadGold: `linear-gradient(135deg, ${brandColors.gold}, ${brandColors.goldDeep})`,
  downloadCyan: `linear-gradient(135deg, ${brandColors.cyanAlt}, ${brandColors.cyanSoft})`,
  downloadOrange: `linear-gradient(135deg, ${brandColors.orange}, ${brandColors.orangeSoft})`,
}

export const blobToneTokens = {
  primary: {
    blobFrom: brandColors.sky,
    blobTo: brandColors.skyMid,
    iconColor: brandColors.amber,
    ringColor: brandColors.ink,
  },
  accent: {
    blobFrom: '#FCE4D0',
    blobTo: '#F6C090',
    iconColor: brandColors.amberDeep,
    ringColor: brandColors.ink,
  },
  success: {
    blobFrom: '#D9EEDC',
    blobTo: brandColors.successSoft,
    iconColor: brandColors.success,
    ringColor: brandColors.amber,
  },
  earth: {
    blobFrom: '#EFE2D4',
    blobTo: '#D5BA9A',
    iconColor: brandColors.earth,
    ringColor: brandColors.slateSoft,
  },
  slate: {
    blobFrom: '#E7EEF3',
    blobTo: '#C0D0DC',
    iconColor: brandColors.slateSoft,
    ringColor: brandColors.amber,
  },
  dark: {
    blobFrom: '#D7DEE6',
    blobTo: '#AFBCC8',
    iconColor: brandColors.slateDeep,
    ringColor: brandColors.success,
  },
}

export const downloadToneTokens = [
  {
    main: brandColors.gold,
    soft: brandColors.goldDeep,
    gradient: gradientTokens.downloadGold,
  },
  {
    main: brandColors.cyanAlt,
    soft: brandColors.cyanSoft,
    gradient: gradientTokens.downloadCyan,
  },
  {
    main: brandColors.orange,
    soft: brandColors.orangeSoft,
    gradient: gradientTokens.downloadOrange,
  },
]

export const studentJourneyColors = [
  brandColors.saffron,
  brandColors.green,
  brandColors.blue,
  brandColors.slateMuted,
  brandColors.navyAlt,
  brandColors.purple,
]

export const activityToneTokens = [
  {
    surface: 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,215,7,0.12), rgba(228,246,251,0.72))',
    surfaceDark: 'linear-gradient(135deg, rgba(14,20,24,0.92), rgba(255,215,7,0.10), rgba(29,33,60,0.92))',
    badge: gradientTokens.goldBadge,
    badgeColor: brandColors.navy,
    icon: brandColors.earth,
  },
  {
    surface: 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(215,239,246,0.86), rgba(0,212,250,0.08))',
    surfaceDark: 'linear-gradient(135deg, rgba(14,20,24,0.92), rgba(29,33,60,0.9), rgba(0,212,250,0.12))',
    badge: `linear-gradient(90deg, ${brandColors.cyan} 0%, ${brandColors.sky} 100%)`,
    badgeColor: brandColors.navy,
    icon: brandColors.slate,
  },
  {
    surface: 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,215,7,0.08), rgba(255,103,31,0.08))',
    surfaceDark: 'linear-gradient(135deg, rgba(14,20,24,0.92), rgba(29,33,60,0.9), rgba(255,103,31,0.12))',
    badge: `linear-gradient(90deg, ${brandColors.orange} 0%, ${brandColors.amber} 100%)`,
    badgeColor: brandColors.white,
    icon: brandColors.orange,
  },
]
