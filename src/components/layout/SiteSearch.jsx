import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Search, X } from 'lucide-react'
import schoolContent from '../../data/schoolContent'
import Input from '../ui/Input'

export default function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

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
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/60 bg-gradient-to-r from-white/92 to-skyback-soft/80 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-700 shadow-soft backdrop-blur-xl transition hover:from-white hover:to-white dark:border-white/10 dark:bg-gradient-to-r dark:from-primary-950/88 dark:to-primary-900/80 dark:text-white"
      >
        <Search className="h-4 w-4" />
        Search
      </button>

      {open ? (
        <div className="fixed inset-0 z-[110] flex items-start justify-center bg-primary-950/55 p-4 pt-20 backdrop-blur-md">
          <div className="w-full max-w-3xl rounded-[2rem] border border-white/70 bg-gradient-to-br from-white/95 via-white/92 to-skyback-soft/88 p-5 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-primary-950/96 dark:via-primary-950/94 dark:to-primary-900/86">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex-1">
                <Input
                  id="site-search"
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search notices, pages, downloads, parent links..."
                  startAdornment={<Search className="h-4.5 w-4.5 text-primary-300" />}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '999px',
                    },
                  }}
                />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="focus-ring rounded-full p-2 text-primary-500 transition hover:bg-skyback-soft hover:text-primary-900 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] space-y-2 overflow-y-auto pr-1">
              {results.length ? (
                results.map((item) =>
                  item.external ? (
                    <a
                      key={`${item.group}-${item.label}`}
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring flex items-start justify-between rounded-[1.3rem] border border-transparent px-4 py-3 transition hover:border-primary-100 hover:bg-gradient-to-r hover:from-white hover:to-skyback-soft/70 dark:hover:border-white/10 dark:hover:bg-primary-900/80"
                    >
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-400">{item.group}</p>
                        <p className="mt-1 text-sm font-semibold text-primary-900 dark:text-white">{item.label}</p>
                        {item.description ? <p className="mt-1 text-sm text-primary-500 dark:text-slate-300">{item.description}</p> : null}
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 text-primary-300" />
                    </a>
                  ) : (
                    <Link
                      key={`${item.group}-${item.label}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="focus-ring block rounded-[1.3rem] border border-transparent px-4 py-3 transition hover:border-primary-100 hover:bg-gradient-to-r hover:from-white hover:to-skyback-soft/70 dark:hover:border-white/10 dark:hover:bg-primary-900/80"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-400">{item.group}</p>
                      <p className="mt-1 text-sm font-semibold text-primary-900 dark:text-white">{item.label}</p>
                      {item.description ? <p className="mt-1 text-sm text-primary-500 dark:text-slate-300">{item.description}</p> : null}
                    </Link>
                  ),
                )
              ) : (
                <div className="rounded-[1.5rem] bg-slate-50 px-4 py-8 text-center text-sm text-primary-500 dark:bg-primary-900/70 dark:text-slate-300">
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
