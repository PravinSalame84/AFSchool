import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([0])

  const toggle = (i) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(i)
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== i) : [...prev, i]
      }
      return isOpen ? [] : [i]
    })
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-primary-900/8 bg-gradient-to-br from-white/92 via-white/88 to-skyback-soft/78 shadow-card divide-y divide-primary-100/70 dark:border-white/10 dark:divide-white/10 dark:bg-gradient-to-br dark:from-primary-950/92 dark:via-primary-950/84 dark:to-primary-900/76">
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i)
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className={`focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition sm:px-7 ${
                isOpen ? 'bg-white/30 dark:bg-white/5' : 'hover:bg-white/24 dark:hover:bg-white/4'
              }`}
            >
              <span className="text-base font-semibold leading-relaxed text-primary-900 dark:text-white sm:text-lg">{item.question}</span>
              <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition ${
                isOpen
                  ? 'border-primary-200 bg-primary-900 text-white dark:border-white/20 dark:bg-white dark:text-primary-950'
                  : 'border-primary-100 bg-white/72 text-primary-700 dark:border-white/10 dark:bg-primary-900/70 dark:text-white'
              }`}>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[420px]' : 'max-h-0'
              }`}
            >
              <p className="px-5 pb-6 text-[15px] leading-relaxed text-primary-600 dark:text-slate-300 sm:px-7">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
