import { useState } from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from '@mui/material'

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
    <Paper sx={{ overflow: 'hidden', boxShadow: 2 }}>
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i)
        return (
          <MuiAccordion
            key={item.question}
            disableGutters
            expanded={isOpen}
            onChange={() => toggle(i)}
            elevation={0}
            sx={{
              '&::before': { display: 'none' },
              borderBottom: i === items.length - 1 ? 0 : '1px solid rgba(17,26,36,0.08)',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreRoundedIcon sx={{ color: 'secondary.main' }} />}
              sx={{ px: { xs: 2.5, sm: 3.5 }, py: 1.25 }}
            >
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: 700, color: 'primary.main' }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 2.5, sm: 3.5 }, pb: 3 }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{item.answer}</Typography>
            </AccordionDetails>
          </MuiAccordion>
        )
      })}
    </Paper>
  )
}
