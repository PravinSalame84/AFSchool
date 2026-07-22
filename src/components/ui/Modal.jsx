import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from '@mui/material'
import { BRAND_NEUTRALS } from '../../constants/brand'
import { MODAL_BACKDROP_SX, MODAL_CLOSE_BUTTON_SX, MODAL_PAPER_SX } from '../../constants/uiStyles'

export default function Modal({ open, onClose, title, children, maxWidth = 'sm' }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            ...MODAL_BACKDROP_SX,
          },
        },
        paper: {
          sx: {
            borderRadius: 1,
            p: { xs: 1, sm: 2 },
            ...MODAL_PAPER_SX,
          },
        },
      }}
    >
      <DialogTitle sx={{ pb: 1, color: 'primary.main' }}>
        <Stack direction="row" gap={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ my: 1, color: BRAND_NEUTRALS.ink, fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase' }}>
            {title}
          </Typography>
          <IconButton
            onClick={onClose}
            aria-label="Close dialog"
            sx={{
              right: 10,
              top: 10,
              position: 'absolute',
              ...MODAL_CLOSE_BUTTON_SX,
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
