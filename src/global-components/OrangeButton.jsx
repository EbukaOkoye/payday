import { Button } from '@mui/material'
import PropTypes  from 'prop-types'

const OrangeButton = ({text, size, sx, onClick}) => {
  return (
    <Button variant='contained' sx={sx} size={size} color='warning' onClick={onClick}>
        {text}
    </Button>
  )

}

OrangeButton.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    sx: PropTypes.object,
    onClick: PropTypes.func,
}

export default OrangeButton