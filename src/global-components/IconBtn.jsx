import PropTypes  from 'prop-types'
import { Button } from "@mui/material"
import VideocamIcon from '@mui/icons-material/Videocam';

const IconBtn = ({sx, text}) => {
  return (
    <Button x color="primary" sx={sx} variant='contained' startIcon={  <VideocamIcon />}>
       {text}
    </Button>
  )
}

IconBtn.propTypes = {
    sx: PropTypes.object,
    text: PropTypes.string,
}

export default IconBtn