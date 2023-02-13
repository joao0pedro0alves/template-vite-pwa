import clsx from 'clsx'

interface ScreenProps {
    children: React.ReactNode
    className?: string
}

export function Screen({children, className}: ScreenProps) {
    return (
        <div className={clsx(className, "flex flex-col w-screen min-h-screen m-auto max-w-lg bg-white sm:border sm:border-zinc-300 shadow-lg")}>
            {children}
        </div>
    )
}