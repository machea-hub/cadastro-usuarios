import { Button } from './styles'

function DefaultButton({ children, ...rest }) {

    return (
        <Button {...rest}>{children}</Button>
    )
    
}

export default DefaultButton