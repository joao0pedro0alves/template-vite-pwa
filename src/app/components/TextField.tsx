import clsx from 'clsx'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function TextField({className, ...props}: TextFieldProps) {
    return (
        <input 
            {...props}
            className={clsx('p-3 rounded-sm w-full bg-zinc-200 focus:outline-none focus:ring focus:ring-emerald-500/80', className)}
        />
    )
}