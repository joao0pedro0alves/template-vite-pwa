import { Button, ButtonProps } from '../components/Button'
import { Spinner } from '../components/Spinner'

interface LoadingButtonProps extends ButtonProps {
    loading: boolean
}

export function LoadingButton({loading, ...props}: LoadingButtonProps) {
    return (
        <Button 
            disabled={loading}
            className='flex items-center justify-center'
            {...props}
        >
            {loading ? <Spinner /> : props.children}
        </Button>
    )
}