import { forwardRef, InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextField = forwardRef<any, TextFieldProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                {...props}
                ref={ref}
                className={clsx(
                    'p-3 rounded-sm w-full bg-zinc-200 focus:outline-none focus:ring focus:ring-emerald-500/80 disabled:bg-zinc-400/60',
                    className
                )}
            />
        )
    }
)
