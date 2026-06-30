import { useState } from 'react'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Box, useTheme, alpha } from '@mui/material'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items = [], allowMultiple = false }) {
  const theme = useTheme()
  const [openIndexes, setOpenIndexes] = useState([0])

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index)

      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index]
      }

      return isOpen ? [] : [index]
    })
  }

  const getBackground = () =>
    theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(20,25,40,0.95), rgba(10,18,32,0.92))'
      : 'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(245,248,255,0.9))'

  return (
    <Box
      sx={{
        borderRadius: 1,
        overflow: 'hidden',
        boxShadow: '0 18px 40px rgba(0,0,0,0.08)',
      }}
    >
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i)

        return (
          <MuiAccordion
            key={item.question}
            disableGutters
            expanded={isOpen}
            onChange={() => toggle(i)}
            square={false}
            sx={{
              background: getBackground(),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
              boxShadow: 'none',
              '&::before': { display: 'none' },
              '& + &': { borderTop: 'none' },
              transition: '0.25s ease',
              '&:hover': {
                borderColor: alpha(theme.palette.primary.main, 0.25),
              },
            }}
          >
            {/* SUMMARY */}
            <MuiAccordionSummary
              expandIcon={
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '25%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isOpen
                      ? `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
                      : alpha(theme.palette.primary.main, 0.08),
                    color: isOpen
                      ? (theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main)
                      : theme.palette.primary.main,
                    transition: '0.25s ease',
                  }}
                >
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: '0.25s ease',
                    }}
                  />
                </Box>
              }
              sx={{
                px: 3,
                py: 1.5,
                minHeight: 'unset',
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 16 },
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {item.question}
              </Typography>
            </MuiAccordionSummary>

            {/* DETAILS */}
            <MuiAccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
              <Typography
                sx={{
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  color: theme.palette.text.secondary,
                }}
              >
                {item.answer}
              </Typography>
            </MuiAccordionDetails>
          </MuiAccordion>
        )
      })}
    </Box>
  )
}
