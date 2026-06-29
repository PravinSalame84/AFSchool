import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { alpha } from '@mui/material/styles'
import { useId } from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children }) {
  const titleId = useId()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={titleId}
      fullWidth
      maxWidth="sm"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(17, 26, 36, 0.56)',
            backdropFilter: 'blur(6px)',
          },
        },
        paper: {
          sx: (theme) => ({
            borderRadius: 4,
            overflow: 'hidden',
            color: 'text.primary',
            backgroundImage: 'none',
            background:
              theme.palette.mode === 'dark'
                ? 'linear-gradient(180deg, rgba(13,22,32,0.96), rgba(32,50,71,0.92))'
                : 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(239,244,248,0.92))',
            border: `1px solid ${
              theme.palette.mode === 'dark' ? alpha('#ffffff', 0.08) : alpha('#111a24', 0.08)
            }`,
            boxShadow: '0 20px 50px -30px rgba(17, 26, 36, 0.24)',
          }),
        },
      }}
    >
      <DialogTitle
        id={titleId}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          pb: 1.5,
          fontSize: '1.25rem',
          fontWeight: 700,
        }}
      >
        {title}
        <IconButton
          onClick={onClose}
          aria-label="Close dialog"
          sx={{
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'rgba(186, 226, 238, 0.14)',
              color: 'text.primary',
            },
          }}
        >
          <X size={20} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 0, px: { xs: 3, sm: 4 }, pb: { xs: 3, sm: 4 } }}>
        {children}
      </DialogContent>
    </Dialog>
  )
}
