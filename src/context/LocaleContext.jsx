import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLocale, localeOptions, localeStorageKey, localizeValue, translate } from '../i18n/catalog'

export const LocaleContext = createContext(null)

function getInitialLocale() {
  if (typeof window === 'undefined') return defaultLocale

  const storedLocale = window.localStorage.getItem(localeStorageKey)
  if (storedLocale && localeOptions.some((option) => option.code === storedLocale)) {
    return storedLocale
  }

  const browserLocale = window.navigator.language?.slice(0, 2)
  return localeOptions.some((option) => option.code === browserLocale) ? browserLocale : defaultLocale
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(localeStorageKey, locale)
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      locales: localeOptions,
      t: (text) => translate(locale, text),
      localize: (data) => localizeValue(locale, data),
      isRtl: false,
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }

  return context
}
