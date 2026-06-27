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
    <div className="overflow-hidden rounded-xl2 bg-white shadow-soft divide-y divide-primary-50 dark:divide-white/10 dark:bg-primary-950/80">
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i)
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span className="text-base font-semibold text-primary-900 dark:text-white sm:text-lg">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="px-5 pb-5 text-[15px] leading-relaxed text-primary-500 dark:text-slate-300 sm:px-7">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
