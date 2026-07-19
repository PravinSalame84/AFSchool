import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Dialog, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material'

export default function Modal({ open, onClose, title, children }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(17,26,36,0.42)',
          backdropFilter: 'blur(8px)',
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: 1,
          p: { xs: 1, sm: 2 },
          border: '1px solid rgba(255,255,255,0.34)',
          background:
            'linear-gradient(180deg, rgba(246,250,253,0.88) 0%, rgba(226,238,246,0.82) 100%)',
          boxShadow: '0 28px 70px -32px rgba(12, 24, 41, 0.38)',
          backdropFilter: 'blur(24px)',
        },
      }}
    >
      <DialogTitle sx={{ pb: 1, color: 'primary.main' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
          <span>{title}</span>
          <IconButton
            onClick={onClose}
            aria-label="Close dialog"
            sx={{
              border: '1px solid rgba(17,26,36,0.1)',
              backgroundColor: 'rgba(255,255,255,0.26)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
