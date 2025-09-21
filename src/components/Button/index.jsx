import PropTypes from 'prop-types'
import { Button } from './styles'

function DefaultButton({ children, ...rest }) {

    return (
        <Button {...rest}>{children}</Button>
    )
    
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultButton