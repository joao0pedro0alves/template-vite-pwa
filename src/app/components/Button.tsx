import clsx from 'clsx'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={clsx(
                'h-12 w-full rounded shadow text-white transition-colors bg-emerald-600 uppercase hover:bg-emerald-700 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:cursor-not-allowed',
                className
            )}
        >
            {children}
        </button>
    )
}
