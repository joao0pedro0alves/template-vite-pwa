interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button 
            {...props}
            className='h-12 rounded shadow text-white transition-colors bg-emerald-600 uppercase hover:bg-emerald-700 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:cursor-not-allowed'
        >
            {children}
        </button>
    )
}
