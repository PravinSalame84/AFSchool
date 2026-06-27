import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
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
    <div className="overflow-hidden rounded-[2rem] shadow-card">
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i)
        return (
          <MuiAccordion
            key={item.question}
            disableGutters
            expanded={isOpen}
            onChange={() => toggle(i)}
            square={i !== 0 && i !== items.length - 1}
            sx={(theme) => ({
              borderRadius: i === 0 ? '2rem 2rem 0 0' : i === items.length - 1 ? '0 0 2rem 2rem' : 0,
              overflow: 'hidden',
              background:
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(14,20,24,0.92), rgba(29,33,60,0.76))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(228,246,251,0.78))',
              border: `1px solid ${
                theme.palette.mode === 'dark' ? alpha('#ffffff', 0.1) : alpha('#1d213c', 0.08)
              }`,
              boxShadow: 'none',
              '&::before': {
                display: 'none',
              },
              '& + &': {
                borderTop: 'none',
              },
            })}
          >
            <MuiAccordionSummary
              expandIcon={
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                    isOpen
                      ? 'border-primary-200 bg-primary-900 text-white dark:border-white/20 dark:bg-white dark:text-primary-950'
                      : 'border-primary-100 bg-white/72 text-primary-700 dark:border-white/10 dark:bg-primary-900/70 dark:text-white'
                  }`}
                >
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </span>
              }
              sx={{
                px: { xs: 2.5, sm: 3.5 },
                py: 1.25,
                minHeight: 'unset',
                '& .MuiAccordionSummary-content': {
                  my: 1,
                },
              }}
            >
              <Typography className="text-base font-semibold leading-relaxed text-primary-900 dark:text-white sm:text-lg">
                {item.question}
              </Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails sx={{ px: { xs: 2.5, sm: 3.5 }, pt: 0, pb: 3 }}>
              <Typography className="text-[15px] leading-relaxed text-primary-600 dark:text-slate-300">
                {item.answer}
              </Typography>
            </MuiAccordionDetails>
          </MuiAccordion>
        )
      })}
    </div>
  )
}
