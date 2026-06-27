import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import { alpha } from '@mui/material/styles'

export default function CheckboxField({ label, error, className = '', ...rest }) {
  return (
    <FormControl error={Boolean(error)} className={className} component="fieldset" variant="standard">
      <FormControlLabel
        control={
          <Checkbox
            {...rest}
            sx={(theme) => ({
              mt: '2px',
              color: theme.palette.mode === 'dark' ? alpha('#bed1e2', 0.72) : alpha('#1d213c', 0.52),
              '&.Mui-checked': {
                color: theme.palette.secondary.main,
              },
            })}
          />
        }
        label={<span className="text-sm text-primary-600 dark:text-slate-300">{label}</span>}
        sx={{ alignItems: 'flex-start', ml: 0 }}
      />
      {error ? <FormHelperText sx={{ ml: '14px', mt: '2px', fontWeight: 500 }}>{error}</FormHelperText> : null}
    </FormControl>
  )
}
