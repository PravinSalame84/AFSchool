import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Search, X } from 'lucide-react'
import schoolContent from '../../data/schoolContent'
import Input from '../ui/Input'

export default function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const resultItemClass =
    'focus-ring group rounded-[1.3rem] border border-transparent bg-white/90 px-4 py-3 transition hover:border-primary-100 hover:bg-gradient-to-r hover:from-airforce-saffron/12 hover:via-skyback-soft hover:to-airforce-gold/10 hover:shadow-soft dark:bg-primary-950/34 dark:hover:border-white/10 dark:hover:bg-gradient-to-r dark:hover:from-secondary dark:hover:via-primary-800/95 dark:hover:to-airforce-brown/90'

  const results = useMemo(() => {
    const items = schoolContent.directory
    if (!query.trim()) return items.slice(0, 8)
    const needle = query.toLowerCase()
    return items.filter((item) =>
      [item.label, item.group, item.description].filter(Boolean).some((field) => field.toLowerCase().includes(needle)),
    )
  }, [query])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen(false)
      }
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search the website"
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary-900/10 bg-gradient-to-r from-white/96 via-surface-soft to-skyback-soft/88 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-airforce-brown shadow-soft backdrop-blur-xl transition hover:border-airforce-gold/34 hover:bg-gradient-to-r hover:from-airforce-gold/24 hover:via-airforce-honey/16 hover:to-airforce-gold/24 hover:text-airforce-brown dark:border-white/10 dark:bg-gradient-to-r dark:from-primary-950/96 dark:via-secondary dark:to-primary-900/90 dark:text-airforce-honey dark:hover:border-airforce-gold/30 dark:hover:bg-gradient-to-r dark:hover:from-airforce-gold/28 dark:hover:via-airforce-honey/18 dark:hover:to-airforce-gold/26 dark:hover:text-airforce-brown"
      >
        <Search className="h-4 w-4" />
        Search
      </button>

      {open ? (
        <div className="fixed inset-0 z-[110] flex items-start justify-center bg-primary-950/72 p-4 pt-20 backdrop-blur-lg">
          <div className="w-full max-w-3xl rounded-[2rem] border border-primary-900/8 bg-white p-5 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-primary-950 dark:via-secondary dark:to-primary-900/96">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex-1">
                <Input
                  id="site-search"
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search notices, pages, downloads, parent links..."
                  startAdornment={<Search className="h-4.5 w-4.5 text-primary-300" />}
                  sx={(theme) => ({
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '999px',
                      background:
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, rgba(14,20,30,0.98), rgba(29,33,60,0.92))'
                          : 'linear-gradient(135deg, rgba(246,248,251,0.98), rgba(227,239,246,0.9))',
                    },
                    '& .MuiOutlinedInput-input': {
                      color: theme.palette.mode === 'dark' ? '#f7fbff' : '#202c36',
                    },
                    '& .MuiOutlinedInput-input::placeholder': {
                      color: theme.palette.mode === 'dark' ? 'rgba(215,239,246,0.72)' : 'rgba(69, 84, 104, 0.88)',
                      opacity: 1,
                    },
                  })}
                />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="focus-ring rounded-full p-2 text-primary-500 transition hover:bg-skyback-soft hover:text-primary-900 dark:text-skyback-light/76 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] space-y-2 overflow-y-auto rounded-[1.6rem] border border-primary-900/8 bg-slate-50/96 p-2 pr-3 dark:border-white/10 dark:bg-primary-950/40">
              {results.length ? (
                results.map((item) =>
                  item.external ? (
                    <a
                      key={`${item.group}-${item.label}`}
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${resultItemClass} flex items-start justify-between`}
                    >
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-airforce-brown/76 transition group-hover:text-airforce-brown dark:text-airforce-honey/82 dark:group-hover:text-airforce-brown">
                          {item.group}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-airforce-brown transition group-hover:text-airforce-brown dark:text-airforce-honey dark:group-hover:text-airforce-brown">
                          {item.label}
                        </p>
                        {item.description ? (
                          <p className="mt-1 text-sm text-airforce-brown/76 transition group-hover:text-airforce-brown dark:text-airforce-honey/76 dark:group-hover:text-airforce-brown">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 text-airforce-brown/76 transition group-hover:text-airforce-brown dark:text-airforce-honey dark:group-hover:text-airforce-brown" />
                    </a>
                  ) : (
                    <Link
                      key={`${item.group}-${item.label}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`${resultItemClass} block`}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-airforce-brown/76 transition group-hover:text-airforce-brown dark:text-airforce-honey/82 dark:group-hover:text-airforce-brown">
                        {item.group}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-airforce-brown transition group-hover:text-airforce-brown dark:text-airforce-honey dark:group-hover:text-airforce-brown">
                        {item.label}
                      </p>
                      {item.description ? (
                        <p className="mt-1 text-sm text-airforce-brown/76 transition group-hover:text-airforce-brown dark:text-airforce-honey/76 dark:group-hover:text-airforce-brown">
                          {item.description}
                        </p>
                      ) : null}
                    </Link>
                  ),
                )
              ) : (
                <div className="rounded-[1.5rem] bg-slate-50 px-4 py-8 text-center text-sm text-primary-500 dark:bg-primary-900/70 dark:text-skyback-light/76">
                  No results found. Try searching for admissions, gallery, disclosures or parent corner.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
